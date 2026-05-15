import React from "react";
import { LuMapPin, LuArrowRight, LuStar } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const featuredItems = await res.json();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sky-900">
              <div className="h-1 w-12 bg-sky-900" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                Staff Picks
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 uppercase tracking-tighter leading-none">
              Featured <br className="md:hidden" /> Destinations
            </h2>
          </div>
          <Link
            href="/destinations"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-sky-900 transition-all duration-200 no-underline"
          >
            Explore All
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white transition-all">
              <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredItems?.map((item) => (
            <div
              key={item._id}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-sky-900/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-[480px] overflow-hidden">
                <Image
                  fill
                  src={item?.imageUrl}
                  alt={item?.destinationName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-6 left-6 z-10 bg-sky-900 text-white text-[10px] font-bold px-4 py-2 rounded-lg uppercase tracking-widest shadow-lg">
                  {item?.category}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg shadow-xl">
                  <LuStar className="text-amber-500 fill-amber-500" size={14} />
                  <span className="text-sm font-bold text-zinc-900">4.5</span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 text-sky-400 mb-2">
                    <LuMapPin size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      {item?.country}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-6">
                    {item?.destinationName}
                  </h3>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">
                        Starting At
                      </span>
                      <span className="text-2xl font-bold text-white">
                        ${item?.price}
                      </span>
                    </div>
                    <Link
                      href={`/destinations/${item?._id}`}
                      className="h-14 w-14 flex items-center justify-center bg-white rounded-xl text-zinc-900 hover:bg-sky-900 hover:text-white transition-all duration-200 active:scale-90 shadow-lg"
                    >
                      <LuArrowRight size={24} />
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
