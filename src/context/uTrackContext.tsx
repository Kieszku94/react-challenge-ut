import React, { useState, createContext, useContext } from "react";
import {
  UserModel,
  UTrackContextType,
  UTrackContextProviderProps,
} from "../types";
import { getData } from "../data/getData";

const userData = getData();

const useUTrack = () => {
  const [data, setData] = useState<UserModel[]>(userData);
  const [minimalSpend, setMinimalSpend] = useState<number | number[]>(2500);
  const [region, setRegion] = useState<string>("");
  const [gender, setGender] = useState<string>("All");
  const [monthly, setMonthly] = useState<number>(0);
  const [cumulative, setCumulative] = useState<number>(0);
  return {
    data,
    setData: (payload: UserModel[]) => setData(payload),
    minimalSpend,
    setMinimalSpend: (payload: number | number[]) => setMinimalSpend(payload),
    region,
    setRegion: (payload: string) => setRegion(payload),
    gender,
    setGender: (payload: string) => setGender(payload),
    monthly,
    setMonthly: (payload: number) => setMonthly(payload),
    cumulative,
    setCumulative: (payload: number) => setCumulative(payload),
  };
};

const UTrackContext = createContext<UTrackContextType>({
  data: userData,
  setData: (payload: UserModel[]) => {},
  minimalSpend: 2500,
  setMinimalSpend: (payload: number | number[]) => {},
  region: "",
  setRegion: (payload: string) => {},
  gender: "",
  setGender: (payload: string) => {},
  monthly: 0,
  setMonthly: (payload: number) => {},
  cumulative: 0,
  setCumulative: (payload: number) => {},
});

export const UTrackProvider = ({
  children,
}: UTrackContextProviderProps): JSX.Element => {
  return (
    <UTrackContext.Provider value={useUTrack()}>
      {children}
    </UTrackContext.Provider>
  );
};

export const useData = () => useContext(UTrackContext).data;
export const useSetData = () => useContext(UTrackContext).setData;
export const useMinimalSpend = () => useContext(UTrackContext).minimalSpend;
export const useSetMinimalSpend = () =>
  useContext(UTrackContext).setMinimalSpend;
export const useRegion = () => useContext(UTrackContext).region;
export const useSetRegion = () => useContext(UTrackContext).setRegion;
export const useGender = () => useContext(UTrackContext).gender;
export const useSetGender = () => useContext(UTrackContext).setGender;
export const useMonthly = () => useContext(UTrackContext).monthly;
export const useSetMonthly = () => useContext(UTrackContext).setMonthly;
export const useCumulative = () => useContext(UTrackContext).cumulative;
export const useSetCumulative = () => useContext(UTrackContext).setCumulative;
