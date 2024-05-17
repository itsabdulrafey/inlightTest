import React, { useEffect, useState } from "react";
import {
  AuthInput,
  AuthTextArea,
  AuthText,
  Button,
  CheckBox,
  Input,
  AuthHeading,
  Img,
  Text,
  Header,
  button,
  DropDown
} from "../../components";
import { useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PaymentTab from "./StaoTabs/PaymentTab";
import "../../assets/TableStyle.css"
import "../../assets/SubscriptionPlans.css"
import ApiCall from "utils/Api";
import moment from 'moment-timezone';
import { toast } from "react-toastify";

const Signup = ({ setstep, step }) => {
  const [selectedPlan, setSelectedPlan] = useState('Basic');
  const getTimeZoneOptions = () => {
    const timeZones = moment.tz.names();  // Get all time zone names
    return timeZones.map(zone => ({
      value: zone,
      label: zone  // You can customize the label here if needed
    }));
  };
  const getSecurityQuestions = () => {
    // Extended list of security questions, including dummy questions
    const questions = [
        "What is your mother's maiden name?",
        "What was the name of your first pet?",
        "What was the make and model of your first car?",
        "In what city were you born?",
        "What is your favorite movie?",
        "What is your father's middle name?",
        "What was your high school mascot?",
        "What year did you graduate from High School?",
        "What is the name of your first grade teacher?",
        "What was the street name you lived on as a child?",
        "What was your childhood nickname?",
        "What is the middle name of your youngest child?",
        "What is your oldest sibling's middle name?",
        "What school did you attend for sixth grade?",
        "What was your dream job as a child?",
        "What is the country of your ultimate dream vacation?",
        "What is the first name of the boy or girl that you first kissed?",
        "What was the last name of your third-grade teacher?",
        "In what town was your first job?",
        "What was the name of the hospital where you were born?"
    ];

    // Map each question to an object with value and label
    return questions.map((question, index) => ({
        value: question, // Simple unique identifier for the value
        label: question // The question itself as the label
    }));
};

  const [timeZones, setTimeZones] = useState([]);  // Holds the time zone options
  const [questions, setquestions] = useState([]);  // Holds the time zone options

  const [selectedTimeZone, setSelectedTimeZone] = useState('');  // Holds the selected time zone

  useEffect(() => {
    // Fetch time zones and update state
    const options = getTimeZoneOptions();
    const QUESTIONS= getSecurityQuestions();
    setquestions(QUESTIONS)
    setTimeZones(options);
    setSelectedTimeZone(options.length > 0 ? options[0].value : '');  // Default to the first time zone
  }, []);

  const handleTimeZoneChange = (newTimeZone) => {
    console.log("🚀 ~ handleTimeZoneChange ~ newTimeZone:", newTimeZone)
    setSelectedTimeZone(newTimeZone);  // Update the selected time zone state
  };



  console.log("🚀 ~ Signup ~ timeZones:", timeZones)
  const [SignUp, setSignUp] = useState({
    "firstname": "",
    "lastname": "",
    "email": "",
    "password": "",
    "securityQuestion": "",
    "confirmPassword":"",
    "brokerBank": "",
    "timeZone":"",
    "role": "" // Sample ObjectId, replace with an actual ObjectId from your database
});
const handleChange = (value,name) => {
  console.log("🚀 ~ handleChange ~ name:", name)
  console.log("🚀 ~ handleChange ~ value:", value)
  setSignUp(prevState => ({
    ...prevState,
    [name]: value
  }));
};
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  const numberOfTabs = 4; // Total number of components

const handleButtonClick = () => {
  // Only increment tabIndex if it is less than 2
  if (tabIndex < 3) {
    const nextTabIndex = tabIndex + 1;
    setTabIndex(nextTabIndex);
  }
  // No else part needed, tabIndex remains at 2 if it's already 2 or more
};
  const data = [
    { name: "Orders", instant: false, daily: false, time: "5:15 PM", none: true },
    { name: "Insights & Options Board", instant: false, daily: false, time: "5:15 PM", none: true },
    { name: "TOTW", instant: false, daily: false, time: "5:15 PM", none: true },
    { name: "Forecasts", instant: false, daily: false, time: "5:15 PM", none: true },
    { name: "Quant", instant: false, daily: false, time: "5:15 PM", none: true },
    { name: "Data Preview", instant: false, daily: false, time: "5:15 PM", none: true }
];
const onsubmit =async()=>{
  console.log("🚀 ~ onsubmit ~ SignUp:", SignUp)


  try {
    // console.log("🚀 ~ onsubmit ~ async:",email,password)
    
    let data=await  ApiCall.Api.post("user/signUp",{
      "firstname": SignUp.firstname,
      "lastname": SignUp.lastname,
      "email": SignUp.email,
      "password": SignUp.password,
      "securityQuestion": SignUp.securityQuestion,
      "timeZone":SignUp.timeZone,
      "brokerBank": SignUp.brokerBank,
      "role": "6279b0f19b0f1b7a27d7acbb" // Sample ObjectId, replace with an actual ObjectId from your database
  })
  setSignUp({
    "firstname": "",
    "lastname": "",
    "email": "",
    "password": "",
    "securityQuestion": "",
    "confirmPassword":"",
    "brokerBank": "",
    "timeZone":"",
    "role": "" // Sample ObjectId, replace with an actual ObjectId from your database
})
  toast.success(data.data.message)
  handleButtonClick();

    console.log("🚀 ~ onsubmit ~ data:", data)
  } catch (error) {
    console.log("🚀 ~ onsubmit ~ error.response.data.message:", error)
    if (error?.response?.data?.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error(error.message);
    }
    // toast.error(error.response.data.message)
    console.log("🚀 ~ onsubmit ~ error:", error)
    
  }
  }
  return (
    <>
      {/* <div style={{marginTop:50}}>
   

     <TabPanel value={value}  index={0}>
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
   </TabPanel>
  
   <div style={{marginTop:70}}  className="flex w-[84%] justify-between gap-5 self-center md:w-full">
     <button.AuthButton
       color="black_900"
       size="lg"
       variant="fill"
       shape="round"
       className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] sm:px-5"
       onClick={()=>{
     
          setstep(step-1)
           console.log("🚀 ~ Signup ~ step:", step)
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
        console.log("YESSSSSSSSSSSSSSSSSSSSSSSSSSSS")
        handleButtonClick()
        // Navigate("/PaymentTab")
      setstep(step+1)
       }}
     >
       SUBMIT
     </button.AuthButton>
   </div>
   </div> */}

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div style={{marginBottom:10,marginTop:35}} className="flex w-[72%] items-center gap-3 md:w-full">
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
            <Img
              src="images/img_arrow_down_white_a700.svg"
              alt="arrowdown"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
        <TabPanel>
          <>
            <div
              style={{ marginTop: 50 }}
              className="flex w-[92%] justify-between gap-5 md:w-full md:flex-col"
            >
              <div className="flex w-[43%] flex-col gap-10 md:w-full">
                <Input
                  shape="round"
                  type="text"
                  name="firstName"
                  value={SignUp.firstname}
                  placeholder={`First Name`}
                  className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                  onChange={(e) => handleChange(e,"firstname")}
                />
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  value={SignUp.email}
                  placeholder={`Email`}
                  className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                  onChange={(e) => handleChange(e,"email")}

                />
                {/* <Input
                  shape="round"
                  name="securityQuestion"
                  value={SignUp.securityQuestion}
                  placeholder={`Security Question`}
                  className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                  onChange={(e) => handleChange(e)}

                /> */}
                <DropDown
       placeholder={`Security Question`}
        name="securityQuestion"
        value={SignUp.securityQuestion}
        options={questions}
        onChange={(e)=>{
          handleChange(e,"securityQuestion")

        }}
      
        size="md"
        variant="fill"
        color="white_A700_33"
      />
             

<DropDown
        name="timeZone"
        options={timeZones}
        value={SignUp.timeZone}
        onChange={(e)=>{
          handleChange(e,"timeZone")

        }}
      
        size="md"
        variant="fill"
        color="white_A700_33"
      />
      
              </div>
              <div className="flex w-[43%] flex-col gap-10 md:w-full">
                <Input
                  shape="round"
                  type="text"
                  name="lastname"
                  placeholder={`Last Name`}
                  value={SignUp.lastname}
                  className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                  onChange={(e) => handleChange(e,"lastname")}

                />
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  value={SignUp.password}
                  placeholder={`Password`}
                  className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                  onChange={(e) => handleChange(e,"password")}

                />
                <Input
                  shape="round"
                  type="password"
                  name="confirmPassword"
                  value={SignUp.confirmPassword}
                  placeholder={`Confirm Password`}
                  className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                  onChange={(e) => handleChange(e,"confirmPassword")}

                />
                <Input
                  shape="round"
                  name="brokerBank"
                  value={SignUp.brokerBank}
                  placeholder={`Your FX Broker/Bank`}
                  className="border border-white-A700_19 tracking-[0.40px] sm:pr-5"
                  onChange={(e) => handleChange(e,"brokerBank")}

                />
              </div>
            </div>
          </>
        </TabPanel>
        <TabPanel>
          <PaymentTab />
        </TabPanel>
        <TabPanel>
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th className="firstline"></th>
                        <th className="header" >INSTANT</th>
                        <th className="header">DAILY</th>
                        <th className="header">EST Time zone</th>
                        <th className="header">None</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="firstline">{item.name}</td>
                            <td><input type="radio" name={item.name + "selection"} checked={item.instant} /></td>
                            <td><input type="radio" name={item.name + "selection"} checked={item.daily} /></td>
                            <td>{item.time}</td>
                            <td><input type="radio" name={item.name + "selection"} checked={item.none} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </TabPanel>

<TabPanel>
<div className="subscription-container">
      <h2 style={{fontWeight:700,fontSize:23}} className="subscription-title">SELECT A PLAN THAT SUITS YOU</h2>
      <table className="subscription-table">
        <thead>
          <tr className="subscription-header">
            <th style={{border:"none"}}></th>
            <th>First 3 Days</th>
            <th>MONTHLY</th>
            <th>ANNUALLY</th>
          </tr>
        </thead>
        <tbody>
          <tr className="subscription-row">
            <td style={{border:"none"}}><input type="radio" name="plan" checked={selectedPlan === 'Basic'} onChange={() => handleSelectPlan('Basic')} /> Basic</td>
            <td>$10</td>
            <td>$10</td>
            <td>-</td>
          </tr>
          <tr className="subscription-row">
            <td style={{border:"none"}}><input type="radio" name="plan" checked={selectedPlan === 'Premium - Monthly'} onChange={() => handleSelectPlan('Premium - Monthly')} /> Premium - Monthly</td>
            <td>$10</td>
            <td>$129</td>
            <td>-</td>
          </tr>
          <tr className="subscription-row">
            <td style={{border:"none"}}><input type="radio" name="plan" checked={selectedPlan === 'Premium - Annually'} onChange={() => handleSelectPlan('Premium - Annually')} /> Premium - Annually</td>
            <td>$10</td>
            <td>-</td>
            <td>$1199</td>
          </tr>
        </tbody>
      </table>
      <p className="subscription-advice">We suggest you choose the Premium plan for your trial period and then you can choose the plan that best fits your needs.</p>
    </div>
</TabPanel>



      </Tabs>

      <div
        style={{ marginTop: 70 }}
        className="flex w-[84%] justify-between gap-5 self-center md:w-full"
      >
        <button.AuthButton
          color="black_900"
          size="lg"
          variant="fill"
          shape="round"
          className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] sm:px-5"
          onClick={() => {
            setstep(1);
            setTabIndex(0);
            console.log("🚀 ~ Signup ~ step:", step);
          }}
        >
          CANCEL
        </button.AuthButton>
        <button.AuthButton
          size="lg"
          variant="fill"
          shape="round"
          className="min-w-[320px] border border-white-A700_19 tracking-[0.96px] !text-black-900 sm:px-5"
          onClick={() => {
            console.log("YESSSSSSSSSSSSSSSSSSSSSSSSSSSS");
            onsubmit()
            // Navigate("/PaymentTab")
            if(step!==4){
              setstep(step + 1);
            }
            
          }}
        >
          SUBMIT
        </button.AuthButton>
      </div>
      {/* <button style={{color:"white"}} onClick={handleButtonClick}>
          {tabIndex < numberOfTabs - 1 ? "Next" : "Submit"}
        </button> */}
    </>
  );
};

export default Signup;
