export type UserModel = {
  id: string;
  birthday: number;
  spend: number;
  region: string;
  gender: string;
};

export type UTrackContextType = {
  data: UserModel[];
  setData: (payload: UserModel[]) => void;
  minimalSpend: Number;
  setMinimalSpend: (payload: Number) => void;
  region: string;
  setRegion: (payload: string) => void;
  gender: string;
  setGender: (payload: string) => void;
  monthly: Number;
  setMonthly: (payload: Number) => void;
  cumulative: Number;
  setCumulative: (payload: Number) => void;
};

export type UTrackContextProviderProps = {
  children: React.ReactNode;
};
