import React from "react";
import { Button } from "../button";

export const TeamCard = ({ item, title }) => {
  return (
    <div className="bg-whte shadow-md rounded-md">
      <div className="bg-cyan-800 px-4 py-2 text-sm font-medium text-white rounded-md rounded-b-none text-center">
        {title}
      </div>
      {item &&
        item.length > 0 &&
        item.map((i) => (
          <div className="px-4 pb-2 text-sm text-gray-500">
            <div className="flex h-20 items-center">
              <div className="flex rounded-full">
                <div className="h-16 w-16 rounded-full bg-black overflow-hidden">
                  <img alt="i" src={i.image} className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col flex-1 ml-2">
                <label className="text-lg text-black font-bold">{i.name}</label>
                <label className="text-base text-black">
                  {i.experience} yrs of experience
                </label>
              </div>
              <div className="flex items-center justify-center px-2">
                <MenuButton />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

const MenuButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={"rgb(21 94 117)"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
      />
    </svg>
  );
};
