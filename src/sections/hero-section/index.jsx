import CountUp from "react-countup";
import HeroChart from "./HeroChart";
import { useAppStateContext } from "../../context/AppStateContext";
import { useEffect, useMemo, useState } from "react";
import useQueryData from "../../hooks/useQueryData";
import Skeleton from "@mui/material/Skeleton";

const STAT_FIELDS = [
  { key: "N", description: "B2B Companies Analyzed" },
  {
    key: "Delta DSO (P75-P25)",
    description: "Average Cash Release per 100M",
    pre: "$",
    suf: "M+",
    fixed: 1,
  },
  { key: "P50 DPO", description: "DSO Difference", suf: "%", fixed: 1 },
];

const formatChartData = (data) =>
  data
    .filter((d) => Number(d?.id) >= 1 && Number(d?.id) <= 9)
    .map((item) => ({
      name: item?.["abv"] || "",
      "P50 DSO": item?.["P50 DSO"] || 0,
      label: item?.["Industry"] || "",
    }));

const HeroSection = () => {
  const { industryData } = useAppStateContext();
  const { data } = useQueryData("titleDescription");

  const [chartData, setChartData] = useState([]);
  const stats = useMemo(() => {
    if (!Array.isArray(industryData) || industryData.length === 0) return [];
    const currentIndustryData = industryData?.filter((ind) => ind?.id == "0");
    return STAT_FIELDS.map(
      ({ key, description, pre = "", suf = "", fixed }) => ({
        description,
        pre,
        suf,
        value: fixed
          ? Number(currentIndustryData[0]?.[key]).toFixed(1)
          : Number(currentIndustryData[0]?.[key]),
      })
    );
  }, [industryData]);

  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      setChartData(formatChartData(industryData));
    }
  }, [industryData]);
  return (
    <section className="mb-16  py-12 bg-white ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-title md:text-5xl font-extrabold leading-[120%] text-black mb-6">
              {data?.find((item) => item?.section == "hero")?.title ? (
                data?.find((item) => item?.section == "hero")?.title
              ) : (
                <>
                  <Skeleton height={60} animation="wave" />
                  <Skeleton width={210} height={60} animation="wave" />
                </>
              )}
            </h1>
            <p className="para-text mb-10 max-w-2xl">
              {data?.find((item) => item?.section == "hero")?.description ? (
                data?.find((item) => item?.section == "hero")?.description
              ) : (
                <>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                  <Skeleton animation={false} />
                </>
              )}
            </p>

            {/* Stats */}
            <div className="flex flex-nowrap justify-between gap-6 mb-10">
              {stats.map((it, i) => (
                <div key={i} className="text-center">
                  <div className="sm:text-3xl text-2xl font-bold text-bblue-500  mb-2">
                    {it?.pre}
                    <CountUp
                      end={it.value}
                      duration={2}
                      decimals={it?.decimals}
                    />
                    {it?.suf}
                  </div>
                  <p className="text-sm text--500 font-medium">
                    {it.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="p-6 lg:w-1/2  w-full">
            <div className=" w-full bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform rotate-3 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-2xl opacity-10 -z-10"></div>
              <HeroChart chartData={chartData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Color constants for maintainability
