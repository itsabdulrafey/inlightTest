import React from 'react'
import {AuthInput,AuthTextArea,AuthText, Button, CheckBox, Input, AuthHeading, Img, Text,Header,button } from "../../components";

const Signup = ({setstep,step}) => {
  return (
     <div style={{marginTop:50}}>
     <div  className="flex w-[72%] items-center gap-3 md:w-full">
       <AuthHeading as="h3" className="mb-4 self-end tracking-[0.40px]">
         Step
       </AuthHeading>
       <div className="flex flex-1 items-center justify-between gap-5 rounded-lg border border-solid border-gray-900_66 bg-white-A700_33 p-[15px]">
         <div className="flex flex-wrap items-center gap-3">
           <AuthHeading
             size="s"
             as="h4"
             className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px] border border-solid border-white-A700 bg-indigo-A200 text-center tracking-[0.36px]"
           >
             {step}
           </AuthHeading>
           <AuthHeading as="h5" className="tracking-[0.40px]">
             Account Creation
           </AuthHeading>
         </div>
         <Img src="images/img_arrow_down_white_a700.svg" alt="arrowdown" className="h-[24px] w-[24px]" />
       </div>
     </div>
          <div style={{marginTop:50}} className="flex w-[92%] justify-between gap-5 md:w-full md:flex-col">
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
   <div style={{marginTop:70}}  className="flex w-[84%] justify-between gap-5 self-center md:w-full">
     <button.AuthButton
       color="black_900"
       size="lg"
       variant="fill"
       shape="round"
       className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] sm:px-5"
       onClick={()=>{

          setstep(step-1)
           }}
     >
       CANCEL
     </button.AuthButton>
     <button.AuthButton
       size="lg"
       variant="fill"
       shape="round"
       className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] !text-black-900 sm:px-5"
       onClick={()=>{

      setstep(step+1)
       }}
     >
       SUBMIT
     </button.AuthButton>
   </div>
   </div>
  )
}

export default Signup