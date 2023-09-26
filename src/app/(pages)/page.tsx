"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute z-10 h-screen w-screen animate-darkenIn bg-neutral-900 backdrop-blur-lg">
        <div className="flex h-full items-center justify-center">
          <p>envision the darkness within you.</p>
        </div>
      </div>
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <Link href={"/map"}>
          <p className="w-max rounded-md bg-neutral-900 px-4 py-1 font-medium transition-all hover:bg-neutral-800">
            Enter the <span className="font-bold">Director</span>
          </p>
        </Link>
        <Link href={"/locations"}>
          <p className="w-max rounded-md bg-neutral-900 px-4 py-1 font-medium transition-all hover:bg-neutral-800">
            View all the <span className="font-bold">Destiny 2</span> locations
          </p>
        </Link>
      </div>
    </>
  );
}
