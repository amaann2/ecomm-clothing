import React from "react";
import Signin from "../../Component/sign in/Signin";
import SignUp from "../../Component/sign up/SignUp";
import "./signinout.scss";

const signInOut = () => {
  return (
    <div className="sign-in-and-sign-out">
      <Signin />
      <SignUp />
    </div>
  );
};

export default signInOut;
