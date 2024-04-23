import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Button, Text } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "components/Footer/Footer";
import CardContainer from "testAnimation";

export default function LandingPageVTwoPage() {
  return (
    <>
      <Helmet>
        <title>Itsabdulrafey's Application4</title>
        <meta name="description" content="Web site created using create-react-app" />
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
       <Header/>
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
                      Explore Premium Market Insights with eFXData
                    </Heading>
                  </div>
                </div>
                <div className="flex justify-between items-center ml-[732px] gap-5 md:ml-0">
                  <Button shape="round" className="sm:px-5 tracking-[1.60px] uppercase shadow-xs min-w-[228px]">
                    Place Pre-Order
                  </Button>
                  <Heading size="lg" as="h2" className="tracking-[1.60px]">
                    JOIN WAITLIST →
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[54px] sm:gap-[27px]">
              <div className="flex flex-col gap-[43px] p-[22px] sm:p-5 bg-white-A700">
                <div className="w-full mt-[5px] mx-auto max-w-[1302px]">
                  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}} >
                    <Button
                      size="md"
                      variant="outline"
                      className="sm:px-5 !text-white-A700 tracking-[4.00px] bg-gradient min-w-[173px] rounded-md"
                    >
                      eFX Plus
                    </Button>
                    <Button size="md" variant="outline" className="sm:px-5 tracking-[4.00px] min-w-[220px] rounded-md">
                      eFX Plus HD
                    </Button>
                    <Button size="md" variant="outline" className="sm:px-5 tracking-[4.00px] min-w-[180px] rounded-md">
                      eFX Edge
                    </Button>
                    <div className="flex justify-center w-[15%]">
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
                    <Button size="xl" variant="outline" sty className="sm:px-5 tracking-[4.00px] min-w-[100px] rounded-md">
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
              </div>
              <div  className="flex flex-col items-start gap-[73px] p-9 md:gap-[54px] sm:gap-9 sm:p-5 bg-white-A700">
                
                <Text  size="xl" as="p" className="ml-[23px] md:ml-0 !text-blue_gray-400 tracking-[0.48px]">
                  eFX carries the most comprehensive Big-Data streams in FX consisting of:
                </Text>
                <div  className="flex md:flex-col self-stretch items-center w-full mb-[102px] gap-[11px] mx-auto max-w-[1319px]">
               






      <CardContainer/>




                </div>


              </div>
              <div style={{marginTop:200}} className="flex flex-col w-full mx-auto md:p-5 max-w-[1080px]">
                <div className="flex flex-col items-start gap-[22px]">
                  <Text size="xl" as="p" className="!text-blue_gray-400 tracking-[0.96px]">
                    You will be invited when your eFX package is ready for release
                  </Text>
                  <Text size="lg" as="p" className="!text-black-900 tracking-[0.88px] leading-[42px]">
                    Prices are estimates, pre-orders will guarantee no higher monthly charge, at service initiation, and
                    may qualify for lower prices.
                  </Text>
                </div>
                <div className="flex w-[39%] md:w-full mt-12">
                  <div className="flex flex-col items-start w-full gap-[29px]">
                    <div className="flex self-stretch justify-between items-start gap-5">
                      <div className="flex flex-col gap-5">
                        <a href="#">
                          <Text size="lg" as="p" className="!text-black-900 tracking-[4.40px] uppercase">
                            Due Today
                          </Text>
                        </a>
                        <Text size="s" as="p" className="!text-blue_gray-400 tracking-[3.20px]">
                          Fully Refundable
                        </Text>
                      </div>
                      <Heading size="3xl" as="h5" className="!text-black-900 tracking-[4.40px] uppercase">
                        US$ 150
                      </Heading>
                    </div>
                    <Button shape="round" className="sm:px-5 tracking-[3.20px] uppercase min-w-[250px]">
                      Place Pre-Order
                    </Button>
                  </div>
                </div>
                <div className="flex mt-[17px]">
                  <div className="flex">
                    <div className="flex">
                      <div className="flex">
                        <Heading size="xl" as="h6" className="!text-blue_gray-400 tracking-[0.90px]">
                          <span className="text-blue_gray-400 font-normal">By placing this order, I agree to the </span>
                          <span className="text-blue_gray-400 font-normal">eFX Pre-Order Agreement</span>
                          <span className="text-blue_gray-400 font-normal">, the </span>
                          <span className="text-blue_gray-400 font-normal">eFX EULA</span>
                          <span className="text-blue_gray-400 font-normal"> and the </span>
                          <span className="text-blue_gray-400 font-normal">Privacy Policy</span>
                          <span className="text-blue_gray-400 font-normal">.</span>
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full gap-[57px] mx-auto md:p-5 sm:gap-7 max-w-[1080px]">
                <Heading size="4xl" as="h2" className="!text-lime-900 tracking-[1.60px] uppercase">
                  Our Industry Partners
                </Heading>
                <div className="flex md:flex-col self-stretch justify-between items-center gap-5">
                  <Img src="images/img_image_5.png" alt="imagefive_one" className="w-[11%] md:w-full object-cover" />
                  <Img src="images/img_image_6.png" alt="imagesix_one" className="w-[11%] md:w-full object-cover" />
                  <Button
                    color="indigo_A700"
                    size="2xl"
                    leftIcon={<Img src="images/img_image_8.png" alt="image 8" className="w-[42px] h-[40px]" />}
                    className="gap-[15px] sm:px-5 tracking-[1.60px] uppercase min-w-[290px] rounded-[60px]"
                  >
                    Cuneus
                  </Button>
                  <Img src="images/img_image_7.png" alt="imageseven_one" className="w-[11%] md:w-full object-cover" />
                  <Img src="images/img_image_4.png" alt="imagefour_one" className="w-[11%] md:w-full object-cover" />
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
          <Footer/>
        </div>
      </div>
    </>
  );
}
