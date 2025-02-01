import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./Footer";
// import SideBar from './navigations/SideBar';
import { navigation } from "../features/navigation";

const Layout = () => {
  const currentPath = useLocation().pathname;
  const urlParams = new URLSearchParams(window.location.search);
  useEffect(() => {
    navigation(urlParams);
  }, [currentPath]);

  return (
    <Box
      className="flex flex-col overflow-auto"
      sx={{
        backgroundColor: "primary.body",
        height: "100vh",
        color: "primary.main",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* <SideBar /> */}
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
