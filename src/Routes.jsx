import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import MainScreen from "pages/MainScreen";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <MainScreen /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
