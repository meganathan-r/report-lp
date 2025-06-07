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

const HeroChart = () => {
  const data = [
    { month: "Jan", yourCompany: 55, industryAvg: 45 },
    { month: "Feb", yourCompany: 52, industryAvg: 44 },
    { month: "Mar", yourCompany: 50, industryAvg: 43 },
    { month: "Apr", yourCompany: 48, industryAvg: 42 },
    { month: "May", yourCompany: 47, industryAvg: 42 },
    { month: "Jun", yourCompany: 45, industryAvg: 41 },
    { month: "Jul", yourCompany: 44, industryAvg: 40 },
    { month: "Aug", yourCompany: 42, industryAvg: 40 },
    { month: "Sep", yourCompany: 41, industryAvg: 39 },
    { month: "Oct", yourCompany: 40, industryAvg: 38 },
    { month: "Nov", yourCompany: 38, industryAvg: 37 },
    { month: "Dec", yourCompany: 36, industryAvg: 36 },
  ];

  return (
    <ResponsiveContainer
      className="h-[300px] sm:h-[400px]"
      width="100%"
      height={400}
    >
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorYourCompany" x1="0" y1="0" x2="0" y2="1">
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
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: COLORS.AXIS, fontSize: 12 }}
          padding={{ left: 5, right: 5 }}
        />

        <YAxis
          domain={[30, 60]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: COLORS.AXIS, fontSize: 12 }}
          tickCount={7}
        >
          <Label
            value="DSO (Days)"
            position="insideLeft"
            angle={-90}
            offset={-20}
            style={{
              textAnchor: "middle",
              fill: COLORS.AXIS,
              fontSize: 12,
            }}
          />
        </YAxis>

        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: `1px solid ${COLORS.GRID}`,
            borderRadius: "4px",
            padding: "8px 12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
          formatter={(value) => [`${value} days`, ""]}
          labelFormatter={(label) => <strong>{label}</strong>}
        />

        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={10}
          wrapperStyle={{
            paddingBottom: 10,
            fontSize: 12,
          }}
        />

        <Area
          type="monotone"
          dataKey="yourCompany"
          name="Your Company"
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

        <Area
          type="monotone"
          dataKey="industryAvg"
          name="Industry Average"
          stroke={COLORS.INDUSTRY_AVG}
          strokeDasharray="4 4"
          fill={GRADIENTS.INDUSTRY_AVG}
          strokeWidth={2}
          dot={{
            stroke: COLORS.INDUSTRY_AVG,
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
