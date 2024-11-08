import React, { useEffect, useRef } from "react";
import { Heading, Img, Text } from "components";
import imagess from ".././src/assets/images/image 3.svg";
import images2 from ".././src/assets/images/shutterstock_2349592357 1 (1).svg";
import images3 from ".././src/assets/images/shutterstock_1890281956 1.svg";
import images4 from ".././src/assets/images/productImage4.svg";
import { useNavigate } from "react-router-dom";

const cardsData = [
  {
    id: 0,
    color: "white",
    text: "skyblue",
    image: imagess,
    data: {
      heading1: "eFX ",
      heading2: "Plus HD",
      heading3: "USD 199$*",
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
      heading1: "eFX ",
      heading2: "Edge",
      heading3: "USD 299$*",
      heading4: "The Sentiment Trades",
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
      heading1: "eFX ",
      heading2: "Alpha",
      heading3: "USD 399$*",
      heading4: "The Systematic Trades",
      paragraphs: [
        "Sentiment-based FX positions in G10 currencies.",
        "Provides quant-based trades for data-driven decision making",
        "Built on robust institutional mark to market targets and eFX’s comprehensive ledgers",
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
      heading1: "eFX ",
      heading2: "Apex",
      heading3: "USD 899$*",
      heading4: "The Most Powerful Big-Data Stream",
      paragraphs: [
        "Plus, Edge, and Alpha datasets",
        "Exclusive trades in selective G10 crosses",
        "Allows API access requests for seamless integration into existing systems",
        "An average of 100 trades for diversified trading",
      ],
    },
  },
];

const CardContainer = ({ selectedSectionIndex }) => {
  const sectionRefs = useRef(cardsData.map(() => React.createRef()));
  const Navigate = useNavigate();

  // Scroll to the selected section
  const scrollToSection = (index) => {
    const sectionRef = sectionRefs.current[index];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Trigger scroll on selected section index change
  useEffect(() => {
    if (selectedSectionIndex !== null) {
      scrollToSection(selectedSectionIndex);
    }
  }, [selectedSectionIndex]);

  return (
    <>
      {cardsData.map((card, index) => (
        <div
          key={card.id}
          ref={sectionRefs.current[index]}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            height: 500,
            marginBottom: "40px",
            padding: "20px",
          }}
        >
          {/* Detail Section */}
          <div
            style={{
              width: "50%",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
            <div style={{ color: "green", position: "relative" }}>
              <div className="flex justify-between gap-5">
                <div className="flex">
                  <Text
                    size="xl"
                    as="p"
                    className="mt-[9px] mb-2 !text-white-A700 tracking-[4.80px]"
                  >
                    <span className="text-black-900">{card.data.heading1}</span>
                    <span className="text-black-900 font-bold">
                      {card.data.heading2}
                    </span>
                  </Text>
                </div>
                <div className="flex py-[13px]">
                  <Heading
                    as="h5"
                    className="!text-black-900 tracking-[4.00px] uppercase"
                  >
                    {card.data.heading3}
                  </Heading>
                </div>
              </div>
              <div className="flex justify-between mt-[15px] gap-5 flex-wrap">
                <Text
                  size="s"
                  as="p"
                  className="!text-blue_gray-400 tracking-[3.20px]"
                >
                  {card.data.heading4}
                </Text>
              </div>
              <Text
                size="md"
                as="p"
                className="w-[100%] md:w-full mt-9 !text-gray-800 tracking-[2.00px] leading-6"
              >
                <ul>
                  {card.data.paragraphs.map((data, idx) => (
                    <div style={{ display: "flex", gap: 10 }}>
                      <span>•</span>{" "}
                      <li key={idx} style={{ marginBottom: "1em" }}>
                        {data}
                      </li>
                    </div>
                  ))}
                </ul>
              </Text>
              <div
                className="flex justify-between items-center mt-[50px] gap-5 w-full"
                style={{ position: "relative", textAlign: "center" }}
              >
                <Heading
                  size="lg"
                  as="h6"
                  className="!text-gray-800 tracking-[3.20px] uppercase cursor-pointer"
                  onClick={() => {
                    Navigate("/ContactUs");
                  }}
                >
                  JOIN WAITLIST →
                </Heading>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img
              src={card.image}
              alt={`Image for ${card.data.heading2}`}
              style={{ width: "53%", borderRadius: "15px" }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardContainer;
