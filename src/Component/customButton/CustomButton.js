import React from "react";
import "./custombutton.scss";
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherprops
}) => {
  return (
    <>
      <button
        className={`${inverted ? "invertedd" : ""} ${
          isGoogleSignIn ? "google-button" : ""
        } custom-button`}
        {...otherprops}
      >
        {children}
      </button>
    </>
  );
};

export default CustomButton;
