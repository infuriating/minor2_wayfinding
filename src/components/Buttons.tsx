import { Tooltip } from "@nextui-org/react";
import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  x: number;
  y: number;
  buttonContent: string;
}

export default function Buttons({ size, x, y, buttonContent }: ButtonProps) {
  return (
    <div
      className="absolute cursor-pointer"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <Tooltip
        className="bg-darkpurple absolute rounded-md bg-opacity-50 py-1"
        style={{
          top: `${y - 30}px`,
        }}
        content={buttonContent}
      >
        <div className="flex flex-col">
          <div
            className={`bg-darkpurple absolute z-10 aspect-square h-10 rounded-full border-4 border-white shadow-2xl`}
          />
          <div className="absolute left-[12px] top-[30px] z-[9] aspect-square rotate-180 text-lg shadow-2xl">
            ▲
          </div>
        </div>
      </Tooltip>
    </div>
  );
}
