import React from "react";
import Button from "@mui/material/Button";

interface AppDownloadBtnProps {
  text: string;
  icon: React.ReactNode; // Icon or image as a prop
  style?: React.CSSProperties; // Optional style prop for additional customization
}

const AppDownloadBtn: React.FC<AppDownloadBtnProps> = ({
  text,
  icon,
  style,
}) => {
  return (
    <Button
      variant="contained"
      style={style}
      sx={{
        width: { xs: "100px", sm: "150px", md: "220px" },
        height: { xs: "40px", sm: "50px", md: "60px" },
        fontSize: { xs: "5px", sm: "10px", md: "15px" },
        backgroundColor: "#080604",
        borderRadius: "15px",
        color: "white",
        textTransform: "none", // Prevents uppercase transformation
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "4px", // Space between icon and text
        "&:hover": {
          backgroundColor: "#1a1a1a", // Slightly lighter hover effect
        },
      }}
    >
      {icon && (
        <span
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {icon}
        </span>
      )}
      {text}
    </Button>
  );
};

export default AppDownloadBtn;
