import React from "react";
import InsightCard from "../../../components/insights-card";

const IndustryProfile = () => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Banking &amp; Financial Services Profile
      </h2>

      <div className="mb-6">
        <h3 className="text-base font-medium text-gray-700 ">
          Industry Characteristics
        </h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-sm text-gray-500">Classification</p>
              <p className="font-medium">Asset-Light</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">CapEx/Revenue</p>
              <p className="font-medium">1.4%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Interest/Revenue</p>
              <p className="font-medium">2.1%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Allowance/Revenue</p>
              <p className="font-medium">0.00%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Quick Ratio</p>
              <p className="font-medium">0.63</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Sample Size</p>
              <p className="font-medium">67 companies</p>
            </div>
          </div>
        </div>
      </div>
      <InsightCard
        title={"Key Pain Points"}
        description={
          <>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-700">
                <span className="font-semibold text-black">
                  Customer Diversity:
                </span>{" "}
                Varied payment behaviors require segmented collection strategies
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-black">
                  Forecast Accuracy:
                </span>{" "}
                Unpredictable payment patterns impact cash planning reliability
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-black">
                  Dispute Resolution:
                </span>{" "}
                High-touch relationships require careful balance of collections
                and satisfaction
              </li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default IndustryProfile;
