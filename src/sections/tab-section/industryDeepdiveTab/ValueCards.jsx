import { useEffect, useState } from "react";
import { useAppStateContext } from "../../../context/AppStateContext";
import CountUp from "react-countup";

const ValueCard = () => {
  const { selectIndustry, industryData, selectRevenueBand } =
    useAppStateContext();
  const [dataValues, setDataValues] = useState([]);
  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      const currentIndustryData = industryData?.filter(
        (industry) =>
          industry?.Industry == selectIndustry &&
          industry?.["Revenue Range"] == selectRevenueBand
      );

      const cardData = [
        {
          title: "DSO Range",
          value: `${currentIndustryData[0]?.["P25 DSO"] || 0} - ${
            currentIndustryData[0]?.["P75 DSO"] || 0
          }`,
          description: "Days Sales Outstanding (P25-P75)",
        },
        {
          title: "Cash Release Opportunity",
          pre: "$",
          suf: "M",
          value: (
            Number(
              currentIndustryData[0]?.["Cash Released (P25) per $100M Revenue"]
            ) / 1000000
          ).toFixed(2),
          description: "Per $100M revenue by meeting P25 DSO",
        },
        {
          title: "Interest Saved/Revenue",
          pre: "$",
          suf: "M",
          value: (
            Number(
              currentIndustryData[0]?.["Interest Saved per $100M Revenue"]
            ) / 1000000
          ).toFixed(1),
          description: "Interest Saved per $100M Revenue",
        },
      ];
      setDataValues(cardData);
    }
  }, [selectIndustry, selectRevenueBand]);

  return (
    <>
      <h2 className="sm:text-xl text-lg font-bold text-gray-800 mb-4">
        Improvement Potential: {selectRevenueBand} Revenue Band
      </h2>
      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {dataValues?.map((it, i) => (
          <Card key={i} item={it} />
        ))}
      </div>
    </>
  );
};

export default ValueCard;

const Card = ({ item }) => {
  return (
    <div className="relative bg-white p-6 rounded-lg border border-gray-200  hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 overflow-hidden">
      <h3 className="text-sm text-gray-600 font-medium mb-2">{item?.title}</h3>
      <p className="sm:text-[2rem] text-[1.5rem] font-extrabold text-bblue-500 mb-1 flex items-baseline gap-2">
        {item.title === "DSO Range"
          ? item.value
          : item.value > 0 && (
              <span>
                {item.pre}
                <CountUp end={Number(item?.value)} duration={1} decimals={1} />
                {item.suf}
              </span>
            )}
      </p>
      <p className="text-xs text-gray-500 leading-snug">{item?.description}</p>
    </div>
  );
};
