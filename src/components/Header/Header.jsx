import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Heading, Img, Button, Text } from "../../components";
import { Link } from "react-router-dom";

const StyledImage = styled(Box)({
  width: 98,
  height: "auto",
  "& img": {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
});

const Header = ({ cardState, setcardState, handelDiv, headerHandleClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isLargeScreen = useMediaQuery("(min-width:1500px)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = (
    <>
      <MenuItem
        onClick={() => {
          window.open("https://plus.efxdata.com/login");
          handleMenuClose();
        }}
      >
        eFX Plus
      </MenuItem>
      <MenuItem
        onClick={() => {
          handelDiv();
          setcardState(0);
          handleMenuClose();
        }}
      >
        eFX Plus HD
      </MenuItem>
      <MenuItem
        onClick={() => {
          headerHandleClick();
          handelDiv();
          setcardState(1);
          handleMenuClose();
        }}
      >
        eFX Edge
      </MenuItem>
      <MenuItem
        onClick={() => {
          headerHandleClick();
          handelDiv();
          setcardState(2);
          handleMenuClose();
        }}
      >
        eFX Alpha
      </MenuItem>
      <MenuItem
        onClick={() => {
          headerHandleClick();
          handelDiv();
          setcardState(3);
          handleMenuClose();
        }}
      >
        eFX Apex
      </MenuItem>
      {/* Add Sign Up and Log In Buttons */}
      <MenuItem
        onClick={() => {
          window.open("https://plus.efxdata.com/login");
          handleMenuClose();
        }}
      >
        <Button
          size="sm"
          shape="round"
          className="sm:px-5 text-xs tracking-[3.20px] uppercase min-w-[150px]"
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid gray",
          }}
        >
          Sign up
        </Button>
        {/* <Heading size="md" as="h6" className="!text-black uppercase">
          Sign up
        </Heading> */}
      </MenuItem>
      <MenuItem
        onClick={() => {
          window.open("https://plus.efxdata.com/login");
          handleMenuClose();
        }}
      >
        <Button
          size="sm"
          shape="round"
          className="sm:px-5 text-xs tracking-[3.20px] uppercase min-w-[150px]"
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid gray",
          }}
        >
          Log in
        </Button>
      </MenuItem>
    </>
  );

  const textStyle = {
    fontWeight: "bold",
    color: "white",
    fontSize: !isLargeScreen ? "0.75rem" : "1rem",
    letterSpacing: !isLargeScreen ? "1px" : "2px",
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        width: "80%",
        padding: "10px 0",
        zIndex: 1000, // Keeps the header on top
        maxWidth: 1300,
      }}
      className="w-[38%] md:w-full md:p-5 mx-auto"
    >
      <div
        style={{ color: "orange" }}
        className="flex sm:flex-col justify-between items-center gap-5"
      >
        <StyledImage>
          <img src="images/headerLogo.svg" alt="imagenineteen" />
        </StyledImage>
      </div>
      {isLargeScreen && (
        <nav
          style={{ marginLeft: "200px" }}
          className="flex justify-center items-center"
        >
          <ul className="flex gap-10">
            <li>
              <Link
                onClick={() => {
                  window.open("https://plus.efxdata.com/login");
                }}
                to="#"
              >
                <Text style={{ ...textStyle, color: "orange" }}>eFX Plus</Text>
              </Link>
            </li>
            <li>
              <Link
                onClick={(event) => {
                  event.preventDefault();
                  setcardState(0);
                }}
                to="#"
              >
                <Text style={textStyle}>eFX Plus HD</Text>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setcardState(1);
                }}
                to="#"
              >
                <Text style={textStyle}>eFX Edge</Text>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setcardState(2);
                }}
                to="#"
              >
                <Text style={textStyle}>eFX Alpha</Text>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setcardState(3);
                }}
                to="#"
              >
                <Text style={textStyle}>eFX Apex</Text>
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="flex justify-between items-center gap-5">
        {!isLargeScreen && (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems}
            </Menu>
          </>
        )}
        {isLargeScreen && (
          <>
            <Link
              to="#"
              onClick={() => {
                window.open("https://plus.efxdata.com/login");
              }}
            >
              <Heading
                size="lg"
                as="h6"
                className={`${
                  !isLargeScreen ? "text-sm" : "text-lg"
                } !text-black uppercase`}
              >
                Sign up
              </Heading>
            </Link>
            <Button
              onClick={() => {
                window.open("https://plus.efxdata.com/login");
              }}
              size="sm"
              shape="round"
              className={`sm:px-5 ${
                !isLargeScreen ? "text-xs" : "text-sm"
              } tracking-[3.20px] uppercase min-w-[150px]`}
              style={{ color: "black", backgroundColor: "white" }}
            >
              Log in
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
