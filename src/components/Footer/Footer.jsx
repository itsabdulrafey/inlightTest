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
            <div className="flex flex-wrap justify-evenly items-center w-full gap-5 mx-auto max-w-[1600px] md:p-5 md:flex-col">
              {/* Logo Section */}
              <div>
                <img
                  src="images/headerLogo.svg"
                  alt="imagenineteen"
                  className="object-contain w-[150px]"
                />
              </div>

              {/* Image Section */}
              <div
                className="flex justify-center"
                style={{ alignItems: "center" }}
              >
                <Img
                  src="images/img_shutterstock_2344967333.png"
                  alt="shutterstock"
                  className="w-full md:h-auto  object-cover max-w-[576px]"
                />
              </div>

              {/* Follow Section */}
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex items-center">
                  <span
                    className="text-24px text-emerald-50 md:text-14px lg:text-24px text-white font-extrabold"
                    // className="text-white font-extrabold"
                    style={{ marginTop: 10 }}
                  >
                    Follow eFX:
                  </span>

                  <div
                    className="mt-2"
                    style={{ marginLeft: 5, marginRight: 10 }}
                  >
                    <Img
                      src="images/X.svg"
                      alt="shutterstock"
                      className="object-contain"
                    />
                  </div>
                </div>

                <Button
                  onClick={() => {
                    window.open("https://plus.efxdata.com/login");
                  }}
                  size="sm"
                  shape="round"
                  className="sm:px-5 text-xs tracking-[3.20px] uppercase min-w-[120px] mt-2"
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
                className="px-4"
              >
                {/* Navigation Links */}
                <div
                  className="flex flex-wrap md:flex-col md:items-center md:gap-7 md:justify-center gap-4 mt-5 text-center md:text-left"
                  style={{
                    color: "white",
                  }}
                >
                  <span className="cursor-pointer">eFX Data</span>
                  <span className="cursor-pointer">eFX Plus Login</span>
                  <span className="cursor-pointer">Disclaimer</span>
                  <span className="cursor-pointer">Public Privacy Notice</span>
                  <span className="cursor-pointer">EULA</span>
                  <span className="cursor-pointer">About</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => Navigate("/ContactUs")}
                  >
                    Contact Us
                  </span>
                </div>

                {/* Footer Bottom */}
                <div
                  className="flex flex-wrap mb-5   md:justify-center items-center gap-4 mt-4 text-center md:text-center"
                  style={{
                    color: "white",
                  }}
                >
                  <span className="text-sm">
                    Copyright © 2024 -{" "}
                    <span
                      onClick={() => {
                        window.open("https://plus.efxdata.com/login");
                      }}
                      className="underline cursor-pointer"
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
