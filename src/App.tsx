import { useEffect } from "react";
import "./App.css";
import MinimalSpend from "./components/MinimalSpend/MinimalSpend";
import Gender from "./components/Gender/Gender";
import Region from "./components/Region/Region";
import {
  useData,
  useSetData,
  useMinimalSpend,
  useRegion,
  useGender,
} from "./context/uTrackContext";

function App() {
  const data = useData();
  const setData = useSetData();
  const minimalSpend = useMinimalSpend();
  const region = useRegion();
  const gender = useGender();

  useEffect(() => {
    if (region === "" && gender === "All") {
      setData(data.filter((x) => x.spend >= minimalSpend));
    } else if (region === "") {
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
      <MinimalSpend />
      <Region />
      <Gender />
    </div>
  );
}

export default App;
