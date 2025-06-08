import {
  FaMicrochip,
  FaChartPie,
  FaHeartbeat,
  FaShoppingCart,
  FaIndustry,
  FaBolt,
} from "react-icons/fa";
import IndustryCard from "./IndustryCard";
import { useAppStateContext } from "../../context/AppStateContext";
import { useEffect, useState } from "react";
import HeaderSection from "../../components/header-section";

const IndustryCardsSection = () => {
  const mapIndustries = [
    {
      title: "Banking & Financial Services",
      icon: <FaChartPie />,
      iconColor: "text-[#4361ee]",
      iconBg: "bg-[#4361ee1a]",
      description:
        "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
      p25: 60,
      p75: 30,
      value2: "$4.2M",
    },
    {
      title: "Finance",
      icon: <FaBolt />,
      iconColor: "text-[#4cc9f0]",
      iconBg: "bg-[#4cc9f01a]",
      description:
        "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
      p25: 60,
      p75: 30,
      value2: "$4.2M",
    },
    {
      title: "Healthcare",
      icon: <FaHeartbeat />,
      iconColor: "text-[#48bb78]",
      iconBg: "bg-[#48bb781a]",
      description:
        "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
      p25: 60,
      p75: 30,
      value2: "$4.2M",
    },
    {
      title: "Retail",
      icon: <FaShoppingCart />,
      iconColor: "text-[#f59e0b]",
      iconBg: "bg-[#f59e0b1a]",
      description:
        "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
      p25: 60,
      p75: 30,
      value2: "$4.2M",
    },
    {
      title: "Manufacturing",
      icon: <FaIndustry />,
      iconColor: "text-[#ef4444]",
      iconBg: "bg-[#ef44441a]",
      description:
        "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
      p25: 60,
      p75: 30,
      value2: "$4.2M",
    },
    {
      title: "Energy",
      icon: <FaMicrochip />,

      iconColor: "text-[#9f7aea]",
      iconBg: "bg-[#9f7aea1a]",
      description:
        "Compare software development efficiency, cloud infrastructure costs, and cybersecurity metrics.",
      p25: 60,
      p75: 30,
      value2: "$4.2M",
    },
  ];
  const { industryData } = useAppStateContext();
  const [industriesCardData, setIndustriesCardData] = useState([]);
  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      const industriesCardDetails = industryData
        .slice(1, 14)
        .filter((item) => Number(item["N"]) > 65)
        .map((item, i) => ({
          title: item["Industry"],
          p25: Number(item["P25 DSO"]),
          p75: Number(item["P75 DSO"]),
          cashReleased: Number(item["Cash Released (P25) per $100M Revenue"]),
          description: mapIndustries[i]?.description,
          icon: mapIndustries[i]?.icon,
          iconColor: mapIndustries[i]?.iconColor,
          iconBg: mapIndustries[i]?.iconBg,
        }));
      setIndustriesCardData(industriesCardDetails);
    }
  }, [industryData]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* heading section */}
        <HeaderSection
          title={" Industry Benchmark Analytics"}
          description={
            "Explore performance metrics across key industries to understand where you stand and how you can improve."
          }
        />
        {/* industries card */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industriesCardData.map((industry, index) => (
            <IndustryCard industry={industry} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCardsSection;
