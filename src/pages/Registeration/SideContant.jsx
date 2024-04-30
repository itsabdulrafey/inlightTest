import React from 'react'
import {AuthInput,AuthTextArea,AuthText, Button, CheckBox, Input, AuthHeading, Img, Text,Header,button } from "../../components";

const SideContant = ({step=0}) => {
  return (
     <>
  


          
  {step==0?  <div className="mt-[343px] flex w-[25%] flex-col gap-4 md:w-full">
              <div className="flex flex-col items-start gap-[7px]">
                <AuthText  size="lg" as="p" className="!font-audiowide !text-indigo-900">
                  eFXplus
                </AuthText>
                <AuthText size="s" as="p" className="w-full leading-[140%]">
                  Price-based FX data derived from Sell-Side Research & Refinitiv IFR Markets
                </AuthText>
              </div>
              <div className="ml-36 flex h-[9px] w-[39px] md:ml-0" />
            </div>:step==1?
          <div>
           <div style={{padding:40}} className="absolute left-[0.00px] top-[20%] m-auto flex w-[50%] flex-col gap-[78px] md:gap-[58px] sm:gap-[39px]">
            <div className="flex flex-col gap-[33px]">
              <div className="flex flex-col items-start gap-[3px]">
                <AuthText size="md" as="p" className="!font-audiowide !text-indigo-900">
                  Customize Currency Pair Notifications 
                </AuthText>
                <AuthText as="p" className="w-[80%] leading-[140%] md:w-full md:p-5">
                  <>
                    Default is set to receive emails of all currency pair recommendations
                    <br />
                    <br />
                    Full online access to the service, but no email notifications for new entries, adjustments, exits or
                    forecasts.
                  </>
                </AuthText>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <AuthText size="md" as="p" className="!font-audiowide !text-indigo-900">
                  Order Notifications
                </AuthText>
                <AuthText as="p">Limit notifications to new trades only.</AuthText>
              </div>
              <div className="flex w-[80%] flex-col items-start gap-[7px] md:w-full md:p-5">
                <AuthText size="md" as="p" className="!font-audiowide !text-indigo-900">
                  Notification Sounds 
                </AuthText>
                <AuthText as="p" className="w-full leading-[140%]">
                  <>
                    Select a sound to alert you when new notifications occur while on the Notifications tab.
                    <br />
                    <br />
                    Note: Trade notification sound will not play if you are on any other tab other than Notifications
                  </>
                </AuthText>
              </div>
            </div>
            <div className="flex w-[82%] gap-10 md:w-full md:p-5 sm:flex-col">
              <AuthHeading
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
              </AuthHeading>
              <AuthHeading
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
              </AuthHeading>
            </div>
          </div>
          </div>:step==2?
<div className="mt-[196px] flex w-[25%] flex-col gap-20 md:w-full md:gap-[60px] sm:gap-10">
              <div className="flex flex-col gap-[22px]">
                <div className="flex flex-col items-start gap-1">
                  <AuthText size="lg" as="p" className="!font-audiowide !text-indigo-900">
                    BASIC
                  </AuthText>
                  <AuthText size="s" as="p" className="!font-audiowide !text-gray-900_01">
                    WEB-BASED ACCESS ONLY
                  </AuthText>
                </div>
                <AuthText as="p" className="leading-[140%]">
                  Full online access to the service, but no email notifications for new entries, adjustments, exits or
                  forecasts.
                </AuthText>
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="flex flex-col gap-1">
                  <AuthText size="lg" as="p" className="!font-audiowide !text-indigo-900">
                    PREMIUM
                  </AuthText>
                  <AuthText size="s" as="p" className="!font-audiowide !text-gray-900_01">
                    INSTANT NOTIFICATIONS
                  </AuthText>
                </div>
                <AuthText as="p" className="leading-[140%]">
                  Full online access to the service, and the option of real-time email notifications when new entries
                  (trade ideas and forecasts) are published.
                </AuthText>
              </div>
            </div>:""}




   </>
  )
}

export default SideContant