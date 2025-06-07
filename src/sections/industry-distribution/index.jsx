import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const IndustryDistribution = () => {
  // Data for the pie chart
  const data = [
    { name: "Banking & Financial Services", value: 134 },
    { name: "Basic Materials & Chemicals", value: 52 },
    { name: "Energy, Utilities & Waste", value: 127 },
    { name: "Healthcare & Life Sciences", value: 229 },
    { name: "Industrial & Manufacturing", value: 287 },
    { name: "Media, Entertainment & Advertising", value: 60 },
    { name: "Real Estate & Construction", value: 71 },
    { name: "Technology, Software & IT Services", value: 282 },
    { name: "Transportation & Logistics", value: 39 },
    { name: "others", value: 39 },
  ];

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

  // Industry insights
  const industryInsights = {
    "Banking & Financial Services":
      "Secure, compliant solutions for financial institutions including digital banking platforms, fraud detection systems, and trading algorithms.",
    "Basic Materials & Chemicals":
      "Supply chain optimization, R&D support, and sustainability tracking for materials and chemical industries.",
    "Energy, Utilities & Waste":
      "Smart grid solutions, renewable energy management systems, and waste reduction platforms for sustainable operations.",
    "Healthcare & Life Sciences":
      "Patient management systems, telemedicine platforms, clinical trial management, and health data analytics.",
    "Industrial & Manufacturing":
      "IoT-enabled manufacturing systems, predictive maintenance solutions, and supply chain optimization tools.",
    "Media, Entertainment & Advertising":
      "Content management systems, streaming platforms, ad tech solutions, and audience analytics.",
    "Real Estate & Construction":
      "Property management systems, virtual tour platforms, construction project management, and smart building solutions.",
    "Technology, Software & IT Services":
      "Enterprise software development, cloud migration services, cybersecurity solutions, and AI implementation.",
    "Transportation & Logistics":
      "Fleet management systems, route optimization algorithms, warehouse automation, and supply chain visibility platforms.",
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 min-w-[280px]">
          <div className="flex items-center mb-2">
            <div
              className="w-4 h-4 rounded-full mr-3"
              style={{ backgroundColor: payload[0].payload.fill }}
            ></div>
            <p className="font-bold text-gray-900">{payload[0].name}</p>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-600">Projects:</span>
            <span className="font-bold text-blue-900">{payload[0].value}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Percentage:</span>
            <span className="font-bold text-blue-900">
              {((payload[0].value / 1281) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-1  00">
            <p className="text-gray-700 text-sm">
              {industryInsights[payload[0].name]}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-25 to-gray-75 py-5 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black mb-4">
            Industry Benchmark Analytics
          </h2>
          <p className="para-text max-w-2xl mx-auto">
            Explore performance metrics across key industries to understand
            where you stand and how you can improve.
          </p>
        </div>
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left content */}
          <div className="lg:w-2/4">
            <div className="bg-white rounded-2xl  p-8  border-gray-200 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-lg w-10 h-10 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </span>
                Industry-Specific Expertise
              </h3>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Our decade-long journey has cultivated specialized expertise
                across key sectors. We develop industry-specific methodologies
                that address unique challenges while leveraging sector-specific
                opportunities for maximum impact.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-xl mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Domain-Driven Solutions
                    </h4>
                    <p className="text-gray-600">
                      Tailored approaches addressing industry-specific
                      compliance, security, and operational requirements with
                      precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-xl mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Technology Integration
                    </h4>
                    <p className="text-gray-600">
                      Seamless implementation of sector-specific technologies
                      and platforms for optimal performance and scalability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-xl mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Cross-Industry Innovation
                    </h4>
                    <p className="text-gray-600">
                      Transferring best practices between sectors to drive
                      innovation and create sustainable competitive advantages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Chart */}
          <div className="lg:w-2/4">
            <div className="bg-white rounded-2xl hover:shadow-md  p-6 card-border">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Industry Distribution by Sector
                </h3>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                  <span className="font-medium">Total: </span>
                  <span className="font-bold">1,281</span>
                </div>
              </div>

              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={0}
                      outerRadius={160}
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

                    {/* <Tooltip
                      content={<CustomTooltip />}
                      cursor={{ fill: "#f5f5f5" }}
                    /> */}

                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="bottom"
                      iconType="circle"
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
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDistribution;
