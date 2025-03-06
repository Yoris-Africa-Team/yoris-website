import "./App.css";
import { useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Vendors from "./pages/Vendors";
import Riders from "./pages/Riders";
import SideBar from "./components/navigations/SideBar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import QRLogin from "./auth/Qr-code";
import Login from "./auth/login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C3AD60",
      light: "#E1C562",
      dark: "#32302F",
      cyan: "#A9E7DA",
      lightCyan: "#EAF9F6",
      yellow: "#FFCE00",
      lightYellow: "#CDBB7B",
      darkYellow: "#5E5022",
      body: "#231F11",
      warning: "#E41515",
      yorisWhite: "#FFFEFC",
      success: "#13C4A3",
    },
    secondary: {
      light: "#0066ff",
      main: "#080604",
      contrastText: "#ffcc00",
    },
    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ["Sarala"].join(","),
  },
});
const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // The index route defines what should be displayed
      // on the default route i.e. '/'
      // { index: true, element: <ChatPane /> },
      { path: "/", element: <Home /> },
      { path: "/company", element: <Company /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/donate", element: <Donate /> },
      { path: "/vendors", element: <Vendors /> },
      { path: "/riders", element: <Riders /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      {path: "/auth/qr-login", element: <QRLogin />},
      {path: "/auth/login", element: <Login />},
      // { path: '/home', element: home },
    ],
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideBar />
      {useRoutes(router)}
    </ThemeProvider>
  );
}

export default App;
