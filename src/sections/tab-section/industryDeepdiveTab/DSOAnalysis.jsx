import React from "react";
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

const CustomTooltip = ({ active, payload, label }) => { 
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 shadow-lg rounded-md">
        <p className="font-bold text-gray-800">{label}</p>
        <div className="mt-2">
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center py-1">
              <div
                className="w-3 h-3 mr-2 rounded-sm"
                style={{ backgroundColor: payload[0]?.payload?.color }}
              ></div>
              <span className="text-gray-600">{entry.name}: </span>
              <span className="font-semibold ml-1">{entry.value} days</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const DSOAnalysis = () => {
  // Data for progress bars
  const progressItems = [
    {
      name: "Top Performers (P25)",
      value: 16,
      width: "25%",
      color: "#204A9D",
      bgColor: "bg-[#204A9D]",
    },
    {
      name: "P25 to  Median",
      value: 22,
      width: "50%",
      color: "#5878BD",
      bgColor: "bg-[#5878BD]",
    },
    {
      name: "Median to P75",
      value: 31,
      width: "75%",
      color: "#CED7F0",
      bgColor: "bg-[#CED7F0]",
    },
  ];

  return (
    <div className="bg-white rounded-xl mb-8 sm:mb-10 mt-4 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        DSO Range Analysis - Banking & Financial Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Progress Bars */}
        <div className="space-y-6">
          {progressItems.map((item, index) => (
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

          <div className="pt-4 mt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              <span className="text-black font-medium">DSO Opportunity:</span>{" "}
              Moving from P75 (31 days) to P25 (16 days) would release
              approximately $4.7M per $100M revenue.
            </p>
          </div>
        </div>

        {/* Right Column - Bar Chart */}
        <div className="h-64 w-full p-4 bg-white rounded-lg border border-gray-200">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={progressItems}
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
                {progressItems.map((entry, index) => (
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
