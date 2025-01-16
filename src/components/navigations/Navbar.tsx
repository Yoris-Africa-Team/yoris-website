import React, { useState } from "react";
import { Button, Box, Typography, IconButton, Menu } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: "absolute", width: "95%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between", // Equal space between items
          alignItems: "center",
          gap: "30px", // Space between items
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            height: "50px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
            borderRadius: "50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 20px;",
            gap: "30px",
          }}
        >
          {[
            { text: "Company", width: "75px" },
            { text: "Blog", width: "36px" },
            { text: "Contacts", width: "69px" },
            { text: "FAQs", width: "40px" },
            { text: "Donate", width: "58px" },
          ].map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontFamily: "'Sarala', sans-serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "14.5px",
                lineHeight: "18px",
                textAlign: "center",
                letterSpacing: "-0.408px",
                color: "#231F11",
                cursor: "pointer", // Add hover for better UX
                "&:hover": {
                  color: "#555555",
                },
              }}
            >
              {item.text}
            </Typography>
          ))}
        </Box>

        {/* Middle Section */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src="https://s3-alpha-sig.figma.com/img/c74f/b5d8/3d8b69fc2e12f78d672cb14e860c1582?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bajulG~Cn0oMP5S5BJSin~ZC5VTZKFyAfvAVo6bOiiLPJ7-USRWFtbmflhXhK0tT-5kHZpa8gtPRh2e057NDUa3XhnE1CfAhSkwKDHFymOPp857Vygh0PEeTcnO6W3m8awdSX6iw8EGp3ltzI1mm5Z-bbzr3xJR9RYyqZaOfuvs9ovR5IAVKrsi~xcLQgZhNh2RiXiHJeP5Uyg222WT5KpkRgBdoNWW-n-iofxg1FqYp8~KC~VpNc~wfJ8mzFdZ~5J1R~mkIzQG3Nm5ul-~Ha05JONvoJco2MkwSXYh6wC6TOTUxYchrOfwYzEDCeytIruUP0FmbONEWbN9XVI6P~A__"
            alt="Logo"
            style={{ height: "100px" }}
          />
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton>
            <PublicIcon sx={{ color: "#C3AD60" }} />
          </IconButton>
          <IconButton>
            <SearchIcon sx={{ color: "#C3AD60" }} />
          </IconButton>
        </Box>

        <Button
          sx={{
            width: "155px",
            height: "53px",
            backgroundColor: "#E1C562",
            borderRadius: "34.5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "none", // Prevents capitalization of button text
            "&:hover": {
              backgroundColor: "#d4b451", // Hover effect for the button
            },
          }}
          disableRipple={false}
        >
          <Typography
            sx={{
              fontFamily: "'Sarala', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "17px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              letterSpacing: "-0.408px",
              color: "#FFFFFF",
            }}
          >
            Sign up
          </Typography>
        </Button>
      </Box>

      <Box sx={{ marginTop: "5px", marginLeft: "auto" }}>
        <Button
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
            gap: "1px", // Adjust the gap between Typography and Icon
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
          }}
          onClick={handleClick} // Opens the dropdown on click
          endIcon={<ArrowDropDownIcon sx={{ width: "20px", color: "#231F11" }} />} // Adjust icon size if necessary
        >
          <Typography
            sx={{
              fontFamily: "'Sarala', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14.5px",
              lineHeight: "19px",
              textAlign: "center",
              color: "#231F11",
            }}
          >
            Customers
          </Typography>
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)} // Determines if the menu should be open
          onClose={handleClose} // Closes the menu when clicked outside
        >
          <Button sx={{ padding: "10px 20px", width: "100%" }} onClick={handleClose}>
            Option 1
          </Button>
          <Button sx={{ padding: "10px 20px", width: "100%" }} onClick={handleClose}>
            Option 2
          </Button>
          <Button sx={{ padding: "10px 20px", width: "100%" }} onClick={handleClose}>
            Option 3
          </Button>
        </Menu>
      </Box>
      
    </div>
  );
};

export default Header;
