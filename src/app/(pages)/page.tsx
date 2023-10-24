import Link from "next/link";
import { RetrieveQuotes } from "@/lib/RetrieveQuotes";

export default async function Home() {
  const quotes = await RetrieveQuotes();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  console.log(quote);

  return (
    <>
      <div className="absolute z-10 h-screen w-screen animate-darkenIn bg-neutral-900 backdrop-blur-lg">
        <div className="flex h-full items-center justify-center">
          <p>{quote ? quote.text : "envision the darkness within you."}</p>
        </div>
      </div>
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <Link href={"/map"}>
          <p className="w-max rounded-md bg-neutral-900 px-4 py-1 font-medium transition-all hover:bg-neutral-800">
            Enter the <span className="font-bold">Director</span>
          </p>
        </Link>
        <Link href={"/locations"}>
          <p className="w-max rounded-md bg-neutral-900 px-4 py-1 font-medium transition-all hover:bg-neutral-800">
            View all the <span className="font-bold">Destiny 2</span> locations
          </p>
        </Link>
      </div>
    </>
  );
}
