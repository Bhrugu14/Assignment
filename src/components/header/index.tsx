import React from "react";
// import IcBack from "../../assets/icons/ic-back.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { IcLogo } from "./contast";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="h-16 min-w-full bg-primary flex px-10 top-0 z-30 absolute">
      <div className="font-semibold text-black text-xl  flex items-center justify-center">
        <img src={IcLogo} alt={"pool"} />
      </div>
    </header>
  );
};
