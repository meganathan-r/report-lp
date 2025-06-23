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
  LabelList,
  Label,
} from "recharts";
import { useAppStateContext } from "../../../context/AppStateContext";
import CTable from "../../../components/table";
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
          label: "Top",
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
          label: "Median",
          name: "Median Performers (P50)",
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
          label: "Bottom",
          name: "Bottom Performers (P75)",
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
  }, [selectIndustry, industryData, selectRevenueBand]);

  return (
    <div className="bg-white rounded-xl mb-8 sm:mb-10 mt-4 ">
      <h2 className="tab-title mb-4">
        DSO Range Analysis - Banking & Financial Services
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Progress Bars */}
        <div className="space-y-6">
          <CTable
            tableHeading={["", "DSO"]}
            cols={["name", "value"]}
            data={dsoData}
            suf=" days"
          />
        </div>

        {/* Right Column - Bar Chart */}
        <div className="h-64 w-full bg-white rounded-lg ">
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
                dataKey="label"
                axisLine={{ stroke: "#666" }}
                tickLine={{ stroke: "#666" }}
                tick={{ fill: "#666", fontSize: 14 }}
                tickMargin={10}
              />
              <YAxis
                domain={[0, 32]}
                ticks={[0, 25, 50, 75, 100]}
                axisLine={{ stroke: "#666" }}
                tickLine={{ stroke: "#666" }}
                tick={{ fill: "#666", fontSize: 14 }}
                tickMargin={10}
              >
                <Label
                  value="Days"
                  angle={-90}
                  position="insideLeft"
                  offset={15}
                  style={{
                    textAnchor: "middle",
                    fontSize: 14,
                    fontWeight: 600,
                    fill: "#374151",
                  }}
                />
              </YAxis>
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {dsoData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    strokeWidth={10}
                  />
                ))}
                <LabelList
                  dataKey="value"
                  position="top"
                  style={{ fill: "#333", fontSize: 12, fontWeight: 600 }}
                />
              </Bar>
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                content={
                  <CustomTooltip
                    disableLabel={true}
                    metric={"days"}
                    usePayloadLabel={true}
                  />
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DSOAnalysis;
