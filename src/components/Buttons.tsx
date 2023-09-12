import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  x: number;
  y: number;
}

export default function Buttons({ size, x, y }: ButtonProps) {
  return (
    <div
      className="absolute cursor-pointer"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div className="flex flex-col">
        <div
          className={`bg-darkpurple absolute z-10 aspect-square h-10 rounded-full border-4 border-white shadow-2xl`}
        />
        <div className="absolute left-[12px] top-[30px] z-[9] aspect-square rotate-180 text-lg shadow-2xl">
          ▲
        </div>
      </div>
    </div>
  );
}
