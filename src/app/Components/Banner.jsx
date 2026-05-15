import React from "react";
import { Button, Separator } from "@heroui/react";
import {
  LuSearch,
  LuMapPin,
  LuCalendar,
  LuWallet,
  LuUsers,
} from "react-icons/lu";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative flex min-h-[800px] md:h-[800px] w-full flex-col items-center justify-between overflow-hidden bg-[url('/assets/Banner.jpg')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[1px]" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center pt-24 md:pt-0">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-8xl uppercase tracking-tighter leading-tight">
            Discover Your <br className="hidden sm:block" /> Next Adventure
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium text-zinc-200 sm:text-lg md:text-sml tracking-wide opacity-90">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
          <Link href="/destinations" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-white text-sky-900 px-10 py-8 font-bold rounded-xl uppercase text-sm tracking-widest shadow-xl transition-all duration-200 hover:bg-zinc-100 hover:scale-[1.02] active:scale-95">
              Explore Destinations
            </Button>
          </Link>
          <Button
            variant="flat"
            className="w-full sm:w-auto bg-sky-900/40 px-10 py-8 font-bold text-white backdrop-blur-md rounded-xl uppercase text-sm tracking-widest border border-white/20"
          >
            View Offers
          </Button>
        </div>
      </div>

      <div className="relative z-10 mt-8 mb-8 w-full max-w-6xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl">
          <div className="flex w-full md:flex-1 items-center gap-4 px-6 py-5 rounded-xl transition-all duration-200 hover:bg-white/10 cursor-pointer group">
            <div className="p-3 bg-white/5 rounded-lg transition-colors duration-200 group-hover:bg-white/20">
              <LuMapPin className="text-white size-5 md:size-6" />
            </div>
            <div className="flex flex-col overflow-hidden text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                Location
              </span>
              <span className="text-sm font-bold text-white truncate">
                Address, City or Zip
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Separator orientation="vertical" className="h-10 bg-white/10" />
          </div>

          <div className="flex w-full md:flex-1 items-center gap-4 px-6 py-5 rounded-xl transition-all duration-200 hover:bg-white/10 cursor-pointer group">
            <div className="p-3 bg-white/5 rounded-lg transition-colors duration-200 group-hover:bg-white/20">
              <LuCalendar className="text-white size-5 md:size-6" />
            </div>
            <div className="flex flex-col overflow-hidden text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                Duration
              </span>
              <span className="text-sm font-bold text-white truncate">
                Anytime / 3 Days
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Separator orientation="vertical" className="h-10 bg-white/10" />
          </div>

          <div className="flex w-full md:flex-1 items-center gap-4 px-6 py-5 rounded-xl transition-all duration-200 hover:bg-white/10 cursor-pointer group">
            <div className="p-3 bg-white/5 rounded-lg transition-colors duration-200 group-hover:bg-white/20">
              <LuWallet className="text-white size-5 md:size-6" />
            </div>
            <div className="flex flex-col overflow-hidden text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                Budget
              </span>
              <span className="text-sm font-bold text-white truncate">
                $0 - $3000
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Separator orientation="vertical" className="h-10 bg-white/10" />
          </div>

          <div className="flex w-full md:flex-1 items-center gap-4 px-6 py-5 rounded-xl transition-all duration-200 hover:bg-white/10 cursor-pointer group">
            <div className="p-3 bg-white/5 rounded-lg transition-colors duration-200 group-hover:bg-white/20">
              <LuUsers className="text-white size-5 md:size-6" />
            </div>
            <div className="flex flex-col overflow-hidden text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                People
              </span>
              <span className="text-sm font-bold text-white truncate">
                5 - 10 Guests
              </span>
            </div>
          </div>

          <Button className="mt-2 md:mt-0 w-full md:w-60 h-16 flex items-center justify-center bg-sky-900 text-white font-bold rounded-xl md:ml-auto shadow-xl transition-all duration-200 hover:bg-black hover:scale-[1.02] active:scale-95 text-sm uppercase tracking-widest">
            <LuSearch className="mr-2 size-5" />
            Find Trip
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
