import { useEffect, useMemo, useState } from "react";
import HeaderSection from "../../components/header-section";
import { useAppStateContext } from "../../context/AppStateContext";
import IndustryDistributionPieChart from "./IndustryDistributionPieChart";
import useQueryData from "../../hooks/useQueryData";

const IndustryDistribution = () => {
  const { industryData } = useAppStateContext();
  const [pieChartData, setPieChartData] = useState([]);
  const { data: titleDescriptionData } = useQueryData("titleDescription");
  const headingContent = useMemo(() => {
    return (
      titleDescriptionData?.find(
        (item) => item?.section === "industryDistribution"
      ) || {}
    );
  }, [titleDescriptionData]);
  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      const industryDetails = industryData
        .slice(1, 14)
        .filter((item) => Number(item["N"]) > 35)
        .map((item) => ({
          name: item["Industry"],
          value: Number(item["N"]),
        }));
      setPieChartData(industryDetails.sort((a, b) => b?.value - a?.value));
    }
  }, [industryData]);

  const keyPoints = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-blue-700"
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
      ),
      title: "$39M+ Average Cash Release Opportunity",
      description:
        "Companies moving from poor to best-in-class DSO performance can unlock significant working capital - with the median opportunity exceeding $39 million per $100M in revenue.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-blue-700"
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
      ),
      title: "46% DSO Performance Gap",
      description:
        "The difference between top and bottom quartile performers varies dramatically by industry, creating substantial competitive advantages for companies that optimize their receivables management.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-blue-700"
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
      ),
      title: "Industry-Specific Insights",
      description:
        "One-size-fits-all approaches fail. Asset-heavy manufacturers face different challenges than subscription software companies. Our benchmarks account for these critical differences.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-25 to-gray-75 py-5 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <HeaderSection
          title={headingContent?.title}
          description={headingContent?.description}
        />
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-xl hover:shadow-md p-4 sm:p-8 card-border">
          {/* Left content */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-2xl   border-gray-200 h-full">
              {/* <h3 className="text-xl font-semibold text-gray-900 mb-8 pb-2 border-b border-gray-100">
                Industry Performance Insights
              </h3> */}

              <div className="space-y-6">
                {keyPoints.map((point, id) => (
                  <div key={id} className="flex items-start">
                    <div className="bg-blue-50 rounded-md p-1 mr-4 flex-shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 para-text">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Chart */}
          <div className="lg:w-3/5">
            <div className="bg-gray-50 rounded-lg p-6 ">
              <div className="flex justify-between items-center mb-2">
                <p className=" text-base sm:text-lg font-medium text-black">
                  Distribution of Industries Analysed
                </p>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                  <span className="font-medium">Total: </span>
                  <span className="font-bold">
                    {pieChartData.reduce((sum, item) => sum + item.value, 0)}
                  </span>
                </div>
              </div>
              <IndustryDistributionPieChart data={pieChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDistribution;
