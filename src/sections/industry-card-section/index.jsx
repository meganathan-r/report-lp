import {
  FaMicrochip,
  FaChartPie,
  FaHeartbeat,
  FaShoppingCart,
  FaIndustry,
  FaBolt,
} from "react-icons/fa";
import IndustryCard from "./IndustryCard";

const industries = [
  {
    title: "Technology",
    icon: <FaMicrochip />,
    iconColor: "text-[#4361ee]",
    iconBg: "bg-[#4361ee1a]",
    description:
      "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
    stats: [
      {
        label: (
          <>
            P75 → P25 <br /> DSO
          </>
        ),
        value: "62 → 30",
      },
      {
        label: (
          <>
            Cash Released(P25) <br /> per $100M
          </>
        ),
        value: "$4.2M",
      },
    ],
  },
  {
    title: "Finance",
    icon: <FaChartPie />,
    iconColor: "text-[#4cc9f0]",
    iconBg: "bg-[#4cc9f01a]",
    description:
      "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
    stats: [
      {
        label: (
          <>
            P75 → P25 <br /> DSO
          </>
        ),
        value: "62 → 30",
      },
      {
        label: (
          <>
            Cash Released(P25) <br /> per $100M
          </>
        ),
        value: "$4.2M",
      },
    ],
  },
  {
    title: "Healthcare",
    icon: <FaHeartbeat />,
    iconColor: "text-[#48bb78]",
    iconBg: "bg-[#48bb781a]",
    description:
      "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
    stats: [
      {
        label: (
          <>
            P75 → P25 <br /> DSO
          </>
        ),
        value: "62 → 30",
      },
      {
        label: (
          <>
            Cash Released(P25) <br /> per $100M
          </>
        ),
        value: "$4.2M",
      },
    ],
  },
  {
    title: "Retail",
    icon: <FaShoppingCart />,
    iconColor: "text-[#f59e0b]",
    iconBg: "bg-[#f59e0b1a]",
    description:
      "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
    stats: [
      {
        label: (
          <>
            P75 → P25 <br /> DSO
          </>
        ),
        value: "62 → 30",
      },
      {
        label: (
          <>
            Cash Released(P25) <br /> per $100M
          </>
        ),
        value: "$4.2M",
      },
    ],
  },
  {
    title: "Manufacturing",
    icon: <FaIndustry />,
    iconColor: "text-[#ef4444]",
    iconBg: "bg-[#ef44441a]",
    description:
      "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
    stats: [
      {
        label: (
          <>
            P75 → P25 <br /> DSO
          </>
        ),
        value: "62 → 30",
      },
      {
        label: (
          <>
            Cash Released(P25) <br /> per $100M
          </>
        ),
        value: "$4.2M",
      },
    ],
  },
  {
    title: "Energy",
    icon: <FaBolt />,
    iconColor: "text-[#9f7aea]",
    iconBg: "bg-[#9f7aea1a]",
    description:
      "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
    stats: [
      {
        label: (
          <>
            P75 → P25 <br /> DSO
          </>
        ),
        value: "62 → 30",
      },
      {
        label: (
          <>
            Cash Released(P25) <br /> per $100M
          </>
        ),
        value: "$4.2M",
      },
    ],
  },
];

const IndustryCardsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* heading section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black mb-4">
            Industry Benchmark Analytics
          </h2>
          <p className="para-text max-w-2xl mx-auto">
            Explore performance metrics across key industries to understand
            where you stand and how you can improve.
          </p>
        </div>
        {/* industries card */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard industry={industry} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCardsSection;
