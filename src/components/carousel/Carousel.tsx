import React, { useState, useEffect } from "react";
import { Box, Typography, styled, IconButton } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import hotelImg from "../../assets/images/Group.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RootBox = styled(Box)({
  width: "900px",
  maxWidth: "1244px",
  height: "650px",
  maxHeight: "800px",
  background: "#DCCFA3",
  border: "8px solid #E93D3E",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "15px",
  overflow: "hidden",
  position: "relative",
  padding: "16px",
  boxSizing: "border-box",
});

const SlideContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "800px",
  height: "600px",
  maxWidth: "800px",
  margin: "0 auto",
  padding: "32px",
  background: "#F9F7EF",
  border: "8px solid #000000",
  borderRadius: "15px",
  boxSizing: "border-box",
});

const SlideContentSmall = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const Title = styled(Typography)({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "3rem",
  textAlign: "center",
  color: "#080604",
});

const TitleSmall = styled(Typography)({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "1.3rem",
  textAlign: "center",
  color: "#fff",
});

const CustomArrow = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "black",
  color: "#fff",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "black",
    color: "#FFF",
  },
});

const CustomArrow1 = styled(IconButton)({
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "black",
  color: "#fff",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "black",
    color: "#FFF",
  },
});

const CarouselComponent: React.FC = () => {
  const [isAbove924px, setIsAbove924px] = useState(window.innerWidth > 924);

  useEffect(() => {
    const handleResize = () => {
      setIsAbove924px(window.innerWidth > 924);
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderRef = React.useRef<any>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  const SliderContent = (
    <Slider ref={sliderRef} {...settings}>
      <div>
        <SlideContent>
          <Title>You done book that hotel?</Title>
          <Box
            sx={{
              width: isAbove924px ? "500px" : "300px",
              height: isAbove924px ? "400px" : "250px",
              position: "relative",
            }}
          >
            <img
              src={hotelImg}
              style={{
                position: "relative",
                left: "5%",
                top: "5%",
                width: "80vw",
              }}
            />
          </Box>
        </SlideContent>
      </div>
      <div>
        <SlideContent>
          <Title>Slide 2 Content</Title>
        </SlideContent>
      </div>
    </Slider>
  );

  const SliderContentSmall = (
    <Slider ref={sliderRef} {...settings}>
      <div>
        <SlideContentSmall>
          <TitleSmall>You done book that hotel?</TitleSmall>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img
              src={hotelImg}
              width={"220px"}
              style={{
                position: "relative",
                left: "5%",
                top: "5%",
                marginTop: "30px",
              }}
            />
          </Box>
        </SlideContentSmall>
      </div>
      <div>
        <SlideContentSmall>
          <Title>Slide 2 Content</Title>
        </SlideContentSmall>
      </div>
    </Slider>
  );

  return (
    <>
      {isAbove924px ? (
        <RootBox>
          {SliderContent}
          <CustomArrow
            sx={{
              top: "calc(50% + 250px)",
              left: "350px",
              transform: "translateY(-50%)",
            }}
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <ArrowBackIosRoundedIcon />
          </CustomArrow>
          <CustomArrow
            sx={{
              top: "calc(50% + 250px)",
              right: "350px",
              transform: "translateY(-50%)",
            }}
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ArrowForwardIosRoundedIcon />
          </CustomArrow>
        </RootBox>
      ) : (
        <Box
          sx={{
            width: "90vw",
            height: "400px",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "32px",
            background: "#C3AD60",
            borderRadius: "15px",
            boxSizing: "border-box",
          }}
        >
          {SliderContentSmall}
          <CustomArrow1
            sx={{
              top: "calc(50% - 100px)",
              left: "28vw",
              transform: "translateY(-50%)",
            }}
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <ArrowBackIosRoundedIcon />
          </CustomArrow1>
          <CustomArrow1
            sx={{
              top: "calc(50% - 100px)",
              right: "-35vw",
              transform: "translateY(-50%)",
            }}
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ArrowForwardIosRoundedIcon />
          </CustomArrow1>
        </Box>
      )}
    </>
  );
};

export default CarouselComponent;
