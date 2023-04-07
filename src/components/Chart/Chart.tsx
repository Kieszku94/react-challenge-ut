import React, { useEffect, useState } from "react";
import "./Chart.css";
import { useData } from "../../context/uTrackContext";
import { getChartData } from "../../helpers/getChartData";
import {
  LineChart,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import { ChartData } from "../../types";
import { toPascalCase } from "../../helpers/toPascalCase";

const Chart = () => {
  const data = useData();
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const colors: string[] = ["#ff0505", "#0285f7"];
  const columns: string[] = ["monthly", "cumulative"];

  useEffect(() => {
    const filteredData = getChartData(data);

    setChartData(filteredData);
  }, [data]);

  return (
    <div className="chartContainer">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={chartData}
          margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            domain={["dataMin", "dataMax"]}
            allowDataOverflow={true}
            type="category"
            style={{ fontSize: ".75rem" }}
          />
          <YAxis
            yAxisId="left-axis"
            allowDataOverflow={true}
            type="number"
            domain={["dataMin", "dataMax"]}
            width={65}
          />
          <YAxis
            orientation="right"
            allowDataOverflow
            type="number"
            yAxisId="right-axis"
            domain={["dataMin", "dataMax"]}
          />
          <Tooltip
            contentStyle={{ color: "#000", textTransform: "capitalize" }}
          />
          <Legend
            wrapperStyle={{ paddingTop: 20 }}
            formatter={(text: string) => toPascalCase(text)}
          />
          {columns.map((col: string, index: number) => {
            if (col === "cumulative") {
              return (
                <Line
                  yAxisId="left-axis"
                  key={index}
                  dataKey={col}
                  type="monotone"
                  stroke={colors[index]}
                  isAnimationActive={false}
                />
              );
            } else {
              return (
                <Line
                  yAxisId="right-axis"
                  key={index}
                  dataKey={col}
                  type="monotone"
                  stroke={colors[index]}
                  isAnimationActive={false}
                />
              );
            }
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
