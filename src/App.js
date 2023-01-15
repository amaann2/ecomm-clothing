import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Header from "./Component/header/Header";
import SignInOut from "./Pages/signinform/signInOut";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";

function App() {
  const [currentUser, setcuurentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setcuurentUser(user);
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
