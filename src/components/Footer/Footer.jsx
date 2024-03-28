import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Heading, Img, Button, Text } from "../../components";

// Assuming Img is a styled img tag, we'll replace it with MUI's Box component for this example
const StyledImage = styled(Box)({
  width: 98, // default width, you can adjust as necessary
  height: 'auto', // adjust as necessary
  '& img': {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
});

const Footer = () => {
  return (
  <>
    <footer className="flex justify-center items-center pt-11 md:pt-5 bg-black-900">
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
          </footer>
  </>
  );
};

export default Footer;
