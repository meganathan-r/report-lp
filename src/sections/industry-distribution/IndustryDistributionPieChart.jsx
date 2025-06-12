import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import useMobileDevice from "../../hooks/useMobileDevice";

// Color palette
const COLORS = [
  "#102450",
  "#16316E",
  "#1B3E8A",
  "#1D4694",
  "#204A9D",
  "#3C61AD",
  "#5878BD",
  "#A4B4E0",
  "#CED7F0",
];
const CustomTooltip = ({ active, payload, total }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 shadow-lg rounded-md">
        <div className="flex items-center mb-2">
          <div
            className="w-3.5 h-3.5 rounded-sm mr-3"
            style={{ backgroundColor: payload[0].payload.fill }}
          ></div>
          <p className="font-bold text-gray-900">{payload[0].name}</p>
        </div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-600">Total:</span>
          <span className="font-bold text-black">{payload[0].value}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Percentage:</span>
          <span className="font-bold text-black">
            {((payload[0].value / total) * 100).toFixed(1)}%
          </span>
        </div>
      </div>
    );
  }
};

const IndustryDistributionPieChart = ({ data }) => {
  const { isMobile } = useMobileDevice();
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={isMobile ? 130 : 160}
            paddingAngle={0}
            dataKey="value"
            nameKey="name"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#ffffff"
                strokeWidth={1}
                style={{ outline: "none" }}
              />
            ))}
          </Pie>

          <Tooltip
            content={<CustomTooltip total={1948} />}
            cursor={{ fill: "#f5f5f5" }}
          />
          {!isMobile && (
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              iconType="square"
              iconSize={10}
              formatter={(value) => (
                <span className="text-gray-600 text-sm font-medium">
                  {value}
                </span>
              )}
              wrapperStyle={{
                paddingLeft: "20px",
                maxHeight: "400px",
                overflowY: "auto",
                fontSize: "14px",
              }}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IndustryDistributionPieChart;
