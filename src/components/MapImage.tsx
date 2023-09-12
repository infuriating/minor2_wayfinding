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
    setMenuOpen(false);
    setTimeout(() => {
      setMenuOpen(true);
    }, 10);

    setSelectedLocation(location);

    console.table(selectedLocation);
  }

  return (
    <>
      <div className="relative h-max w-max">
        <Image
          src={"/images/destiny2_director.jpeg"}
          alt="The Director"
          height={1440}
          width={2560}
        />
        <div>
          {Locations.map((location) => {
            return (
              <div key={location.name} onClick={() => handleMenuOpen(location)}>
                <Buttons x={location.x} y={location.y} />
              </div>
            );
          })}
        </div>
      </div>

      {menuOpen && (
        <div
          className="animate-opacityIn absolute z-20 w-[400px] items-center justify-center rounded-md bg-black px-6 py-2"
          style={{
            // @ts-ignore
            top: selectedLocation?.y - 190 + "px",
            // @ts-ignore
            left: selectedLocation?.x - 175 + "px",
          }}
        >
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">
              {/* @ts-ignore */}
              {selectedLocation?.name}
            </p>
            <p>
              {/* @ts-ignore */}
              {selectedLocation?.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
