import React from "react";
import "./Gender.css";

const Gender = () => {
  return (
    <div className="genderContainer">
      <p className="genderLabel">Gender</p>
      <div className="genderButtonsGroup">
        <button className="genderBtn">Male</button>
        <button className="genderBtn">Female</button>
        <button className="genderBtn">All</button>
      </div>
    </div>
  );
};

export default Gender;
