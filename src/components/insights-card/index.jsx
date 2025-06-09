const InsightCard = ({ title, description }) => {
  return (
    <div className="mt-6 mb-4 rounded-lg p-6 bg-gray-50  relative">
      {/* outer border */}
      <div className="absolute w-full h-full left-0 top-0 rounded-lg border border-gray-200 border-l-0 "></div>
      {/* left border */}
      <div className="absolute w-full h-full left-0 top-0 border-l-4 border-bblue-500 rounded-lg"></div>
      <h4 className="text-gray-800 mb-2 text-base font-semibold">{title}</h4>
      <div className="text-gray-600 text-sm leading-relaxed">{description}</div>
    </div>
  );
};

export default InsightCard;
