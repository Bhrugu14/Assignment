import React from "react";

export const Button = ({
  title,
  icon,
  disabled,
  onClick,
  id,
  secondary,
  extraClass,
  white,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`bg-PrimaryButton flex py-1 px-4 rounded-md active:scale-95 ${
        extraClass || ""
      } ${secondary && "bg-red-900"}  ${white && "bg-white"} ${
        disabled && "pointer-events-none opacity-60"
      }`}
    >
      <div className="">
        <label
          className={`font-semibold text-white text-base cursor-pointer ${
            secondary && "text-white"
          } ${white && "text-primary"}`}
        >
          {title}
        </label>
        {icon && (
          <img src={icon} className="h-6 w-6 object-contain ml-2" alt="icon" />
        )}
      </div>
    </button>
  );
};
