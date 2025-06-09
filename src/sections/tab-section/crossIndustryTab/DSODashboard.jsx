import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const DSODashboard = () => {
  // Data for DSO comparison across industries
  const data = [
    {
      name: "Banking & Financial Services",
      p25: 14,
      p50: 24,
      p75: 31,
    },
    {
      name: "Energy, Utilities & Waste",
      p25: 30,
      p50: 40,
      p75: 50,
    },
    {
      name: "Industrial & Manufacturing",
      p25: 31,
      p50: 51,
      p75: 59,
    },
    {
      name: "Real Estate & Construction",
      p25: 39,
      p50: 59,
      p75: 71,
    },
    {
      name: "Transportation & Logistics",
      p25: 40,
      p50: 50,
      p75: 56,
    },
    {
      name: "Transportation & Logistics",
      p25: 40,
      p50: 50,
      p75: 56,
    },
    {
      name: "Transportation & Logistics",
      p25: 40,
      p50: 50,
      p75: 56,
    },
    {
      name: "Transportation & Logistics",
      p25: 40,
      p50: 50,
      p75: 56,
    },
    {
      name: "Transportation & Logistics",
      p25: 40,
      p50: 50,
      p75: 56,
    },
  ];

  // Custom tooltip component
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
                  style={{ backgroundColor: entry.color }}
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

  // Custom tick formatter for XAxis
  // const renderCustomAxisTick = ({ x, y, payload }) => {
  //   const nameParts = payload.value.split(" & ");

  //   return (
  //     <g transform={`translate(${x},${y})`}>
  //       <text
  //         x={0}
  //         y={0}
  //         dy={16}
  //         textAnchor="middle"
  //         fill="#374151"
  //         fontSize="0"
  //         fontWeight="600"
  //       >
  //         {nameParts[0]} &
  //       </text>
  //       <text
  //         x={0}
  //         y={0}
  //         dy={32}
  //         textAnchor="middle"
  //         fill="#374151"
  //         fontSize="0"
  //         fontWeight="600"
  //       >
  //         {nameParts[1]}
  //       </text>
  //     </g>
  //   );
  // };

  return (
    <div className="bg-white p-6 rounded-xl hover:shadow-lg border border-gray-200 ">
      <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-8">
        DSO Comparison Across Industries
      </h2>

      <div className="w-full h-[440px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
            barSize={20}
            barGap={6}
            barCategoryGap={40}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="name"
              // tick={renderCustomAxisTick}
              tick={false}
              interval={0}
              tickLine={false}
              axisLine={false}
              height={60}
            />

            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 14, fill: "#374151" }}
              ticks={[0, 30, 60, 80, 100]}
              tickLine={false}
              axisLine={false}
            >
              <Label
                value="Days"
                angle={-90}
                position="insideLeft"
                offset={-10}
                style={{
                  textAnchor: "middle",
                  fontSize: 14,
                  fontWeight: 600,
                  fill: "#374151",
                }}
              />
            </YAxis>

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="p25"
              name="P25 DSO"
              fill="#9BC4FA"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="p50"
              name="P50 DSO"
              fill="#3E7BFA"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="p75"
              name="P75 DSO"
              fill="#1B4F9E"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 flex justify-center space-x-6 sm:space-x-10">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-[#9BC4FA] mr-2"></div>
          <span className="text-sm text-gray-600">P25 DSO</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-[#3E7BFA] mr-2"></div>
          <span className="text-sm text-gray-600">P50 DSO</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-[#1B4F9E] mr-2"></div>
          <span className="text-sm text-gray-600">P75 DSO</span>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          Days Sales Outstanding (DSO) represents the average number of days it
          takes a company to collect payment after a sale.
        </p>
      </div>
    </div>
  );
};

export default DSODashboard;
