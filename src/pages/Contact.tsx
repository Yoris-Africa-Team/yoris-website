import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  IconButton,
  Input,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  ArrowForward,
  FacebookOutlined,
  Instagram,
  LocalPhone,
  LocationOn,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "../components/navigations/Navbar";

interface BaseAvatarProps {
  src: string;
}

const BaseAvatar: React.FC<BaseAvatarProps> = ({ src }) => {
  return (
    <Avatar
      alt="Remy Sharp"
      src={src}
      sx={{
        width: {
          xs: 30,
          sm: 34,
          md: 40,
        },
        height: {
          xs: 30,
          sm: 34,
          md: 40,
        },
      }}
    />
  );
};

const Donate: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.up("md"));

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
        className="w-full flex justify-center pt-28 md:pt-44 pb-6 md:pb-12 lg:pb-24"
        sx={{ backgroundColor: "#15130A" }}
      >
        <Box className="w-full max-w-6xl flex flex-col items-center gap-8 px-5 md:px-8 lg:px-12">
          <h1 className="w-full max-w-6xl text-2xl md:text-4xl lg:text-5xl text-white font-roboto font-semibold">
            Contacts
          </h1>

          <Stack className="w-full max-w-6xl flex justify-center">
            <Stack
              sx={{
                backgroundColor: "secondary.main",
                borderColor: "primary.main",
              }}
              className="w-full rounded-xl md:border-2 p-5 sm:p-6 md:p-8 gap-2"
            >
              <Typography
                variant="h5"
                sx={{
                  color: "primary.yorisWhite",
                  fontFamily: "Sarala",
                  fontWeight: "600",
                }}
              >
                Live Chat
              </Typography>
              <Stack gap={2} direction="row" className="py-2">
                <BaseAvatar src="https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <BaseAvatar src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <BaseAvatar src="https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <BaseAvatar src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <BaseAvatar src="https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </Stack>
              <Typography
                sx={{
                  color: "primary.yorisWhite",
                  fontFamily: "Sarala",
                  fontWeight: "600",
                }}
              >
                Urgently want to reach us ?
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontFamily: "Sarala", fontWeight: "400" }}
              >
                We’re available 9am - 11pm WAT, seven days a week. (And we
                respond within 3mins!)
              </Typography>
              <Box className="flex items-center gap-2 uppercase">
                <Typography variant="caption" sx={{ color: "primary.success" }}>
                  Start a conversation with our representative
                </Typography>
                <IconButton sx={{ color: "primary.success" }}>
                  <ArrowForward />
                </IconButton>
              </Box>
            </Stack>
          </Stack>

          <Stack
            direction={isSmallScreen ? "column" : "row"}
            gap={3}
            className="w-full max-w-6xl"
          >
            <Stack
              sx={{
                backgroundColor: "secondary.main",
                borderColor: "primary.main",
              }}
              justifyContent="space-between"
              className="w-full lg:w-2/5 rounded-xl md:border-2 p-5 sm:p-6 md:p-8 gap-4"
            >
              <Stack direction="row" alignItems="start" gap={2}>
                <LocationOn />
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.yorisWhite",
                    fontWeight: "100",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Link
                    target="_blank"
                    to="https://goo.gl/maps/b32k1a6kdhaz11fW8"
                  >
                    No 13, dr. Fredrick fasheun avenue, off century bus-stop,
                    ago palace-way, okota , lagos.
                  </Link>
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="start" gap={2}>
                <LocalPhone />
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.yorisWhite",
                    fontWeight: "100",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Link to="tel:+2349069064542">+2349069064542</Link>
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="start" gap={2}>
                <Twitter />
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.yorisWhite",
                    fontWeight: "100",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Link to="https://twitter.com/kenny_nnakwue">
                    https://twitter.com/kenny_nnakwue
                  </Link>
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="start" gap={2}>
                <Instagram />
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.yorisWhite",
                    fontWeight: "100",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Link to="https://instagram.com/kenewrites">
                    https://instagram.com/kenewrites
                  </Link>
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="start" gap={2}>
                <FacebookOutlined />
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.yorisWhite",
                    fontWeight: "100",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Link to="https://facebook.com/kenechukwu.nnakwue">
                    https://facebook.com/kenechukwu.nnakwue
                  </Link>
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                backgroundColor: "secondary.main",
                borderColor: "primary.main",
              }}
              className="w-full lg:w-3/5 rounded-xl md:border-2 p-5 sm:p-6 md:p-8 gap-4"
            >
              <Typography
                variant="h5"
                sx={{
                  color: "primary.yorisWhite",
                  fontFamily: "Sarala",
                  fontWeight: "600",
                }}
              >
                Email
              </Typography>
              <Box className="relative flex flex-col text-white">
                <label htmlFor="user_name" className="text-sm">
                  Name
                </label>
                <input
                  name="user_name"
                  className="border-0 border-b-[1.5px] focus:border-[#CDBB7B] bg-transparent focus:outline-none"
                />
              </Box>
              <Box className="relative flex flex-col text-white">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  name="email"
                  className="border-0 border-b-[1.5px] focus:border-[#CDBB7B] bg-transparent focus:outline-none"
                />
              </Box>
              <Box className="relative flex flex-col text-white">
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <input
                  name="message"
                  className="border-0 border-b-[1.5px] focus:border-[#CDBB7B] bg-transparent focus:outline-none"
                />
              </Box>
              <Box className="w-full flex justify-center py-3">
                <Button
                  sx={{
                    borderRadius: "10px",
                    border: "2px solid #CDBB7B",
                    textTransform: "none",
                    fontWeight: "600",
                    color: "primary.main",
                  }}
                  className="flex bg-[#CDBB7B] w-full max-w-[200px]"
                >
                  Send
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Donate;
