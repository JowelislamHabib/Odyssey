"use client";

import React from "react";
import Link from "next/link";
import { LuMap, LuChevronLeft, LuSearch } from "react-icons/lu";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
      <div className="container mx-auto text-center">
        {/* Large Decorative Element */}
        <div className="relative inline-block mb-8">
          <h1 className="text-[12rem] md:text-[18rem] font-black text-slate-50 leading-none select-none tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50">
              <LuMap className="size-16 md:size-24 text-sky-600 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              Lost in Paradise?
            </h2>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em]">
              The destination you are looking for doesn't exist or has moved.
            </p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-black uppercase text-xs tracking-widest hover:bg-sky-600 transition-all shadow-lg shadow-slate-200 no-underline"
            >
              <LuChevronLeft size={18} />
              Back to Home
            </Link>

            <Link
              href="/destinations"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-black uppercase text-xs tracking-widest hover:border-sky-600 hover:text-sky-600 transition-all no-underline"
            >
              <LuSearch size={18} />
              Explore Trips
            </Link>
          </div>
        </div>

        {/* Subtle Footer for the Error Page */}
        <div className="mt-20">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
            Error Code: Destination_Not_Found
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
