"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Locations } from "@/lib/Locations";
import Buttons from "./Buttons";
import Draggable from "react-draggable";

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
    <div className="h-screen w-screen">
      <Draggable>
        <div className="relative bottom-[350px] right-[400px] h-max w-max cursor-move">
          <Image
            draggable={false}
            src={"/images/destiny2_director.jpeg"}
            alt="The Director"
            height={1440}
            width={2560}
          />
          <div>
            {Locations.map((location) => {
              return (
                <div
                  key={location.name}
                  onClick={() => handleMenuOpen(location)}
                >
                  <Buttons x={location.x} y={location.y} />
                </div>
              );
            })}
          </div>
        </div>
      </Draggable>

      {menuOpen && (
        <div className="animate-slideInSmooth absolute right-0 top-0 z-20 h-screen w-[600px] items-center justify-center overflow-hidden rounded-md bg-black">
          <div className="flex flex-col gap-2 px-6 py-4">
            <p className="text-2xl font-semibold">
              {/* @ts-ignore */}
              {selectedLocation?.name}
            </p>
            <p>
              {/* @ts-ignore */}
              {selectedLocation?.description}
            </p>
            <Image
              // @ts-ignore
              src={"/images/destiny2_" + selectedLocation?.name + ".png"}
              // @ts-ignore
              alt={selectedLocation?.name}
              height={200}
              width={400}
            />
            <p
              className="absolute bottom-8 w-max cursor-pointer rounded-md bg-neutral-800 px-4 py-1 hover:bg-neutral-700"
              onClick={() => setMenuOpen(false)}
            >
              Close the menu
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
