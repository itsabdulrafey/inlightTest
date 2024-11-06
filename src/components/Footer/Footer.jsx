import React, { useEffect, useState } from "react";

// import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Heading, Img, Button, Text } from "../../components";
import { useNavigate, useRoutes } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

// Assuming Img is a styled img tag, we'll replace it with MUI's Box component for this example
const StyledImage = styled(Box)({
  height: "auto",
});
const Footer = () => {
  const Navigate = useNavigate();
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isLargeScreen = useMediaQuery("(min-width:1300px)");
  return (
    <>
      <footer className="flex justify-center items-center pt-11 md:pt-5 bg-black-900">
        <div className="flex justify-center w-[97%] md:w-full mt-4 md:p-5">
          <div
            // style={{ backgroundColor: "blue" }}
            className="flex flex-col w-full  md:gap-[54px] sm:gap-9"
          >
            <div
              // style={{ backgroundColor: "red" }}
              className="flex justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1200px]"
            ></div>
            {/* <hr
              style={{
                borderColor: "#888888",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            /> */}
            <div className="flex  justify-evenly items-center w-full gap-5 mx-auto max-w-[1600px] md:p-5 ">
              <div>
                <img src="images/headerLogo.svg" alt="imagenineteen" />
              </div>
              <div>
                <Img
                  src="images/img_shutterstock_2344967333.png"
                  alt="shutterstock"
                  className="w-full md:h-auto mx-auto md:p-5 object-cover max-w-[576px] ml-14"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ color: "white", fontWeight: 1000, fontSize: 24 }}
                >
                  Follow eFX :
                </span>
                <div style={{ marginTop: 3, marginLeft: 5 }}>
                  <Img src="images/X.svg" alt="shutterstock" />
                </div>

                <Button
                  onClick={() => {
                    window.open("https://plus.efxdata.com/login");
                  }}
                  size="sm"
                  shape="round"
                  className={`sm:px-5 ${
                    !isLargeScreen ? "text-xs" : "text-sm"
                  } tracking-[3.20px] uppercase min-w-[150px] `}
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    border: "2px solid white",
                    marginLeft: 10,
                  }}
                >
                  Sign in
                </Button>
              </div>
            </div>

            {/* <hr
              style={{
                borderColor: "#888888",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            /> */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  maxWidth: 1350,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    color: "white",
                    display: "flex",
                    gap: 20,
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  <span style={{ cursor: "pointer" }}>eFX Data</span>
                  <span style={{ cursor: "pointer" }}>eFX Plus Login</span>
                  <span style={{ cursor: "pointer" }}>Disclaimer</span>
                  <span style={{ cursor: "pointer" }}>
                    Public Privacy Notice
                  </span>
                  <span style={{ cursor: "pointer" }}>EULA</span>
                  <span style={{ cursor: "pointer" }}>About</span>
                  <span style={{ cursor: "pointer" }}>Contact Us</span>
                </div>
                <div
                  style={{
                    color: "white",

                    display: "flex",
                    gap: 20,
                    marginBottom: 20,
                  }}
                >
                  <span>
                    Copyright © 2024 -{" "}
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                      eFXplus
                    </span>{" "}
                    - All Rights Reserved.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
