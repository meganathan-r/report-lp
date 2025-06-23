import React from "react";
import SelectInput from "../../../components/select-input";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Slider from "@mui/material/Slider";

const InputSection = ({
  industries,
  revenueRanges,
  industry,
  revenueRange,
  currentDSO,
  targetDSO,
  setIndustry,
  setRevenueRange,
  setCurrentDSO,
  setTargetDSO,
}) => {
  const isRevenueDisabled = !industry;
  const isTargetSliderDisabled = !industry || !revenueRange;
  const handleChange = (value) => {
    setRevenueRange("");
    setIndustry(value);
  };
  const handleChangeRev = (value) => {
    setRevenueRange(value);
  };
  return (
    <div className="bg-white sm:p-6 sm:border sm:border-gray-200  h-auto  lg:sticky lg:top-26  rounded-xl ">
      <div className="flex items-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800">Company Profile</h3>
      </div>

      {/* Industry Dropdown */}

      <SelectInput
        className="mb-6"
        label="Select Industry"
        options={industries}
        value={industry}
        defaultOpt="Select your industry"
        handleChange={handleChange}
      />
      <SelectInput
        className="mb-6"
        label="Select Revenue Range"
        options={revenueRanges}
        value={revenueRange}
        defaultOpt="Select revenue range..."
        handleChange={handleChangeRev}
        disabled={isRevenueDisabled}
      />
      {/* Current DSO Input */}
      <div className="mb-7">
        <label
          htmlFor="revenue-band-select"
          className="block text-base font-medium text-gray-700 mb-1.5"
        >
          Current DSO (Days)
        </label>
        <FormControl fullWidth size="medium">
          <TextField
            type="number"
            //   label="Current DSO (Days)"
            placeholder="Enter current DSO"
            value={currentDSO || ""}
            onChange={(e) =>
              setCurrentDSO(e.target.value ? parseInt(e.target.value) : null)
            }
            InputProps={{
              inputProps: { min: 1, max: 365 },
              endAdornment: (
                <InputAdornment position="end">days</InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "& fieldset": {
                  borderColor: "#d1d5db",
                },
                "&:hover fieldset": {
                  borderColor: "#204a9d",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3b82f6",
                  borderWidth: 2,
                },
              },
            }}
          />
        </FormControl>
      </div>

      {/* Target DSO Slider */}
      <div className="mb-4">
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <label
              htmlFor="revenue-band-select"
              className="block text-base font-medium text-gray-700 mb-1.5"
            >
              Target DSO (Optional)
            </label>
            <span className="bg-blue-100 text-bblue-500 font-medium py-1 px-3 rounded-full">
              {targetDSO} days
            </span>
          </div>

          <FormControl
            fullWidth
            size="medium"
            sx={{ backgroundColor: "white", borderRadius: 3 }}
          >
            <Slider
              min={1}
              max={currentDSO}
              value={targetDSO}
              onChange={(e, newValue) => setTargetDSO(newValue)}
              // disabled={isTargetSliderDisabled}
              sx={{
                mt: 2,
                color: "#3b82f6", // Tailwind's blue-500
                height: 8,
                borderRadius: 3,
                "& .MuiSlider-thumb": {
                  width: 16,
                  height: 16,
                  backgroundColor: "#fff",
                  border: "2px solid currentColor",
                  "&:hover": {
                    boxShadow: "0 0 0 6px rgba(59, 130, 246, 0.16)",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: "#ccc",
                  },
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#204A9D",
                  border: "none",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#e5e7eb", // Tailwind gray-200
                  opacity: 1,
                },
                opacity: isTargetSliderDisabled ? 0.5 : 1,
                cursor: isTargetSliderDisabled ? "not-allowed" : "pointer",
              }}
            />
          </FormControl>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>1 day</span>
          <span>{currentDSO || 30} days</span>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
