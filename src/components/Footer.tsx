import React from "react";
import logo from "../assets/images/yoris_logo.png";

import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MailOutline } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box className="w-full flex flex-col items-center pb-4 md:py-8 lg:py-12 bg-black md:bg-[#15130A]">
      <Box className="w-full flex flex-col divide-y divide-[#C3AD60] text-xs border-b border-[#C3AD60] md:hidden uppercase font-normal text-white">
        <Link className="w-full flex justify-center py-3 hover:bg-[#C3AD60]">
          Company
        </Link>
        <Link className="w-full flex justify-center py-3 hover:bg-[#C3AD60]">
          Cusines near you
        </Link>
        <Link className="w-full flex justify-center py-3 hover:bg-[#C3AD60]">
          Popular
        </Link>
        <Link className="w-full flex justify-center py-3 hover:bg-[#C3AD60]">
          Back to top
        </Link>
      </Box>
      <Stack className="w-full max-w-7xl md:px-4 lg:px-6" gap={4}>
        <Box
          className="md:border-b-2 py-6 w-full flex flex-col items-center md:items-end gap-1"
          sx={{ color: "primary.yorisWhite" }}
        >
          <Box className="w-full max-w-2xl md:max-w-xl flex flex-col lg:flex-row items-end gap-4 px-4">
            <Box className="w-full">
              <Typography variant="h5" className="font-bold py-2">
                Subscribe
              </Typography>
              <Typography variant="caption" className="font-bold py-2">
                Enter your email to be added to our mailing list.
              </Typography>
            </Box>
            <Box className="relative w-full">
              <input
                className="w-full h-full py-4 pl-4 pr-12 rounded-xl bg-gray-800 bg-opacity-60 md:bg-black text-white md:text-[#C3AD60] placeholder:text-white focus:outline-none"
                placeholder="Email"
              />
              <Box className="absolute top-0 right-0 h-full py-1.5 px-2">
                <IconButton sx={{ color: "primary.main" }}>
                  <MailOutline />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="hidden md:flex md:flex-col">
          <Grid container>
            <Grid item xs={12} sm={3} md={4}>
              <Link
                to="/"
                className="hover:bg-[#C3AD60] hover:bg-opacity-10 flex p-3"
              >
                <img src={logo} />
              </Link>
            </Grid>
            <Grid item xs={12} sm={3} md={2} className="font-sarala pl-8">
              <Stack sx={{ color: "primary.main" }}>
                <Link className="uppercase font-semibold text-sm py-2">
                  Company
                </Link>
              </Stack>
              <Stack sx={{ color: "primary.yorisWhite" }}>
                <Link
                  to="vendors"
                  className="text-sm py-1 hover:text-[#C3AD60]  font-extralight"
                >
                  Vendors
                </Link>
                <Link to="riders" className="text-sm py-1 hover:text-[#C3AD60]">
                  Riders
                </Link>
                <Link
                  to="company"
                  className="text-sm py-1 hover:text-[#C3AD60]"
                >
                  People
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-sm py-1 hover:text-[#C3AD60]"
                >
                  Privacy Policy
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={3} className="font-sarala pl-2">
              <Stack sx={{ color: "primary.main" }}>
                <Link className="uppercase font-semibold text-sm py-2">
                  Cusines Near You
                </Link>
              </Stack>
              <Stack sx={{ color: "primary.yorisWhite" }}>
                <Link className="text-sm py-1 hover:text-[#C3AD60]">
                  Pasta near you
                </Link>
                <Link className="text-sm py-1 hover:text-[#C3AD60]">
                  Rice near you
                </Link>
                <Link className="text-sm py-1 hover:text-[#C3AD60]">
                  Fast food near you
                </Link>
                <Link className="text-sm py-1 hover:text-[#C3AD60]">
                  African food in Lagos
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={3} md={2} className="font-sarala">
              <Stack sx={{ color: "primary.main" }}>
                <Link className="uppercase font-semibold text-sm py-2">
                  Popular
                </Link>
              </Stack>
              <Stack sx={{ color: "primary.yorisWhite" }}>
                <Link className="text-sm py-1 hover:text-[#C3AD60]">
                  Food delivery
                </Link>
                <Link className="text-sm py-1 hover:text-[#C3AD60]">
                  Surulere
                </Link>
                <Link className="text-sm py-1 hover:text-[#C3AD60]">Yaba</Link>
                <Link className="text-sm py-1 hover:text-[#C3AD60]">Ikeja</Link>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
