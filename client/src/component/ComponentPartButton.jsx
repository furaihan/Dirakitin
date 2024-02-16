import React from "react";

export default function ComponentPartButton({ icon, text }) {
  return (
    <button className="flex h-14 cursor-pointer items-center justify-center gap-6 rounded-md bg-[#4974A5] px-3 text-sm font-medium shadow-md transition-colors hover:bg-[#F5F5F5] hover:text-[#06B6D4]">
      <span className="text-xl font-semibold leading-7 font-trispace">{text}</span>
      <img
        className="m-0 flex h-full w-full items-center justify-center py-1"
        src={icon}
        alt={text}
      />
    </button>
  );
}
