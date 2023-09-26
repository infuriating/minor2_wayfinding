import MapImage from "@/components/MapImage";
import React from "react";
import Menu from "@/components/Menu";
import PageTransition from "@/components/PageTransition";

export default function page() {
  return (
    <>
      <PageTransition />
      <div className="h-screen w-screen overflow-hidden">
        <MapImage />
        <Menu />
      </div>
    </>
  );
}
