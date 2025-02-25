import { useSelector, useDispatch } from "react-redux";
import { toggleSideBar } from "../../features/sideBarSlice";
import {
  AttachMoney,
  Close,
  Houseboat,
  PedalBikeOutlined,
  People,
  QuestionMarkOutlined,
  Sell,
  Settings,
  BookOnline,
  Phone,
} from "@mui/icons-material";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/yoris_logo.png";
import MyLink from "../MyLink";

const linkStyles =
  "flex items-center gap-3 pl-8 py-5 transition-all ease-in-out duration-700 text-[#C3AD60]";

interface SidebarState {
  isOpen: boolean;
}

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const isTabletDevice = useMediaQuery("(max-width: 1199px)");
  const isOpen = useSelector((state: any) => state.sidebar.isOpen); // Fix selector
  const currentRoute = useLocation();

  return (
    <div
      className={`fixed top-0 left-0 z-[9999999999] h-full w-full bg-[#231f11] transition ease-in-out md:duration-500 duration-700 ${
        isOpen && isTabletDevice ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <Box className="fixed top-0 left-0 w-full flex items-center justify-between px-5 py-3 border-b border-gray-800 bg-[#231f11] bg-opacity-80">
        <Box className="shadow-sm border border-transparent hover:border-[#C3AD60] rounded-full">
          <IconButton
            onClick={() => dispatch(toggleSideBar())}
            sx={{ color: "primary.main", padding: "11px" }}
          >
            <Close />
          </IconButton>
        </Box>
        <Link
          onClick={() => dispatch(toggleSideBar())}
          to="/"
          className="w-full flex justify-center"
        >
          <img src={logo} className="h-14" alt="" />
        </Link>
      </Box>
      <Box className="divide-y divide-gray-700 flex flex-col pt-20 h-full overflow-y-auto text-xs">
        <Link
          onClick={() => dispatch(toggleSideBar())}
          to="/company"
          className={linkStyles}
        >
          <Houseboat />
          <Typography variant="body1">Company</Typography>
        </Link>
        <Link
          onClick={() => dispatch(toggleSideBar())}
          to="/"
          className={linkStyles}
        >
          <People />
          <Typography variant="body1">Customers</Typography>
        </Link>
        <Link
          onClick={() => dispatch(toggleSideBar())}
          to="/riders"
          className={linkStyles}
        >
          <PedalBikeOutlined />
          <Typography variant="body1">Riders</Typography>
        </Link>
        <Link
          onClick={() => dispatch(toggleSideBar())}
          to="/vendors"
          className={linkStyles}
        >
          <Sell />
          <Typography variant="body1">Vendors</Typography>
        </Link>
        <Link
          onClick={() => dispatch(toggleSideBar())}
          to="/contact-us"
          className={linkStyles}
        >
          <Phone />
          <Typography variant="body1">Contact Us</Typography>
        </Link>
        {currentRoute && (
          <MyLink
            extraFunction={() => dispatch(toggleSideBar())}
            to="faqs"
            className={linkStyles}
          >
            <QuestionMarkOutlined />
            <Typography variant="body1">FAQs</Typography>
          </MyLink>
        )}
        {currentRoute && (
          <MyLink
            extraFunction={() => dispatch(toggleSideBar())}
            to="blogs"
            className={linkStyles}
          >
            <BookOnline />
            <Typography variant="body1">Blogs</Typography>
          </MyLink>
        )}
        <Link
          onClick={() => dispatch(toggleSideBar())}
          to="/donate"
          className={linkStyles}
        >
          <AttachMoney />
          <Typography variant="body1">Donate</Typography>
        </Link>
        <Link
          onClick={() => dispatch(toggleSideBar())}
          to="/"
          className={linkStyles}
        >
          <Settings />
          <Typography variant="body1">Settings</Typography>
        </Link>
        <Box className="mt-auto py-5 px-5 flex justify-center text-gray-400">
          <Typography variant="caption">
            <span>&copy; All Rights Reserved. {new Date().getFullYear()} </span>
            <Link
              onClick={() => dispatch(toggleSideBar())}
              to="/"
              className="hover:text-[#C3AD60] hover:underline"
            >
              Yoris Africa
            </Link>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default SideBar;
