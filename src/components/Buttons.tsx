import { Tooltip } from "@nextui-org/react";
import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  x: number;
  y: number;
  buttonContent: string;
}

export default function Buttons({ size, x, y, buttonContent }: ButtonProps) {
  function openInfoMenu() {}

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <Tooltip
        className="bg-darkpurple absolute rounded-md bg-opacity-50 py-1 backdrop-blur-md"
        style={{
          top: `${y - 30}px`,
        }}
        color={`secondary`}
        content={buttonContent}
      >
        <div className="flex flex-col">
          <div
            className={`bg-darkpurple absolute z-10 aspect-square h-8 rounded-full border-4 border-white`}
          />
          <div className="absolute left-2 top-6 z-[9] aspect-square rotate-180">
            ▲
          </div>
        </div>
      </Tooltip>
    </div>
  );
}
