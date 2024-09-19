import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  AuthInput,
  AuthTextArea,
  AuthText,
  Button,
  CheckBox,
  Input,
  AuthHeading,
  Img,
  Text,
  Header,
  button,
} from "../../components";
// import Header from "../../components/Header";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import LoginTab from "./loginTab";
import PreRegisteration from "./Pre-Registeration";
import Signup from "./Signup";
import SideContant from "./SideContant";

export default function DesktopEighteenPage() {
  const [step, setstep] = useState(1);
  return (
    <>
      <Helmet>
        <title>Alpha's Application1</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      {/* main layout section */}
      <div className="flex w-full flex-col items-start bg-white-A700">
        {/* header section */}
        <Header.AuthHeader className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-5 pr-[30px] md:flex-col md:p-5 sm:pr-5" />

        {/* hero section */}
          <div className="flex items-start justify-evenly gap-5 md:flex-col w-[100%]">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100svh"}}>
              <div style={{paddingLeft:30}}>
              <SideContant step={step} />

              </div>
            </div>
            <div className="relative h-[982px] w-[69%] md:w-full overflow-hidden">
              <div className="absolute bottom-[-0.18px] left-[0.00px] m-auto h-[417px] w-[34%] rotate-[-174deg] rounded-[208px] bg-blue-300_60" />
              <img
                src="images/img_circle_3.png"
                alt="image"
                style={{ borderRadis: 300 }}
                className="absolute  rounded-[208px] right-[-0.22px] top-[0.00px] m-auto h-[350px] w-[27%] rotate-[16deg] object-cover"
              />
              <Tabs
                style={{}}
                className="black_900_7f_black_900_00_border absolute right-[12%] top-[5%] m-auto flex w-[66%] flex-col items-start  rounded-[40px] border-[3px] border-solid bg-gradient1 p-[50px] md:gap-[75px] md:p-5 sm:gap-[50px]"
                selectedTabClassName="!text-gray-900_01 border-white-A700_19 border bg-white-A700 rounded-[12px]"
                selectedTabPanelClassName="mb-[50px] relative tab-panel--selected"
              >
                <div className="flex w-[73%] items-center gap-[30px] md:w-full sm:flex-col">
                  <Img
                    src="images/img_arrow_down.svg"
                    alt="arrowdown"
                    className="h-[22px] w-[22px] sm:w-full"
                  />
                  <TabList
                    style={{ backgroundColor: "#ffffff33" }}
                    className="flex justify-around items-center p-4 bg-[#0f0c29] bg-opacity-90 rounded-xl text-white"
                  >
                    <Tab
                      style={{ color: "white" }}
                      className="font-bold text-xl hover:bg-white hover:bg-opacity-10 rounded-lg px-4 py-2 transition-colors duration-200 ease-in-out"
                    >
                      Sign up
                    </Tab>
                    <Tab
                      style={{ color: "white" }}
                      className="font-bold text-xl hover:bg-white hover:bg-opacity-10 rounded-lg px-4 py-2 transition-colors duration-200 ease-in-out"
                    >
                      Login
                    </Tab>
                    <Tab
                      style={{ color: "white" }}
                      className="font-bold text-xl hover:bg-white hover:bg-opacity-10 rounded-lg px-4 py-2 transition-colors duration-200 ease-in-out"
                    >
                      Pre-Register
                    </Tab>
                  </TabList>
                </div>
                <TabPanel key={1} className="absolute w-[100%]">
                  <Signup setstep={setstep} step={step} />
                </TabPanel>
                <TabPanel key={2} className="absolute w-[87%]">
                  <LoginTab />
                </TabPanel>
                <TabPanel key={3} className="absolute w-[87%]">
                  <PreRegisteration />
                </TabPanel>
              </Tabs>
            </div>
          </div>

      </div>
    </>
  );
}
