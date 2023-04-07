export type UserModel = {
  id: string;
  birthday: number;
  spend: number | number[];
  region: string;
  gender: string;
};

export type UTrackContextType = {
  data: UserModel[];
  setData: (payload: UserModel[]) => void;
  minimalSpend: number | number[];
  setMinimalSpend: (payload: number | number[]) => void;
  region: string;
  setRegion: (payload: string) => void;
  gender: string;
  setGender: (payload: string) => void;
  monthly: number;
  setMonthly: (payload: number) => void;
  cumulative: number;
  setCumulative: (payload: number) => void;
};

export type UTrackContextProviderProps = {
  children: React.ReactNode;
};

export type ChartData = {
  monthly: number;
  cumulative: number;
  month: string;
};
