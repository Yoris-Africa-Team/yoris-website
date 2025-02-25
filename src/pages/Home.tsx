import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import "../styles/Home.css";
import Header from "../components/navigations/Navbar";
import CarouselComponent from "../components/carousel/Carousel";
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
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: width < 672,
    isTablet: width >= 500 && width < 992,
    isLaptop: width >= 992 && width < 1200,
    isDesktop: width >= 1200 && width < 1920,
    isWide: width >= 1920,
  };
};

const Home: React.FC = () => {
  const { isMobile, isTablet, isLaptop, isDesktop, isWide } = useBreakpoint();

  const getMarginTop = (): string => {
    if (isMobile) return "-20px";
    if (isTablet || isLaptop) return "-60px";
    if (isDesktop) return "-80px";
    if (isWide) return "-100px";
    return "-80px";
  };

  return (
    <>
      <Header />
      <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
        <img src={introBg} alt="Intro Background" style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
        <img src={bottomImg} alt="Bottom Image" style={{ width: "100%", marginTop: getMarginTop(), objectFit: "cover" }} />
      </Box>
      <Box sx={{ position: "relative", width: "100%", textAlign: "center", marginTop: "20px" }}>
        <Typography component="h3" sx={{ fontWeight: 600, color: "primary.yorisWhite", fontSize: "2.3vw" }}>
          Check us on Playstore?
        </Typography>
        <Typography component="h3" sx={{ fontWeight: 600, color: "primary.yorisWhite", fontSize: "2.3vw" }}>
          Use our App
        </Typography>
        <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: "30px" }}>
          <Grid item>
            <AppDownloadBtn text="Download on Playstore" icon={<img src={playstoreIcon} alt="Playstore Icon" />} style={{ marginRight: "30px" }} />
          </Grid>
          <Grid item>
            <AppDownloadBtn text="Download on Appstore" icon={<img src={appstoreIcon} alt="Appstore Icon" />} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: "relative", marginTop: "-30px", width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={iphoneImg} alt="iPhone Mockup" className="mockup-img" />
      </Box>
      <div className="grid-container">
        <InfoCard header="Join the conversation" body="Love to meet new people and stay connected? Join our online community." img="https://images.pexels.com/photos/1415734/pexels-photo-1415734.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <InfoCard header="Book an Event" body="No more long lines! Book tickets and events easily." img="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=600"  />
        <InfoCard header="An Africa Store" body="Shop and meet service providers easily." img="https://images.pexels.com/photos/1090972/pexels-photo-1090972.jpeg?auto=compress&cs=tinysrgb&w=600"  />
      </div>
      <Box sx={{ position: "relative", marginTop: "70px", width: "100%", display: "flex", justifyContent: "center" }}>
        <CarouselComponent />
      </Box>
      <RecentBlogs blogDetails={getBlogs(3)} />
      <Box sx={{ width: "100%", borderTop: "2px dashed #6b38a5", borderBottom: "2px dashed #6b38a5" }}>
        <Box sx={{ display: "flex", justifyContent: "center", textAlign: "start", marginTop: "2rem", width: "100%" }} id="recent-tweets">
          <Typography variant="h4" sx={{ width: "100%", maxWidth: "112rem", paddingX: "1.25rem", color: "primary.yorisWhite" }}>
            Recent Tweets
          </Typography>
        </Box>
        <RecentTweets tweetDetails={getTweets(2)} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "left", paddingBlock: "2rem", backgroundColor: "#15130A" }} id="faqs">
        <Typography variant="h4" sx={{ padding: "1rem", color: "primary.yorisWhite", fontFamily: "Sarala" }}>
          FAQs
        </Typography>
        <Box sx={{ width: "100%", maxWidth: "72rem", overflowX: "hidden" }}>
          <FAQs />
        </Box>
      </Box>
    </>
  );
};

export default Home;
