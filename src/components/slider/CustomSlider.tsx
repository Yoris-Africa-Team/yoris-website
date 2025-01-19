import React from "react";
import { Slider, Box, styled } from "@mui/material";

// Styled container to match the provided styles
const StyledContainer = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  position: "absolute",
  width: "1244px",
  height: "1043px",
  left: "101px",
  top: "3320px",
  background: "#DCCFA3",
  border: "8px solid #E93D3E",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const marks = [
  { value: 0, label: "0" },
  { value: 25, label: "25" },
  { value: 50, label: "50" },
  { value: 75, label: "75" },
  { value: 100, label: "100" },
];

// Component
const CustomSlider: React.FC = () => {
  const [value, setValue] = React.useState<number>(50);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <StyledContainer>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        step={5}
        marks={marks}
        min={0}
        max={100}
        valueLabelDisplay="on"
        sx={{
          width: "80%",
          color: "#E93D3E", // Match the border color
          "& .MuiSlider-thumb": {
            backgroundColor: "#DCCFA3", // Match the background
            border: "2px solid #E93D3E",
          },
        }}
      />
    </StyledContainer>
  );
};

export default CustomSlider;
