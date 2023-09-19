"use client";

import Image from "next/image";
import React from "react";

export default function OutOfBounds() {
  return (
    <div className="fixed flex h-screen w-screen items-center justify-center">
      <Image
        className="fixed -z-20 h-screen w-screen object-cover blur-md"
        src={"/images/destiny2_director.jpeg"}
        alt="Destiny 2 Director"
        width={1920}
        height={1080}
        layout="intrinsic"
      />
      <button
        onClick={() => location.reload()}
        className="rounded-md bg-red-400 px-6 py-2 text-center"
      >
        <p className="text-6xl font-bold">Out of bounds</p>
        <p className="text-6xl font-bold">Please refresh the page.</p>
      </button>
    </div>
  );
}
