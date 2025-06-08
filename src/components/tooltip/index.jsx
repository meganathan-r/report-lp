import React from "react";



export default CustomTooltip;

const CustomTooltip1 = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 shadow-lg rounded-md">
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

const CustomTooltip2 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 shadow-lg rounded-md">
        <p className="font-bold text-gray-800">{label}</p>
        <div className="mt-2">
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center py-1">
              <div
                className="w-3 h-3 mr-2 rounded-sm"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-gray-600">{entry.name}: </span>
              <span className="font-semibold ml-1">{entry.value} days</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
