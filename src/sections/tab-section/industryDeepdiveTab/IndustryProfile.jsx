import React, { useEffect, useState } from "react";
import InsightCard from "../../../components/insights-card";
import { useAppStateContext } from "../../../context/AppStateContext";

const IndustryProfile = () => {
  const { selectIndustry, industryData, selectRevenueBand } =
    useAppStateContext();

  const [industryProfile, setIndustryProfile] = useState([]);
  const [keyPoints, setKeyPoints] = useState([]);
  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      const currentIndustryData = industryData?.filter(
        (industry) =>
          industry?.Industry == selectIndustry &&
          industry?.["Revenue Range"] == selectRevenueBand
      );
      const currentIndustryDataAll = industryData?.filter(
        (industry) =>
          industry?.Industry == selectIndustry &&
          industry?.["Revenue Range"] == "All"
      );
      const keypointsdata = [
        {
          title: currentIndustryDataAll[0]?.["keypoint1Title"],
          description: currentIndustryDataAll[0]?.["keypoint1Description"],
        },
        {
          title: currentIndustryDataAll[0]?.["keypoint2Title"],
          description: currentIndustryDataAll[0]?.["keypoint2Description"],
        },
        {
          title: currentIndustryDataAll[0]?.["keypoint3Title"],
          description: currentIndustryDataAll[0]?.["keypoint3Description"],
        },
      ];
      setKeyPoints(keypointsdata);

      const profiledata = [
        {
          title: "CapEx/Revenue",
          value: currentIndustryData[0]?.["CapEX/Revenue"],
        },
        {
          title: "Interest/Revenue",
          value: currentIndustryData[0]?.["Interest/Revenue"],
        },
        {
          title: "Allowance/Revenue",
          value: currentIndustryData[0]?.["Allowance/Revenue"],
        },
        {
          title: "Median CCC",
          value: currentIndustryData[0]?.["Median CCC"],
        },
        {
          title: "Working Capital/Revenue",
          value: `${(
            Number(currentIndustryData[0]?.["Median OpNWC_to_Rev"]) * 100
          ).toFixed(3)}x`,
        },
        {
          title: "DSO Impact on Working Capital",
          value: Number(currentIndustryData[0]?.["Partial_R2_DSO"]).toFixed(2),
          pro: true,
        },
      ];
      setIndustryProfile(profiledata);
    }
  }, [selectIndustry, selectRevenueBand, industryData]);

  return (
    <div className="mb-8">
      <h2 className="md:text-xl text-lg font-bold text-gray-800 mb-4">
        {selectIndustry}
        {"  "}Profile
      </h2>

      <div className="mb-6">
        <h3 className="text-base font-medium text-gray-700 ">
          Industry Characteristics
        </h3>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {industryProfile?.map(
              (item, i) =>
                item.value != 0.0 &&
                item.value != "0.00%" && (
                  <div
                    key={i}
                    className={
                      item.pro && " p-2  bg-[#F0F9FF] font-medium rounded-lg"
                    }
                  >
                    <p
                      className={
                        item.pro
                          ? "text-sm text-bblue-500"
                          : "text-sm text-gray-500 "
                      }
                    >
                      {item.title}
                    </p>
                    <p className="font-medium">
                      {item.value}
                      {item.suf}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      {/* WFO */}
      <InsightCard
        title={"Key Pain Points"}
        description={
          <>
            <ul className="space-y-2 text-sm">
              {keyPoints?.map((item, i) => (
                <li key={i} className="text-gray-700">
                  <span className="font-semibold text-black">
                    {item?.title}:
                  </span>{" "}
                  {item?.description}
                </li>
              ))}
            </ul>
          </>
        }
      />
    </div>
  );
};

export default IndustryProfile;
