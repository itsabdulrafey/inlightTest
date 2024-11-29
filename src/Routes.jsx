import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPageVTwo from "pages/LandingPageVTwo";
import PaymentTab from "pages/Registeration/StaoTabs/PaymentTab";
import Registeration from "pages/Registeration";
import Signup from "pages/Registeration/Signup";
import Payment from "pages/Registeration/StaoTabs/PaymentTab";
import ContactUs from "pages/ContactUs";
import JoinWeightList from "pages/JoinWeightList";
import VarifyEmail from "pages/VarifyEmail";
import MainLayout from "layout/MainLayout";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <LandingPageVTwo /> },
    { path: "/ContactUs", element: <ContactUs /> },
    { path: "/JoinWeightList", element: <JoinWeightList /> },
    {
      path: "/VarifyEmail/:id", // Adding :id to the path for dynamic URL
      element: <VarifyEmail />,
    },
    { path: "*", element: <NotFound /> },
    {
      path: "Registeration",
      element: <Registeration />,
      children: [
        {
          path: "Signup",
          element: <Signup />,
        },
        {
          path: "Payment",
          element: <Payment />,
        },
      ],
    },
    {
      path: "Payment",
      element: <PaymentTab />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
