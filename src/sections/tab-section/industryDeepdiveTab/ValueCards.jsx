import React from "react";

const data = [
  {
    title: "Cash Cycle",
    suf: " days",
    value: 1,
    description: "DSO + DIO - DPO = Cash Conversion Cycle",
  },
  {
    title: "Cash Release Opportunity",
    pre: "$",
    suf: "M",
    value: 5,
    description: "Per $100M revenue by meeting P25 DSO",
  },
  {
    title: "Working Capital/Revenue",
    suf: "%",
    value: 5.2,
    description: "Operating NWC as % of Revenue",
  },
  {
    title: "DSO Range",
    pre: "$",
    suf: "M",
    value: 53 - 45,
    description: "Days Sales Outstanding (P25-P75)",
  },
  {
    title: "Interest Saved",
    pre: "$",
    suf: "K",
    value: 5,
    description: "Per $100M revenue",
  },
];

const ValueCard = () => {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Banking &amp; Financial Services: $200M-$1B Revenue Band
      </h2>
      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {data.map((it, i) => (
          <Card key={i} item={it} />
        ))}
      </div>
    </>
  );
};

export default ValueCard;

const Card = ({ item }) => {
  return (
    <div className="relative bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 overflow-hidden">
      <h3 className="text-sm text-gray-600 font-medium mb-2">{item?.title}</h3>
      <p className="sm:text-[2rem] text-[1.5rem] font-extrabold text-bblue-500 mb-1 flex items-baseline gap-2">
        {item.pre}
        {item.value}
        {item.suf}
      </p>
      <p className="text-xs text-gray-500 leading-snug">{item?.description}</p>
    </div>
  );
};
