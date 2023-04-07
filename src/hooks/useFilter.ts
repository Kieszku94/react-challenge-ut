import {
  useData,
  useSetData,
  useMinimalSpend,
  useRegion,
  useGender,
} from "../context/uTrackContext";

export const useFilter = (): void => {
  const data = useData();
  const setData = useSetData();
  const minimalSpend = useMinimalSpend();
  const region = useRegion();
  const gender = useGender();

  if (region === "" && gender === "All") {
    setData(data.filter((x) => x.spend >= minimalSpend));
  } else if (region === "") {
    setData(data.filter((x) => x.spend >= minimalSpend && x.gender === gender));
  } else if (gender === "All") {
    setData(data.filter((x) => x.spend >= minimalSpend && x.region === region));
  }
};
