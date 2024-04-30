import React from 'react'
import {AuthInput,AuthTextArea,AuthText, Button, CheckBox, Input, AuthHeading, Img, Text,Header,button } from "../../components";

const PreRegisteration = () => {
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
           <AuthTextArea
             shape="round"
             type="textarea"
             name="password"
             placeholder={`Type message`}
             className="border border-white-A700_19 tracking-[0.40px] sm:px-5"
           />
           
         </div>
      
       </div>
       <button.AuthButton
         size="lg"
         variant="fill"
         shape="round"
         className="mr-[23px] min-w-[480px] border border-white-A700_19 tracking-[0.96px] md:mr-0 sm:px-5"
       >
         SEND MESSAGE
       </button.AuthButton>
     </div>
   </div>
  )
}

export default PreRegisteration