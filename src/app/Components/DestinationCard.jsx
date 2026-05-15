"use client";

import React from "react";
import Image from "next/image";
import { Card, Button } from "@heroui/react";
import { LuMapPin, LuClock, LuArrowRight } from "react-icons/lu";
import Link from "next/link";

const DestinationCard = ({ item }) => {
  return (
    <Card className="rounded-2xl border border-zinc-100 bg-white overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-sky-900/5">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={item?.imageUrl}
          alt={item?.destinationName}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-5 left-5 z-10 bg-sky-900 text-white text-[9px] font-black px-3 py-1 rounded-lg uppercase tracking-[0.2em] shadow-lg">
          {item?.category}
        </div>
      </div>

      <div className="pt-8 pb-8 px-5 flex flex-col">
        <div className="mb-5">
          <div className="flex items-center gap-1.5 text-sky-600 font-black text-[9px] uppercase tracking-[0.2em] mb-2">
            <LuMapPin size={10} />
            {item?.country}
          </div>
          <h3 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.9]">
            {item?.destinationName}
          </h3>
        </div>

        <p className="text-zinc-500 text-sm font-medium line-clamp-3 leading-relaxed mb-8 pr-2">
          {item?.description}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-zinc-100 mb-8">
          <div className="flex items-center gap-2 text-zinc-900 font-black text-[10px] uppercase tracking-wider">
            <LuClock size={14} className="text-sky-900" />
            {item?.duration} Days
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">
              Starting At
            </span>
            <span className="text-2xl font-black text-sky-900 tracking-tighter leading-none">
              ${item?.price}
            </span>
          </div>
        </div>

        <Link href={`/destinations/${item._id}`} className="w-full">
          <Button className="w-full h-14 bg-sky-900 text-white hover:bg-sky-800 font-black rounded-xl transition-all uppercase tracking-[0.2em] text-[11px] group/btn shadow-lg shadow-sky-900/10">
            Explore Destination
            <LuArrowRight
              size={16}
              className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
            />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default DestinationCard;
