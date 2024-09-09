import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Button, Text } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "components/Footer/Footer";
import CardContainer from "testAnimation";
import { Tabs, Tab, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PreOrderSection from "./Pre-OrderSection";
import OurIndustrySection from "./OurIndustrySection";

export default function LandingPageVTwoPage() {
  const [value, setValue] = useState(0);
  const [isHeight, setIsHeight] = useState("");
  const [hideSurroundingDivs, setHideSurroundingDivs] = useState(false);

  const navigate = useNavigate();
  const [cardState, setCardState] = useState(0);
  const animateDivRef = useRef(null);
  const placePreOrder = useRef(null);

  const handleTabChange = (index) => {
    switch (index) {
      case 0:
        window.open("https://plus.efxdata.com/login");
        break;
      case 1:
        handleDivScroll();
        setCardState(0);
        break;
      case 2:
        handleDivScroll();
        setCardState(1);
        break;
      case 3:
        handleDivScroll();
        setCardState(2);
        break;
      case 4:
        handleDivScroll();
        setCardState(3);
        break;
      default:
        break;
    }
  };

  // useEffect(() => {
  //   console.log("🚀 ~ handleScroll ~ windowHeight:")
  //   const handleScroll = () => {

  //     if (animateDivRef.current) {
  //       const rect = animateDivRef.current.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;
        

  //       // Check if div is partially or fully in view
  //       const divInView =
  //         rect.top >= 0 && rect.bottom <= windowHeight;

  //       // Show divs if the div is out of view (either scrolled up or down)
  //       if (divInView) {
  //         setHideSurroundingDivs(true); // Hide surrounding divs when in view
  //       } else {
  //         setHideSurroundingDivs(false); // Show surrounding divs when out of view
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });


  const handleScroll = () => {
    if (animateDivRef.current) {
      const rect = animateDivRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // Check if div is partially in view
      const divInView = rect.top < windowHeight && rect.bottom > 0;
  
      // Show/hide surrounding divs based on whether the div is in view
      if (divInView) {
        setHideSurroundingDivs(true); // Hide surrounding divs when in view
      } else {
        setHideSurroundingDivs(false); // Show surrounding divs when out of view
      }
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to add the listener only once
  

  const handleDivScroll = () => {
    if (animateDivRef.current) {
      animateDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDivPlacePreOrder = () => {
    if (placePreOrder.current) {
      console.log("======================YES =================")

      placePreOrder.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (event, newValue) => {
    console.log("in on change function")
    handleDivScroll();
    setCardState(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    setValue(cardState);
  }, [cardState]);

  return (
    <>
      <Helmet>
        <title>Landing Page</title>
        <meta name="description" content="Landing page with interactive content" />
      </Helmet>

      <div className="flex flex-col items-center w-full pt-[22px] gap-3.5 sm:pt-5 bg-white-A700">
        {/* Header is hidden or shown based on hideSurroundingDivs state */}
        {/* {!hideSurroundingDivs && ( */}
          <Header
            handleDivScroll={handleDivScroll}
            cardState={cardState}
            setCardState={setCardState}
          />
        {/* )} */}

        <div className="flex flex-col self-stretch gap-[100px] md:gap-[75px] sm:gap-[50px]">
          <div className="flex flex-col gap-5">
            {/* Hero Section */}
            {/* {!hideSurroundingDivs && ( */}
              <div className="h-[634px] w-full md:h-auto mx-auto md:p-5 relative max-w-[1300px]">
                <Img
                  src="images/img_shutterstock_454907698.png"
                  alt="shutterstock"
                  className="h-[634px] w-full object-cover rounded-[76px]"
                />
                <div className="flex flex-col w-[90%] gap-[197px] bottom-[10%] right-0 left-0 m-auto md:gap-[147px] sm:gap-[98px] absolute">
                  <div className="flex w-[73%] md:w-full">
                    <div className="flex flex-col items-start w-full gap-7">
                      <Text size="xl" as="p" className="!text-gray-200">
                        Secure Your One-Time Purchase Today
                      </Text>
                      <Heading size="6xl" as="h1">
                        Explore Premium Market Insights with eFX Data
                      </Heading>
                    </div>
                  </div>
                  <div className="flex justify-between items-center ml-[732px] gap-5 md:ml-0">
                    <Button
                      shape="round"
                      className="sm:px-5 tracking-[1.60px] uppercase shadow-xs min-w-[228px]"
                      onClick={handleDivPlacePreOrder}
                    >
                      Place Pre-Order
                    </Button>
                    <Heading size="lg" as="h2" className="tracking-[1.60px]">
                      JOIN WAITLIST →
                    </Heading>
                  </div>
                </div>
              </div>
            {/* )} */}

            {/* Scroll-triggered div */}
            <div
              ref={animateDivRef}
              style={{  height:hideSurroundingDivs ? "100vh" : "auto"  }}
              className="flex flex-col items-start gap-[73px] p-9 md:gap-[54px] sm:gap-9 sm:p-5 bg-white-A700"
            >
              <Text
                size="xl"
                as="p"
                className="ml-[23px] md:ml-0 !text-blue_gray-400 tracking-[0.48px]"
              >
                eFX carries the most comprehensive Big-Data streams in FX consisting of:
              </Text>

              <div className="flex flex-col self-stretch items-center w-full mb-[102px] gap-[11px] mx-auto max-w-[1600px]">
                <div
                  style={{
                    marginLeft: "200px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="navigation tabs"
                    sx={{
                      "& .MuiTabs-indicator": { backgroundColor: "green" },
                      "& .Mui-selected": { color: "green" },
                    }}
                  >
                    <Tab
                      sx={{ marginRight: "80px" }}
                      label={
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            letterSpacing: "2px",
                            color: value === 0 ? "green" : "inherit",
                            textTransform: "none",
                          }}
                        >
                          eFX Plus HD
                        </Typography>
                      }
                    />
                    <Tab
                      sx={{ marginRight: "80px" }}
                      label={
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            letterSpacing: "2px",
                            color: value === 1 ? "green" : "inherit",
                            textTransform: "none",
                          }}
                        >
                          eFX Edge
                        </Typography>
                      }
                    />
                    <Tab
                      sx={{ marginRight: "80px" }}
                      label={
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            letterSpacing: "2px",
                            color: value === 2 ? "green" : "inherit",
                            textTransform: "none",
                          }}
                        >
                          eFX Alpha
                        </Typography>
                      }
                    />
                    <Tab
                      sx={{ marginRight: "80px" }}
                      label={
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            letterSpacing: "2px",
                            color: value === 3 ? "green" : "inherit",
                            textTransform: "none",
                          }}
                        >
                          eFX Apex
                        </Typography>
                      }
                    />
                  </Tabs>
                </div>
                <div style={{ width: "100%", marginTop: 70 }}>
                  <CardContainer
                    setCardState={setCardState}
                    cardState={cardState}
                    handleDivPlacePreOrder={handleDivPlacePreOrder}
                  />
                </div>
              </div>
            </div>

            {/* Surrounding divs like PreOrderSection */}
            {/* {!hideSurroundingDivs && ( */}
            <div >
               <PreOrderSection />
            </div>
              <div>
                
                <OurIndustrySection />
              </div>
            {/* )} */}
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
