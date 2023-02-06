import React, { useState } from "react";
import { auth, SignInWithGoogle } from "../../firebase/firebase";
import CustomButton from "../customButton/CustomButton";
import FormInput from "../formInput/FormInput";
import "./signin.scss";

const Signin = () => {
  const [input, setinput] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setinput((values) => ({ ...values, [name]: value }));
  };
  const handleForm = async (e) => {
    e.preventDefault();
    const { email, password } = input;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setinput("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account </h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleForm}>
        <FormInput
          type="email"
          name="email"
          value={input.email || ""}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={input.password || ""}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit" value="submit form">
            Sign in
          </CustomButton>

          <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;
