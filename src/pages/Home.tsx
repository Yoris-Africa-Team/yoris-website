import React from "react";
import { Box } from "@mui/material";
import Header from "../components/navigations/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/5add/8360/0a99fcbba6431d5e129f4842af928894?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g8eiX1YCAnxrWmuFhX-IHkTwEDq0QaTdSCEz-CYqmeY7S1B1JyFmUXgbHJRsY6O4zo~txoddRsicrgAVr-GHXHwfVWZ-bSHHZlW06q6K-Dw~6EeLM1NOO9qmx3RSq55X2jQld8zE~975SC-CHflic7-vq7doOam-LhIHa1z6hCpM6D2psr4CUQrpEJ00AEs-wmDulOXgR81u42hrYgnYChcYClMKPwCkf5oHrL-Poae9-SkqlBcEm1mv5bBhE2-sBeHM3bb181CpTXbYGhul4RooMUdNhQRBzjQEK0xDZ92BAm8-okmdwtc5EnUGrh9ymzrIDmzaMaaQped~E6WNpw__"
          alt="gif"
          style={{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
          }}
        />
      </Box>
    </>
  );
};

export default Home;
