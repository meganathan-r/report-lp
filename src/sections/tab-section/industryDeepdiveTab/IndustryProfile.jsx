import { useEffect, useState } from "react";
import { useAppStateContext } from "../../../context/AppStateContext";

const IndustryProfile = () => {
  const { selectIndustry, industryData, selectRevenueBand } =
    useAppStateContext();

  const [industryProfile, setIndustryProfile] = useState([]);

  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      const currentIndustryData = industryData?.filter(
        (industry) =>
          industry?.Industry == selectIndustry &&
          industry?.["Revenue Range"] == selectRevenueBand
      );

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
          ).toFixed(2)}%`,
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
      <h2 className="sm:text-xl text-lg font-bold text-gray-800 mb-4">
        {selectIndustry}
        {"  "}Profile
      </h2>

      <div className="mb-6">
        <div className="bg-gray-50  rounded-lg p-4">
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
    </div>
  );
};

export default IndustryProfile;
