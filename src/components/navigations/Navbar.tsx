import React, { useState, useEffect } from "react";
import { Button, Box, Typography, IconButton, Grid, Menu } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import MenuIcon from "@mui/icons-material/Menu";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface MenuItem {
  id: number;
  name: string;
  link: string;
}

const Header: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [menuBtnItems, setMenuBtnItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Vendors",
      link: "/vendors",
    },
    {
      id: 2,
      name: "Riders",
      link: "/riders",
    },
  ]);

  const [selectedMenuBtnItem, setSelectedMenuBtnItem] = useState<MenuItem>({
    id: 0,
    name: "Customers",
    link: "/",
  });

  const [showMenuButton, setShowMenuButton] = useState<boolean>(false);

  const toggleMenuBtnItem = (id: number) => {
    const selectedItem = menuBtnItems.find((item) => item.id === id);
    if (selectedItem) {
      setSelectedMenuBtnItem(selectedItem);
    }
    setShowMenuButton(false);
  };

  // Listen for screen width changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 970);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileView ? (
    // Mobile Layout
    <Box
      sx={{
        width: "94%",
        padding: "10px",
        position: "absolute",
        zIndex: "9999",
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left Section */}
        <Grid item xs={1} sm={2} md={2}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <IconButton>
              <MenuIcon sx={{ color: "primary.main" }} />
            </IconButton>
          </Box>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={6} sm={6} md={6} container justifyContent="center">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/c74f/b5d8/3d8b69fc2e12f78d672cb14e860c1582?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bajulG~Cn0oMP5S5BJSin~ZC5VTZKFyAfvAVo6bOiiLPJ7-USRWFtbmflhXhK0tT-5kHZpa8gtPRh2e057NDUa3XhnE1CfAhSkwKDHFymOPp857Vygh0PEeTcnO6W3m8awdSX6iw8EGp3ltzI1mm5Z-bbzr3xJR9RYyqZaOfuvs9ovR5IAVKrsi~xcLQgZhNh2RiXiHJeP5Uyg222WT5KpkRgBdoNWW-n-iofxg1FqYp8~KC~VpNc~wfJ8mzFdZ~5J1R~mkIzQG3Nm5ul-~Ha05JONvoJco2MkwSXYh6wC6TOTUxYchrOfwYzEDCeytIruUP0FmbONEWbN9XVI6P~A__"
              alt="Logo"
              style={{ height: "50px" }}
            />
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          container
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <IconButton
              sx={{
                width: "10px", // Adjust width of the button
                height: "40px", // Adjust height of the button
              }}
            >
              <SearchIcon sx={{ color: "primary.main" }} />
            </IconButton>
            <Button
              sx={{
                width: "90px",
                height: "38px",
                backgroundColor: "#E1C562",
                borderRadius: "34.5px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#d4b451" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Sarala', sans-serif",
                  fontWeight: 700,
                  fontSize: "8px",
                  color: "#FFFFFF",
                }}
              >
                Get Started
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  ) : (
    // Desktop Layout
    <Box
      sx={{
        width: "88%",
        padding: "10px 5%",
        position: "fixed",
        zIndex: "9999",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} sm={4} md={4}>
          <Box
            sx={{
              height: "50px",
              background: "#FFFFFF",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
              borderRadius: "50px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "0 20px",
              width: "300px",
            }}
          >
            {["Company", "Blog", "Contacts", "FAQs", "Donate"].map(
              (text, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: "'Sarala', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#231F11",
                    cursor: "pointer",
                    "&:hover": { color: "#555555" },
                  }}
                >
                  {text}
                </Typography>
              )
            )}
          </Box>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} sm={4} md={4} container justifyContent="center">
          <img
            src="https://s3-alpha-sig.figma.com/img/c74f/b5d8/3d8b69fc2e12f78d672cb14e860c1582?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bajulG~Cn0oMP5S5BJSin~ZC5VTZKFyAfvAVo6bOiiLPJ7-USRWFtbmflhXhK0tT-5kHZpa8gtPRh2e057NDUa3XhnE1CfAhSkwKDHFymOPp857Vygh0PEeTcnO6W3m8awdSX6iw8EGp3ltzI1mm5Z-bbzr3xJR9RYyqZaOfuvs9ovR5IAVKrsi~xcLQgZhNh2RiXiHJeP5Uyg222WT5KpkRgBdoNWW-n-iofxg1FqYp8~KC~VpNc~wfJ8mzFdZ~5J1R~mkIzQG3Nm5ul-~Ha05JONvoJco2MkwSXYh6wC6TOTUxYchrOfwYzEDCeytIruUP0FmbONEWbN9XVI6P~A__"
            alt="Logo"
            style={{ height: "90px" }}
          />
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          sm={4}
          md={2}
          container
          justifyContent="flex-start"
          alignItems="center"
        >
          <IconButton>
            <PublicIcon sx={{ color: "primary.main" }} />
          </IconButton>
          <IconButton>
            <SearchIcon sx={{ color: "primary.main" }} />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={2}
          container
          justifyContent="end"
          alignItems="center"
        >
          <Button
            sx={{
              width: "150px",
              height: "49px",
              backgroundColor: "#E1C562",
              borderRadius: "34.5px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#d4b451" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Sarala', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              Sign up
            </Typography>
          </Button>
        </Grid>
      </Grid>
      {/* Dropdown Button */}
      <Box
        sx={{
          width: "100%",
          marginLeft: "-20px",
          justifyContent: "flex-end",
          paddingTop: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "12px",
          }}
          onMouseLeave={() => setShowMenuButton(false)}
          onMouseEnter={() => setShowMenuButton(true)}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "#15130A",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 600,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "10px 15px",
              "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#15130A",
              },
            }}
          >
            {selectedMenuBtnItem.name} <ArrowDropDownIcon />
          </Button>
          {showMenuButton &&
            menuBtnItems.map((item) => (
              <Button
                variant="outlined"
                size="large"
                key={item.id}
                onClick={() => toggleMenuBtnItem(item.id)}
                sx={{
                  color: "#15130A",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: 600,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: "10px 15px",
                  "&:hover": {
                    color: "#FFFFFF",
                    backgroundColor: "#15130A",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
