import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MaintenanceTickets from "pages/MaintenanceTickets";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "maintenancetickets",
      element: <MaintenanceTickets />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
