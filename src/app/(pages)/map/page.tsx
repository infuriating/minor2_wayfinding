import MapImage from "@/components/MapImage";
import React from "react";
import Menu from "@/components/Menu";
import OutOfBounds from "@/components/OutOfBounds";
import PageTransition from "@/components/PageTransition";

export default function page() {
  return (
    <>
      <PageTransition />
      <OutOfBounds />
      <div className="h-screen w-screen overflow-hidden">
        <MapImage />
        {/* <Menu /> */}
      </div>
    </>
  );
}
