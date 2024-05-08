import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Radio, RadioGroup, Heading, Img } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  { first3Days: "$10", inputone: "$10", annually: "-" },
  { first3Days: "$10", inputone: "$129", annually: "-" },
  { first3Days: "$10", inputone: "-", annually: "$1199" },
];

export default function DesktopTwentyTwoPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("first3Days", {
        cell: (info) => (
          <Button shape="square" className="tracking-[0.40px]">
            {info?.getValue?.()}
          </Button>
        ),
        header: (info) => (
          <Button size="xs" shape="square" className="min-w-[172px] !border-2 bg-gradient tracking-[0.40px] sm:px-5">
            First 3 Days
          </Button>
        ),
        meta: { width: "172px" },
      }),
      tableColumnHelper.accessor("inputone", {
        cell: (info) => (
          <Button shape="square" className="tracking-[0.40px]">
            {info?.getValue?.()}
          </Button>
        ),
        header: (info) => (
          <Input
            color="white_A700"
            size="sm"
            variant="outline"
            shape="square"
            name="input_one"
            placeholder={`MONTHLY`}
            className="font-bold tracking-[0.40px] sm:px-5"
          />
        ),
        meta: { width: "172px" },
      }),
      tableColumnHelper.accessor("annually", {
        cell: (info) => (
          <Button shape="square" className="tracking-[0.40px]">
            {info?.getValue?.()}
          </Button>
        ),
        header: (info) => (
          <Button size="xs" shape="square" className="min-w-[172px] !border-2 bg-gradient tracking-[0.40px] sm:px-5">
            ANNUALLY
          </Button>
        ),
        meta: { width: "172px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Alpha's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col items-start bg-white-A700">
        {/* header section */}
        <Header className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-5 pr-[30px] md:flex-col md:p-5 sm:pr-5" />

        {/* pricing plan section */}
        <div className="w-[93%] self-end md:w-full md:p-5">
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <div className="mt-[196px] flex w-[25%] flex-col gap-20 md:w-full md:gap-[60px] sm:gap-10">
              <div className="flex flex-col gap-[22px]">
                <div className="flex flex-col items-start gap-1">
                  <Text size="lg" as="p" className="!font-audiowide !text-indigo-900">
                    BASIC
                  </Text>
                  <Text size="s" as="p" className="!font-audiowide !text-gray-900_01">
                    WEB-BASED ACCESS ONLY
                  </Text>
                </div>
                <Text as="p" className="leading-[140%]">
                  Full online access to the service, but no email notifications for new entries, adjustments, exits or
                  forecasts.
                </Text>
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="flex flex-col gap-1">
                  <Text size="lg" as="p" className="!font-audiowide !text-indigo-900">
                    PREMIUM
                  </Text>
                  <Text size="s" as="p" className="!font-audiowide !text-gray-900_01">
                    INSTANT NOTIFICATIONS
                  </Text>
                </div>
                <Text as="p" className="leading-[140%]">
                  Full online access to the service, and the option of real-time email notifications when new entries
                  (trade ideas and forecasts) are published.
                </Text>
              </div>
            </div>

            {/* signup section */}
            <div className="relative h-[982px] w-[69%] md:w-full">
              <div className="absolute bottom-[-0.18px] left-[0.00px] m-auto h-[417px] w-[34%] rotate-[-174deg] rounded-[208px] bg-blue-300_60" />
              <Img
                src="images/img_circle_529x337.png"
                alt="image"
                className="absolute right-[-0.22px] top-[0.00px] m-auto h-[529px] w-[27%] rotate-[16deg] object-cover"
              />
              <div className="black_900_7f_black_900_00_border absolute right-[8%] top-[5%] m-auto flex w-[79%] flex-col items-center rounded-[40px] border-[3px] border-solid bg-gradient1 p-[50px] md:p-5">
                <div className="flex w-[60%] flex-col gap-[30px] self-start md:w-full">
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
                  <div className="flex w-[65%] items-center gap-3 md:w-full">
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
                          2
                        </Heading>
                        <Heading as="h5" className="self-end tracking-[0.40px]">
                          Subscriptions
                        </Heading>
                      </div>
                      <Img src="images/img_arrow_down_white_a700.svg" alt="arrowdown" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                </div>
                <div className="mt-[42px] flex w-[89%] flex-col items-end gap-[18px] md:w-full">
                  <Heading size="lg" as="h6" className="mr-[124px] text-center uppercase md:mr-0">
                    Select a plan that suits you
                  </Heading>
                  <div className="flex flex-col items-center gap-[30px] self-stretch">
                    <div className="flex items-center gap-6 self-stretch md:flex-col">
                      <RadioGroup name="group48166" className="mb-[26px] flex flex-col self-end">
                        <Radio
                          value="basic"
                          label="Basic"
                          className="mr-[140px] flex-1 gap-4 text-xl font-bold tracking-[0.40px] text-white-A700 md:mr-0"
                        />
                        <Radio
                          value="premiummonthly"
                          label="Premium - Monthly"
                          className="mr-2 mt-[33px] flex-1 gap-4 p-px text-xl font-bold tracking-[0.40px] text-white-A700 md:mr-0"
                        />
                        <Radio
                          value="premiumannually"
                          label="Premium - Annually"
                          className="mt-[31px] flex-1 gap-4 p-px text-xl font-bold tracking-[0.40px] text-white-A700"
                        />
                      </RadioGroup>
                      <ReactTable
                        size="sm"
                        bodyProps={{ className: "" }}
                        headerProps={{ className: "sm:flex-col" }}
                        rowDataProps={{ className: "sm:flex-col" }}
                        className="flex-1 md:self-stretch"
                        columns={tableColumns}
                        data={tableData}
                      />
                    </div>
                    <Text as="p" className="w-[83%] text-center leading-7 !text-white-A700 md:w-full">
                      We suggest you choose the Premium plan for your trial period and then you can choose the plan that
                      best fits your needs.
                    </Text>
                  </div>
                </div>
                <div className="mt-[76px] flex w-[84%] justify-between gap-5 md:w-full">
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
