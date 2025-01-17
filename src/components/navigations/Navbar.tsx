import React, { useState, useEffect } from "react";
import { Button, Box, Typography, IconButton, Grid, Menu } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import MenuIcon from "@mui/icons-material/Menu";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Listen for screen width changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 910);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileView ? (
    // Mobile Layout
    <Box
      sx={{
        width: "95%",
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
              <MenuIcon sx={{ color: "#C3AD60" }} />
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
              <SearchIcon sx={{ color: "#C3AD60" }} />
            </IconButton>
            <Button
              sx={{
                width: "100px",
                height: "48px",
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
                  fontSize: "10px",
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
        position: "absolute",
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
            <PublicIcon sx={{ color: "#C3AD60" }} />
          </IconButton>
          <IconButton>
            <SearchIcon sx={{ color: "#C3AD60" }} />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={2}
          container
          justifyContent="center"
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
        sx={{ marginTop: "10px", display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
            gap: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon sx={{ color: "#231F11" }} />}
        >
          <Typography
            sx={{
              fontFamily: "'Sarala', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#231F11",
            }}
          >
            Customers
          </Typography>
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {["Option 1", "Option 2", "Option 3"].map((option, index) => (
            <Button
              key={index}
              sx={{ padding: "10px 20px", width: "100%" }}
              onClick={handleClose}
            >
              {option}
            </Button>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
