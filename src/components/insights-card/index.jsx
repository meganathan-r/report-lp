const InsightCard = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r p-[2px] rounded-lg mt-6 mb-4 from-bblue-400  via-blue-500 to-indigo-500">
      <div className="p-6 bg-blue-50 rounded-lg">
        {/* outer border */}
        <h4 className="text-gray-800 mb-2 text-base font-semibold">{title}</h4>
        <div className="text-gray-600 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
