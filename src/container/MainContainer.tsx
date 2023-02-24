import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components";
import { getEmployees } from "../reduxStore/companySlice";
import { useAppDispatch } from "../reduxStore/hooks";

const MainContainer = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [state, setState] = useState(0);
  console.log("location0", location);

  useEffect(() => {
    setState(location.state?.state);
  }, [location]);

  useEffect(() => {
    dispatch(getEmployees(1));
  }, []);

  return (
    <div className="min-h-screen min-w-full bg-gray-50">
      <Header />
      <div className="flex flex-col px-10 pt-20">
        <div className="flex justify-between w-full items-center px-6">
          <div className="flex flex-col items-center justify-end text-center">
            <CheckCircle fill={state > 0} />
          </div>
          <div
            className={`h-1 rounded ${
              state > 0 ? "bg-HeaderSideitems" : "bg-gray-600"
            } flex flex-1`}
          />
          <div className="flex flex-col items-center justify-end text-center">
            <CheckCircle fill={state > 1} />
          </div>
          <div
            className={`h-1 rounded ${
              state > 1 ? "bg-HeaderSideitems" : "bg-gray-600"
            } flex flex-1`}
          />
          <div className="flex flex-col items-center justify-end text-center">
            <CheckCircle fill={state > 2} />
          </div>
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col items-center justify-end text-center">
            <label className="text-sm font-semibold">Step 1</label>
            <label className="text-sm">Create Project</label>
          </div>
          <div className="flex flex-col items-center justify-end text-center">
            <label className="text-sm font-semibold">Step 2</label>
            <label className="text-sm">Add Team</label>
          </div>
          <div className="flex flex-col items-center justify-end text-center">
            <label className="text-sm font-semibold">Step 3</label>
            <label className="text-sm">Preview & Hire</label>
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
      className="w-6 h-6 md:h-12 md:w-12"
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
