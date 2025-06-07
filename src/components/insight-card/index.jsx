import React from "react";

const InsightCard = ({ title, description, classname }) => {
  return (
    <div
      className={`mt-6 mb-4  p-6 bg-gray-50 rounded-lg border-l-4 ${classname}`}
    >
      {title && (
        <h4 className="text-gray-800 mb-2 text-base font-semibold">{title}</h4>
      )}
      <div className="text-gray-600 text-sm leading-relaxed">{description}</div>
    </div>
  );
};

export default InsightCard;
