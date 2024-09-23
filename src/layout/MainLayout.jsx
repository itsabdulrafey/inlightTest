import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Header from ".././components/Header/Header";
import Footer from "components/Footer/Footer";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [isheight, setisheight] = React.useState("");
  const [hideSurroundingDivs, setHideSurroundingDivs] = useState(false);
  const [hideSurroundingDivsPreOrder, sethideSurroundingDivsPreOrder] = useState(false);
  const [hideSurroundingDivsOurindustry, sethideSurroundingOurindustry] = useState(false);

  const [cardState, setcardState] = useState(0);

  const animateDivRef = useRef(null);
  const placePreOrder = useRef(null);
  const Ourindustry = useRef(null);

  const headerHandleClick = () => {
    //  sethideSurroundingDivsPreOrder(true);
    setHideSurroundingDivs(true)
    console.log("========================>>>>headerHandleClick");
  };

  const navigate = useNavigate();


  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };
  const handelDiv = () => {
    if (animateDivRef.current) {
      animateDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handelDivPlacePreOrder = () => {
      //  setHideSurroundingDivs(false);
      sethideSurroundingDivsPreOrder(true);
      // sethideSurroundingOurindustry(true);

    if (placePreOrder.current) {
      console.log("======================YES =================")
     
      placePreOrder.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (event, newValue) => {
    handelDiv();
    setcardState(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    setValue(cardState);
  }, [cardState]);

  // Single scroll handler for all the refs
  const handleScroll = () => {
    const rectAnimation = animateDivRef.current?.getBoundingClientRect();
    const rectPreOrder = placePreOrder.current?.getBoundingClientRect();
    const rectIndustry = Ourindustry.current?.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Conditions for hiding/showing surrounding divs based on viewport
    const isAnimationInView = rectAnimation?.top < windowHeight && rectAnimation?.bottom > 0;
    console.log("🚀 ~ handleScroll ~ isAnimationInView:", isAnimationInView)
    const isPreOrderInView = rectPreOrder?.top < windowHeight && rectPreOrder?.bottom > 0;
    console.log("🚀 ~ handleScroll ~ isPreOrderInView:", isPreOrderInView)
    const isIndustryInView = rectIndustry?.top < windowHeight && rectIndustry?.bottom > 0;
    console.log("🚀 ~ handleScroll ~ isIndustryInView:", isIndustryInView)

    // Logic for hiding/showing surrounding divs based on which div is in view
    if (isAnimationInView && isPreOrderInView && isIndustryInView) {
      console.log("🚀 ~ handleScroll ~ isIndustryInView:===============>>>>")
      setHideSurroundingDivs(false);
      sethideSurroundingDivsPreOrder(false);
    }else if(isIndustryInView && isPreOrderInView) {
      setHideSurroundingDivs(false);
      sethideSurroundingDivsPreOrder(false);
      sethideSurroundingOurindustry(false)
    }else if(isAnimationInView && isPreOrderInView  ) {;
      // setHideSurroundingDivs(false);
   
       
    }
    console.log("hideSurroundingOurindustry",hideSurroundingDivsOurindustry)

  };

  

  console.log("hideSurroundingDivsPreOrder",hideSurroundingDivsPreOrder)

  // Single useEffect for handling scroll events and updating based on refs
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to add the listener only once

  return (
    <>
      <Helmet>
        <title>Itsabdulrafey's Application4</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full pt-[22px] gap-3.5 sm:pt-5 bg-white-A700">
        <Header
          handelDiv={handelDiv}
          cardState={cardState}
          setcardState={setcardState}
          headerHandleClick={headerHandleClick}
        />
        <div className="flex flex-col self-stretch gap-[100px] md:gap-[75px] sm:gap-[50px]">
         <Outlet/>
          <Footer />
        </div>
      </div>
    </>
  );
}
