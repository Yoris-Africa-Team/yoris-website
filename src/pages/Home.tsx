import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import "../styles/Home.css";
import Header from "../components/navigations/Navbar";
import CarouselComponent from "../components/carousel/Carousel.tsx";
import FAQs from "../components/Faqs";
import RecentTweets from "../components/tweets/RecentTweets";
import RecentBlogs from "../components/blog/RecentBlogs";
import { getTweets } from "../features/getTweets";
import { getBlogs } from "../features/getBlogs";
import AppDownloadBtn from "../components/Buttons/AppDownloadBtn";
import bottomImg from "../assets/images/bottom_img.png";
import playstoreIcon from "../assets/images/ion_logo-google-playstore.png";
import appstoreIcon from "../assets/images/ph_app-store-logo-bold.png";
import iphoneImg from "../assets/images/iPhone_13.png";
import InfoCard from "../components/cards/InfoCard";
import introBg from "../assets/images/intro_bg.svg";

const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setIsMobile(width < 672);
      setIsTablet(width >= 500 && width < 992);
      setIsLaptop(width >= 992 && width < 1200);
      setIsDesktop(width >= 1200 && width < 1920);
      setIsWide(width >= 1920);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, isTablet, isLaptop, isDesktop, isWide };
};

const Home: React.FC = () => {
  const { isMobile, isTablet, isLaptop, isDesktop, isWide } = useBreakpoint();

  const getMarginTop = () => {
    if (isMobile) {
      return "-20px";
    } else if (isTablet) {
      return "-60px"; // Example for tablet
    } else if (isLaptop) {
      return "-60px"; // Example for laptop
    } else if (isDesktop) {
      return "-80px";
    } else if (isWide) {
      return "-100px"; // Example for wide screens
    } else {
      return "-80px"; // Default value (optional)
    }
  };

  const marginTop = getMarginTop();

  return (
    <>
      <Header />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      >
        <img
          src={introBg}
          alt="gif"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
        <img
          src={bottomImg}
          alt="gif"
          style={{
            width: "100%",
            marginTop: marginTop,
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        className="mt-5"
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontWeight: 600,
            color: "primary.yorisWhite",
            fontSize: "2.3vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Check us on Playstore?
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontWeight: 600,
            color: "primary.yorisWhite",
            fontSize: "2.3vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Use our App
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "30px" }}
        >
          <Grid item>
            <AppDownloadBtn
              text="Download on Playstore"
              icon={
                <img
                  src={playstoreIcon}
                  alt="App Icon"
                  className="responsive-icon"
                />
              }
              style={{ marginRight: "30px" }} // Fixed style prop
            />
          </Grid>
          <Grid item>
            <AppDownloadBtn
              text="Download on Appstore"
              icon={
                <img
                  src={appstoreIcon}
                  alt="App Icon"
                  className="responsive-icon"
                />
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          position: "relative",
          marginTop: "-30px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={iphoneImg} className="mockup-img" />
      </Box>

      <div className="grid-container">
        <InfoCard
          header="Join the conversation"
          body={`
                            Love to meet new people and stay connected with loved ones as well?
                            Join our growing online community to never miss out on the latest
                            updates from individuals and your favourite brands
                        `}
          img="https://images.pexels.com/photos/1415734/pexels-photo-1415734.jpeg?auto=compress&cs=tinysrgb&w=600"
          link=""
        />
        <InfoCard
          header="Book an Event"
          body={`
                            Say no more to long lines and the frustration of buffering web pages.
                            When it comes to buying tickets, booking events and saving a place for
                            yourself at your favourite events, we have got you covered
                        `}
          img="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=600"
          link=""
        />
        <InfoCard
          header="An Africa Store"
          body={`
                            What is better than an app you use everyday? An app that lets you
                            shop and meet service providers easily. Get every commodity, goods,
                            and services with ease
                        `}
          img="https://images.pexels.com/photos/1090972/pexels-photo-1090972.jpeg?auto=compress&cs=tinysrgb&w=600"
          link=""
        />
      </div>
      <Box
        sx={{
          position: "relative",
          marginTop: "70px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CarouselComponent />
      </Box>
      <RecentBlogs blogDetails={getBlogs()} />
      <Box
        style={{
          width: "100%",
          borderTop: "2px dashed #6b38a5",
          borderBottom: "2px dashed #6b38a5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "start",
            marginTop: "2rem",
            width: "100%",
          }}
          id="recent-tweets"
        >
          <Typography
            variant="h4"
            style={{
              width: "100%",
              maxWidth: "112rem",
              paddingLeft: "1.25rem",
              paddingRight: "1.25rem",
              color: "primary.yorisWhite",
            }}
          >
            Recent Tweets
          </Typography>
        </div>
        <RecentTweets tweetDetails={getTweets(2)} />
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "left",
          paddingBlock: "2rem", // py-8
          backgroundColor: "#15130A",
        }}
        id="faqs"
      >
        <Typography
          variant="h4"
          style={{
            padding: "1rem", // px-5
            color: "primary.yorisWhite",
            fontFamily: "Sarala",
          }}
        >
          FAQs
        </Typography>
        <Box style={{ width: "100%", maxWidth: "72rem", overflowX: "hidden" }}>
          <FAQs />
        </Box>{" "}
        {/* max-w-6xl (6 * 128px / 16px per rem = 48rem. I have used 72 rem for better responsiveness) */}
      </Box>
    </>
  );
};

export default Home;
