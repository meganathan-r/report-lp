import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Area,
  AreaChart,
  Label,
} from "recharts";
import CustomTooltip from "../../components/tooltip";
import useMobileDevice from "../../hooks/useMobileDevice";

const COLORS = {
  YOUR_COMPANY: "#204A9D", // bblue.500
  INDUSTRY_AVG: "#5F95DD", // bblue.400
  AXIS: "#6B7280",
  GRID: "#E5E7EB",
  BACKGROUND: "#F9FAFB",
};

const GRADIENTS = {
  YOUR_COMPANY: "url(#colorYourCompany)",
  INDUSTRY_AVG: "url(#colorIndustryAvg)",
};

const HeroChart = ({ chartData }) => {
  const { isMobile } = useMobileDevice();
  return (
    <ResponsiveContainer
      className="h-[300px] sm:h-[400px] overflow-hidden"
      width="100%"
      height={400}
    >
      <AreaChart
        data={chartData}
        margin={{ top: 10, right: 10, left: isMobile ? -30 : 0, bottom: 20 }}
        width="100%"
      >
        <defs>
          <linearGradient id="colorP50DSO" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={COLORS.YOUR_COMPANY}
              stopOpacity={0.2}
            />
            <stop
              offset="95%"
              stopColor={COLORS.YOUR_COMPANY}
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id="colorIndustryAvg" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={COLORS.INDUSTRY_AVG}
              stopOpacity={0.2}
            />
            <stop
              offset="95%"
              stopColor={COLORS.INDUSTRY_AVG}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke={COLORS.GRID}
        />

        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: COLORS.AXIS, fontSize: 12 }}
          padding={{ left: 5, right: 5 }}
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
          domain={[30, 60]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: COLORS.AXIS, fontSize: 12 }}
          tickCount={7}
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

        <Tooltip
          content={<CustomTooltip metric="days" defalutLable={true} />}
        />

        <Legend
          verticalAlign="top"
          align="right"
          iconType="square"
          iconSize={10}
          wrapperStyle={{
            paddingBottom: 10,
            fontSize: 12,
          }}
        />

        <Area
          type="monotone"
          dataKey="P50 DSO"
          name="Median DSO"
          stroke={COLORS.YOUR_COMPANY}
          fill={GRADIENTS.YOUR_COMPANY}
          strokeWidth={2}
          dot={{
            stroke: COLORS.YOUR_COMPANY,
            strokeWidth: 2,
            r: 4,
            fill: "white",
          }}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default HeroChart;
