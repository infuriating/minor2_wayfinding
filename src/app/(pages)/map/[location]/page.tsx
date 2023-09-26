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
      <div className="relative grid place-items-center p-8 lg:grid-cols-2">
        <div className="max-w-lg rounded-sm bg-black bg-opacity-25 px-4 py-2 backdrop-blur-lg">
          <p className="text-2xl font-semibold">{location?.name}</p>
          <p className="tracking-tighter text-neutral-300">
            {location?.description}
          </p>
        </div>
        <Image
          className="pt-4"
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
        <Image
          className="absolute -z-10 h-full w-full rounded-md object-cover blur-md brightness-75 saturate-[50%]"
          src={
            "/locations/destiny2_" +
            // @ts-ignore
            location?.name.replace(" ", "") +
            ".png"
          }
          alt={location?.name}
          height={200}
          width={200}
        />
      </div>
      <Link href={`/map`} className="flex items-center justify-center">
        <p className="absolute bottom-[2rem] w-max cursor-pointer rounded-md bg-neutral-800 px-14 py-3 transition-all hover:bg-neutral-700">
          Return to the map
        </p>
      </Link>
    </>
  );
}
