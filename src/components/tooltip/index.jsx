const CustomTooltip = ({ active, payload, label, defalutLable, metric }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border max-w-[200px] sm:max-w-[400px] border-gray-200 shadow-lg rounded-md">
        <p className="font-bold text-gray-800">
          {`${defalutLable ? payload[0].payload.label + " -" : ""} `} {label}
        </p>
        <div className="mt-2">
          {payload.map((entry, index) => (
            <div key={index} className="flex flex-wrap items-center py-1">
              <div
                className="w-3 h-3 mr-2 rounded-sm"
                style={{
                  backgroundColor: entry.color || payload[0].payload?.color,
                }}
              ></div>
              <span className="text-gray-600">{entry.name}: </span>
              <span className="font-semibold ml-1">
                {entry.value}
                {metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
