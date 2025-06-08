const IndustryCard = ({ industry, index }) => {
  return (
    <a key={index} href="#tabsection">
      <div className="bg-white group border cursor-pointer border-[#e2e8f0] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
        <div className="flex items-center gap-4 p-5 border-b border-[#e2e8f0]">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${industry.iconBg} ${industry.iconColor}`}
          >
            {industry.icon}
          </div>
          <h3 className="text-xl font-semibold text-[#1e1b4b]">
            {industry.title}
          </h3>

          <p className=" ml-auto opacity-0 group-hover:opacity-100 relative flex items-center gap-1 text-base font-medium text-[#1e1b4b] transition-all duration-300">
            Explore
            <span className="inline-block opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
              ›
            </span>
          </p>
        </div>
        <div className="p-6">
          <p className="para-text mb-6">{industry?.description}</p>
          <div className="flex justify-between gap-4 mt-4">
            <div className="flex-1 text-center relative">
              <div className="text-2xl font-bold text-[#1e1b4b]">
                {industry?.p75} → {industry?.p25}
              </div>
              <div className="text-sm text-[#64748b]">
                DSO <br /> P75 → P25
              </div>

              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-9 w-px bg-[#e2e8f0]" />
            </div>
            <div className="flex-1 text-center relative">
              <div className="text-2xl font-bold text-[#1e1b4b]">
                ${(Number(industry?.cashReleased) / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-[#64748b]">
                Cash Released
                <br /> per $100M
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default IndustryCard;
