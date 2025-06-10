import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectInput = ({ label, options, value, handleChange }) => {
  return (
    <div>
      <label
        htmlFor="revenue-band-select"
        className="block text-base font-medium text-gray-700 mb-1.5"
      >
        {label}
      </label>

      <FormControl size="medium" fullWidth>
        <Select
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          displayEmpty
          inputProps={{ "aria-label": label }}
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#d1d5db",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#204a9d",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3b82f6",
              borderWidth: 2,
            },
          }}
        >
          {options?.map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
