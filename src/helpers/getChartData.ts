import { ChartData } from "../types";
import { UserModel } from "../types";
import { getBirthdayMonth } from "./getBirthdatMonth";

export const getChartData = (data: UserModel[]): ChartData[] => {
  let chartData: ChartData[] = [];
  let cumulative = 0;

  for (let i = 1; i <= 12; i++) {
    const filteredData = data.filter((x) => x.birthday === i);
    cumulative = cumulative + filteredData.length * 5;
    chartData.push({
      monthly: filteredData.length,
      cumulative: cumulative,
      month: getBirthdayMonth(i),
    });
  }

  return chartData;
};
