import React from "react";
import "./Gender.css";
import { useSetGender } from "../../context/uTrackContext";

const Gender = () => {
  const setGender = useSetGender();
  const handleOnClick = (gender: string) => {
    setGender(gender);
  };
  return (
    <div className="genderContainer">
      <p className="genderLabel">Gender</p>
      <div className="genderButtonsGroup">
        <button onClick={() => handleOnClick("Male")} className="genderBtn">
          Male
        </button>
        <button onClick={() => handleOnClick("Female")} className="genderBtn">
          Female
        </button>
        <button onClick={() => handleOnClick("All")} className="genderBtn">
          All
        </button>
      </div>
    </div>
  );
};

export default Gender;
