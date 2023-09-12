"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Locations } from "@/lib/Locations";
import Buttons from "./Buttons";

// credit to @Astraliguss on reddit for the concept art
// https://www.reddit.com/r/destiny2/comments/15mxlvl/i_saw_the_other_post_about_the_director_map_and_i/

export default function MapImage() {
  let [menuOpen, setMenuOpen] = useState(false);
  let [selectedLocation, setSelectedLocation] = useState(null);

  function handleMenuOpen(location: any) {
    setMenuOpen(true);
    setSelectedLocation(location);
  }

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
          <div key={location.name} onClick={() => handleMenuOpen(location)}>
            <Buttons
              x={location.x}
              y={location.y}
              buttonContent={location.name}
            />
          </div>
        );
      })}

      {menuOpen && (
        <div className="fixed z-40 flex h-screen w-screen items-center justify-center">
          {/* @ts-ignore */}
          {selectedLocation?.name}
          {/* @ts-ignore */}
          {selectedLocation?.description}
        </div>
      )}
    </div>
  );
}
