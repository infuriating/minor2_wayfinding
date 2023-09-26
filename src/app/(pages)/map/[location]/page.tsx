import Buttons from "@/components/Buttons";
import PageTransition from "@/components/PageTransition";
import { Locations } from "@/lib/Locations";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { location: string };
}) {
  return {
    title: `Destiny 2 Wayfinding | ${params.location.replace("%20", " ")}`,
  };
}

export default function Page({ params }: { params: { location: string } }) {
  const location = Locations.find(
    (l) => l.name === params.location.replace("%20", " "),
  );

  if (!location) {
    return (
      <Link href={"/map"} className="flex h-screen items-center justify-center">
        <div className="w-max rounded-md bg-neutral-900 px-4 py-1 font-medium transition-all hover:bg-neutral-800">
          Location not found. Return to the map.
        </div>
      </Link>
    );
  }
  return (
    <>
      <PageTransition />
      <div className="p-8">
        <p className="text-2xl font-semibold">{location?.name}</p>
        <p className="tracking-tighter text-neutral-300">
          {location?.description}
        </p>
        <Image
          className="rounded-md pt-4"
          src={
            "/locations/destiny2_" +
            // @ts-ignore
            location?.name.replace(" ", "") +
            ".png"
          }
          alt={location?.name}
          height={500}
          width={500}
        />
        <Link href={`/map`} className="flex items-center justify-center">
          <p className="absolute bottom-[2rem] w-max cursor-pointer rounded-md bg-neutral-800 px-32 py-3 transition-all hover:bg-neutral-700">
            Return to the map
          </p>
        </Link>
      </div>
    </>
  );
}
