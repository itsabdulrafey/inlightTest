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
const CustomTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: "green",
    fontWeight: "bold",
  },
}));
export default function LandingPageVTwoPage() {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
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
        {/* <header className="w-[88%] md:w-full md:p-5">
          <div className="flex sm:flex-col justify-between items-center gap-5">
            <Img src="images/img_image_19.png" alt="imagenineteen" className="w-[98px] sm:w-full object-cover" />
            <div className="flex justify-between items-center w-[23%] sm:w-full gap-5">
              <a href="#">
                <Heading size="lg" as="h6" className="!text-gray-900 tracking-[3.20px] uppercase">
                  Sign up
                </Heading>
              </a>
              <Button size="sm" shape="round" className="sm:px-5 tracking-[3.20px] uppercase min-w-[150px]">
                Log in
              </Button>
            </div>
          </div>
        </header> */}
        <Header
          handelDiv={handelDiv}
          cardState={cardState}
          setcardState={setcardState}
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
              {/* <div className="flex flex-col gap-[43px] p-[22px] sm:p-5 bg-white-A700">
                <div className="w-full mt-[5px] mx-auto max-w-[1302px]">
                  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}} >
                    <Button
                      size="md"
                      variant="outline"
                      className="sm:px-5 !text-white-A700 tracking-[4.00px] bg-gradient min-w-[173px] rounded-md"
                      onClick={()=>{
                        window.open("https://plus.efxdata.com/login")
                      }}
                    >
                      eFX Plus
                    </Button>
                    <Button onClick={()=>{
                      handelDiv()
                      setcardState(0)
                    }
                      } size="md" variant="outline" className="sm:px-5 tracking-[4.00px] min-w-[220px] rounded-md">
                      eFX Plus HD
                    </Button>
                    <Button onClick={()=>{
                      handelDiv()
                      setcardState(1)}} size="md" variant="outline" className="sm:px-5 tracking-[4.00px] min-w-[180px] rounded-md">
                      eFX Edge
                    </Button>
                    <div onClick={()=>{
                      handelDiv()
                      setcardState(2)}} className="flex justify-center w-[15%]">
                      <div className="flex flex-col items-end w-full">
                        <div className="flex justify-center w-[37%] md:w-full mr-[5px] md:mr-0 z-[1] border-blue_gray-600 border border-solid bg-gray-900_01 rounded">
                          <Heading size="xs" as="h3" className="w-[67%] tracking-[1.00px] text-center leading-3">
                            <>
                              coming
                              <br />
                              soon!
                            </>
                          </Heading>
                        </div>
                        <a
                          href="#"
                          className="mt-[-14px] px-[30px] py-[18px] sm:px-5 border-blue_gray-600 border-2 border-solid text-shadow-ts rounded-md"
                        >
                          <Heading as="h4" className="!text-blue_gray-600 tracking-[4.00px]">
                            eFX Alpha
                          </Heading>
                        </a>
                      </div>
                    </div>
                    <Button onClick={()=>{
                      handelDiv()
                      setcardState(3)}} size="xl" variant="outline" sty className="sm:px-5 tracking-[4.00px] min-w-[100px] rounded-md">
                      eFX Apex
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center items-start w-full mb-[19px] mx-auto max-w-[1388px]">
                  <div className="w-[21%] md:w-full mt-[9px]">
                    <div className="flex flex-col items-center gap-[27px] p-3 bg-blue_gray-900 shadow-sm rounded-[16px]">
                      <div className="flex flex-col items-start w-[86%] md:w-full mt-3 gap-4">
                        <Heading as="h5" className="tracking-[0.01px] !font-poppins">
                          eFXPlus Data
                        </Heading>
                        <div className="flex flex-col self-stretch gap-[17px]">
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-1.5">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="h6" className="self-start !font-roboto">
                                  <span className="text-white-A700">15</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700 font-normal">of&nbsp;</span>
                                  <span className="text-white-A700">100</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Orders
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "60%" }} className="h-full bg-purple-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-[5px]">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">224</span>
                                  <span className="text-white-A700 font-normal">&nbsp;of&nbsp;</span>
                                  <span className="text-white-A700">500</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Insights
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "30%" }} className="h-full bg-purple-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-[5px]">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">20</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700 font-normal">of</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700">120</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Order Activity
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "80%" }} className="h-full bg-green-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-1.5">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">03</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700 font-normal">of</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700">100</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  TOTW & Models
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "90%" }} className="h-full bg-green-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-1.5">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">02</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700 font-normal">of</span>
                                  <span className="text-white-A700 font-medium">&nbsp;100</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Trade Stats
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "50%" }} className="h-full bg-green-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-[5px]">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">45</span>
                                  <span className="text-white-A700 font-normal">&nbsp;of&nbsp;</span>
                                  <span className="text-white-A700">100</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Forecast Changes
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "30%" }} className="h-full bg-purple-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-1.5">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">03</span>
                                  <span className="text-white-A700 font-normal">&nbsp;of&nbsp;</span>
                                  <span className="text-white-A700">150</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Data Preview
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "30%" }} className="h-full bg-purple-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Heading size="md" as="p" className="!text-green-A700 tracking-[0.14px] !font-bold">
                        Green lines refer to 7-day data count
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:self-stretch ml-[33px] gap-[19px] md:ml-0 flex-1">
                    <a href="#">
                      <Heading size="4xl" as="h2" className="!text-black-900 tracking-[1.28px]">
                        Latest eFX Public Insights
                      </Heading>
                    </a>
                    <div className="flex flex-col self-stretch gap-1">
                      <div className="flex md:flex-col justify-between items-center gap-5 bg-blue-50">
                        <div className="flex sm:flex-col justify-center items-center w-[63%] md:w-full gap-6 md:p-5">
                          <div className="flex flex-col items-end py-2">
                            <Img
                              src="images/img_email_row_check.svg"
                              alt="emailrowcheck"
                              className="h-[22px] w-[22px]"
                            />
                          </div>
                          <div className="flex items-center gap-1 flex-wrap">
                            <Heading size="xl" as="h6" className="!text-gray-900_02">
                              EUR/USD{" "}
                            </Heading>
                            <Text as="p" className="self-end">
                              -
                            </Text>
                            <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                              Opens Higher As USD Soft Despite Rising US Yields
                            </Text>
                          </div>
                        </div>
                        <div className="flex p-[7px] md:p-5">
                          <Text as="p" className="self-end tracking-[-0.14px] text-right !font-medium">
                            10:10 AM - Apr 25
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-100 shadow-md">
                          <div className="flex md:flex-col items-center gap-6">
                            <div className="flex items-center">
                              <div className="h-full w-[3px] bg-blue-A200" />
                              <Img
                                src="images/img_email_row_drag_indicator.svg"
                                alt="emailrowdrag"
                                className="h-[22px]"
                              />
                              <Img
                                src="images/img_email_row_check_black_900.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px]"
                              />
                            </div>
                            <div className="flex items-center gap-3.5 flex-wrap">
                              <Text
                                size="s"
                                as="p"
                                className="flex justify-center items-center h-[25px] p-[3px] !text-white-A700 tracking-[0.12px] !font-medium bg-purple-500 rounded"
                              >
                                Updates
                              </Text>
                              <Heading size="xl" as="h6" className="!text-gray-900_02">
                                AUD/USD{" "}
                              </Heading>
                              <Text as="p" className="self-end mb-[3px]">
                                -
                              </Text>
                              <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                Atains Offered Tone Heading Into The Afternoon
                              </Text>
                            </div>
                          </div>
                          <div className="flex mr-[11px] p-1.5 md:p-5 md:mr-0 bg-blue-100">
                            <Img
                              src="images/img_email_row_overlay.svg"
                              alt="emailrow_three"
                              className="h-[22px] w-[22px]"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="eurusd_one"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  EUR/USD{" "}
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                  Opens Higher As USD Soft Despite Rising US Yields
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] md:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                          <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  EUR/USD
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                  Opens Higher As Market Shrugs Off Higher US Yields
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] md:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                          <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  EUR/USD
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                  Credit Agricole: Cautious on GBP N-Term; Here is Why?
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] md:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                          <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  EUR/USD
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                  COMMENT-US Recap: EUR/USD&#39;s Post-NFP, CPI D
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] md:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                          <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  AUD/USD
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                  Ahead Of Next US Data Dump US Dollar Buying Fades
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] md:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                          <div className="flex sm:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  EUR/USD{" "}
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="!text-black-900_b2 tracking-[0.32px]">
                                  US Dollar Bulls Could Not Maintain Traction
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] sm:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Heading
                        size="xl"
                        as="h6"
                        className="flex justify-center items-center h-[48px] px-[35px] py-[13px] sm:px-5 !text-blue-A200 bg-blue-50"
                      >
                        See more Insights...
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-[15%] md:w-full mt-14 ml-6 gap-[18px] md:ml-0">
                    <Img
                      src="images/img_frame_16_1.png"
                      alt="image"
                      className="h-[196px] w-full md:h-auto object-cover"
                    />
                    <Button
                      color="orange_A200"
                      size="sm"
                      shape="round"
                      className="sm:px-5 tracking-[1.60px] uppercase min-w-[180px]"
                    >
                      Subscribe
                    </Button>
                    <Button
                      color="blue_gray_900_01"
                      size="sm"
                      variant="outline"
                      shape="round"
                      className="sm:px-5 tracking-[1.60px] uppercase min-w-[180px]"
                    >
                      LOGIN
                    </Button>
                  </div>
                </div>
              </div> */}
              <div
                ref={animateDivRef}
                style={{ paddingTop: 40 }}
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
                  <div style={{ width: "100%",marginTop:70 }}>
                    <CardContainer
                      setcardState={setcardState}
                      cardState={cardState}
                      handelDivPlacePreOrder={handelDivPlacePreOrder}
                    />
                  </div>
                </div>
              </div>

              <div
                ref={placePreOrder}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // paddingTop: 50,
                  // backgroundColor:"red"
                }}
              >
                {/* <div
                  style={{
                    color: "#A46A1F",
                    width: "100%",
                    display: "flex",
                    fontSize: 27,
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  <span>PRE-ORDER</span>
                </div> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                  className="flex flex-col w-full mx-auto md:p-5 max-w-[1318px]"
                >
                  <div style={{ margin: 50 }}>
                    <div className="flex flex-col items-start gap-[22px]">
                      <Text
                        size="xl"
                        as="p"
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: 40,
                        }}
                      >
                        PRE ORDER
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-[22px]">
                      <Text
                        size="xl"
                        as="p"
                        style={{ fontSize: 20 }}
                        className="!text-blue_gray-400 tracking-[0.96px]"
                      >
                        Starting at est. $199 - Prices are estimates
                      </Text>
                    </div>

                    <div style={{ display: "flex" }}>
                      <div>
                        <AppBar
                          position="static"
                          color="default"
                          style={{ boxShadow: "none", background: "none" }}
                        >
                          <Tabs
                            value2={value2}
                            onChange={handleChange2}
                            textColor="primary"
                            orientation="vertical"
                            sx={{
                              "& .MuiTabs-indicator": {
                                display: "none", // Hide the default indicator
                              },
                              "& .MuiTabs-flexContainer": {
                                flexDirection: "column",
                              },
                            }}
                            style={{
                              minHeight: "unset",
                            }}
                          >
                            <CustomTab
                              label={
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    borderRight: "3px solid #004D40", // Customize right border color
                                    borderBottom: "3px solid #004D40", // Customize bottom border color
                                    padding: "10px",
                                    margin: "10px 0",
                                    borderRadius: "4px",
                                    width: 150,
                                  }}
                                >
                                  <Typography
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      fontWeight: "bold",
                                      color: "#FF8F00",
                                    }}
                                  >
                                    $199*
                                  </Typography>
                                  <Typography
                                    style={{
                                      textTransform: "none",
                                      color: "black",
                                      fontSize: 20,
                                    }}
                                  >
                                    eFX Plus HD
                                  </Typography>
                                </Box>
                              }
                            />
                            <CustomTab
                              label={
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    borderRight: "3px solid #004D40", // Customize right border color
                                    borderBottom: "3px solid #004D40", // Customize bottom border color
                                    padding: "10px",
                                    margin: "10px 0",
                                    borderRadius: "4px",
                                    width: 150,
                                  }}
                                >
                                  <Typography
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      fontWeight: "bold",
                                      color: "#FF8F00",
                                    }}
                                  >
                                    $299*
                                  </Typography>
                                  <Typography
                                    style={{
                                      textTransform: "none",
                                      color: "black",
                                      fontSize: 20,
                                    }}
                                  >
                                    eFX Edge
                                  </Typography>
                                </Box>
                              }
                            />
                            <CustomTab
                              label={
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    borderRight: "3px solid #004D40", // Customize right border color
                                    borderBottom: "3px solid #004D40", // Customize bottom border color
                                    padding: "10px",
                                    margin: "10px 0",
                                    borderRadius: "4px",
                                    width: 150,
                                  }}
                                >
                                  <Typography
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      fontWeight: "bold",
                                      color: "#FF8F00",
                                    }}
                                    variant="body2"
                                  >
                                    $399*
                                  </Typography>
                                  <Typography
                                    variant="body1"
                                    style={{
                                      color: "black",
                                      fontSize: 20,
                                      textTransform: "none",
                                    }}
                                  >
                                    eFX Alpha
                                  </Typography>
                                </Box>
                              }
                            />
                            <CustomTab
                              label={
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    borderRight: "3px solid #004D40", // Customize right border color
                                    borderBottom: "3px solid #004D40", // Customize bottom border color
                                    padding: "10px",
                                    margin: "10px 0",
                                    borderRadius: "4px",
                                    width: 150,
                                  }}
                                >
                                  <Typography
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      fontWeight: "bold",
                                      color: "#FF8F00",
                                    }}
                                    variant="body2"
                                  >
                                    $899*
                                  </Typography>
                                  <Typography
                                    variant="body1"
                                    style={{
                                      textTransform: "none",
                                      color: "black",
                                      fontSize: 20,
                                    }}
                                  >
                                    eFX Apex
                                  </Typography>
                                </Box>
                              }
                            />
                          </Tabs>
                        </AppBar>
                      </div>

                      <div>
                        <div
                          style={{ marginTop: 30 }}
                          className="flex flex-col items-start gap-[22px]"
                        >
                          <Typography
                            style={{
                              fontSize: 24,
                              color: "#4F805D",
                              fontWeight: "bold",
                              alignSelf: "center",
                              textTransform: "uppercase",
                            }}
                            className="tracking-[0.96px]"
                          >
                            Pre-Ordering guarantees
                          </Typography>
                          <List style={{ paddingLeft: 24 }}>
                            <ListItem
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={tick}
                                alt="Tick icon"
                                style={{ marginTop: 10, marginRight: 10 }}
                              />
                              <ListItemText
                                primary="Grant a 25% discount on the final retail prices for continuous subscriptions"
                                primaryTypographyProps={{
                                  style: {
                                    fontSize: 24,
                                    color: "black",
                                    className: "tracking-[0.96px]",
                                  },
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={tick}
                                alt="Tick icon"
                                style={{ marginTop: 10, marginRight: 10 }}
                              />
                              <ListItemText
                                primary="Full access for the first month"
                                primaryTypographyProps={{
                                  style: {
                                    fontSize: 24,
                                    color: "black",
                                    className: "tracking-[0.96px]",
                                  },
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={tick}
                                alt="Tick icon"
                                style={{ marginTop: 10, marginRight: 10 }}
                              />
                              <ListItemText
                                primary="No higher monthly charge at service initiation."
                                primaryTypographyProps={{
                                  style: {
                                    fontSize: 24,
                                    color: "black",
                                    className: "tracking-[0.96px]",
                                  },
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={tick}
                                alt="Tick icon"
                                style={{ marginTop: 10, marginRight: 10 }}
                              />
                              <ListItemText
                                primary="Pre-orders may qualify for lower prices."
                                primaryTypographyProps={{
                                  style: {
                                    fontSize: 24,
                                    color: "black",
                                    className: "tracking-[0.96px]",
                                  },
                                }}
                              />
                            </ListItem>
                            <div
                              style={{
                                flexDirection: "row",
                                display: "flex",
                                justifyContent: "space-between",
                                height: "100%",
                                marginTop: 70,
                              }}
                              className="flex flex-col items-start w-full gap-[29px]"
                            >
                              <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                <Button
                                  shape="round"
                                  className="sm:px-5 tracking-[3.20px] uppercase min-w-[250px]"
                                >
                                  Place Pre-Order
                                </Button>
                              </div>
                              <div className="flex self-stretch justify-between items-start gap-5">
                                <div className="flex flex-row gap-5">
                                  <div className="flex flex-col gap-5">
                                    <a href="#">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-black-900 tracking-[6.40px] uppercase"
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 24,
                                        }}
                                      >
                                        Due Today
                                      </Text>
                                    </a>
                                    <Text
                                      size="s"
                                      as="p"
                                      className="!text-blue_gray-400 tracking-[3.20px]"
                                    >
                                      Fully Refundable
                                    </Text>
                                  </div>

                                  <Heading
                                    size="4xl"
                                    as="h3"
                                    style={{ color: "#4F805D" }}
                                    className="flex flex-row text-black-900 tracking-[4.40px] uppercase"
                                  >
                                    <span>US</span>
                                    <span style={{ fontSize: 18 }}>250$</span>
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full gap-[57px] mx-auto md:p-5 sm:gap-7 max-w-[1080px]">
                <Heading
                  size="4xl"
                  as="h2"
                  className="!text-black-900 tracking-[1.60px] uppercase"
                >
                  Our Industry Partners
                </Heading>
                <div className="flex md:flex-col self-stretch justify-between items-center gap-5">
                  <Img
                    src="images/img_image_5.png"
                    alt="imagefive_one"
                    className="w-[11%] md:w-full object-cover"
                  />
                  <Img
                    src="images/img_image_6.png"
                    alt="imagesix_one"
                    className="w-[11%] md:w-full object-cover"
                  />
                  <Img
                    src="images/cuneus logo word (transparent).png"
                    alt="imagesix_one"
                    className="gap-[15px] sm:px-5 tracking-[1.60px] uppercase min-w-[290px] rounded-[30px]"
                  />

                  {/* <Button
                    color="indigo_A700"
                    size="2xl"
                    leftIcon={<Img src="images/cuneus logo word (transparent).png" alt="image 8" className="w-[42px] h-[40px]" />}
                    className="gap-[15px] sm:px-5 tracking-[1.60px] uppercase min-w-[290px] rounded-[60px]"
                  >
                    Cuneus
                  </Button> */}
                  <Img
                    src="images/img_image_7.png"
                    alt="imageseven_one"
                    className="w-[11%] md:w-full object-cover"
                  />
                  <Img
                    src="images/img_image_4.png"
                    alt="imagefour_one"
                    className="w-[11%] md:w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <footer className="flex justify-center items-center pt-11 md:pt-5 bg-black-900">
            <div className="flex justify-center w-[97%] md:w-full mt-4 md:p-5">
              <div className="flex flex-col w-full gap-[72px] md:gap-[54px] sm:gap-9">
                <div className="flex justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1260px]">
                  <Heading size="5xl" as="h1" className="tracking-[8.00px]">
                    eFX PLUS
                  </Heading>
                  <Button shape="round" className="sm:px-5 tracking-[3.20px] uppercase min-w-[183px]">
                    Contact us
                  </Button>
                </div>
                <Img
                  src="images/img_shutterstock_2344967333.png"
                  alt="shutterstock"
                  className="w-full md:h-auto mx-auto md:p-5 object-cover max-w-[1076px]"
                />
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="flex md:flex-col items-center gap-[30px]">
                    <Button size="xs" shape="square" className="tracking-[1.00px] min-w-[60px]">
                      200
                    </Button>
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
                        <span className="text-white-A700 font-normal">&nbsp;Mib</span>
                      </Heading>
                      <div className="flex self-start items-center gap-2">
                        <Img src="images/img_image_13.png" alt="imagethirteen" className="w-[24px] object-cover" />
                        <Heading as="h5" className="tracking-[1.00px]">
                          6 in 0.06 ms
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-2">
                        <Img src="images/img_image_12.png" alt="imagetwelve_one" className="w-[24px] object-cover" />
                        <Heading as="h5" className="tracking-[1.00px]">
                          n/a
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-2">
                        <Img src="images/img_image_10.png" alt="imageten_one" className="w-[24px] object-cover" />
                        <Heading as="h5" className="tracking-[1.00px]">
                          <span className="text-white-A700">1&nbsp;</span>
                          <span className="text-white-A700 font-normal">ms</span>
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-2">
                        <Img src="images/img_image_11.png" alt="imageeleven_one" className="w-[24px] object-cover" />
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
                    <Img src="images/img_image_9.png" alt="imagenine_one" className="w-[24px] object-cover" />
                    <Heading as="h5" className="tracking-[1.00px]">
                      5.4.25
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </footer> */}
          <Footer />
        </div>
      </div>
    </>
  );
}
