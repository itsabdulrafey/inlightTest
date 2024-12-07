import React from "react";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const CarouselNavigationButton = ({
  direction,
  onClick,
  disabled,
  position,
}) => {
  const icon = direction === "prev" ? <ArrowBack /> : <ArrowForward />;
  const cursorStyle = disabled ? "not-allowed" : "pointer";

  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      sx={{
        position: "absolute",
        top: "50%",
        [position]: 0,
        transform: "translateY(-50%)",
        backgroundColor: "gray", // Slightly transparent white background
        color: "#000", // Default arrow color is black
        borderRadius: "50%",
        padding: "10px",
        cursor: cursorStyle,
        fontSize: "24px", // Explicitly set the font size for the arrows
        "&:hover": {
          backgroundColor: "#fff", // Change background to white on hover
          color: "#000", // Keep the arrow color black on hover
        },
        transition: "all 0.3s ease", // Smooth transition for hover effect
      }}
    >
      {icon}
    </IconButton>
  );
};

export default CarouselNavigationButton;
