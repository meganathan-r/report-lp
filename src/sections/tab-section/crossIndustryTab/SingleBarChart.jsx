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
import { Legend } from "./ThreeBarChart";

const SingleBarChart = ({
  chartData,
  title,
  description,
  legendItems,
  chartDetails,
}) => {
  return (
    <div className="bg-white sm:p-6  transition-all duration-200 sm:rounded-xl sm:hover:shadow-lg sm:border border-gray-200 ">
      <h2 className="sm:text-xl text-lg font-bold text-gray-800 mb-4 sm:mb-8">
        {title}
      </h2>

      <div className="w-full h-[300px] sm:h-[440px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
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
              dataKey="abv"
              tick={{
                fontSize: 12,
                fill: "#374151",
                angle: -30, // optional: rotates for better spacing
                textAnchor: "end", // aligns angled text
              }}
              interval={0}
              tickLine={false}
              axisLine={false}
              height={60}
            >
              <Label
                value="Industries"
                angle={0}
                position="center"
                offset={130}
                dy={20}
                style={{
                  textAnchor: "middle",
                  fontSize: 14,
                  fontWeight: 600,
                  fill: "#374151",
                }}
              />
            </XAxis>

            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 14, fill: "#374151" }}
              ticks={chartDetails?.ticks}
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
              dataKey="medianccc"
              name={chartDetails?.bar1name}
              fill="#3E7BFA"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Legend items={legendItems} />

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleBarChart;

// Custom tooltip component
export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 shadow-lg rounded-md">
        <p className="font-bold text-gray-800">{payload[0]?.payload.name}</p>
        <div className="mt-2">
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center py-1">
              <div
                className="w-3 h-3 mr-2 rounded-sm"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-gray-600">{entry.name}: </span>
              <span className="font-semibold ml-1">{entry.value} Days</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
