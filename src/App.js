import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Header from "./Component/header/Header";
import SignInOut from "./Pages/signinform/signInOut";
import { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase";

function App() {
  const [currentUser, setcuurentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //if there is a user
      if (userAuth) {
        const ref = await createUserProfileDocument(userAuth);
        ref.onSnapshot((snapShot) => {
          //setting the current user
          setcuurentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
        //if there is no user then the current user is null
      } else {
        setcuurentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  console.log(currentUser);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/signin" element={<SignInOut />} />
      </Routes>
    </div>
  );
}

export default App;
