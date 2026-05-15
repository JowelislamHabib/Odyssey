import React from "react";
import DestinationCard from "../Components/DestinationCard";
import { LuSearch, LuFilter } from "react-icons/lu";
import { Input, Button } from "@heroui/react";

const DestinationPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
    cache: "no-store",
  });
  const destinations = await res.json();

  return (
    <div className="container mx-auto px-6 lg:px-10 py-24 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sky-900">
            <div className="h-1 w-12 bg-sky-900" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
              Global Catalog
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 uppercase tracking-tighter leading-none">
            All <br className="md:hidden" /> Destinations
          </h1>
          <p className="text-sky-900/60 font-bold uppercase text-[10px] tracking-[0.2em]">
            Exploring {destinations?.length} curated world-class experiences
          </p>
        </div>

        <div className="flex w-full md:w-auto gap-3">
          <div className="relative w-full md:w-80 group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-sky-900 group-focus-within:text-sky-600 transition-colors">
              <LuSearch size={18} />
            </div>
            <Input
              type="text"
              placeholder="SEARCH DESTINATIONS..."
              className="h-14 w-full bg-sky-50/50 border-none rounded-xl pl-12 font-bold text-[10px] tracking-widest uppercase text-sky-900 placeholder:text-sky-900/40 focus:bg-white focus:ring-2 focus:ring-sky-900/10 transition-all"
            />
          </div>
          <Button
            isIconOnly
            className="h-14 w-14 min-w-14 rounded-xl bg-sky-900 text-white hover:bg-white hover:text-sky-900 border-2 border-sky-900 transition-all duration-300 active:scale-90 shadow-xl shadow-sky-900/10"
          >
            <LuFilter size={20} />
          </Button>
        </div>
      </div>

      <div className="flex gap-16 mb-16 pb-12 border-b border-sky-100">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-sky-900/50 uppercase tracking-[0.3em]">
            Total Trips
          </span>
          <span className="text-4xl font-bold text-sky-900 tracking-tighter">
            {destinations.length}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-sky-900/50 uppercase tracking-[0.3em]">
            Countries
          </span>
          <span className="text-4xl font-bold text-sky-900 tracking-tighter">
            {new Set(destinations.map((d) => d.country)).size}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
        {destinations.map((item) => (
          <DestinationCard key={item._id} item={item} />
        ))}
      </div>

      {destinations.length === 0 && (
        <div className="py-32 text-center bg-sky-50/30 rounded-2xl border border-sky-100 flex flex-col items-center gap-6">
          <div className="h-20 w-20 bg-white rounded-2xl shadow-xl shadow-sky-900/5 flex items-center justify-center text-sky-900">
            <LuSearch size={32} />
          </div>
          <div className="space-y-2">
            <p className="text-sky-900 font-bold uppercase tracking-[0.4em] text-[10px]">
              No results found
            </p>
            <p className="text-sky-900/40 font-medium text-sm">
              Try adjusting your search or filters to find your next odyssey.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationPage;
