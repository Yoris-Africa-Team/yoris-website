import React, { useState } from "react";

import { Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";

import sdgBiodiversity from "../assets/images/sdg_biodiversity.png";
import connectedPeople from "../assets/images/connected_people.png";
import appStoreIcon from "../assets/images/appstore_icon.png";
import playStoreIcon from "../assets/images/playstore_icon.png";
import riders from "../assets/images/riders.png";
import sendAndReceive1 from "../assets/images/send_and_receive_1.png";
import sendAndReceive2 from "../assets/images/send_and_receive_2.png";
import sendAndReceiveSVG2 from "../assets/images/send_and_receive_2.svg";
import DonateBox from "../components/DonateBox";
import AppDownloadBtn from "../components/Buttons/AppDownloadBtn";
import InfoCard from "../components/cards/InfoCard";
import RecentTweets from "../components/tweets/RecentTweets";
import { getTweets } from "../features/getTweets";
import { Twitter } from "@mui/icons-material";
import FAQs from "../components/Faqs";
import Header from "../components/navigations/Navbar";

const Riders: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      className="flex flex-col items-center font-sarala relative"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="700"
      id="#"
    >
      <Header />
      <Box
        className="w-full flex justify-center pb-6 md:pb-12 lg:pb-24"
        sx={{ backgroundColor: "#e6ddbe" }}
      >
        <Box className="relative w-full flex flex-col items-center pt-32">
          <Box className="absolute top-28 sm:top-32 md:top-44 lg:top-56 w-full flex flex-col items-center gap-6">
            <Box className="flex md:flex-col items-center gap-4">
              <Typography
                variant={isSmallScreen ? "h3" : "h2"}
                sx={{
                  color: "primary.yorisWhite",
                  fontFamily: "Sarala",
                  fontWeight: "600",
                }}
              >
                Become
              </Typography>
              <Typography
                variant={isSmallScreen ? "h3" : "h2"}
                sx={{
                  color: "primary.yorisWhite",
                  fontFamily: "Sarala",
                  fontWeight: "600",
                }}
              >
                Yoris
              </Typography>
            </Box>
            <Box className="w-full max-w-xl px-6 flex justify-center gap-5">
              <AppDownloadBtn icon={playStoreIcon} text="Get on Play Store" />
              <AppDownloadBtn icon={appStoreIcon} text="Get on Play Store" />
            </Box>
          </Box>
          <Box className="w-full">
            <img src={riders} alt={riders} className="w-full" />
          </Box>
        </Box>
      </Box>

      <Box
        className="w-full flex flex-col items-center gap-8 pt-12 md:pt-16"
        sx={{ backgroundColor: "#231f11" }}
      >
        <Box className="flex flex-col items-center -mt-[108px] sm:-mt-32 md:-mt-44 lg:-mt-64 xl:-mt-72">
          <Box className="flex max-w-5xl px-6 md:px-12">
            <img className="w-full" src={sendAndReceive1} alt="" />
            <img className="w-full hidden" src={sendAndReceive2} alt="" />
          </Box>

          <Box className="w-full flex flex-col items-center gap-8 py-12 md:py-16">
            <Box className="flex flex-col items-center gap-8">
              <Typography variant={isSmallScreen ? "h5" : "h4"} color="white">
                Join our growing community
              </Typography>
            </Box>

            <Grid container className="flex px-3 gap-y-8">
              {/* ... (MoreInfoCard components remain unchanged) */}
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="flex justify-center font-sarala px-6 md:px-4"
              >
                <InfoCard
                  title="Book an Event"
                  description={`
                      Love to Puddle? Stay up to date on our social
                      media section of the app as you get updates from
                      brands and individuals concerning their product.
                  `}
                  image="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="flex justify-center font-sarala px-6 md:px-4"
              >
                <InfoCard
                  title="Book an Event"
                  description={`
                      Love to Puddle? Stay up to date on our social
                      media section of the app as you get updates from
                      brands and individuals concerning their product.
                  `}
                  image="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="flex justify-center font-sarala px-6 md:px-4"
              >
                <InfoCard
                  title="Book an Event"
                  description={`
                      Love to Puddle? Stay up to date on our social
                      media section of the app as you get updates from
                      brands and individuals concerning their product.
                  `}
                  image="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="flex justify-center font-sarala px-6 md:px-4"
              >
                <InfoCard
                  title="Book an Event"
                  description={`
                      Love to Puddle? Stay up to date on our social
                      media section of the app as you get updates from
                      brands and individuals concerning their product.
                  `}
                  image="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </Grid>
            </Grid>

            <Box className="flex flex-col items-center gap-8 py-8">
              <Button
                className="flex gap-2"
                sx={{
                  textTransform: "none",
                  backgroundColor: "primary.yorisWhite",
                  borderRadius: "10px",
                  color: "primary.body",
                  border: "2px solid",
                  minWidth: "200px",
                  padding: "10px",
                  "&:hover": {
                    color: "primary.main",
                    borderColor: "primary.main",
                  },
                }}
              >
                <Twitter />
                Join our Community
              </Button>
            </Box>

            <Box className="border-y-2 border-dashed border-[#b47fe6] w-full">
              <RecentTweets tweetDetails={getTweets(3)} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* FAQs */}
      <Box
        className="flex flex-col items-center text-start py-8 md:py-16 w-full"
        id="faqs"
        sx={{ backgroundColor: "#e6ddbe" }}
      >
        <Typography
          variant="h4"
          className="w-full max-w-7xl px-5 md:px-8"
          sx={{
            color: "primary.body",
            fontFamily: "Sarala",
            fontWeight: "600",
          }}
        >
          FAQs
        </Typography>
        <Box className="w-full max-w-6xl py-4">
          <FAQs />
        </Box>
      </Box>
    </Box>
  );
};

export default Riders;
