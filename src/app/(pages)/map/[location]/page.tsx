"use client";

import { Locations } from "@/lib/Locations";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Location: React.FC = () => {
  const pathname = usePathname();
  const [filteredLocation, setFilteredLocation] = useState(null);
  const locationName = pathname.split("/")[3];

  useEffect(() => {
    const filteredLocation = Locations.filter(
      (location) => location.name === locationName,
    );
    // setFilteredLocation(filteredLocation);
    console.log(filteredLocation);
  }, [locationName]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {filteredLocation || (
        <Link href={"/"}>
          <p className="w-max rounded-md bg-neutral-900 px-6 py-2 text-2xl font-medium transition-all hover:bg-neutral-800">
            This page is currently not functional, please return back to the
            homepage.
          </p>
        </Link>
      )}
    </div>
  );
};

export default Location;
