import React, { useState } from 'react'
import {AuthInput,AuthTextArea,AuthText, Button, CheckBox, Input, AuthHeading, Img, Text,Header,button } from "../../components";
import ApiCall from 'utils/Api';
import { toast } from 'react-toastify';
const LoginTab = () => {
   const [email,setemail]=useState("")
   const [password,setpassword]=useState("")
  const onsubmit =async()=>{
  

  try {
    console.log("🚀 ~ onsubmit ~ async:",email,password)
    
    let data=await  ApiCall.Api.post("user/login",{
        "email":email,
        "password":password
    })
  toast.success(data.data.message)
  localStorage.setItem("userData",data.data.accessToken)
    console.log("🚀 ~ onsubmit ~ data:", data)
  } catch (error) {
    console.log("🚀 ~ onsubmit ~ error.response.data.message:", error.response.data.message)

    toast.error(error.response.data.message)
    console.log("🚀 ~ onsubmit ~ error:", error)
    
  }
  }
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
                              value={email}
                              onChange={(e)=>{
                                console.log("================================",e)
                                setemail(e);
                              }}
                            />
                            <AuthInput
                              shape="round"
                              type="password"
                              name="password"
                              placeholder={`Password`}
                              value={password}
                              className="border border-white-A700_19 tracking-[0.40px] sm:px-5"
                              onChange={(e)=>{
                                setpassword(e);
                              }}
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
                          onClick={()=>{
                            console.log("yesssssssssssssssssssssssssssssssssssssss")
                            onsubmit()
                          }}
                        >
                          LOGIN
                        </button.AuthButton>
                      </div>
                    </div>
  )
}

export default LoginTab