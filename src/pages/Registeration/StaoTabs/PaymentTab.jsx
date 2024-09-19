import React from 'react'
import {AuthInput,AuthTextArea,AuthText, Button, CheckBox, Input, AuthHeading, Img, Text,Header,button,Radio } from "../../../components";

const PaymentTab = () => {
     
  return (
    <>
    
      <div className="mt-[55px] flex w-[100%] flex-col items-start gap-[30px] md:w-full">
                  <AuthHeading size="xl" as="h6" className="tracking-[0.72px]">
                    Choose a Payment Method
                  </AuthHeading>
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
                    <AuthHeading as="h5" className="mb-[23px] self-end tracking-[0.40px]">
                      Prove You are a Human...
                    </AuthHeading>
                    <div className="flex w-[27%] flex-col items-start gap-1.5">
                      <AuthText as="p" className="tracking-[0.32px] !text-white-A700_e5">
                        Enter a code
                      </AuthText>
                      <AuthInput
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
                {/* <div className="mt-[131px] flex w-[84%] justify-between gap-5 self-center md:w-full">
                  <button.AuthButton
                    color="black_900"
                    size="lg"
                    variant="fill"
                    shape="round"
                    className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] sm:px-5"
                  >
                    CANCEL
                  </button.AuthButton>
                  <button.AuthButton
                    size="lg"
                    variant="fill"
                    shape="round"
                    className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] !text-black-900 sm:px-5"
                  >
                    SUBMIT
                  </button.AuthButton>
                </div> */}
    </>
  )
}

export default PaymentTab