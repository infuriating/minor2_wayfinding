import React from "react";
import { Locations } from "@/lib/Locations";
import Link from "next/link";

export default function page() {
  return (
    <>
      <p className="py-8 text-center text-3xl font-medium">
        Learn more about the <span className="font-bold">Destiny 2</span>{" "}
        locations here!
      </p>
      <div className="grid grid-cols-3 gap-x-2 gap-y-1 px-2 lg:grid-cols-5">
        {Locations.map((location) => (
          <Link href={`/map/${location.name}`} key={location.name}>
            <div className="my-2 flex h-16 w-full items-center justify-center rounded-md bg-neutral-800 px-4 py-2 text-center font-medium text-neutral-300 transition-all hover:bg-neutral-700">
              {location.name}
            </div>
          </Link>
        ))}
      </div>
      <Link href={`/map`} className="flex items-center justify-center">
        <p className="absolute bottom-[2rem] w-max cursor-pointer rounded-md bg-neutral-800 px-32 py-4 hover:bg-neutral-700">
          View the map
        </p>
      </Link>
    </>
  );
}
