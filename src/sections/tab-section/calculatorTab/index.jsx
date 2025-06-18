import React, { useState, useEffect, useMemo } from "react";
import {
  benchmarkData,
  industries,
  revenueBands,
} from "../../../utils/constant";
import InputSection from "./InputSection";
import ResultsSection from "./ResultsSection";

const DSOImpactCalculator = ({
  handleChangeIndustry,
  // handleChangeRevenueBand,
  industry,
  // selectRevenueBand,
}) => {
  // const [industry, setIndustry] = useState("");
  const [revenueRange, setRevenueRange] = useState("");
  const [currentDSO, setCurrentDSO] = useState(null);
  const [targetDSO, setTargetDSO] = useState(30);

  // Get revenue ranges for selected industry
  const revenueRanges = useMemo(() => {
    if (!industry || !benchmarkData[industry]) return [];
    return revenueBands.filter((range) => benchmarkData[industry][range]);
  }, [industry]);

  // Update target DSO when industry/revenue changes
  useEffect(() => {
    if (industry && revenueRange && benchmarkData[industry]?.[revenueRange]) {
      const p25 = benchmarkData[industry][revenueRange]["P25 DSO"];
      setTargetDSO(p25);
    }
  }, [industry, revenueRange]);

  // Current benchmark data
  const benchmark = useMemo(() => {
    if (!industry || !revenueRange) return null;
    return benchmarkData[industry]?.[revenueRange] || null;
  }, [industry, revenueRange]);

  return (
    <div className="bg-white rounded-xl">
      <div className="text-center py-4 sm:p-6 pb-12 ">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Days Sales Outstanding Impact Calculator
          </h1>
          <p className="para-text max-w-2xl mx-auto">
            Discover the financial impact of optimizing your Days Sales
            Outstanding across industries
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-8 ">
        <InputSection
          industries={industries}
          revenueRanges={revenueRanges}
          industry={industry}
          revenueRange={revenueRange}
          currentDSO={currentDSO}
          targetDSO={targetDSO}
          setIndustry={handleChangeIndustry}
          setRevenueRange={setRevenueRange}
          setCurrentDSO={setCurrentDSO}
          setTargetDSO={setTargetDSO}
        />

        <ResultsSection
          benchmark={benchmark}
          currentDSO={currentDSO}
          targetDSO={targetDSO}
          industry={industry}
          revenueRange={revenueRange}
        />
      </div>
    </div>
  );
};

export default DSOImpactCalculator;
