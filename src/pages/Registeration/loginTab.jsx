import React from 'react'
import {AuthInput,AuthTextArea,AuthText, Button, CheckBox, Input, AuthHeading, Img, Text,Header,button } from "../../components";

const LoginTab = () => {
     console.log("yesssssssssssssssssssssssssssssssssssssss")
  return (
     <div style={{marginTop:50}} className="w-full">
                      <div className="flex flex-col items-end gap-[84px] md:gap-[63px] sm:gap-[42px]">
                        <div className="flex flex-col gap-5 self-stretch">
                          <div className="flex flex-col gap-12">
                            <AuthInput
                              shape="round"
                              type="email"
                              name="email"
                              placeholder={`Email`}
                              className="border border-white-A700_19 tracking-[0.40px] sm:px-5"
                            />
                            <AuthInput
                              shape="round"
                              type="password"
                              name="password"
                              placeholder={`Password`}
                              className="border border-white-A700_19 tracking-[0.40px] sm:px-5"
                            />
                          </div>
                          <CheckBox
                            name="rememberpasswor"
                            label="Remember Password"
                            id="rememberpasswor"
                            className="gap-3 p-px text-left text-base tracking-[0.32px] text-white-A700"
                          />
                        </div>
                        <button.AuthButton
                          size="lg"
                          variant="fill"
                          shape="round"
                          className="mr-[23px] min-w-[480px] border border-white-A700_19 tracking-[0.96px] md:mr-0 sm:px-5"
                        >
                          LOGIN
                        </button.AuthButton>
                      </div>
                    </div>
  )
}

export default LoginTab