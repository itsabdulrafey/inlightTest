import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const table1Data = [
  { instant: "images/img_input.svg", esttimezone: "5:15 PM" },
  { esttimezone: "5:15 PM" },
  { esttimezone: "5:15 PM" },
  { esttimezone: "5:15 PM" },
  { esttimezone: "5:15 PM" },
  { esttimezone: "5:15 PM" },
];

export default function DesktopTwentyOnePage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("instant", {
        cell: (info) => <Img src={info?.getValue?.()} alt="input" className="h-[56px] sm:w-full" />,
        header: (info) => (
          <Button size="sm" shape="square" className="min-w-[155px] bg-gradient tracking-[0.32px] sm:px-5">
            INSTANT
          </Button>
        ),
        meta: { width: "155px" },
      }),
      table1ColumnHelper.accessor("daily", {
        cell: (info) => (
          <div className="flex justify-center border border-solid border-white-A700">
            <div className="h-[22px] w-[22px] rounded-[11px] border-2 border-solid border-white-A700" />
          </div>
        ),
        header: (info) => (
          <Button size="sm" shape="square" className="min-w-[140px] bg-gradient tracking-[0.32px] sm:px-5">
            DAILY
          </Button>
        ),
        meta: { width: "140px" },
      }),
      table1ColumnHelper.accessor("esttimezone", {
        cell: (info) => (
          <Button size="sm" shape="square" className="min-w-[149px] tracking-[0.32px]">
            {info?.getValue?.()}
          </Button>
        ),
        header: (info) => (
          <Button size="sm" shape="square" className="min-w-[149px] bg-gradient tracking-[0.32px]">
            EST TIme zone
          </Button>
        ),
        meta: { width: "149px" },
      }),
      table1ColumnHelper.accessor("none", {
        cell: (info) => (
          <div className="flex justify-center border border-solid border-white-A700">
            <div className="h-[22px] w-[22px] rounded-[11px] border-2 border-solid border-white-A700" />
          </div>
        ),
        header: (info) => (
          <Button size="sm" shape="square" className="min-w-[149px] bg-gradient tracking-[0.32px] sm:px-5">
            None
          </Button>
        ),
        meta: { width: "149px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Alpha's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main layout section */}
      <div className="flex w-full flex-col items-center bg-white-A700">
        {/* header section */}
        <Header className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-5 pr-[30px] md:flex-col md:p-5 sm:pr-5" />
        <div className="relative h-[982px] w-[95%]">
          {/* notification settings section */}
          <div className="absolute left-[0.00px] top-[10%] m-auto flex w-[38%] flex-col gap-[78px] md:gap-[58px] sm:gap-[39px]">
            <div className="flex flex-col gap-[33px]">
              <div className="flex flex-col items-start gap-[3px]">
                <Text size="md" as="p" className="!font-audiowide !text-indigo-900">
                  Customize Currency Pair Notifications 
                </Text>
                <Text as="p" className="w-[80%] leading-[140%] md:w-full md:p-5">
                  <>
                    Default is set to receive emails of all currency pair recommendations
                    <br />
                    <br />
                    Full online access to the service, but no email notifications for new entries, adjustments, exits or
                    forecasts.
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text size="md" as="p" className="!font-audiowide !text-indigo-900">
                  Order Notifications
                </Text>
                <Text as="p">Limit notifications to new trades only.</Text>
              </div>
              <div className="flex w-[80%] flex-col items-start gap-[7px] md:w-full md:p-5">
                <Text size="md" as="p" className="!font-audiowide !text-indigo-900">
                  Notification Sounds 
                </Text>
                <Text as="p" className="w-full leading-[140%]">
                  <>
                    Select a sound to alert you when new notifications occur while on the Notifications tab.
                    <br />
                    <br />
                    Note: Trade notification sound will not play if you are on any other tab other than Notifications
                  </>
                </Text>
              </div>
            </div>
            <div className="flex w-[82%] gap-10 md:w-full md:p-5 sm:flex-col">
              <Heading
                as="h1"
                className="w-[59%] !font-segoeui !font-semibold leading-[25px] tracking-[0.40px] !text-gray-900_01 sm:w-full"
              >
                <span className="text-indigo-900">
                  <>
                    INSTANT EMAILS
                    <br />
                  </>
                </span>
                <span className="text-base text-gray_900_99">Emails are auto generated when:</span>
                <span className="text-gray-900_01">
                  <>
                    <br />
                    •&nbsp;
                  </>
                </span>
                <span className="text-base text-gray-900_01">
                  <>
                    A trade, forecasts, quant, etc is entered
                    <br />
                  </>
                </span>
                <span className="text-gray-900_01">•&nbsp;</span>
                <span className="text-base text-gray-900_01">
                  <>
                    A limit order gets triggered
                    <br />
                  </>
                </span>
                <span className="text-gray-900_01">•&nbsp;</span>
                <span className="text-base text-gray-900_01">
                  <>
                    A price/stop hits
                    <br />
                  </>
                </span>
                <span className="text-gray-900_01">•&nbsp;</span>
                <span className="text-base text-gray-900_01">
                  <>
                    A bank issues an adjustment
                    <br />
                  </>
                </span>
                <span className="text-gray-900_01">•&nbsp;</span>
                <span className="text-base text-gray-900_01">A TOTW is entered</span>
              </Heading>
              <Heading
                as="h2"
                className="w-[41%] !font-segoeui !font-semibold leading-[25px] tracking-[0.40px] !text-gray-900_01 sm:w-full"
              >
                <span className="text-indigo-900">
                  <>
                    DAILY EMAILS
                    <br />
                  </>
                </span>
                <span className="text-base text-gray_900_99">
                  <>
                    Daily emails will be sent
                    <br />
                  </>
                </span>
                <span className="text-base text-gray-900_01">
                  <>
                    • 5:15 PM EST Orders
                    <br />• 5:25 PM EST Insights <br />• 5:35 PM EST Forecasts
                    <br />• 5:45 PM EST Quant
                    <br />• 11:55 PM EST Data Preview
                  </>
                </span>
              </Heading>
            </div>
          </div>
          <div className="absolute bottom-[-0.18px] left-[32%] m-auto h-[417px] w-[23%] rotate-[-174deg] rounded-[208px] bg-blue-300_60" />
          <Img
            src="images/img_circle_1.png"
            alt="image"
            className="absolute right-[0.60px] top-[0.00px] m-auto h-[529px] w-[18%] rotate-[16deg] object-cover"
          />

          {/* subscription options section */}
          <div className="black_900_7f_black_900_00_border absolute right-[6%] top-[5%] m-auto flex w-[53%] flex-col items-center rounded-[40px] border-[3px] border-solid bg-gradient1 p-[50px] md:p-5">
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
                      <Heading as="h2" className="text-center tracking-[0.40px]">
                        Login
                      </Heading>
                    </a>
                  </div>
                  <Heading as="h3" className="mb-4 self-end text-center tracking-[0.40px]">
                    Pre-Register
                  </Heading>
                </div>
              </div>
              <div className="flex w-[74%] items-center gap-3 md:w-full">
                <Heading as="h4" className="mb-4 self-end tracking-[0.40px]">
                  Step
                </Heading>
                <div className="flex flex-1 items-center justify-between gap-5 rounded-lg border border-solid border-white-A700_66 bg-white-A700_33 p-[15px]">
                  <div className="ml-[7px] flex flex-wrap items-center gap-3 md:ml-0">
                    <Heading
                      size="s"
                      as="h5"
                      className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px] border border-solid border-white-A700 bg-indigo-A200 text-center tracking-[0.36px]"
                    >
                      3
                    </Heading>
                    <Heading as="h6" className="tracking-[0.40px]">
                      Email Notification
                    </Heading>
                  </div>
                  <Img
                    src="images/img_arrow_down_white_a700.svg"
                    alt="arrowdown"
                    className="mr-[7px] h-[24px] w-[24px] md:mr-0"
                  />
                </div>
              </div>
            </div>

            {/* email preferences section */}
            <div className="mt-[30px] flex items-center justify-between gap-5 self-stretch md:flex-col">
              <div className="mb-[18px] flex flex-col items-start gap-[37px] self-end">
                <Heading size="xs" as="h6" className="tracking-[0.32px]">
                  Orders
                </Heading>
                <Heading size="xs" as="h6" className="tracking-[0.32px]">
                  Insights & Options Board
                </Heading>
                <Heading size="xs" as="h6" className="tracking-[0.32px]">
                  TOTW
                </Heading>
                <Heading size="xs" as="h6" className="tracking-[0.32px]">
                  Forecasts
                </Heading>
                <Heading size="xs" as="h6" className="tracking-[0.32px]">
                  Quant
                </Heading>
                <Heading size="xs" as="h6" className="tracking-[0.32px]">
                  Data Preview
                </Heading>
              </div>

              {/* notification schedule table section */}
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "sm:flex-col" }}
                rowDataProps={{ className: "sm:flex-col" }}
                className="w-[69%]"
                columns={table1Columns}
                data={table1Data}
              />
            </div>
            <div className="mt-12 flex w-[84%] justify-between gap-5 md:w-full">
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
    </>
  );
}
