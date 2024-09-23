import React, { useEffect, useState } from "react";

// import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Heading, Img, Button, Text } from "../../components";
import { useNavigate, useRoutes } from "react-router-dom";

// Assuming Img is a styled img tag, we'll replace it with MUI's Box component for this example


const Footer = () => {
  const Navigate=useNavigate()
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
            >
              <Heading size="5xl" as="h1" className="tracking-[8.00px]">
                eFX Plus
              </Heading>
              <Button
                shape="round"
                style={{ backgroundColor: "white", color: "black" }}
                className="sm:px-5 tracking-[3.20px] uppercase min-w-[183px]"
              onClick={() => {
    window.scrollTo(0, 0);  // Scroll to top
    Navigate("/ContactUs");
  }}
              >
                Contact us
              </Button>
            </div>
            <div className="flex  justify-between items-start w-full gap-5 mx-auto max-w-[1200px] md:p-5 ">
                  <div
                    style={{
                      display: "flex",
                      color: "white",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      maxWidth: 200,
                      alignItems: "flex-start",
                      width: "30%",
                      marginTop: 30,
                      height: "70%",
                    }}
                  >
                        <span style={{ fontSize: 24, fontWeight: 600 }}>
                          Quick Links
                        </span>
                        {/* <span style={{ fontSize: 20, cursor: "pointer" }}>Home</span> */}
                        <span style={{ fontSize: 20, cursor: "pointer" }}>
                          Pre Register
                        </span>
                        <span style={{ fontSize: 20, cursor: "pointer" }}>
                          efx Data
                        </span>
                  </div>
                      <Img
                        src="images/img_shutterstock_2344967333.png"
                        alt="shutterstock"
                        className="w-full md:h-auto mx-auto md:p-5 object-cover max-w-[676px] ml-14"
                      />
                  {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      maxWidth: 900,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      width: "40%",
                      color: "white",
                    }}
                  >
                    <span style={{ fontSize: 24, fontWeight: 600, marginTop: 39 }}>
                      Follow Us
                    </span>
                    <div
                      style={{
                        display: "flex",
                        marginTop: 10,
                        width: "50%",
                        justifyContent: "space-evenly",
                      }}
                    >
                          <Img
                            src="images/62beb29c7dfee40f7a6a8d42_akar-icons_dribbble-fill.svg.png"
                            alt="shutterstock"
                          />

                          <Img src="images/Vector.png" alt="shutterstock" />
                    </div>
                  </div> */}
            </div>
            {/* <div style={{color:"white"}} className="flex justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1375px]">
              <div style={{display:"flex",flexDirection:"column"}}>
                  <span style={{fontSize:24,fontWeight:600}}>
                  Email
                  </span>
                  <span style={{fontSize:20,marginTop:10}}>
                  dana@example.com
                  </span>
              </div>
              <div style={{display:"flex",flexDirection:"column"}}>
                  <span style={{fontSize:24,fontWeight:600}}>
                  Phone Number
                  </span>
                  <span style={{fontSize:20,marginTop:10}}>
                  +62 111-1118-1119
                  </span>
              </div>
              <div style={{display:"flex",flexDirection:"column"}}>
                  <span style={{fontSize:24,fontWeight:600}}>
                  Address
                  </span>
                  <span style={{fontSize:20,marginTop:10}}>
                  Grand Arumba C-5, London,
                  </span>
              </div>
            </div> */}

            {/* <div className="flex md:flex-col justify-between items-center gap-5">
              <div className="flex md:flex-col items-center gap-[30px]">
              
                <div className="flex md:flex-col items-center gap-[30px]">
                  <Heading as="h5" className="self-end tracking-[1.00px]">
                    @landing_apex
                  </Heading>
                  <Heading as="h5" className="self-start tracking-[1.00px]">
                    <span className="text-white-A700">16&nbsp;</span>
                    <span className="text-white-A700 font-normal">ms</span>
                  </Heading>
                  <Heading as="h5" className="self-start tracking-[1.00px]">
                    <span className="text-white-A700">4.0</span>
                    <span className="text-white-A700 font-normal">
                      &nbsp;Mib
                    </span>
                  </Heading>
                  <div className="flex self-start items-center gap-2">
                    <Img
                      src="images/img_image_13.png"
                      alt="imagethirteen"
                      className="w-[24px] object-cover"
                    />
                    <Heading as="h5" className="tracking-[1.00px]">
                      6 in 0.06 ms
                    </Heading>
                  </div>
                  <div className="flex self-start items-center gap-2">
                    <Img
                      src="images/img_image_12.png"
                      alt="imagetwelve_one"
                      className="w-[24px] object-cover"
                    />
                    <Heading as="h5" className="tracking-[1.00px]">
                      n/a
                    </Heading>
                  </div>
                  <div className="flex self-start items-center gap-2">
                    <Img
                      src="images/img_image_10.png"
                      alt="imageten_one"
                      className="w-[24px] object-cover"
                    />
                    <Heading as="h5" className="tracking-[1.00px]">
                      <span className="text-white-A700">1&nbsp;</span>
                      <span className="text-white-A700 font-normal">ms</span>
                    </Heading>
                  </div>
                  <div className="flex self-start items-center gap-2">
                    <Img
                      src="images/img_image_11.png"
                      alt="imageeleven_one"
                      className="w-[24px] object-cover"
                    />
                    <Heading as="h5" className="tracking-[1.00px]">
                      <span className="text-white-A700">1&nbsp;</span>
                      <span className="text-white-A700 font-normal">in</span>
                      <span className="text-white-A700">&nbsp;0.29&nbsp;</span>
                      <span className="text-white-A700 font-normal">ms</span>
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Img
                  src="images/img_image_9.png"
                  alt="imagenine_one"
                  className="w-[24px] object-cover"
                />
                <Heading as="h5" className="tracking-[1.00px]">
                  5.4.25
                </Heading>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
