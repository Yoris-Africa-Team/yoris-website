import { Box, Stack } from "@mui/material";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

interface DonateBoxProps {
  header: string;
  body: string;
  bg?: {
    smallScreen?: string;
    largeScreen?: string;
  };
}

const DonateBox: React.FC<DonateBoxProps> = ({ header, body, bg }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      sx={{
        color: `${
          bg?.largeScreen === "primary.body"
            ? isSmallScreen
              ? "primary.body"
              : "primary.yorisWhite"
            : "primary.body"
        }`,
      }}
      className="w-full max:w-28 sm:max-w-32 md:max-w-72 lg:w-[400px] flex flex-col gap-0.5 text-[7px] md:text-[9px] lg:text-[11px]"
    >
      <Box
        sx={{
          backgroundColor: `${
            isSmallScreen && bg
              ? bg?.smallScreen
              : isTabletScreen && bg
              ? bg?.largeScreen
              : "primary.yellow"
          }`,
          borderColor: "secondary.main",
        }}
        className="border md:border-2 flex justify-center py-2 rounded-t-xl font-semibold"
      >
        {header}
      </Box>
      <Box
        sx={{
          backgroundColor: `${
            isSmallScreen && bg
              ? bg?.smallScreen
              : isTabletScreen && bg
              ? bg?.largeScreen
              : "primary.yellow"
          }`,
          borderColor: "secondary.main",
        }}
        className="h-16 md:h-20 border md:border-2 flex justify-center py-4 rounded-b-xl sm:font-semibold"
      >
        {body}
      </Box>
    </Stack>
  );
};

export default DonateBox;
