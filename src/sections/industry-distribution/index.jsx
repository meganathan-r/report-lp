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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-lg w-8 h-8 flex items-center shrink-0 justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  <div className="bg-blue-50 rounded-md p-1 mr-4 flex-shrink-0">
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
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      Domain-Driven Solutions
                    </h4>
                    <p className="text-gray-600 para-text">
                      Tailored approaches addressing industry-specific
                      compliance, security, and operational requirements with
                      precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-md p-1 mr-4 flex-shrink-0">
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
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      Technology Integration
                    </h4>
                    <p className="text-gray-600 para-text">
                      Seamless implementation of sector-specific technologies
                      and platforms for optimal performance and scalability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-md p-1 mr-4 flex-shrink-0">
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
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      Cross-Industry Innovation
                    </h4>
                    <p className="text-gray-600 para-text">
                      Transferring best practices between sectors to drive
                      innovation and create sustainable competitive advantages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Chart */}
          <div className="lg:w-3/5">
            <div className="">
              <div className="flex justify-end items-center mb-2">
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
