import { Region } from "../enums/region";
import { Gender } from "../enums/gender";
import { getRandomInteger } from "../helpers/generateRandomInteger";
import { UserModel } from "../types";

export const getData = (): UserModel[] => {
  const usersArray: UserModel[] = [];
  for (let i = 1; i <= 1000; i++) {
    const userObject: UserModel = {
      id: i.toString(),
      birthday: getRandomInteger(1, 12),
      spend: getRandomInteger(0, 5000),
      region: Region[getRandomInteger(1, 4)],
      gender: Gender[getRandomInteger(1, 2)],
    };
    usersArray.push(userObject);
  }
  return usersArray;
};
