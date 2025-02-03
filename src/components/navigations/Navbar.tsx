import React, { useEffect, useState } from "react";
import logo from "../../assets/images/yoris_logo.png";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../features/sideBarSlice";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, IconButton, InputBase, Stack } from "@mui/material";
import { ArrowDropDown, Language, Menu, Search } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import MyLink from "../MyLink";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  const [menuBtnItems, setMenuBtnItems] = useState([
    { id: 1, name: "Vendors", link: "/vendors" },
    { id: 2, name: "Riders", link: "/riders" },
  ]);

  const [selectedMenuBtnItem, setSelectedMenuBtnItem] = useState({
    id: 0,
    name: "Customers",
    link: "/",
  });
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenuBtnItem = (id: number, index: number) => {
    const currentItem = selectedMenuBtnItem;
    const selectedItem = menuBtnItems.find((item) => item.id === id)!;
    setSelectedMenuBtnItem(selectedItem);
    const newMenuBtnItems = [...menuBtnItems];
    newMenuBtnItems.splice(index, 1);

    if (currentItem.name.toLowerCase() === "customers") {
      newMenuBtnItems.unshift(currentItem);
    } else {
      newMenuBtnItems.push(currentItem);
    }

    setMenuBtnItems(newMenuBtnItems);
    navigate(selectedItem.link);
  };

  useEffect(() => {
    if (["/vendors", "/riders"].includes(currentPath)) {
      const selectedItem = menuBtnItems.find(
        (item) => item.link === currentPath
      );
      if (selectedItem) {
        toggleMenuBtnItem(selectedItem.id, menuBtnItems.indexOf(selectedItem));
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        zIndex: 99999,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
        paddingLeft: "12px",
        paddingRight: "12px",
        transition: "all 0.3s",
        boxShadow: scrolled ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "8px 16px",
          width: "100%",
          maxWidth: "1280px",
          backgroundColor: "rgba(195, 173, 96, 0.2)",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "block", lg: "none" } }}>
            <IconButton
              sx={{ color: "primary.light" }}
              onClick={() => dispatch(toggleSideBar(true))}
            >
              <Menu />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Stack
              direction="row"
              gap={2}
              sx={{
                padding: "12px 24px",
                borderRadius: "24px",
                color: "primary.body",
                fontWeight: "600",
                backgroundColor: "primary.yorisWhite",
              }}
            >
              <Link to="/company">Company</Link>
              <MyLink to="blogs">Blogs</MyLink>
              <Link to="/contact-us">Contact Us</Link>
              <MyLink to="faqs">FAQs</MyLink>
              <Link to="/donate">Donate</Link>
            </Stack>
          </Box>
        </Box>

        <Link to="/#">
          <img
            src={logo}
            alt="logo"
            style={{ height: "56px", objectFit: "contain" }}
          />
        </Link>

        <Stack direction="row" alignItems="center" gap={1}>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <StyledSearch>
              <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </StyledSearch>
          </Box>
          <IconButton size="small" sx={{ display: { xs: "none", lg: "flex" } }}>
            <Language />
          </IconButton>
          <Button
            sx={{
              backgroundColor: "primary.light",
              color: "primary.yorisWhite",
              borderRadius: "20px",
              padding: "4px 8px",
              textTransform: "none",
              minWidth: "80px",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",
          display: { xs: "none", lg: "flex" },
          justifyContent: "end",
          paddingTop: "8px",
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
              color: "primary.dark",
              backgroundColor: "primary.yorisWhite",
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                color: "primary.yorisWhite",
                backgroundColor: "#15130A",
              },
            }}
          >
            {selectedMenuBtnItem.name} <ArrowDropDown />
          </Button>
          {showMenuButton &&
            menuBtnItems.map((item, index) => (
              <Button
                key={item.id}
                variant="outlined"
                size="large"
                onClick={() => toggleMenuBtnItem(item.id, index)}
                sx={{
                  color: "primary.dark",
                  backgroundColor: "primary.yorisWhite",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    color: "primary.yorisWhite",
                    backgroundColor: "#15130A",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
        </Box>
      </Box>
    </nav>
  );
};

export default Header;
