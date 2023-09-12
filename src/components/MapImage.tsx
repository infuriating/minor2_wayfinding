"use client";

import React from "react";
import Image from "next/image";
import { Locations } from "@/lib/Locations";
import Buttons from "./Buttons";
import { Tooltip } from "@nextui-org/react";

// credit to @Astraliguss on reddit for the concept art
// https://www.reddit.com/r/destiny2/comments/15mxlvl/i_saw_the_other_post_about_the_director_map_and_i/

function mapCoordinates(x: number, y: number) {}

export default function MapImage() {
  return (
    <div className="relative h-max w-max">
      <Image
        src={"/images/destiny2_director.jpeg"}
        alt="The Director"
        height={1440}
        width={2560}
      />
      {Locations.map((location) => {
        return (
          <Buttons
            x={location.x}
            y={location.y}
            key={location.name}
            buttonContent={location.name}
          />
        );
      })}
    </div>
  );
}
