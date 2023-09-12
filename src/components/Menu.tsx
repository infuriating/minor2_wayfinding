import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="fixed bottom-4 z-20 ml-[5%] h-16 w-[90%] rounded-xl bg-white text-black">
      <div className="grid h-full grid-cols-3  text-2xl font-semibold">
        <Link href={"/"}>
          <div className="flex h-full items-center justify-center">
            <p>Home</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex h-full items-center justify-center">
            <p>Home</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex h-full items-center justify-center">
            <p>Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
