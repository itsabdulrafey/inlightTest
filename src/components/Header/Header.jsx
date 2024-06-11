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
const Header = ({cardState,setcardState,handelDiv}) => {
  return (
    <>
    <header style={{ display: "flex", justifyContent: "space-between" }} className="w-[88%] md:w-full md:p-5 mx-auto">
      <div style={{ color: "orange" }} className="flex sm:flex-col justify-between items-center gap-5">
        <Img src="images/img_image_19.png" alt="imagenineteen" className="w-[98px] sm:w-full object-cover" />
      </div>
      <nav style={{ marginLeft: "200px" }} className="flex justify-center items-center">
        <ul className="flex gap-10">
          <li><Link   onClick={()=>{
                        window.open("https://plus.efxdata.com/login")
                      }} to=""><Text size="md" style={{ fontWeight: "bold", color: "orange" }} className="tracking-[2px]">eFX Plus</Text></Link></li>
          <li><Link onClick={()=>{
                      handelDiv()
                      setcardState(0)
                    }} to=""><Text size="md" style={{ fontWeight: "bold" }} className="tracking-[2px]">eFX Plus HD</Text></Link></li>
          <li><Link onClick={()=>{
                      handelDiv()
                      setcardState(1)
                    }} to=""><Text size="md" style={{ fontWeight: "bold" }} className="tracking-[2px]">eFX Edge</Text></Link></li>
          <li><Link onClick={()=>{
                      handelDiv()
                      setcardState(2)
                    }} to=""><Text size="md" style={{ fontWeight: "bold" }} className="tracking-[2px]">eFX Alpha</Text></Link></li>
          <li><Link onClick={()=>{
                      handelDiv()
                      setcardState(3)
                    }} to=""><Text size="md" style={{ fontWeight: "bold" }} className="tracking-[2px]">eFX Apex</Text></Link></li>
        </ul>
      </nav>
      <div className="flex justify-between items-center w-[20%] sm:w-full gap-5">
        <Link 
          to=""
          onClick={() => {
            window.open("https://plus.efxdata.com/login")
          }}
        >
          <Heading size="lg" as="h6" className="!text-gray-900 tracking-[3.20px] uppercase">
            Sign up
          </Heading>
        </Link>
        <Button 
          onClick={() => {
            window.open("https://plus.efxdata.com/login")
          }}
          size="sm" shape="round" className="sm:px-5 tracking-[3.20px] uppercase min-w-[150px]"
        >
          Log in
        </Button>
      </div>
    </header>
  </>
  );
};

export default Header;
