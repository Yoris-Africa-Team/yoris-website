import React, { useState } from "react";
import { Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Box, Grid, Radio, Typography } from "@mui/material";

import sdgGroup from "../assets/images/sdgs_group.png";
import sdgCouple from "../assets/images/sdg_couple.png";
import sdgBiodiversity from "../assets/images/sdg_biodiversity.png";
import connectedPeople from "../assets/images/connected_people.png";
import sdgBalance from "../assets/images/sdg_balance.png";
import DonateBox from "../components/DonateBox";
import Header from "../components/navigations/Navbar";

const Donate: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      className="font-sarala relative"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="700"
      id="#"
    >
      <Header />
      <Box
        className="w-full flex justify-center pt-28 md:pt-44 pb-6 md:pb-12 lg:pb-24"
        sx={{ backgroundColor: "#15130A" }}
      >
        <Box className="w-full max-w-6xl flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-center text-white font-roboto font-semibold">
            Donate SDGs
          </h1>
          <Box className="pb-3 pt-14">
            <Button
              className="hover:text-white hover:border hover:shadow"
              sx={{
                minWidth: "150px",
                backgroundColor: "primary.lightYellow",
                color: "primary.dark",
                textTransform: "none",
                borderRadius: "12px",
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box className="w-full max-w-2xl flex justify-center">
            <img src={sdgGroup} alt="SDG Group" />
          </Box>
        </Box>
      </Box>

      <Box
        className="w-full flex flex-col items-center gap-8 py-12 md:py-16"
        sx={{ backgroundColor: "primary.main" }}
      >
        <Box className="flex max-w-xl">
          <img src={sdgCouple} alt="SDG Couple" />
        </Box>
        <Stack
          gap={3}
          sx={{ color: "secondary.main" }}
          className="w-full max-w-md md:max-w-md justify-center items-center text-justify px-5"
        >
          <Typography
            variant={isSmallScreen ? "h4" : "h3"}
            sx={{ fontWeight: "700", fontFamily: "Sarala" }}
          >
            Gender Equality
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: "400" }}>
            5 out of 10 girls are out of school or not in suitable job
            conditions due to limited job availability for women due to lack of
            money or other means of survival
          </Typography>
        </Stack>
        <Stack
          sx={{ color: "secondary.main" }}
          direction="row"
          className="w-full max-w-sm md:max-w-lg lg:max-w-xl gap-1 md:gap-1.5 justify-center items-center px-4"
        >
          <DonateBox
            header="Donate $20"
            body="To put a girl on delivery bicycle"
          />
          <DonateBox
            header="Donate $20"
            body="To put a girl on delivery bicycle"
            bg={{
              smallScreen: "primary.body",
              largeScreen: "primary.lightCyan",
            }}
          />
          <DonateBox
            header="Donate any amount"
            body="To put a girl on delivery bicycle"
            bg={{ smallScreen: "primary.yellow", largeScreen: "primary.cyan" }}
          />
        </Stack>
      </Box>

      <Box
        className="w-full flex flex-col items-center gap-8 py-12"
        sx={{ backgroundColor: "#15130A" }}
      >
        <Box className="flex px-5 max-w-sm">
          <img src={sdgBiodiversity} alt="SDG Biodiversity" />
        </Box>
        <Stack
          gap={3}
          sx={{ color: "primary.yorisWhite" }}
          className="w-full max-w-md md:max-w-md justify-center items-center text-justify px-5"
        >
          <Typography
            variant={isSmallScreen ? "h4" : "h3"}
            sx={{ fontWeight: "700", fontFamily: "Sarala" }}
          >
            Climate Change
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: "400" }}>
            About 1.3 billion metric tons of CO2 emissions globally help join in
            the combat against climate change
          </Typography>
        </Stack>
        <Stack
          sx={{ color: "secondary.main" }}
          direction="row"
          className="w-full max-w-sm md:max-w-lg lg:max-w-xl gap-1 md:gap-1.5 justify-center items-center px-4"
        >
          <DonateBox
            header="Donate $20"
            body="To put a girl on delivery bicycle"
            bg={{
              smallScreen: "primary.lightCyan",
              largeScreen: "primary.yellow",
            }}
          />
          <DonateBox
            header="Donate any amount"
            body="To put a girl on delivery bicycle"
          />
        </Stack>
      </Box>

      <Box
        className="w-full flex flex-col items-center gap-8 py-12"
        sx={{ backgroundColor: "primary.main" }}
      >
        <Box className="flex px-5 max-w-md">
          <img src={connectedPeople} alt="Connected People" />
        </Box>
        <Stack
          gap={3}
          sx={{ color: "primary.body" }}
          className="w-full max-w-md md:max-w-md justify-center items-center text-justify px-5"
        >
          <Typography
            className="text-center"
            variant={isSmallScreen ? "h4" : "h3"}
            sx={{ fontWeight: "700", fontFamily: "Sarala" }}
          >
            Partnership for sustainable goals
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: "400" }}>
            About 40% of African businesses are offline or affected by low
            internet penetration.
          </Typography>
        </Stack>
        <Stack
          sx={{ color: "secondary.main" }}
          direction="row"
          className="w-full max-w-sm md:max-w-lg lg:max-w-xl gap-1 md:gap-1.5 justify-center items-center px-4"
        >
          <DonateBox
            header="Donate $20"
            body="For an EV save the planet."
            bg={{
              smallScreen: "primary.lightCyan",
              largeScreen: "primary.yellow",
            }}
          />
          <DonateBox
            header="Donate any amount"
            body="To put a girl on delivery bicycle"
          />
        </Stack>
      </Box>

      <Box
        className="w-full flex flex-col items-center gap-8 py-12"
        sx={{ backgroundColor: "#15130A" }}
      >
        <Box className="flex px-5 max-w-md">
          <img src={connectedPeople} alt="Connected People" />
        </Box>
        <Stack
          gap={3}
          sx={{ color: "primary.yorisWhite" }}
          className="w-full max-w-md md:max-w-md justify-center items-center text-justify px-5"
        >
          <Typography
            className="text-center"
            variant={isSmallScreen ? "h4" : "h3"}
            sx={{ fontWeight: "700", fontFamily: "Sarala" }}
          >
            Reduce Inequality
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: "400" }}>
            About 40% of African businesses are offline or affected by low
            internet penetration.
          </Typography>
        </Stack>
        <Stack
          sx={{ color: "secondary.main" }}
          direction="row"
          className="w-full max-w-sm md:max-w-lg lg:max-w-xl gap-1 md:gap-1.5 justify-center items-center px-4"
        >
          <DonateBox
            header="Donate $20"
            body="For an EV save the planet."
            bg={{
              smallScreen: "primary.lightCyan",
              largeScreen: "primary.yellow",
            }}
          />
          <DonateBox
            header="Donate any amount"
            body="To put a girl on delivery bicycle"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Donate;
