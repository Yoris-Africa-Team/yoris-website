import React, { useState } from "react";

import { Button, useMediaQuery, useTheme } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";

import standing_man from "../assets/images/standing_man.png";
import three_ladies from "../assets/images/three_ladies.png";
import horizontal_line from "../assets/images/horizontal_line.png";
import appStoreIcon from "../assets/images/appstore_icon.png";
import playStoreIcon from "../assets/images/playstore_icon.png";

import AppDownloadBtn from "../components/Buttons/AppDownloadBtn";
import InfoCard from "../components/cards/InfoCard";
import FAQs from "../components/Faqs";
import RecentTweets from "../components/tweets/RecentTweets";
import { getTweets } from "../features/getTweets";
import Header from "../components/navigations/Navbar";

const Vendors: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      className="relative flex flex-col items-center font-sarala"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="700"
      id="#"
    >
      <Header />
      <Box
        className="w-full flex justify-center pt-28 md:pt-40 pb-6 md:pb-12 lg:pb-24"
        sx={{ backgroundColor: "primary.lightYellow" }}
      >
        <Box className="relative w-full max-w-4xl flex flex-col items-center">
          <Box
            color="secondary.main"
            className="absolute top-[5%] w-80 md:w-[450px]"
          >
            <h1 className="text-5xl lg:text-6xl font-sarala font-bold">
              Grow your
            </h1>
            <h1 className="text-5xl text-end lg:text-6xl font-sarala font-bold">
              Business?
            </h1>
          </Box>
          <Box className="w-full max-w-2xl flex justify-center pt-14 px-5">
            <img className="w-1/2" src={standing_man} alt="standing_man" />
            <img className="w-1/2" src={three_ladies} alt="three_ladies" />
          </Box>
          <Box className="px-5">
            <img src={horizontal_line} alt="horizontal_line" />
          </Box>
          <Box className="w-full flex flex-col justify-center items-center pt-16">
            <Typography
              variant="h5"
              sx={{
                color: "primary.dark",
                textTransform: "uppercase",
                fontFamily: "Sarala",
                fontWeight: "700",
              }}
            >
              Download On
            </Typography>
            <Box className="w-full max-w-md flex gap-5 items-center pt-6 px-4">
              <AppDownloadBtn icon={playStoreIcon} text="Playstore" />
              <AppDownloadBtn icon={appStoreIcon} text="Appstore" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className="w-full flex flex-col items-center gap-8 py-12 md:py-16"
        sx={{ backgroundColor: "#15130A" }}
      >
        <Grid container className="flex max-w-7xl gap-y-8 md:px-5">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="flex justify-center font-sarala px-4 md:px-2"
          >
            <Box className="flex justify-center p-2">
              <InfoCard
                title={`Experience the Hom'Luv Magic`}
                description={`
                  Kennys Hom'Luv Services is dedicated to providing exceptional home cleaning and
                  event planning services. Our team puts in great effort to ensure that your living
                  space is transformed into a stunning environment, while our parties are designed
                  to create unforgettable memories. Contact us today to schedule an appointment and
                  witness the remarkable transformation our services can bring to your residence.
                `}
                image="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="flex justify-center font-sarala px-4 md:px-2"
          >
            <Box className="flex justify-center p-2">
              <InfoCard
                title={`Experience the Hom'Luv Magic`}
                description={`
                  Kennys Hom'Luv Services is dedicated to providing exceptional home cleaning and
                  event planning services. Our team puts in great effort to ensure that your living
                  space is transformed into a stunning environment, while our parties are designed
                  to create unforgettable memories. Contact us today to schedule an appointment and
                  witness the remarkable transformation our services can bring to your residence.
                `}
                image="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="flex justify-center font-sarala px-4 md:px-2"
          >
            <Box className="flex justify-center p-2">
              <InfoCard
                title={`Experience the Hom'Luv Magic`}
                description={`
                  Kennys Hom'Luv Services is dedicated to providing exceptional home cleaning and
                  event planning services. Our team puts in great effort to ensure that your living
                  space is transformed into a stunning environment, while our parties are designed
                  to create unforgettable memories. Contact us today to schedule an appointment and
                  witness the remarkable transformation our services can bring to your residence.
                `}
                image="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </Box>
          </Grid>
        </Grid>
        <Box className="flex flex-col items-center gap-8 py-16">
          <Typography variant={isSmallScreen ? "h5" : "h4"} color="white">
            Join our growing community
          </Typography>
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "primary.main",
              color: "secondary.main",
              border: "2px solid",
              minWidth: "200px",
              "&:hover": { color: "primary.main", borderColor: "primary.main" },
            }}
          >
            Join our Community
          </Button>
        </Box>
      </Box>

      <Box
        className="w-full flex flex-col items-center gap-8 py-12"
        sx={{
          backgroundColor: {
            xs: "#15130A",
            md: "#e6ddbe",
          },
        }}
      >
        <Box className="border-y-2 border-dashed border-[#b47fe6] w-full">
          <RecentTweets tweetDetails={getTweets(3)} />
        </Box>
      </Box>

      {/* FAQs */}
      <Box
        className="w-full flex flex-col items-center gap-8 pb-12"
        id="faqs"
        sx={{
          backgroundColor: {
            xs: "#15130A",
            md: "#e6ddbe",
          },
        }}
      >
        <Typography
          variant="h4"
          className="w-full max-w-7xl px-5 md:px-8"
          sx={{
            color: {
              xs: "#e6ddbe",
              md: "#15130A",
            },
            fontFamily: "Sarala",
          }}
        >
          FAQs
        </Typography>
        <Box className="w-full max-w-6xl" id="faqs">
          <FAQs />
        </Box>
      </Box>
    </Box>
  );
};

export default Vendors;
