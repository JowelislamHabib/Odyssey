import React from "react";
import { LuMapPin, LuArrowRight, LuStar } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const featuredItems = await res.json();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sky-600">
              <div className="h-1 w-10 bg-sky-600 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Staff Picks
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
              Featured Destinations
            </h2>
          </div>
          <Link
            href="/destinations"
            className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-sky-600 transition-colors no-underline"
          >
            Explore All
            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item._id}
              className="group relative flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  fill
                  src={item.imageUrl}
                  alt={item.destinationName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-10 bg-[#0088d1] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  {item?.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm">
                  <LuStar className="text-amber-500 fill-amber-500" size={14} />
                  <span className="text-xs font-black text-slate-900">4.5</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-sky-400 mb-1">
                    <LuMapPin size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {item.country}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                    {item.destinationName}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">
                        Starting At
                      </span>
                      <span className="text-xl font-black text-white">
                        ${item.price}
                      </span>
                    </div>
                    <Link
                      href={`/destinations/${item._id}`}
                      className="h-10 w-10 flex items-center justify-center bg-white rounded-lg text-slate-900 hover:bg-sky-600 hover:text-white transition-colors"
                    >
                      <LuArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
