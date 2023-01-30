import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components";

const MainContainer = () => {
  const location = useLocation();
  const [state, setState] = useState(0);
  console.log("location0", location);

  useEffect(() => {
    setState(location.state?.state);
  }, [location]);

  return (
    <div className="min-h-screen min-w-full bg-gray-50">
      <Header />
      <div className="flex flex-col px-10 pt-20">
        <div className="flex justify-between w-full h-24 px-24">
          <div className="flex flex-col items-center justify-end">
            <CheckCircle fill={state > 0} />
            <label>Step 1</label>
            <label>Create Project</label>
          </div>
          <div
            className={`h-1 rounded ${
              state > 0 ? "bg-HeaderSideitems" : "bg-gray-600"
            } flex flex-1 mx-2 mt-5`}
          />
          <div className="flex flex-col items-center justify-end">
            <CheckCircle fill={state > 1} />
            <label>Step 2</label>
            <label>Add Team</label>
          </div>
          <div
            className={`h-1 rounded ${
              state > 1 ? "bg-HeaderSideitems" : "bg-gray-600"
            } flex flex-1 mx-2 mt-5`}
          />
          <div className="flex flex-col items-center justify-end">
            <CheckCircle fill={state > 2} />
            <label>Step 3</label>
            <label>Preview & Hire</label>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainContainer;

const CheckCircle = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-24 h-24"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
        fill={fill ? "#0169FE" : "rgba(100,100,100)"}
      />
    </svg>
  );
};
