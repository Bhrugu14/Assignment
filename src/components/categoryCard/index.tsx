import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Button } from "../button";
export const CategoryCard = ({ item, extraClass, AddTeam }) => {
  return (
    <div
      className={`mx-auto w-full max-w-md rounded-2xl bg-white shadow-lg ${extraClass}`}
    >
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between ${
                !open ? "rounded-lg" : "rounded-b-none"
              } bg-PrimaryButton px-4 py-2 text-left text-sm font-medium text-white focus-within:outline-none focus-visible::outline-none`}
            >
              <span>{item.title}</span>
              {!open ? <Plus /> : <Minus />}
            </Disclosure.Button>
            {React.Children.toArray(
              item.data.map(
                (
                  i: {
                    image: string | undefined;
                    name:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                    experience: any;
                    isSelected: any;
                  },
                  k: any
                ) => (
                  <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500 border-b">
                    <div className="flex h-20 items-center">
                      <div className="flex">
                        <div className="h-16 w-16 rounded-full bg-black overflow-hidden">
                          <img alt="i" src={i.image} className="object-cover" />
                        </div>
                      </div>
                      <div className="flex flex-col flex-1  ml-2">
                        <label className="text-lg text-black font-bold">
                          {i.name}
                        </label>
                        <label className="text-base text-black">{`${i.experience} yrs experience`}</label>
                      </div>
                      <div className="flex items-center justify-center px-2">
                        <Button
                          title={i.isSelected ? "Remove" : "Add"}
                          onClick={() => AddTeam(k)}
                          icon={undefined}
                          disabled={undefined}
                          id={undefined}
                          secondary={i.isSelected}
                          extraClass={undefined}
                          white={undefined}
                        />
                      </div>
                    </div>
                  </Disclosure.Panel>
                )
              )
            )}
          </>
        )}
      </Disclosure>
    </div>
  );
};
const Minus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
const Plus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
