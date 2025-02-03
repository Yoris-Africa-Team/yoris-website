import React from "react";
import "../styles/Footer.css";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MailOutline } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 4,
        md: { py: 8 },
        lg: { py: 12 },
        bgcolor: { xs: "black", md: "#15130A" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          borderBottom: "1px solid #C3AD60",
          typography: "caption",
          textTransform: "uppercase",
          fontWeight: "400",
          color: "white",
          display: { md: "none" },
          "& a": {
            display: "flex",
            justifyContent: "center",
            py: 1,
            textDecoration: "none", // Ensures no underline
            color: "inherit", // Inherits color from parent
            "&:hover": {
              bgcolor: "#C3AD60",
              textDecoration: "none", // Ensures no underline on hover
            },
          },
        }}
      >
        <Link to="/">Company</Link>
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid #C3AD60",
          }}
        ></Box>
        <Link to="/">Cusines near you</Link>
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid #C3AD60",
          }}
        ></Box>
        <Link to="/">Popular</Link>
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid #C3AD60",
          }}
        ></Box>
        <Link to="/">Back to top</Link>
      </Box>

      <Stack
        sx={{ width: "100%", maxWidth: "1200px", px: { md: 4, lg: 6 }, gap: 4 }}
      >
        <Box
          sx={{
            borderBottom: { md: "2px solid" },
            py: 6,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-end" },
            gap: 1,
            color: "primary.yorisWhite",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "500px", md: "350px", lg: "700px" },
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "flex-end",
              gap: 4,
              px: 4,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", py: 2 }}>
                Subscribe
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: "bold", py: 2 }}>
                Enter your email to be notified about our new services.
              </Typography>
            </Box>
            <Box sx={{ position: "relative", width: "100%" }}>
              <input
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  outline: "none",
                }}
                className="placeholder"
                placeholder="Email"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  height: "100%",
                  py: 1,
                  px: 2,
                }}
              >
                <IconButton sx={{ color: "primary.main" }}>
                  <MailOutline />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column" }}
        >
          <Grid container>
            <Grid item xs={12} sm={3} md={4}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  padding: "12px",
                  alignItems: "center",
                }}
              >
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/c74f/b5d8/3d8b69fc2e12f78d672cb14e860c1582?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bajulG~Cn0oMP5S5BJSin~ZC5VTZKFyAfvAVo6bOiiLPJ7-USRWFtbmflhXhK0tT-5kHZpa8gtPRh2e057NDUa3XhnE1CfAhSkwKDHFymOPp857Vygh0PEeTcnO6W3m8awdSX6iw8EGp3ltzI1mm5Z-bbzr3xJR9RYyqZaOfuvs9ovR5IAVKrsi~xcLQgZhNh2RiXiHJeP5Uyg222WT5KpkRgBdoNWW-n-iofxg1FqYp8~KC~VpNc~wfJ8mzFdZ~5J1R~mkIzQG3Nm5ul-~Ha05JONvoJco2MkwSXYh6wC6TOTUxYchrOfwYzEDCeytIruUP0FmbONEWbN9XVI6P~A__"
                  }
                  alt="Logo"
                  style={{ width: "300px" }}
                />
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={2}
              sx={{ fontFamily: "Sarala", paddingLeft: 8 }}
            >
              <Stack sx={{ color: "primary.main" }}>
                <Link
                  to="/"
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                    padding: "8px 0",
                    textDecoration: "none", // Ensures no underline
                    color: "inherit",
                  }}
                >
                  Company
                </Link>
              </Stack>
              <Stack sx={{ color: "primary.yorisWhite" }}>
                <Link
                  to="/vendors"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  Vendors
                </Link>
                <Link
                  to="/riders"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  Riders
                </Link>
                <Link
                  to="/company-page"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  Company Page
                </Link>
                <Link
                  to="/people"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  People
                </Link>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ fontFamily: "Sarala", paddingLeft: 2 }}
            >
              <Stack sx={{ color: "primary.main" }}>
                <Link
                  to="/"
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                    padding: "8px 0",
                    textDecoration: "none", // Ensures no underline
                    color: "inherit",
                  }}
                >
                  Cusines Near You
                </Link>
              </Stack>
              <Stack sx={{ color: "primary.yorisWhite" }}>
                <Link
                  to="/pasta"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  Pasta near you
                </Link>
                <Link
                  to="/rice"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  Rice near you
                </Link>
                <Link
                  to="/fast-food"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  Fast food near you
                </Link>
                <Link
                  to="/african-food"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  African food in Lagos
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={3} md={2} sx={{ fontFamily: "Sarala" }}>
              <Stack sx={{ color: "primary.main" }}>
                <Link
                  to="/"
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                    padding: "8px 0",
                    textDecoration: "none", // Ensures no underline
                    color: "inherit",
                  }}
                >
                  Popular
                </Link>
              </Stack>
              <Stack sx={{ color: "primary.yorisWhite" }}>
                <Link
                  to="/food-delivery"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  Food delivery
                </Link>
                <Link
                  to="/surulere"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  Surulere
                </Link>
                <Link
                  to="/yaba"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  Yaba
                </Link>
                <Link
                  to="/ikeja"
                  style={{
                    fontSize: "0.875rem",
                    padding: "4px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#C3AD60" },
                  }}
                >
                  Ikeja
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
