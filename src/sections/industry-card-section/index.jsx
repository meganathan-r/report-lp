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
import { useEffect, useMemo, useState } from "react";
import HeaderSection from "../../components/header-section";
import useQueryData from "../../hooks/useQueryData";

const INITIAL_INDUSTRY_CARD_DATA = [
  {
    icon: <FaChartPie />,
    iconColor: "text-[#4361ee]",
    iconBg: "bg-[#4361ee1a]",
  },
  {
    icon: <FaBolt />,
    iconColor: "text-[#4cc9f0]",
    iconBg: "bg-[#4cc9f01a]",
  },
  {
    icon: <FaHeartbeat />,
    iconColor: "text-[#48bb78]",
    iconBg: "bg-[#48bb781a]",
  },
  {
    icon: <FaShoppingCart />,
    iconColor: "text-[#f59e0b]",
    iconBg: "bg-[#f59e0b1a]",
  },
  {
    icon: <FaIndustry />,
    iconColor: "text-[#ef4444]",
    iconBg: "bg-[#ef44441a]",
    p25: 60,
    p75: 30,
  },
  {
    icon: <FaMicrochip />,
    iconColor: "text-[#9f7aea]",
    iconBg: "bg-[#9f7aea1a]",
  },
];

const IndustryCardsSection = () => {
  const { industryData } = useAppStateContext();
  const { data: titleDescriptionData } = useQueryData("titleDescription");
  const [industriesCardData, setIndustriesCardData] = useState(
    INITIAL_INDUSTRY_CARD_DATA
  );
  const headingContent = useMemo(() => {
    return (
      titleDescriptionData?.find((item) => item?.section === "industryCard") ||
      {}
    );
  }, [titleDescriptionData]);
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
          description: item["IndustryCard_description"],
          icon: industriesCardData[i]?.icon,
          iconColor: industriesCardData[i]?.iconColor,
          iconBg: industriesCardData[i]?.iconBg,
        }));
      setIndustriesCardData(industriesCardDetails);
    }
  }, [industryData]);

  return (
    <section className="py-20 mt-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* heading section */}
        <HeaderSection
          title={headingContent?.title}
          description={headingContent?.description}
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
