"use client";

import React from "react";
import { Button, Separator } from "@heroui/react";
import {
  LuSearch,
  LuMapPin,
  LuCalendar,
  LuWallet,
  LuUsers,
} from "react-icons/lu";

const Banner = () => {
  return (
    <div className="relative flex h-[700px] w-full flex-col items-center justify-between overflow-hidden bg-[url('/assets/banner.png')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-slate-950/40" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-5xl font-black leading-tight tracking-tighter md:text-8xl uppercase">
          Discover Your <br /> Next Adventure
        </h1>
        <p className="max-w-2xl text-lg font-medium text-slate-200 md:text-2xl">
          Explore breathtaking destinations and create unforgettable memories.
        </p>
        <div className="flex gap-5 mt-4">
          <Button className="bg-sky-600 px-10 py-7 font-bold text-white rounded-full uppercase text-lg">
            Explore Now
          </Button>
          <Button
            variant="flat"
            className="bg-white/20 px-10 py-7 font-bold text-white backdrop-blur-md rounded-full uppercase text-lg"
          >
            View Destination
          </Button>
        </div>
      </div>

      {/* Spacious Search Bar */}
      <div className="relative z-10 mb-16 w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 shadow-2xl">
          {/* Location Segment */}
          <div className="flex flex-1 items-center gap-4 px-8 py-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer">
            <LuMapPin className="text-sky-400 size-6" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                Location
              </span>
              <span className="text-sm font-bold text-white whitespace-nowrap">
                Address, City or Zip
              </span>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="hidden md:block h-10 bg-white/20"
          />

          {/* Date Segment */}
          <div className="flex flex-1 items-center gap-4 px-8 py-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer">
            <LuCalendar className="text-sky-400 size-6" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                Date/Duration
              </span>
              <span className="text-sm font-bold text-white whitespace-nowrap">
                Anytime / 3 Days
              </span>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="hidden md:block h-10 bg-white/20"
          />

          {/* Budget Segment */}
          <div className="flex flex-1 items-center gap-4 px-8 py-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer">
            <LuWallet className="text-sky-400 size-6" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                Budget
              </span>
              <span className="text-sm font-bold text-white whitespace-nowrap">
                $0 - $3000
              </span>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="hidden md:block h-10 bg-white/20"
          />

          {/* People Segment */}
          <div className="flex flex-1 items-center gap-4 px-8 py-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer">
            <LuUsers className="text-sky-400 size-6" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                People
              </span>
              <span className="text-sm font-bold text-white whitespace-nowrap">
                5 - 10 Guests
              </span>
            </div>
          </div>

          {/* Search Action */}
          <Button
            className="w-full md:w-auto md:min-w-[140px] h-16 bg-sky-600 text-white font-bold rounded-2xl md:ml-2 shadow-lg shadow-sky-600/40 hover:bg-sky-500"
            startContent={<LuSearch size={20} />}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
