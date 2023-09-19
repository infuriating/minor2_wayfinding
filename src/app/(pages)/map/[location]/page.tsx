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
    setFilteredLocation(filteredLocation);
    console.log(filteredLocation);
  }, [locationName]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {filteredLocation || <>undefinedd</>}
    </div>
  );
};

export default Location;
