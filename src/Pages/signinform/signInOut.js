import React from "react";
import Signin from "../../Component/sign in/Signin";
import SignUp from "../../Component/sign up/SignUp";
import "./signinout.scss";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const signInOut = ({ currentUser }) => {

  if (currentUser) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="sign-in-and-sign-out">
        <Signin />
        <SignUp />
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(signInOut);
