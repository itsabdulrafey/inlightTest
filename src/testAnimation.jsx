import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Heading, Img, Text } from "components";
import imagess from ".././src/assets/images/image 3.svg";
import images2 from ".././src/assets/images/shutterstock_2349592357 1 (1).svg";
import images3 from ".././src/assets/images/shutterstock_1890281956 1.svg";
import images4 from ".././src/assets/images/shutterstock_9928186 1.svg";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cardsData = [
  {
    id: 0,
    color: "white",
    text: "skyblue",
    image: imagess,
    data: {
      heading1: "eFX ",
      heading2: "Plus HD",
      heading3: "Est. 199$*",
      heading4: "The Standard eFX Trades",
      paragraphs: [
        "Offers institutional Discretionary FX positions in G10 currencies.",
        "Derived from sophisticated Institutional Research and LSEG-Refinitiv IFR.",
        "Features ad-hoc placement with dynamic Entry/Stops/Targets adjustments.",
        "Typically maintains 10-15 active trades in orders.",
      ],
    },
  },
  {
    id: 1,
    color: "white",
    text: "salmon",
    image: images2,
    data: {
      heading1: "eFX ",
      heading2: "Edge",
      heading3: "Est. 299$*",
      heading4: "The Standard eFX Trades",
      paragraphs: [
        "Sentiment-based FX positions in G10 currencies.",
        "Generated from eFX’s medium and short term indicators.",
        "Features time-optimized placements and closings.",
        "Delivers an average of 10 new trades every week.",
      ],
    },
  },
  {
    id: 2,
    color: "white",
    text: "lightgreen",
    image: images3,
    data: {
      heading1: "eFX ",
      heading2: "Alpha",
      heading3: "Est. 399$*",
      heading4: "The Standard eFX Trades",
      paragraphs: [
        "Sentiment-based FX positions in G10 currencies.",
        "Provides quant-based trades for data-driven decision making",
        "Built on robust institutional mark to market targets and eFX’s comprehensive ledgers",
        "Features system-orchestrated placements and closings",
        "Features system-orchestrated placements and closings",
        "Maintains a stable portfolio of 60+ trades",
      ],
    },
  },
  {
    id: 3,
    color: "white",
    text: "khaki",
    image: images4,
    data: {
      heading1: "eFX ",
      heading2: "Apex",
      heading3: "Est. 899$*",
      heading4: "The Standard eFX Trades",
      paragraphs: [
        "Plus, Edge, and Alpha datasets",
        "Exclusive trades in selective G10 crosses",
        "Allows API access requests for seamless integration into existing systems",
        "An average of 100 trades for diversified trading",
      ],
    },
  },
];

const cardContainerStyle = {
  position: "relative",
  height: "50rem",
  margin: "20px auto",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  flexDirection: "row",
  backgroundColor: "black",
  borderRadius: 3,
};

