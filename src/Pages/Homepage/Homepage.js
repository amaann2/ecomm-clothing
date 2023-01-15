import React from "react";
import "./Homepage.scss";
import Directory from "../../Component/directory/Directory";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage </h1>
      <Directory />
    </div>
  );
};
export default Homepage;
