import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, image }) => {
  return (
    <Box
      sx={{
        width: { xs: "228px", sm: "258px", md: "288px" },
        height: { xs: "308px", sm: "348px", md: "408px" },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "4px solid #E6E6E6",
        borderRadius: "25px",
        overflow: "hidden",
      }}
    >
      {/* Content Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          gap: "56px",
          position: "absolute",
          top: "4.33%",
          left: "9.02%",
          right: "12.63%",
          bottom: "42.32%",
        }}
      >
        {/* Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "15px", sm: "19px", md: "23px" },
              color: "#E6E6E6",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "10px", sm: "14px", md: "16px" },
              lineHeight: { xs: "15px", sm: "20px", md: "22px" },
              color: "#E6E6E6",
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Action Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            marginTop: "-40px",
          }}
        >
          <Button
            sx={{
              fontWeight: 700,
              fontSize: { xs: "8px", sm: "10px", md: "14px" },
              letterSpacing: "0.13em",
              color: "#E6E6E6",
              padding: 0,
              minWidth: 0,
            }}
          >
            SEE MORE
          </Button>
          <IconButton
            sx={{
              color: "#E6E6E6",
            }}
          >
            <ArrowForwardIosRoundedIcon
              sx={{ fontSize: { xs: "10px", sm: "15px", md: "18px" } }}
            />
          </IconButton>
        </Box>
      </Box>

      {/* Footer section */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "66.99%",
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          background: `url(${image}) no-repeat center/cover`,
        }}
      ></Box>
    </Box>
  );
};

export default InfoCard;
