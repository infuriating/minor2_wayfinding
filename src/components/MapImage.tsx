"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Locations } from "@/lib/Locations";
import Buttons from "./Buttons";
import Draggable from "react-draggable";
import Link from "next/link";

// credit to @Astraliguss on reddit for the concept art
// https://www.reddit.com/r/destiny2/comments/15mxlvl/i_saw_the_other_post_about_the_director_map_and_i/

export default function MapImage() {
  let [menuOpen, setMenuOpen] = useState(false);
  let [selectedLocation, setSelectedLocation] = useState(null);
  let [scale, setScale] = useState(1);

  function handleMenuOpen(location: any) {
    setMenuOpen(false);
    setTimeout(() => {
      setMenuOpen(true);
    }, 10);

    setSelectedLocation(location);

    console.table(selectedLocation);
  }

  function handleScaleOnScroll(e: any) {
    if (scale > 0.7 && e.deltaY > 0) {
      setScale(scale - 0.075);
    } else if (scale < 3 && e.deltaY < 0) {
      setScale(scale + 0.05);
    }
  }

  return (
    <div className="h-screen w-screen">
      <Draggable>
        <div
          className="relative bottom-[350px] right-[400px] h-max w-max cursor-move"
          style={{
            scale: `${scale}`,
          }}
          onWheel={(e) => handleScaleOnScroll(e)}
        >
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
        <div className="absolute right-0 top-0 z-20 h-screen w-screen animate-slideInSmooth items-center justify-center overflow-hidden rounded-md bg-black md:w-[600px]">
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
              className="rounded-md"
              src={
                "/locations/destiny2_" +
                // @ts-ignore
                selectedLocation?.name.replace(" ", "").toLowerCase() +
                ".png"
              }
              // @ts-ignore
              alt={selectedLocation?.name}
              height={200}
              width={600}
            />
            {/* @ts-ignore */}
            <Link href={`/map/${selectedLocation?.name}`}>
              <p className="absolute bottom-[4.25rem] w-max cursor-pointer rounded-md bg-neutral-800 px-4 py-1 hover:bg-neutral-700">
                Find out more about {/* @ts-ignore */}
                <span className="font-bold">{selectedLocation?.name}</span>
              </p>
            </Link>
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
