import React from "react";

export default function PartButton({
  icon,
  text,
  positionStyle,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isIconOnLeft = true,
}) {
  return (
    <button
      className={`flex h-14 w-auto cursor-pointer items-center justify-center gap-5 rounded-md bg-[#4974A5] px-3 text-sm font-medium shadow-md transition-colors hover:bg-[#F5F5F5] hover:text-[#06B6D4] ${
        isIconOnLeft ? "flex-row" : "flex-row-reverse"
      }`}
      style={positionStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isIconOnLeft ? (
        <>
          <img
            className="m-0 flex h-full w-full items-center justify-center py-1"
            src={icon}
            alt={text}
          />
          <span className="font-trispace text-xl font-semibold leading-7">
            {text}
          </span>
        </>
      ) : (
        <>
          <span className="font-trispace text-xl font-semibold leading-7">
            {text}
          </span>
          <img
            className="m-0 flex h-full w-full items-center justify-center py-1"
            src={icon}
            alt={text}
          />
        </>
      )}
    </button>
  );
}