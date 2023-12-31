"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="fixed right-4 top-4 z-10 cursor-pointer rounded-xl bg-black p-4 active:bg-neutral-900"
        >
          <Image
            className="invert"
            src={"/images/destiny2_icon.png"}
            alt="Destiny 2 Icon"
            width={32}
            height={32}
          />
        </div>
        <div className="fixed right-4 top-4 z-[5] h-16 w-16 rounded-xl bg-black p-4 blur-lg" />
      </div>
      {menuOpen && (
        <div className="animate-mobileMenuIn fixed left-0 top-0 z-10 h-screen w-64 bg-black">
          <div className="grid grid-cols-1 gap-2 py-12 text-lg font-semibold">
            <Link href={"/"}>
              <div className="relative flex h-full items-center justify-center">
                <p className="cursor-pointer rounded-md bg-neutral-800 px-4 py-2 transition-all hover:bg-neutral-700">
                  Home
                </p>
              </div>
            </Link>
            <Link href={"/locations"}>
              <div className="flex h-full items-center justify-center">
                <p className="cursor-pointer rounded-md bg-neutral-800 px-4 py-2 transition-all hover:bg-neutral-700">
                  Locations
                </p>
              </div>
            </Link>
            <Link href={"https://github.com/infuriating/minor2_wayfinding"}>
              <div className="flex h-full items-center justify-center">
                <p className="cursor-pointer rounded-md bg-neutral-800 px-4 py-2 transition-all hover:bg-neutral-700">
                  Repository
                </p>
              </div>
            </Link>
            <div className="absolute bottom-4 pl-12">
              <Link href={"https://infs.world"} className="text-sm">
                <p>
                  powered by
                  <span className="bg-gradient-to-r from-blue-500 to-fuchsia-400 bg-clip-text text-transparent">
                    {" "}
                    infs.world
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* PC */}
      <div className="hidden md:block">
        <div className="fixed bottom-0 z-10 h-16 w-full bg-black bg-opacity-10 backdrop-blur-sm">
          <div className="text-md grid h-full grid-cols-3 font-semibold">
            <Link href={"/"}>
              <div className="flex h-full items-center justify-center">
                <p>Home</p>
              </div>
            </Link>
            <Link href={"/locations"}>
              <div className="flex h-full items-center justify-center">
                <p>Locations</p>
              </div>
            </Link>
            <Link href={"https://github.com/infuriating/minor2_wayfinding"}>
              <div className="flex h-full items-center justify-center">
                <p>Repository</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="fixed bottom-0 z-[9] h-20 w-full bg-black bg-opacity-70 blur-2xl"></div>
      </div>
    </>
  );
}
