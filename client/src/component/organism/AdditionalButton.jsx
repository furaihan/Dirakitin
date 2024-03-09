import React from "react";

export default function AdditionalButton({ text, icon, alt, onClick }) {
  return (
    <div className="flex h-20 w-auto items-center justify-center gap-9">
      <span className="rounded-md bg-[#4974A5] p-2.5 font-trispace text-5xl font-semibold text-white shadow-md">
        {text}
      </span>
      <button
        className="m-0 flex h-full w-full cursor-pointer items-center justify-center p-0"
        onClick={onClick}
      >
        <img
          className="m-0 flex h-full w-full items-center justify-center p-2.5"
          src={icon}
          alt={alt}
        />
      </button>
    </div>
  );
}
