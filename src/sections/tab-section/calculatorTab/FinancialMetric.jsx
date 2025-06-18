import React from "react";

const FinancialMetric = ({ title, value, description }) => {
  return (
    <div className="flex items-start">
      <div>
        <div className="text-sm text-gray-600">{title}</div>
        <div className="text-lg font-semibold text-bblue-500 py-1">{value}</div>
        <div className="text-xs text-gray-500">{description}</div>
      </div>
    </div>
  );
};

export default FinancialMetric;
