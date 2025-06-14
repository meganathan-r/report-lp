import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import { useAppStateContext } from "../../../context/AppStateContext";
import CustomTooltip from "../../../components/tooltip";

const DSOAnalysis = () => {
  const { selectIndustry, industryData, selectRevenueBand } =
    useAppStateContext();
  const [dsoData, setDsoData] = useState([]);
  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      const currentIndustryData = industryData?.filter(
        (industry) =>
          industry?.Industry == selectIndustry &&
          industry?.["Revenue Range"] == selectRevenueBand
      );
      const chartData = [
        {
          name: "Top Performers (P25)",
          value: currentIndustryData[0]?.["P25 DSO"],
          width: `${
            (Number(currentIndustryData[0]?.["P25 DSO"]) /
              Number(currentIndustryData[0]?.["P75 DSO"])) *
            100
          }%`,
          color: "#204A9D",
          bgColor: "bg-[#204A9D]",
        },
        {
          name: "P25 to  Median",
          value: currentIndustryData[0]?.["P50 DSO"],
          width: `${
            (Number(currentIndustryData[0]?.["P50 DSO"]) /
              Number(currentIndustryData[0]?.["P75 DSO"])) *
            100
          }%`,
          color: "#5878BD",
          bgColor: "bg-[#5878BD]",
        },
        {
          name: "Median to P75",
          value: currentIndustryData[0]?.["P75 DSO"],
          width: `${
            (Number(currentIndustryData[0]?.["P75 DSO"]) /
              Number(currentIndustryData[0]?.["P75 DSO"])) *
            100
          }%`,
          color: "#CED7F0",
          bgColor: "bg-[#CED7F0]",
        },
      ];
      setDsoData(chartData);
    }
  }, [selectIndustry, selectRevenueBand]);

  return (
    <div className="bg-white rounded-xl mb-8 sm:mb-10 mt-4 ">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        DSO Range Analysis - Banking & Financial Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Progress Bars */}
        <div className="space-y-6">
          {dsoData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">{item.name}</span>
                <span className="font-semibold">{item.value} days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`${item?.bgColor} h-2.5 rounded-full`}
                  style={{ width: item.width }}
                ></div>
              </div>
            </div>
          ))}
{/* 
          <div className="pt-4 mt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              <span className="text-black font-medium">DSO Opportunity:</span>{" "}
              Moving from P75 ({dsoData[2]?.value} days) to P25 (
              {dsoData[0]?.value} days) would release approximately $4.7M per
              $100M revenue.
            </p>
          </div> */}
        </div>

        {/* Right Column - Bar Chart */}
        <div className="h-64 w-full p-4 bg-white rounded-lg border border-gray-200">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dsoData}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
              barSize={118}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#ccc"
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="name"
                axisLine={{ stroke: "#666" }}
                tickLine={{ stroke: "#666" }}
                tick={{ fill: "#666", fontSize: 14 }}
                tickMargin={10}
              />
              <YAxis
                domain={[0, 32]}
                ticks={[0, 8, 16, 24, 32]}
                axisLine={{ stroke: "#666" }}
                tickLine={{ stroke: "#666" }}
                tick={{ fill: "#666", fontSize: 14 }}
                tickMargin={10}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {dsoData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    strokeWidth={10}
                  />
                ))}
              </Bar>
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                content={<CustomTooltip />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DSOAnalysis;
