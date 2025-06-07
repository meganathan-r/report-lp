import React from "react";

const SelectInput = ({ label, options }) => {
  return (
    <>
      <label
        htmlFor="revenue-band-select"
        className="block text-base font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id="revenue-band-select"
          name="revenueBand"
          className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors appearance-none bg-white"
        >
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SelectInput;
