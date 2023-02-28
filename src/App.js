import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Header from "./Component/header/Header";
import SignInOut from "./Pages/signinform/signInOut";
import { useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/userAction";
import { selectCurrentUser } from "./Redux/User/UserSelector";
import CheckOut from "./Pages/checkout/CheckOut";
import CollectionPage from "./Pages/collectionPage/CollectionPage";
import Contact from "./Pages/contact/Contact";
import LikePage from "./Pages/like page/LikePage";

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
    <>
      <div className="App">
        <div className="header">

          <Header />
        </div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/:id" element={<CollectionPage />} />
          <Route exact path="/signin" element={<SignInOut />} />
          <Route exact path="/checkout" element={<CheckOut />} />
          <Route exact path="/likePage" element={<LikePage />} />
        </Routes>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  setCurrentUser: selectCurrentUser(state),
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
