import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Img, Heading, Text } from "../../components";
import Header from "../../components/Header";

export default function DesktopSixteenPage() {
  return (
    <>
      <Helmet>
        <title>Alpha's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main layout section */}
      <div className="flex w-full flex-col items-start bg-white-A700">
        {/* header section */}
        <Header className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-5 pr-[30px] md:flex-col md:p-5 sm:pr-5" />

        {/* content section */}
        <div className="w-[93%] self-end md:w-full md:p-5">
          {/* hero section */}
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <div className="mt-[343px] flex w-[25%] flex-col gap-4 md:w-full">
              <div className="flex flex-col items-start gap-[7px]">
                <Text size="lg" as="p" className="!font-audiowide !text-indigo-900">
                  eFXplus
                </Text>
                <Text size="s" as="p" className="w-full leading-[140%]">
                  Price-based FX data derived from Sell-Side Research & Refinitiv IFR Markets
                </Text>
              </div>
              <div className="ml-36 flex h-[9px] w-[39px] md:ml-0" />
            </div>
            <div className="relative h-[982px] w-[69%] md:w-full">
              <div className="absolute bottom-[-0.18px] left-[0.00px] m-auto h-[417px] w-[34%] rotate-[-174deg] rounded-[208px] bg-blue-300_60" />
              <Img
                src="images/img_circle.png"
                alt="image"
                className="absolute right-[-0.22px] top-[0.00px] m-auto h-[529px] w-[27%] rotate-[16deg] object-cover"
              />

              {/* signup form section */}
              <div className="black_900_7f_black_900_00_border absolute right-[8%] top-[5%] m-auto flex w-[79%] flex-col items-start gap-[55px] rounded-[40px] border-[3px] border-solid bg-gradient1 p-[50px] md:p-5 sm:gap-[27px]">
                <div className="flex w-[60%] flex-col gap-[30px] md:w-full">
                  <div className="flex items-center gap-[30px] sm:flex-col">
                    <Img src="images/img_arrow_down.svg" alt="arrowdown" className="h-[22px] w-[22px] sm:w-full" />
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-[12px] border border-solid border-white-A700_19 bg-white-A700_33 pr-[26px] sm:flex-col sm:self-stretch sm:pr-5">
                      <div className="flex w-[59%] items-center justify-between gap-5 sm:w-full">
                        <Button
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
                      <Heading as="h2" className="mb-4 self-end text-center tracking-[0.40px]">
                        Pre-Register
                      </Heading>
                    </div>
                  </div>

                  {/* steps section */}
                  <div className="flex w-[72%] items-center gap-3 md:w-full">
                    <Heading as="h3" className="mb-4 self-end tracking-[0.40px]">
                      Step
                    </Heading>
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-lg border border-solid border-gray-900_66 bg-white-A700_33 p-[15px]">
                      <div className="flex flex-wrap items-center gap-3">
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
                      <Img src="images/img_arrow_down_white_a700.svg" alt="arrowdown" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                </div>

                {/* form fields section */}
                <div className="flex w-[92%] justify-between gap-5 md:w-full md:flex-col">
                  <div className="flex w-[43%] flex-col gap-10 md:w-full">
                    <Input
                      shape="round"
                      type="text"
                      name="firstName"
                      placeholder={`First Name`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`Email`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      name="input_one"
                      placeholder={`Security Question`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      name="time"
                      placeholder={`Select Timezone`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                  </div>
                  <div className="flex w-[43%] flex-col gap-10 md:w-full">
                    <Input
                      shape="round"
                      type="text"
                      name="lastName"
                      placeholder={`Last Name`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      type="password"
                      name="password"
                      placeholder={`Password`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      type="password"
                      name="confirmpassword"
                      placeholder={`Confirm Password`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                    <Input
                      shape="round"
                      name="input_three"
                      placeholder={`Your FX Broker/Bank`}
                      className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                    />
                  </div>
                </div>

                {/* form actions section */}
                <div className="flex w-[84%] justify-between gap-5 self-center md:w-full">
                  <Button
                    color="black_900"
                    size="lg"
                    variant="fill"
                    shape="round"
                    className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] sm:px-5"
                  >
                    CANCEL
                  </Button>
                  <Button
                    size="lg"
                    variant="fill"
                    shape="round"
                    className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] !text-black-900 sm:px-5"
                  >
                    SUBMIT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
