const TabNavbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: "tab1", value: "Cross Industry Overview" },
    { name: "tab2", value: "Industry Deep-dive" },
    { name: "tab3", value: "Challenges & Solutions" },
  ];

  return (
    <div className="grid grid-cols-3 gap-0 sm:gap-5 flex-wrap bg-[#f0f9ff] border-b border-slate-200">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`px-4 sm:px-6 cursor-pointer py-4 sm:py-5 font-semibold text-base transition-colors duration-200 relative
              ${
                activeTab === tab.name
                  ? "text-bblue-500"
                  : "text-slate-600 hover:bg-[#4361ee0d] hover:text-bblue-400"
              }`}
        >
          {tab.value}
          {activeTab === tab.name && (
            <div className="absolute bottom-0 left-0 w-full h-[3px] z-10 bg-bblue-600" />
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNavbar;
