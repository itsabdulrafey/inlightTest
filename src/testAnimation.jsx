import React, { useEffect, useRef } from "react";
import { Heading, Img, Text } from "components";
import { useNavigate } from "react-router-dom";
import { cardsData } from "constants";

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
      <style>
        {`
    @media (max-width: 768px) {
      .card-container {
        flex-direction: column !important;
        height: auto !important;
      }
      .image-section {
        order: 2;
        width: 100% !important;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }
      .image-section img {
        width: 80% !important;
        max-width: 300px;
        height: auto !important;
      }
      .detail-section {
        order: 1;
        width: 100% !important;
      }
      .detail-section h5.heading3 {
        font-size: 16px !important;
      }
      .detail-section h5 {
        font-size: 18px !important;
      }
      .detail-section p {
        font-size: 14px !important;
        line-height: 1.5 !important;
      }
      .detail-section ul li {
        font-size: 14px !important;
      }
      .detail-section .join-waitlist {
        font-size: 16px !important;
      }
      .detail-section .heading1 {
        font-size: 18px !important;
      }
      .detail-section .heading2 {
        font-size: 20px !important;
        font-weight: bold !important;
      }
    }

    @media (max-width: 480px) {
      .detail-section h5.heading3 {
        font-size: 14px !important;
      }
      .detail-section .heading1 {
        font-size: 16px !important;
      }
      .detail-section .heading2 {
        font-size: 18px !important;
        font-weight: bold !important;
      }
    }
  `}
      </style>

      {cardsData.map((card, index) => (
        <div
          key={card.id}
          ref={sectionRefs.current[index]}
          className="card-container"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            height: 500,
            marginBottom: "40px",
            // padding: "20px",
          }}
        >
          {/* Detail Section */}
          <div
            className="detail-section"
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
            <div style={{ color: "green", position: "relative" }}>
              <div
                className="flex justify-between items-center gap-5 md:flex-col md:items-start"
                style={{}}
              >
                <div className="flex">
                  <Text
                    size="xl"
                    as="p"
                    className="mt-[9px] mb-2 !text-white-A700 tracking-[4.80px]"
                  >
                    <span className="text-black-900 heading1">
                      {card.data.heading1}
                    </span>
                    <span className="text-black-900 font-bold heading2">
                      {card.data.heading2}
                    </span>
                  </Text>
                </div>
                <div className="flex py-[13px]">
                  <Heading
                    as="h5"
                    className="heading3 !text-black-900 tracking-[4.00px]"
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
                  className="join-waitlist !text-gray-800 tracking-[3.20px] uppercase cursor-pointer"
                  onClick={() => {
                    Navigate("/JoinWeightList");
                  }}
                >
                  JOIN WAITLIST →
                </Heading>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="image-section"
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
              style={{ width: "60%", borderRadius: "15px" }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardContainer;
