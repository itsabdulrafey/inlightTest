import { Heading, Img, Button, Text } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "components/Footer/Footer";
import CardContainer from "testAnimation";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import tick from "../../assets/images/tick.png";
import { Link, useNavigate } from "react-router-dom";
const OurIndustrySection = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-[57px] mx-auto md:p-5 sm:gap-7 max-w-[1500px]">
        <Heading
          size="4xl"
          as="h2"
          className="!text-black-900 tracking-[1.60px] uppercase"
        >
          Our Industry Partners
        </Heading>
        <div className="flex md:flex-col self-stretch justify-evenly items-center gap-10">
          <Img
            src="images/img_image_4.png"
            alt="imagefour_one"
            className="w-[9%] md:w-full object-cover"
          />
          <Img
            src="images/img_image_5.png"
            alt="imagefive_one"
            className="w-[9%] md:w-full object-cover"
          />
          <Img
            src="images/img_image_7.png"
            alt="imageseven_one"
            className="w-[9%] md:w-full object-cover"
          />
          <Img
            src="images/cuneus logo word (transparent).png"
            alt="imagesix_one"
            className="w-[22%] md:w-full object-cover"
          />

          <Img
            src="images/img_image_6.png"
            alt="imagesix_one"
            className="w-[9%] md:w-full object-cover"
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
            src="images/Tradu_Logo_Suite_RGB_Black54-1536x540.png"
            alt="imageseven_one"
            className="w-[9%] md:w-full object-cover"
          />
          <Img
            src="images/Mitrade-forex-broker-Review-2.png"
            alt="imagesix_one"
            className="w-[9%] md:w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default OurIndustrySection;
