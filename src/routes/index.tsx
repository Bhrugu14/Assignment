import * as React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainContainer from "../container/MainContainer";
import { AddTeam, CreateProject, ErrorElement, Hire } from "../pages";
// import {
//   Donation,
//   DonationDetails,
//   ErrorElement,
//   Payment,
//   SignIn,
//   Success,
// } from "../pages";

const router = createBrowserRouter([
  {
    element: <MainContainer />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Navigate to="/createProject" state={{ state: 0 }} />,
      },
      {
        path: "/createProject",
        element: <CreateProject />,
      },
      {
        path: "/addTeam",
        element: <AddTeam />,
      },
      {
        path: "/hire",
        element: <Hire />,
      },
    ],
  },
]);

export default router;
