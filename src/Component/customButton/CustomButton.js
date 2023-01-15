import React from "react";
import "./custombutton.scss";
const CustomButton = ({ children, isGoogleSignIn, ...otherprops }) => {
  return (
    <>
      <button
        className={`${isGoogleSignIn ? "google-button" : ""} custom-button`}
        {...otherprops}
      >
        {children}
      </button>
    </>
  );
};

export default CustomButton;
