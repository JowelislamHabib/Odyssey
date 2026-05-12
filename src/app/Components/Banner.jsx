"use client";

import React from "react";
import { Button, Separator, Input } from "@heroui/react";
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
    <div className="relative flex min-h-[800px] md:h-[750px] w-full flex-col items-center justify-between overflow-hidden bg-[url('/assets/banner.jpg')] bg-cover bg-center text-white">
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]" />

      {/* Hero Content - Responsive Text Sizes */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center pt-20 md:pt-0">
        <h1 className="text-4xl font-serif font-bold sm:text-4xl md:text-7xl uppercase">
          Discover Your <br className="hidden sm:block font-sans" /> Next
          Adventure
        </h1>
        <p className="max-w-2xl text-base font-medium text-slate-200 sm:text-lg md:text-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Link href="/destinations">
            <Button className="bg-sky-600 px-10 py-7 font-bold text-white rounded-full uppercase text-lg shadow-lg shadow-sky-600/30">
              Explore Destinations
            </Button>
          </Link>
          <Button
            variant="flat"
            className="bg-white/10 px-10 py-7 font-bold text-white backdrop-blur-md rounded-full uppercase text-lg border border-white/20"
          >
            View Destination
          </Button>
        </div>
      </div>

      {/* Responsive Search Bar Container */}
      <div className="relative z-10 mb-12 w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] p-2 md:p-3 shadow-2xl">
          {/* Location Segment */}
          <div className="flex flex-1 items-center gap-4 px-6 py-4 md:px-8 hover:bg-white/5 rounded-2xl transition-all cursor-pointer group">
            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-sky-500/20 transition-colors">
              <LuMapPin className="text-sky-400 size-5 md:size-6" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Location
              </span>
              <span className="text-sm font-bold text-white truncate">
                Address, City or Zip
              </span>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="hidden md:block h-12 self-center bg-white/10"
          />

          {/* Date Segment */}
          <div className="flex flex-1 items-center gap-4 px-6 py-4 md:px-8 hover:bg-white/5 rounded-2xl transition-all cursor-pointer group">
            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-sky-500/20 transition-colors">
              <LuCalendar className="text-sky-400 size-5 md:size-6" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Date/Duration
              </span>
              <span className="text-sm font-bold text-white truncate">
                Anytime / 3 Days
              </span>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="hidden md:block h-12 self-center bg-white/10"
          />

          {/* Budget Segment */}
          <div className="flex flex-1 items-center gap-4 px-6 py-4 md:px-8 hover:bg-white/5 rounded-2xl transition-all cursor-pointer group">
            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-sky-500/20 transition-colors">
              <LuWallet className="text-sky-400 size-5 md:size-6" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Budget
              </span>
              <span className="text-sm font-bold text-white truncate">
                $0 - $3000
              </span>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="hidden md:block h-12 self-center bg-white/10"
          />

          {/* People Segment */}
          <div className="flex flex-1 items-center gap-4 px-6 py-4 md:px-8 hover:bg-white/5 rounded-2xl transition-all cursor-pointer group">
            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-sky-500/20 transition-colors">
              <LuUsers className="text-sky-400 size-5 md:size-6" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                People
              </span>
              <span className="text-sm font-bold text-white truncate">
                5 - 10 Guests
              </span>
            </div>
          </div>

          {/* Search Button - Matched to CleanShot 2026-05-10 at 02.29.49.jpg */}
          <Button className="mt-2 md:mt-0 w-full md:w-45 h-14 md:h-16 bg-[#0088d1] text-white font-bold rounded-[22px] md:ml-4 shadow-[0_10px_30px_-5px_rgba(0,136,209,0.5)] hover:bg-[#0077b6] transition-all active:scale-95 text-lg">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
