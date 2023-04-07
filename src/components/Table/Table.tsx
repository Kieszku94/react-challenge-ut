import React from "react";
import { useData } from "../../context/uTrackContext";
import { UserModel } from "../../types";
import { getBirthdayMonth } from "../../helpers/getBirthdatMonth";
import "./Table.css";
const Table = () => {
  const data = useData();
  return (
    <div className="tableContainer">
      <div className="tableSplit">
        <div className="tableField">Id</div>
        <div className="tableField">Birthday Month</div>
        <div className="tableField">Minimum Spend</div>
        <div className="tableField">Region</div>
        <div className="tableField">Gender</div>
      </div>
      {data.map((user: UserModel) => {
        return (
          <div className="tableSplit">
            <div className="tableField">{user.id}</div>
            <div className="tableField">{getBirthdayMonth(user.birthday)}</div>
            <div className="tableField">{`$${user.spend}`}</div>
            <div className="tableField">{user.region}</div>
            <div className="tableField">{user.gender}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
