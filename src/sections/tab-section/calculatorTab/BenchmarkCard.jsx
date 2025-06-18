const BenchmarkCard = ({ benchmark, currentDSO }) => {
  return (
    <div className="bg-white rounded-xl  lg:p-6 mb-8">
      <div className="font-semibold  text-gray-800 mb-6 text-lg">
        DSO Performance Benchmarks
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BenchmarkStat
          type="top"
          active={currentDSO <= benchmark["P25 DSO"]}
          title="Top Quartile (P25)"
          value={`${benchmark["P25 DSO"]} days`}
          description="Most efficient companies"
        />

        <BenchmarkStat
          type="median"
          active={
            currentDSO > benchmark["P25 DSO"] &&
            currentDSO <= benchmark["P75 DSO"]
          }
          title="Median Quartile (P50)"
          value={`${benchmark["P50 DSO"]} days`}
          description="Industry average"
        />

        <BenchmarkStat
          type="bottom"
          active={currentDSO > benchmark["P75 DSO"]}
          title="Bottom Quartile (P75)"
          value={`${benchmark["P75 DSO"]} days`}
          description="Needs improvement"
        />
      </div>
    </div>
  );
};

export default BenchmarkCard;

const BenchmarkStat = ({ type, title, value, description, active }) => {
  const colorSchemes = {
    top: {
      activeBorder: "border-green-500",
      activeBg: "bg-green-50",
    },
    median: {
      activeBorder: "border-yellow-500",
      activeBg: "bg-yellow-50",
    },
    bottom: {
      activeBorder: "border-red-500",
      activeBg: "bg-red-50",
    },
  };

  const colors = colorSchemes[type] || colorSchemes.median;
  return (
    <div
      className={`
        rounded-lg p-5 transition-all duration-200 shadow-sm
        border ${active ? colors.activeBorder : "border-gray-200"}
        ${active ? colors.activeBg : "bg-white"}
      `}
    >
      <div
        className={`text-sm font-medium  mb-1 ${
          active ? "text-gray-700" : "text-gray-500"
        }`}
      >
        {title}
      </div>
      <div className={`text-2xl text-bblue-500 font-bold mb-2 `}>{value}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </div>
  );
};
