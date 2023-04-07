import React from "react";
import "./MinimalSpend.css";
import {
  useMinimalSpend,
  useSetMinimalSpend,
} from "../../context/uTrackContext";
import Slider from "@mui/material/Slider";

const MinimalSpend = () => {
  const minimalSpend = useMinimalSpend();
  const setMinimalSpend = useSetMinimalSpend();
  return (
    <div className="minimalSpendContainer">
      <p className="minimalSpendLabel">Minimal Spend</p>
      <p className="minimalSpendAmount">{`$${minimalSpend}`}</p>
      <div className="slider">
        <Slider
          color="secondary"
          value={minimalSpend}
          min={0}
          max={5000}
          valueLabelDisplay="auto"
          onChange={(e, value) => setMinimalSpend(value)}
        />
      </div>

      <div className="split">
        <p className="minimalSpendRange">$0</p>
        <p className="minimalSpendRange">$5000</p>
      </div>
    </div>
  );
};

export default MinimalSpend;