const CardContainer = ({ setcardState, cardState,handleDivPlacePreOrder }) => {
  const animateDivRef = useRef(null);

  useEffect(() => {}, []);
  console.log("🚀 ~ CardContainer ~ cardState:", cardState);
  const [activeCards, setActiveCards] = useState(cardsData);
  console.log("🚀 ~ CardContainer ~ activeCards:", activeCards);

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (index) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: cardState * 0.1 },
    }),
    exit: { y: -400, opacity: 0, transition: { duration: 0.5 } },
  };

  const [cardStyle1, setCardStyle] = useState({
    //  width: '100px',
    //  height: '100px',
    position: "absolute",
    left: 0,

    // rotate: `${index * (10 + 15)}deg`,
    zIndex: 5 - cardState,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    transition: "all 0.5s ease",
    backgroundColor: "trans",
  });
  console.log("🚀 ~ CardContainer ~ cardStyle1:", cardStyle1?.zIndex);

  useEffect(() => {
    setCardStyle((pre) => ({ ...pre, zIndex: 5 - cardState }));
  }, [cardState]);

  const handleCardClick = () => {
    setActiveCards((prevCards) => {
      if (prevCards.length > 1) {
        return prevCards.slice(1);
      } else {
        return cardsData;
      }
    });
  };

  const handleScroll = (e) => {
    if (e.deltaY < 0) {
      setActiveCards((prevCards) => {
        if (prevCards.length > 1) {
          return prevCards.slice(1);
        } else {
          return prevCards;
        }
      });
    }
  };

  // useEffect(() => {
  //   const container = document.getElementById("cardContainer");
  //   container.addEventListener("wheel", handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => container.removeEventListener("wheel", handleScroll);
  // }, []);

  const cardStyle = (index, length, color, text) => ({
    position: "absolute",
    width: "100%",
    // right:0,

    height: "100%",
    // borderRadius: 3,
    display: "flex",
    //  width: '100px',
    // rotate: `${index * (12 + 10)}deg`,
    zIndex: length - index,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    transition: "all 0.5s ease",
    // backgroundColor:"red",
    // If it's the first card (active card), set background color to white, else use the provided color
    backgroundColor: index === 0 ? "white" : color,
    borderRadius: 15,
  });
  console.log(5 - cardState, "test");
  const textStyle = (color) => {
    return;
  };

  return (
    <>
     <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 400,
        position: "relative",
      }}

    >
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ cursor: 'pointer', zIndex: 1000,fontSize:25 }}
        onClick={() => {
          cardState > 0 ? setcardState(cardState - 1) : setcardState(cardsData.length - 1);
        }}
      />

      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-evenly",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "1rem" }}>
          <div style={{ color: "green", position: "relative" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "4rem",
                width: "100%",
                flexWrap: "wrap",
              }}
         
            >
              <div style={{ color: "green", width: "100%", position: "relative" }}>
              {activeCards.map((card, index) => (
  <div
    key={card.id}
    style={cardStyle1}
    onClick={() => {
      cardState >= cardsData.length - 1
        ? setcardState(0)
        : setcardState(cardState + 1);
    }}
  >
    <span style={{ backgroundColor: "white" }}>
      {/* {`======>${cardState}`} */}
    </span>
    {/* Card {card.id + 1} */}
    <div
      onClick={handleCardClick}
      style={{
        backgroundColor: "white",
        maxWidth: 800,
        height: 400,
      }}
    >
      <div className="flex justify-between gap-5">
        <div className="flex">
          <Text
            size="xl"
            as="p"
            className="mt-[9px] mb-2 !text-white-A700 tracking-[4.80px]"
          >
            <span className="text-black-900">
              {cardsData[cardState]?.data?.heading1}
            </span>
            <span className="text-black-900 font-bold">
              {cardsData[cardState]?.data?.heading2}
            </span>
          </Text>
        </div>
        <div className="flex py-[13px]">
          <Heading
            as="h5"
            className="!text-black-900 tracking-[4.00px] uppercase"
          >
            {cardsData[cardState]?.data?.heading3}
          </Heading>
        </div>
      </div>
      <div className="flex justify-between mt-[15px] gap-5 flex-wrap">
        <Text
          size="s"
          as="p"
          className="!text-blue_gray-400 tracking-[3.20px]"
        >
          {cardsData[cardState]?.data?.heading4}
        </Text>
        <Text
          size="s"
          as="p"
          className="!text-blue_gray-400 tracking-[3.20px]"
        >
          PRE-ORDER to lock in rate*
        </Text>
      </div>
      <Text
        size="md"
        as="p"
        className="w-[96%] md:w-full mt-9 !text-gray-800 tracking-[2.00px] leading-6"
      >
        {cardsData[cardState]?.data?.paragraphs?.map(
          (data, index) => (
            <React.Fragment key={index}>
              {data}
              <br />
              <br />
            </React.Fragment>
          )
        )}
      </Text>
    </div>
  </div>
))}

              </div>
            </div>
            <div className="flex justify-between items-center mt-[50px] gap-5 w-full " style={{ position: "relative", top: 400, zIndex: 9999 }}>
              <Button
                variant="outline"
                shape="round"
                className="sm:px-5 tracking-[3.20px] uppercase min-w-[250px]"
                onClick={() => {
                  handleDivPlacePreOrder()
                }}
              >
                Place Pre-Order
              </Button>
              <Heading
                size="lg"
                as="h6"
                className="!text-gray-800 tracking-[3.20px] uppercase"
              >
                JOIN WAITLIST  →
              </Heading>
            </div>
          </div>
        </div>
        <div
          id="cardContainer"
          style={{ width: "40%", height: 400, position: "relative" }}
          // onClick={handleCardClick}
        >
         {activeCards.map((card, index) => (
  <div
    key={card.id}
    style={cardStyle(
      index,
      activeCards.length,
      card.color,
      card.text
    )}
    onClick={() => {
      cardState >= cardsData.length - 1
        ? setcardState(0)
        : setcardState(cardState + 1);
    }}
  >
    <Img src={cardsData[cardState].image} />
  </div>
))}

        </div>
      </div>

      <FontAwesomeIcon
        icon={faChevronRight}
        style={{ cursor: 'pointer', zIndex: 1000,fontSize:25 }}
        onClick={() => {
          cardState < cardsData.length - 1 ? setcardState(cardState + 1) : setcardState(0);
        }}
      />
    </div>
    </>
  );
};

export default CardContainer;
