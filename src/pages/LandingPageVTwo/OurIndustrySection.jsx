import { Heading, Img } from "../../components";

const OurIndustrySection = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-[57px] mx-auto p-5 max-w-[1500px]">
        <Heading
          size="4xl"
          as="h2"
          className="!text-black-900 tracking-[1.60px] uppercase text-center"
        >
          Our Industry Partners
        </Heading>
        <div
          className="flex flex-wrap justify-center items-center gap-12 mt-[30px]"
          style={{ width: "100%", flexShrink: 0 }}
        >
          <Img
            src="images/img_image_4.png"
            alt="imagefour_one"
            className="object-contain"
            style={{ width: "120px", height: "auto", flexShrink: 0 }}
          />
          <Img
            src="images/img_image_5.png"
            alt="imagefive_one"
            className="object-contain"
            style={{ width: "120px", height: "auto", flexShrink: 0 }}
          />
          <Img
            src="images/img_image_7.png"
            alt="imageseven_one"
            className="object-contain"
            style={{ width: "120px", height: "auto", flexShrink: 0 }}
          />
          <Img
            src="images/cuneus logo word (transparent).png"
            alt="imagesix_one"
            className="object-contain"
            style={{ width: "270px", height: "auto", flexShrink: 0 }}
          />
          <Img
            src="images/img_image_6.png"
            alt="imagesix_one"
            className="object-contain"
            style={{ width: "120px", height: "auto", flexShrink: 0 }}
          />
          <Img
            src="images/Tradu_Logo_Suite_RGB_Black54-1536x540.png"
            alt="imageseven_one"
            className="object-contain"
            style={{ width: "120px", height: "auto", flexShrink: 0 }}
          />
          <Img
            src="images/Mitrade-forex-broker-Review-2.png"
            alt="imagesix_one"
            className="object-contain"
            style={{ width: "120px", height: "auto", flexShrink: 0 }}
          />
        </div>
      </div>
    </>
  );
};

export default OurIndustrySection;
