import React, { useState } from "react";
import "./Gender.css";
import { useSetGender } from "../../context/uTrackContext";

const Gender = () => {
  const setGender = useSetGender();
  const [maleActive, setMaleActive] = useState(false);
  const [femaleActive, setFemaleActive] = useState(false);
  const [allActive, setAllActive] = useState(true);

  const handleOnClick = (gender: string) => {
    setGender(gender);
  };

  return (
    <div className="genderContainer">
      <p className="genderLabel">Gender</p>
      <div className="genderButtonsGroup">
        <button
          onClick={() => {
            setFemaleActive(false);
            setAllActive(false);
            setMaleActive(true);
            handleOnClick("Male");
          }}
          className={maleActive ? "genderBtn active" : "genderBtn"}
        >
          Male
        </button>
        <button
          onClick={() => {
            setMaleActive(false);
            setAllActive(false);
            setFemaleActive(true);
            handleOnClick("Female");
          }}
          className={femaleActive ? "genderBtn active" : "genderBtn"}
        >
          Female
        </button>
        <button
          onClick={() => {
            setMaleActive(false);
            setFemaleActive(false);
            setAllActive(true);
            handleOnClick("All");
          }}
          className={allActive ? "genderBtn active" : "genderBtn"}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default Gender;
