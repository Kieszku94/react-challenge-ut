import { useEffect } from "react";
import "./App.css";
import MinimalSpend from "./components/MinimalSpend/MinimalSpend";
import Gender from "./components/Gender/Gender";
import Region from "./components/Region/Region";
import {
  useSetData,
  useMinimalSpend,
  useRegion,
  useGender,
} from "./context/uTrackContext";
import { getData } from "./data/getData";
import Table from "./components/Table/Table";
import Chart from "./components/Chart/Chart";

const data = getData();

function App() {
  const setData = useSetData();
  const minimalSpend = useMinimalSpend();
  const region = useRegion();
  const gender = useGender();

  useEffect(() => {
    if (region === "All" && gender === "All") {
      setData(data.filter((x) => x.spend >= minimalSpend));
    } else if (region === "All") {
      setData(
        data.filter((x) => x.spend >= minimalSpend && x.gender === gender)
      );
    } else if (gender === "All") {
      setData(
        data.filter((x) => x.spend >= minimalSpend && x.region === region)
      );
    } else {
      setData(
        data.filter(
          (x) =>
            x.spend >= minimalSpend &&
            x.region === region &&
            x.gender === gender
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minimalSpend, region, gender]);

  return (
    <div className="container">
      <div className="controlsContainer">
        <MinimalSpend />
        <Region />
        <Gender />
      </div>
      <Chart />
      <Table />
    </div>
  );
}

export default App;
