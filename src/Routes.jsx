import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPageVTwo from "pages/LandingPageVTwo";
import PaymentTab from "pages/Registeration/StaoTabs/PaymentTab";
import Registeration from "pages/Registeration";
import Signup from "pages/Registeration/Signup";
import Payment from "pages/Registeration/StaoTabs/PaymentTab";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <LandingPageVTwo /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landingpagevtwo",
      element: <LandingPageVTwo />,
    },
    {
      path: "Registeration",
      element: <Registeration />,
      children: [
        {
          path: "Signup",
          element: <Signup />
        },
        {
          path: "Payment",
          element: <Payment />
        }
      ]
    },
    {
      path: "Payment",
      element: <PaymentTab />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
