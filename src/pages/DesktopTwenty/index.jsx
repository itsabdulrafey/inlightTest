import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img, Radio } from "../../components";
import Header from "../../components/Header";

export default function DesktopTwentyPage() {
  return (
    <>
      <Helmet>
        <title>Alpha's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-start bg-white-A700">
        {/* header section */}
        <Header className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-5 pr-[30px] md:flex-col md:p-5 sm:pr-5" />

        {/* main content section */}
        <div className="w-[93%] self-end md:w-full md:p-5">
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <div className="mt-[343px] flex w-[25%] flex-col gap-4 md:w-full">
              {/* intro text section */}
              <div className="flex flex-col items-start gap-[7px]">
                <Text size="lg" as="p" className="!font-audiowide !text-indigo-900">
                  eFXplus
                </Text>
                <Text size="s" as="p" className="w-full leading-[140%]">
                  Price-based FX data derived from Sell-Side Research & Refinitiv IFR Markets
                </Text>
              </div>

              {/* pager indicator section */}
              <div className="ml-36 flex h-[9px] w-[39px] md:ml-0" />
            </div>
            <div className="relative h-[982px] w-[69%] md:w-full">
              <div className="absolute bottom-[-0.18px] left-[0.00px] m-auto h-[417px] w-[34%] rotate-[-174deg] rounded-[208px] bg-blue-300_60" />
              <Img
                src="images/img_circle_2.png"
                alt="image"
                className="absolute right-[-0.22px] top-[0.00px] m-auto h-[529px] w-[27%] rotate-[16deg] object-cover"
              />

              {/* signup form section */}
              <div className="black_900_7f_black_900_00_border absolute right-[8%] top-[5%] m-auto flex w-[79%] flex-col items-start rounded-[40px] border-[3px] border-solid bg-gradient1 p-[50px] md:p-5">
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
                  <div className="flex w-[74%] items-center gap-3 md:w-full">
                    <Heading as="h3" className="mb-4 self-end tracking-[0.40px]">
                      Step
                    </Heading>
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-lg border border-solid border-white-A700_66 bg-white-A700_33 p-[15px]">
                      <div className="flex flex-wrap items-center gap-3">
                        <Heading
                          size="s"
                          as="h4"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px] border border-solid border-white-A700 bg-indigo-A200 text-center tracking-[0.36px]"
                        >
                          4
                        </Heading>
                        <Heading as="h5" className="self-end tracking-[0.40px]">
                          Payments Methods
                        </Heading>
                      </div>
                      <Img src="images/img_arrow_down_white_a700.svg" alt="arrowdown" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                </div>

                {/* payment method section */}
                <div className="mt-[55px] flex w-[55%] flex-col items-start gap-[30px] md:w-full">
                  <Heading size="xl" as="h6" className="tracking-[0.72px]">
                    Choose a Payment Method
                  </Heading>
                  <div className="flex w-[89%] flex-col gap-10 md:w-full">
                    <div className="flex items-center justify-between gap-5 sm:flex-col">
                      <Radio
                        value="creditcards1"
                        name="creditcards"
                        label="Credit Cards"
                        className="w-[43%] gap-3 text-2xl font-bold tracking-[0.48px] text-white-A700"
                      />
                      <Img
                        src="images/img_image_26.png"
                        alt="imagetwentysix"
                        className="h-[32px] w-[47%] object-cover sm:w-full"
                      />
                    </div>
                    <div className="flex w-[48%] items-center justify-between gap-5 md:w-full">
                      <Radio
                        value="paypal1"
                        name="paypal"
                        label="Paypal"
                        className="w-[56%] gap-3 self-end text-2xl font-bold tracking-[0.48px] text-white-A700"
                      />
                      <Img
                        src="images/img_image_27.png"
                        alt="imagetwentyseve"
                        className="h-[32px] w-[25%] object-cover"
                      />
                    </div>
                  </div>

                  {/* captcha verification section */}
                  <div className="flex w-[83%] items-center justify-between gap-5 md:w-full">
                    <Heading as="h5" className="mb-[23px] self-end tracking-[0.40px]">
                      Prove You are a Human...
                    </Heading>
                    <div className="flex w-[27%] flex-col items-start gap-1.5">
                      <Text as="p" className="tracking-[0.32px] !text-white-A700_e5">
                        Enter a code
                      </Text>
                      <Input
                        color="white_A700_b2"
                        size="xs"
                        variant="outline"
                        name="edittext"
                        className="self-stretch rounded sm:px-5"
                      />
                    </div>
                  </div>
                </div>

                {/* form action buttons section */}
                <div className="mt-[131px] flex w-[84%] justify-between gap-5 self-center md:w-full">
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
