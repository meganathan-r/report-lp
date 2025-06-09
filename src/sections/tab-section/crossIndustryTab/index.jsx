import DSODashboard from "./DSODashboard";

const CrossIndustryOverview = () => {
  return (
    <div className="">
      {/* DSO Comparison Across Industries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DSODashboard />
        <DSODashboard />
      </div>
    </div>
  );
};

export default CrossIndustryOverview;
