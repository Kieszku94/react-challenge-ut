import React from "react";
import "./Region.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRegion, useSetRegion } from "../../context/uTrackContext";

const Region = () => {
  const region = useRegion();
  const setRegion = useSetRegion();
  return (
    <div className="regionContainer">
      <p className="regionLabel">Select region</p>
      <div className="regionDropdown">
        <FormControl sx={{ minWidth: 200 }} size="small">
          <Select value={region} onChange={(e) => setRegion(e.target.value)}>
            <MenuItem value="United States">United States</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="APAC">APAC</MenuItem>
            <MenuItem value="Latin America">Latin America</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Region;
