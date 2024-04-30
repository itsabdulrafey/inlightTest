import React from "react";
import { Helmet } from "react-helmet";
import {AuthInput,AuthTextArea,AuthText, Button, CheckBox, Input, AuthHeading, Img, Text,Header,button } from "../../components";
// import Header from "../../components/Header";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function DesktopEighteenPage() {
  return (
    <>
      <Helmet>
        <title>Alpha's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main layout section */}
      <div className="flex w-full flex-col items-start bg-white-A700">
        {/* header section */}
        <Header.AuthHeader className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-5 pr-[30px] md:flex-col md:p-5 sm:pr-5" />

        {/* hero section */}
        <div className="w-[93%] self-end md:w-full md:p-5">
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <div className="mt-[343px] flex w-[25%] flex-col gap-4 md:w-full">
              <div className="flex flex-col items-start gap-[7px]">
                <AuthText size="lg" as="p" className="!font-audiowide !text-indigo-900">
                  eFXplus
                </AuthText>
                <AuthText size="s" as="p" className="w-full leading-[140%]">
                  Price-based FX data derived from Sell-Side Research & Refinitiv IFR Markets
                </AuthText>
              </div>
              <div className="ml-36 flex h-[9px] w-[39px] md:ml-0" />
            </div>
            <div className="relative h-[982px] w-[69%] md:w-full">
              <div className="absolute bottom-[-0.18px] left-[0.00px] m-auto h-[417px] w-[34%] rotate-[-174deg] rounded-[208px] bg-blue-300_60" />
              <Img
                src="images/img_circle_3.png"
                alt="image"
                className="absolute right-[-0.22px] top-[0.00px] m-auto h-[529px] w-[27%] rotate-[16deg] object-cover"
              />
              <Tabs
                 style={{}}
                className="black_900_7f_black_900_00_border absolute right-[12%] top-[11%] m-auto flex w-[66%] flex-col items-start gap-[100px] rounded-[40px] border-[3px] border-solid bg-gradient1 p-[50px] md:gap-[75px] md:p-5 sm:gap-[50px]"
                selectedTabClassName="!text-gray-900_01 border-white-A700_19 border bg-white-A700 rounded-[12px]"
                selectedTabPanelClassName="mb-[50px] relative tab-panel--selected"
              >
                <div className="flex w-[73%] items-center gap-[30px] md:w-full sm:flex-col">
                  <Img src="images/img_arrow_down.svg" alt="arrowdown" className="h-[22px] w-[22px] sm:w-full" />
                  <TabList style={{backgroundColor: "#ffffff33"}} className="flex justify-around items-center p-4 bg-[#0f0c29] bg-opacity-90 rounded-xl text-white">
        <Tab style={{color:"white"}} className="font-bold text-xl hover:bg-white hover:bg-opacity-10 rounded-lg px-4 py-2 transition-colors duration-200 ease-in-out">
          Sign up
        </Tab>
        <Tab style={{color:"white"}} className="font-bold text-xl hover:bg-white hover:bg-opacity-10 rounded-lg px-4 py-2 transition-colors duration-200 ease-in-out">
          Login
        </Tab>
        <Tab style={{color:"white"}} className="font-bold text-xl hover:bg-white hover:bg-opacity-10 rounded-lg px-4 py-2 transition-colors duration-200 ease-in-out">
          Pre-Register
        </Tab>
      </TabList>
                </div>
                  <TabPanel key={1} className="absolute w-[87%]">
                   
                       <div className="flex w-[92%] justify-between gap-5 md:w-full md:flex-col">
                  <div className="flex w-[43%] flex-col gap-10 md:w-full">
                    <Input
                      shape="round"
                      type="text"
                      name="firstName"
                      placeholder={`First Name`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`Email`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      name="input_one"
                      placeholder={`Security Question`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      name="time"
                      placeholder={`Select Timezone`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                  </div>
                  <div className="flex w-[43%] flex-col gap-10 md:w-full">
                    <Input
                      shape="round"
                      type="text"
                      name="lastName"
                      placeholder={`Last Name`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      type="password"
                      name="password"
                      placeholder={`Password`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      type="password"
                      name="confirmpassword"
                      placeholder={`Confirm Password`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      name="input_three"
                      placeholder={`Your FX Broker/Bank`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                  </div>
                  
                </div>
                <div style={{marginTop:70}}  className="flex w-[84%] justify-between gap-5 self-center md:w-full">
                  <button.AuthButton
                    color="black_900"
                    size="lg"
                    variant="fill"
                    shape="round"
                    className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] sm:px-5"
                  >
                    CANCEL
                  </button.AuthButton>
                  <button.AuthButton
                    size="lg"
                    variant="fill"
                    shape="round"
                    className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] !text-black-900 sm:px-5"
                  >
                    SUBMIT
                  </button.AuthButton>
                </div>
                  </TabPanel>
                  <TabPanel key={2} className="absolute w-[87%]">
      <div className="w-full">
                      <div className="flex flex-col items-end gap-[84px] md:gap-[63px] sm:gap-[42px]">
                        <div className="flex flex-col gap-5 self-stretch">
                          <div className="flex flex-col gap-12">
                            <AuthInput
                              shape="round"
                              type="email"
                              name="email"
                              placeholder={`Email`}
                              className="border border-white-A700_19 tracking-[0.40px] sm:px-5"
                            />
                            <AuthInput
                              shape="round"
                              type="password"
                              name="password"
                              placeholder={`Password`}
                              className="border border-white-A700_19 tracking-[0.40px] sm:px-5"
                            />
                          </div>
                          <CheckBox
                            name="rememberpasswor"
                            label="Remember Password"
                            id="rememberpasswor"
                            className="gap-3 p-px text-left text-base tracking-[0.32px] text-white-A700"
                          />
                        </div>
                        <button.AuthButton
                          size="lg"
                          variant="fill"
                          shape="round"
                          className="mr-[23px] min-w-[480px] border border-white-A700_19 tracking-[0.96px] md:mr-0 sm:px-5"
                        >
                          LOGIN
                        </button.AuthButton>
                      </div>
                    </div>
                
                  </TabPanel>
                  <TabPanel key={3} className="absolute w-[87%]">
                   
                  <div className="w-full">
                      <div className="flex flex-col items-end gap-[84px] md:gap-[63px] sm:gap-[42px]">
                        <div className="flex flex-col gap-5 self-stretch">
                          <div className="flex flex-col gap-12">
                            <AuthInput
                              shape="round"
                              type="email"
                              name="email"
                              placeholder={`Email`}
                              className="border border-white-A700_19 tracking-[0.40px] sm:px-5"
                            />
                            <AuthTextArea
                              shape="round"
                              type="textarea"
                              name="password"
                              placeholder={`Type message`}
                              className="border border-white-A700_19 tracking-[0.40px] sm:px-5"
                            />
                            
                          </div>
                       
                        </div>
                        <button.AuthButton
                          size="lg"
                          variant="fill"
                          shape="round"
                          className="mr-[23px] min-w-[480px] border border-white-A700_19 tracking-[0.96px] md:mr-0 sm:px-5"
                        >
                          SEND MESSAGE
                        </button.AuthButton>
                      </div>
                    </div>
              </TabPanel>
             
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
