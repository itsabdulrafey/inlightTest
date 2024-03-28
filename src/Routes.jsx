import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPageVTwo from "pages/LandingPageVTwo";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landingpagevtwo",
      element: <LandingPageVTwo />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
