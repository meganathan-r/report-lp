import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectInput = ({ label, options }) => {
  const [age, setAge] = React.useState(20); // <-- Default value set to 20

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
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
          {options?.map((value) => (
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

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </div>
  );
};

export default SelectInput;
