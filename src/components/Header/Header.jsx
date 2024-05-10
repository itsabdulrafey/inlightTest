import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Heading, Img, Button, Text } from "../../components";
import { Link } from 'react-router-dom';

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

const Header = () => {
  return (
  <>
     <header className="w-[88%] md:w-full md:p-5">
          <div className="flex sm:flex-col justify-between items-center gap-5">
            <Img src="images/img_image_19.png" alt="imagenineteen" className="w-[98px] sm:w-full object-cover" />
            <div className="flex justify-between items-center w-[23%] sm:w-full gap-5">
              <Link to="Registeration">
                <Heading size="lg" as="h6" className="!text-gray-900 tracking-[3.20px] uppercase">
                  Sign up
                </Heading>
              </Link>
              <Button size="sm" shape="round" className="sm:px-5 tracking-[3.20px] uppercase min-w-[150px]">
                Log in
              </Button>
            </div>
          </div>
        </header>
  </>
  );
};

export default Header;
