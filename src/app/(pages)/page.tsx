"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="animate-darkenIn absolute z-10 h-screen w-screen bg-neutral-900 backdrop-blur-lg">
        <div className="flex h-full items-center justify-center">
          <p>envision the darkness within you.</p>
        </div>
      </div>
      <div className="flex h-screen flex-col items-center justify-center">
        <Link href={"/map"}>
          <p className="w-max rounded-md bg-neutral-900 px-4 py-1 font-medium transition-all hover:bg-neutral-800">
            Enter the director
          </p>
        </Link>
      </div>
    </>
  );
}
