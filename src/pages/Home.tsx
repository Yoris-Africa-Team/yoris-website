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

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            height: "94vh",
            objectFit: "cover",
          }}
        />
        <img
          src={bottomImg}
          alt="gif"
          style={{
            width: "100%",
            marginTop: isMobile ? "-20px" : "-50px",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
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
      <Box
        sx={{
          position: "relative",
          marginTop: "-100px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          gap={4}
          direction={{ xs: "column", sm: "row" }}
        >
          <Grid item xs={12} sm={4} md={3}>
            <InfoCard
              title="Join the Conversation"
              description="Love to Puddle? Stay up to date on our social media section of the app as you get updates from brands and individuals concerning their product."
              image={
                "https://s3-alpha-sig.figma.com/img/3a16/c63e/53d5ca5da9823c271ed321a7efadc35d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SVPZZBQINITZ-IMLR3Fy81lJU783FAlId8wF2iOYbuc3fHLy9qQX3BlX5yWXMQ9GtJPP-k3Slkuk-ExriGbHRSz6xcRIipn9G4n3y5vxigsU38W7Yx5WsTjlRmxVeQAi0DQxJiEvZatr9mjWPsHssibYQtwUn-yPwNN9NE0S~dKj0DYxurq-g1cKAABwrODohsCfKUzUL0t2qMpc-JbUMyQiDCQ6i3wzpkjyRUIdjGoDpcNNVnNPJPhVk8GV7UZQ0y0GlgpWN~slfAvYmHIHCifF2mR7XXUdenBoReJp8UjY-Eyqn89M5DkoHzgLBOyzL9SPzmiTIZ4NIiOd-p9NGg__"
              }
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <InfoCard
              title="Book an Event"
              description="Say no more to long lines and the frustration of buffering web pages. When it comes to buying tickets, booking events and saving a place for yourself at your favourite events, we have got you covered."
              image={
                "https://s3-alpha-sig.figma.com/img/ce47/2715/c694cdaee4c08fa216a37a09e37a9391?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MAkDIcX12xyjkxAdvbjmWfeqZKrU4QzmxiWu57Ery-RgcAUDjyTjAO6wz-~NBv1NyWh-J~hZjoPp4souwjavV057dYMlXkTphy6SMej4f-4WSwLTGXYb4F3fUe2EIY6EUc9gB4ZhqC11oP1Nu-KgsGaCY~PVx3J7V~rNgXP7qEu-23QkoMLQWWHriX9tWhaC2DmQYIu0rKbb42TjS9hOezYE9npR~20ygH4ailSxyRjqSKsaLZfzJ1BS3VUWcd6UlOLOhIVLrbB7KIpSJEmRmZASRuE5~yDmaMLRCgRVU~xDtSIVTU0W3NV8cXZQUIg5dzwj8ZTsQ0daThf6x1zusw__"
              }
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <InfoCard
              title="An Africa Store"
              description="What is better than an app you use everyday? An app that lets you shop and meet service providers easily. Get every commodity, goods, and services with ease."
              image={
                "https://s3-alpha-sig.figma.com/img/af3d/c929/c1ea2446d441dda2b586661512456928?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kScLame-GlqiGFD13v0q1HwMMMyiAKuAFLHP1VpMIBH7curztPstQ1MZrfZpKYW-x6rd5TSyntHinmBuV0LYGx7htCt4DShQjJJ-n5fDZ9ETMmkpuja2b1F0PwMIiTiUIZrtx~MmM0ChB3j~SwBAd3h3LU7fJhn1engpGUNcWbkUN3ks11zP5MPnM6XLVTT2WtQimmQbhNmEGACbQlmSbOeVRo6lOBKXhYtC5fs2pYIprZwhecOrICVKW1XvlMCXuT6etXm6xCEjboLXTT5-XyyfUuY1n4A0FB644s7h342oEnpTbXRVZHWXSrOzjl1XfVCVtJpaqZqu62YMZath1w__"
              }
            />
          </Grid>
        </Grid>
      </Box>
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
