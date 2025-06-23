import { useEffect, useState } from "react";
import { useAppStateContext } from "../../../context/AppStateContext";
import DSODashboard from "./ThreeBarChart";
import SingleBarChart from "./SingleBarChart";

const doslegendItems = [
  { label: "P25 DSO", color: "#9BC4FA" },
  { label: "P50 DSO", color: "#3E7BFA" },
  { label: "P75 DSO", color: "#1B4F9E" },
];

const diolegendItems = [
  { label: "P25 DIO", color: "#9BC4FA" },
  { label: "P50 DIO", color: "#3E7BFA" },
  { label: "P75 DIO", color: "#1B4F9E" },
];

const dpolegendItems = [
  { label: "P25 DPO", color: "#9BC4FA" },
  { label: "P50 DPO", color: "#3E7BFA" },
  { label: "P75 DPO", color: "#1B4F9E" },
];
const moclegendItems = [{ label: "Median CCC", color: "#3E7BFA" }];

const CrossIndustryOverview = () => {
  const { industryData } = useAppStateContext();
  const [DSOchartData, setDSOchartData] = useState([]);
  const [DIOchartData, setDIOchartData] = useState([]);
  const [DPOchartData, setDPOchartData] = useState([]);
  const [MGM, setMGM] = useState([]);
  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      const currentIndustryData = industryData?.filter(
        (ind) => Number(ind?.id) >= 1 && Number(ind?.id) <= 9
      );
      const dsoChart = currentIndustryData?.map((ind) => ({
        name: ind?.["Industry"],
        abv: ind?.["abv"],
        p25: ind?.["P25 DSO"],
        p50: ind?.["P50 DSO"],
        p75: ind?.["P75 DSO"],
      }));

      setDSOchartData(dsoChart);
      const dioChart = currentIndustryData?.map((ind) => ({
        name: ind?.["Industry"],
        abv: ind?.["abv"],
        p25: ind?.["P25 DIO"],
        p50: ind?.["P50 DIO"],
        p75: ind?.["P75 DIO"],
      }));
      setDIOchartData(dioChart);
      const dpoChart = currentIndustryData?.map((ind) => ({
        name: ind?.["Industry"],
        abv: ind?.["abv"],
        p25: ind?.["P25 DPO"],
        p50: ind?.["P50 DPO"],
        p75: ind?.["P75 DPO"],
      }));
      setDPOchartData(dpoChart);
      const mgmChart = currentIndustryData?.map((ind) => ({
        name: ind?.["Industry"],
        abv: ind?.["abv"],
        medianccc: ind?.["Median CCC"],
      }));
      setMGM(mgmChart);
    }
  }, [industryData]);
  return (
    <div className="">
      {/* DSO Comparison Across Industries */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        <DSODashboard
          legendItems={doslegendItems}
          chartData={DSOchartData}
          title="DSO Across Industries"
          description="Days Sales Outstanding (DSO) represents the average number of days it takes a company to collect payment after a sale."
          chartDetails={{
            ticks: [0, 25, 50, 75, 100],
            bar1name: "DSO P25",
            bar2name: "DSO P50",
            bar3name: "DSO P75",
          }}
        />
        <DSODashboard
          legendItems={diolegendItems}
          chartData={DIOchartData}
          title="DIO Across Industries"
          description="Days Inventory Outstanding (DIO) represents the average number of days a company holds inventory before selling it."
          chartDetails={{
            ticks: [0, 50, 100, 150, 200],
            bar1name: "DIO P25",
            bar2name: "DIO P50",
            bar3name: "DIO P75",
          }}
        />
        <DSODashboard
          legendItems={dpolegendItems}
          chartData={DPOchartData}
          title="DPO Across Industries"
          description="Days Payables Outstanding (DPO) represents the average number of days a company takes to pay its suppliers after receiving goods or services."
          chartDetails={{
            ticks: [0, 30, 60, 100, 140],
            bar1name: "DPO P25",
            bar2name: "DPO P50",
            bar3name: "DPO P75",
          }}
        />
        <SingleBarChart
          legendItems={moclegendItems}
          chartData={MGM}
          title="Median Cash Conversion Cycle Across Industries"
          description="Cash Conversion Cycle (CCC) measures the average number of days it takes a company to convert its investments in inventory and other resources into cash flows from sales."
          chartDetails={{
            ticks: [0, 25, 50, 75, 100],
            bar1name: "Median CCC",
          }}
        />
      </div>
    </div>
  );
};

export default CrossIndustryOverview;
