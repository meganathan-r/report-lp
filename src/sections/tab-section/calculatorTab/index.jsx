import React, { useState, useEffect, useMemo } from "react";
import { industries, revenueBands } from "../../../utils/constant";
import InputSection from "./InputSection";
import ResultsSection from "./ResultsSection";
import { useAppStateContext } from "../../../context/AppStateContext";

function transformReportData(apiData) {
  const benchmarkData = {};
  apiData?.forEach((record) => {
    const industry = record.Industry;
    const revenueRange = record["Revenue Range"];
    // clean the data - if revenue range is all, empty fields
    if (
      !industry ||
      !revenueRange ||
      industry === "All Industries" ||
      revenueRange === "All" ||
      !record["P25 DSO"] ||
      !record["P50 DSO"] ||
      !record["P75 DSO"]
    ) {
      return;
    }
    // Initialize industry if it doesn't exist
    if (!benchmarkData[industry]) {
      benchmarkData[industry] = {};
    }
    // Helper function - to parse numeric values
    const parseNumeric = (value, defaultValue = 0) => {
      if (typeof value === "string") {
        const cleaned = value.replace(/[,%]/g, "");
        const parsed = parseFloat(cleaned);
        return isNaN(parsed) ? defaultValue : parsed;
      }
      return typeof value === "number" ? value : defaultValue;
    };

    const p25DSO = Math.round(parseNumeric(record["P25 DSO"]));
    const p50DSO = Math.round(parseNumeric(record["P50 DSO"]));
    const p75DSO = Math.round(parseNumeric(record["P75 DSO"]));
    const cashReleased = Math.round(
      parseNumeric(record["Cash Released (P25) per $100M Revenue"])
    );
    const interestSaved = Math.round(
      parseNumeric(record["Interest Saved per $100M Revenue"])
    );
    const capexFunded =
      Math.round(parseNumeric(record["CapEX Funded by Cash Released"]) * 100) /
      100;
    const capexRevenue =
      Math.round(parseNumeric(record["CapEX/Revenue"]) * 100) / 100;
    benchmarkData[industry][revenueRange] = {
      "P25 DSO": p25DSO,
      "P50 DSO": p50DSO,
      "P75 DSO": p75DSO,
      "Cash Released (P25) per $100M Revenue": cashReleased,
      "Interest Saved per $100M Revenue": interestSaved,
      "CapEX Funded by Cash Released": capexFunded,
      "CapEX/Revenue": capexRevenue,
    };
  });
  return benchmarkData;
}

const DSOImpactCalculator = ({ handleChangeIndustry, industry }) => {
  const { industryData } = useAppStateContext();
  const benchmarkData = useMemo(() => {
    return transformReportData(industryData);
  }, [industryData]);

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
