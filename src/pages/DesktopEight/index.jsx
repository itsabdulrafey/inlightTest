import React from "react";
import { Helmet } from "react-helmet";
import { ButtonSecound as Button, Input, Img, Heading, Text,Header } from "../../components";
// import Header from "../../components/Header";

export default function DesktopEightPage() {
  return (
    <>
      <Helmet>
        <title>Itsabdulrafey's Application5</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1080px] w-full bg-white-A700 md:h-auto">
        <div className="flex w-full flex-col items-center">
          <Header.Header2 className="relative z-[1] w-[78%] md:w-full md:p-5" />
          <div style={{background: 'linear-gradient(90deg, #09bf8c, #0095f1)',}} className="relative mt-[-98px] flex flex-col items-start gap-[58px] self-stretch bg-gradient1 p-[18px] sm:gap-[29px]">
            <div style={{background: 'linear-gradient(135deg, #ffffff66, #ffffff00)',}} className="ml-[108px] mt-[423px] flex w-[26%] flex-col gap-4 md:ml-0 md:w-full">
              <div className="flex flex-col items-start gap-[7px]">
                <Text size="lg" as="p" className="!font-audiowide">
                  eFXplus
                </Text>
                <Text size="s" as="p" className="leading-[140%] !text-white-A700_b2">
                  Price-based FX data derived from Sell-Side Research & Refinitiv IFR Markets
                </Text>
              </div>
              <div className="ml-36 flex h-[9px] w-[39px] md:ml-0" />
            </div>
            <div className="h-[380px] w-[380px] self-center rounded-[190px] bg-gradient2" />
          </div>
        </div>
        <Img
          src="images/img_circle.png"
          alt="image"
          className="absolute right-[0.00px] top-[9%] m-auto h-[472px] w-[17%] rotate-[105deg] object-cover"
        />
        <div style={{background: 'linear-gradient(135deg, #ffffff66, #ffffff00)',}} className="black_900_7f_black_900_00_border absolute bottom-0 right-[5%] top-0 my-auto flex h-max w-[51%] flex-col items-start gap-[55px] rounded-[40px] border-[3px] border-solid bg-gradient p-[50px] md:p-5 sm:gap-[27px]">
          <div className="flex w-[60%] flex-col gap-[30px] md:w-full">
            <div className="flex items-center justify-between gap-5 sm:flex-col">
              <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[22px] w-[22px] sm:w-full" />
              <div className="flex w-[90%] justify-between gap-5 rounded-[12px] border border-solid border-white-A700_19 bg-white-A700_33 pr-[26px] sm:w-full sm:flex-col sm:pr-5">
                <div className="flex w-[59%] items-center justify-between gap-5 sm:w-full">
                  <Button
                    color="black_900"
                    variant="fill"
                    shape="round"
                    className="min-w-[150px] border border-white-A700_19 tracking-[0.40px] sm:px-5"
                  >
                    Sign up
                  </Button>
                  <a href="Login" target="_blank" rel="noreferrer" className="mb-4 self-end">
                    <Heading as="h1" className="text-center tracking-[0.40px]">
                      Login
                    </Heading>
                  </a>
                </div>
                <div className="flex py-4">
                  <Heading as="h2" className="self-end text-center tracking-[0.40px]">
                    Pre-Register
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex w-[72%] items-center gap-3 md:w-full">
              <Heading as="h3" className="mb-4 self-end tracking-[0.40px]">
                Step
              </Heading>
              <div className="flex flex-1 items-center justify-between gap-5 rounded-lg border border-solid border-white-A700_66 bg-white-A700_33 p-[15px]">
                <div className="ml-[3px] flex flex-wrap items-center gap-3 md:ml-0">
                  <Heading
                    size="s"
                    as="h4"
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px] border border-solid border-white-A700 bg-indigo-A200 text-center tracking-[0.36px]"
                  >
                    1
                  </Heading>
                  <Heading as="h5" className="tracking-[0.40px]">
                    Account Creation
                  </Heading>
                </div>
                <Img
                  src="images/img_arrow_down_white_a700.svg"
                  alt="arrowdown_three"
                  className="mr-[3px] h-[24px] w-[24px] md:mr-0"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-[800px] justify-between gap-5 md:flex-col">
            <div className="flex w-[43%] flex-col gap-10 md:w-full">
              <Input
                shape="round"
                type="text"
                name="firstName"
                placeholder={`First Name`}
                className="border border-white-A700_19 sm:pr-5"
              />
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder={`Email`}
                className="border border-white-A700_19 sm:pr-5"
              />
              <Input
                shape="round"
                name="input_one"
                placeholder={`Security Question`}
                className="border border-white-A700_19 sm:pr-5"
              />
              <Input
                shape="round"
                name="time"
                placeholder={`Select Timezone`}
                className="border border-white-A700_19 sm:pr-5"
              />
            </div>
            <div className="flex w-[43%] flex-col gap-10 md:w-full">
              <Input
                shape="round"
                type="text"
                name="lastName"
                placeholder={`Last Name`}
                className="border border-white-A700_19 sm:pr-5"
              />
              <Input
                shape="round"
                type="password"
                name="password"
                placeholder={`Password`}
                className="border border-white-A700_19 sm:pr-5"
              />
              <Input
                shape="round"
                type="password"
                name="password"
                placeholder={`Password`}
                className="border border-white-A700_19 sm:pr-5"
              />
              <Input
                shape="round"
                type="password"
                name="password"
                placeholder={`Password`}
                className="border border-white-A700_19 sm:pr-5"
              />
            </div>
          </div>
          <div className="flex w-full max-w-[730px] justify-between gap-5 self-center">
            <Button
              size="lg"
              variant="fill"
              shape="round"
              className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] sm:px-5"
            >
              CANCEL
            </Button>
            <Button
              color="black_900"
              size="lg"
              variant="fill"
              shape="round"
              className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] sm:px-5"
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
