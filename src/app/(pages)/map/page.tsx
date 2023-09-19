import MapImage from "@/components/MapImage";
import React from "react";
import Menu from "@/components/Menu";
import OutOfBounds from "@/components/OutOfBounds";

export default function page() {
  return (
    <>
      <OutOfBounds />
      <div className="h-screen w-screen overflow-hidden">
        <MapImage />
        {/* <Menu /> */}
      </div>
    </>
  );
}
