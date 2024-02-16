import React from "react";

export default function AdditionalButton({ text, icon, alt }) {
  return (
    <button className="flex h-20 w-auto cursor-pointer items-center justify-center gap-3 rounded-md bg-[#4974A5] p-2.5 shadow-md">
      <span className="font-trispace text-5xl font-semibold text-white">
        {text}
      </span>
      <img
        className="justify-centerp-0 m-0 flex h-full w-full items-center"
        src={icon}
        alt={alt}
      />
    </button>
  );
}
