import React from "react";
import { industries, revenueBands } from "../../utils/constant";
import SelectInput from "../select-input";

const SelectOptionWrap = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {/* Industry Selector */}
      <div className="md:max-w-lg">
        <SelectInput label="Select Industry" options={industries} />
      </div>

      {/* Revenue Band Selector */}
      <div className="md:max-w-sm">
        <SelectInput label="Select Revenue Band" options={revenueBands} />
      </div>
    </div>
  );
};

export default SelectOptionWrap;
