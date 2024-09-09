import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Button, Text } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "components/Footer/Footer";
import CardContainer from "testAnimation";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import tick from "../../assets/images/tick.png";
import { Link, useNavigate } from "react-router-dom";
import PreOrderSection from "./Pre-OrderSection";
import OurIndustrySection from "./OurIndustrySection";

export default function LandingPageVTwoPage() {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [isheight, setisheight] = React.useState("");
  const [hideSurroundingDivs, setHideSurroundingDivs] = useState(false);
  const [hideSurroundingDivsPreOrder, sethideSurroundingDivsPreOrder] = useState(false);

  const headerHandleClick = () => {
    setisheight("100vh");
    console.log("========================>>>>headerHandleClick");
  };
  const navigate = useNavigate();

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  //   handleTabChange(newValue);
  // };
  const handleTabChange = (index) => {
    switch (index) {
      case 0:
        window.open("https://plus.efxdata.com/login");
        break;
      case 1:
        handelDiv();
        setcardState(0);
        break;
      case 2:
        handelDiv();
        setcardState(1);
        break;
      case 3:
        handelDiv();
        setcardState(2);
        break;
      case 4:
        handelDiv();
        setcardState(3);
        break;
      default:
        break;
    }
  };
  const [cardState, setcardState] = useState(0);
  const animateDivRef = useRef(null);
  const placePreOrder = useRef(null);
  const Ourindustry = useRef(null)


  const handelDiv = () => {
    if (animateDivRef.current) {
      animateDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handelDivPlacePreOrder = () => {
    if (placePreOrder.current) {
      placePreOrder.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // useEffect(() => {
  //   const container = document.getElementById("cardContainer");
  //   container.addEventListener("wheel", handelDiv);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     container.removeEventListener("wheel", handelDiv);
  //   };
  // }, []);
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };
  const handleChange = (event, newValue) => {
    console.log("🚀 ~ handleChange ~ newValue:", newValue);
    handelDiv();
    setcardState(newValue);
    setValue(newValue);
  };
  useEffect(() => {
    setValue(cardState);
  }, [cardState]);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const handleDivVisible = () => {
    console.log("Div is now visible in the viewport!");
    // Call the function you want here
  };

  const handleScroll = () => {
    if (animateDivRef.current) {

      const rectpreOrder = placePreOrder.current.getBoundingClientRect();
      const windowHeightpreOrder = window.innerHeight;
  
      // Check if div is partially in view
      const divInViewPreOrder = rectpreOrder.top < windowHeightpreOrder && rectpreOrder.bottom > 0;

      const rect = animateDivRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // Check if div is partially in view
      const divInView = rect.top < windowHeight && rect.bottom > 0;
  
      // Show/hide surrounding divs based on whether the div is in view
      if(divInViewPreOrder && divInView){
        setHideSurroundingDivs(false); // Hide surrounding divs when in view
        sethideSurroundingDivsPreOrder(false); // Hide surrounding divs when in view
        return

      }
      if (divInView) {
        setHideSurroundingDivs(true); // Hide surrounding divs when in view
      } 
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to add the listener only once




  const handleScrollPreOrder = () => {
    if (placePreOrder.current) {
      const rect = placePreOrder.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // Check if div is partially in view
      const divInView = rect.top < windowHeight && rect.bottom > 0;
  
      const rectAnimationSection = placePreOrder.current.getBoundingClientRect();
      const windowHeightAnimationSection = window.innerHeight;
  
      // Check if div is partially in view
      const divInViewAnimationSection = rectAnimationSection.top < windowHeightAnimationSection && rectAnimationSection.bottom > 0;



      const rectOurindustry = Ourindustry.current.getBoundingClientRect();
      const windowHeightOurindustry = window.innerHeight;
  
      // Check if div is partially in view
      const divInViewOurindustry = rect.top < windowHeightOurindustry && rectOurindustry.bottom > 0;


      // Show/hide surrounding divs based on whether the div is in view
      
      if(divInViewAnimationSection && divInView &&divInViewOurindustry){
        setHideSurroundingDivs(false); // Hide surrounding divs when in view
        sethideSurroundingDivsPreOrder(false); // Hide surrounding divs when in view
        return

      }

        if (divInView) {
        sethideSurroundingDivsPreOrder(true); // Hide surrounding divs when in view
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPreOrder);
    return () => {
      window.removeEventListener("scroll", handleScrollPreOrder);
    };
  }, []); // Empty dependency array to add the listener only once





  const handleScrollOurindustry = () => {
    if (Ourindustry.current) {
      const rect = Ourindustry.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // Check if div is partially in view
      const divInView = rect.top < windowHeight && rect.bottom > 0;
      const rectAnimationSection = animateDivRef.current.getBoundingClientRect();
      const windowHeightAnimationSection = window.innerHeight;
  
      // Check if div is partially in view
      const divInViewAnimationSection = rectAnimationSection.top < windowHeightAnimationSection && rectAnimationSection.bottom > 0;
      // Show/hide surrounding divs based on whether the div is in view
      // if (divInView && divInViewAnimationSection) {
      //   sethideSurroundingDivsPreOrder(false);
      //   return // Hide surrounding divs when in view
      // } 
      if (divInView) {
        sethideSurroundingDivsPreOrder(true); // Hide surrounding divs when in view
      } 
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollOurindustry);
  
    return () => {
      window.removeEventListener("scroll", handleScrollOurindustry);
    };
  }, []); // Empty dependency array to add the listener only once



  return (
    <>
      <Helmet>
        <title>Itsabdulrafey's Application4</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center w-full pt-[22px] gap-3.5 sm:pt-5 bg-white-A700">
        <Header
          handelDiv={handelDiv}
          cardState={cardState}
          setcardState={setcardState}
          headerHandleClick={headerHandleClick}
        />
        <div className="flex flex-col self-stretch gap-[100px] md:gap-[75px] sm:gap-[50px]">
          <div className="flex flex-col gap-5">
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
                      Secure Your One-Time Purchase Today{" "}
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
                    onClick={() => {
                      handelDivPlacePreOrder();
                    }}
                  >
                    Place Pre-Order
                  </Button>
                  <Heading size="lg" as="h2" className="tracking-[1.60px]">
                    JOIN WAITLIST →
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[54px] sm:gap-[27px]">
              {/* Commented Code */}
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
                  eFX carries the most comprehensive Big-Data streams in FX
                  consisting of:
                </Text>

                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="flex md:flex-col self-stretch items-center w-full mb-[102px] gap-[11px] mx-auto max-w-[1600px]"
                >
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
                        "& .Mui-selected": { color: "green" }, // Set font color of the selected tab to green
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
                      setcardState={setcardState}
                      cardState={cardState}
                      handleDivPlacePreOrder={handelDivPlacePreOrder}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // paddingTop: 50,
               height:hideSurroundingDivsPreOrder ? "100vh" : "auto",
               justifyContent: "center",
               alignItems:"center"

                  // backgroundColor:"red"
                }}
                ref={placePreOrder}
              >
                <PreOrderSection
                  handleChange2={handleChange2}
                  value2={value2}
                />
              </div>
              <div ref={Ourindustry}>
              <OurIndustrySection />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}