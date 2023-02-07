import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Header from "./Component/header/Header";
import SignInOut from "./Pages/signinform/signInOut";
import { useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/UserReducer/userAction";

function App({ setCurrentUser }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //if there is a user
      if (userAuth) {
        const ref = await createUserProfileDocument(userAuth);
        ref.onSnapshot((snapShot) => {
          //setting the current user
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
        //if there is no user then the current user is null
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/signin" element={<SignInOut />} />

      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({
  setCurrentUser: state.user.setCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
