"use client";

import React from "react";
import Image from "next/image";
import { Card, Button } from "@heroui/react";
import { LuMapPin, LuClock, LuArrowRight } from "react-icons/lu";
import Link from "next/link";

const DestinationCard = ({ item }) => {
  return (
    <div className="">
      <Card className="rounded-lg border border-slate-200 bg-white shadow-lg overflow-hidden group">
        {/* Header with Next.js Image Optimization */}
        <Card.Header className="p-0 relative h-60 w-full overflow-hidden">
          <Image
            src={item?.imageUrl}
            alt={item?.destinationName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute top-4 left-4 z-10 bg-[#0088d1] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            {item?.category}
          </div>
        </Card.Header>

        <Card.Content className="p-6 flex flex-col gap-3">
          <div>
            <Card.Title className="text-2xl font-black text-slate-900 uppercase">
              {item?.destinationName}
            </Card.Title>
            <Card.Description className="flex items-center gap-1 text-[#0088d1] font-bold text-xs uppercase mt-1">
              <LuMapPin size={12} />
              {item?.country}
            </Card.Description>
          </div>

          <p className="text-slate-500 text-sm font-medium line-clamp-2 leading-relaxed">
            {item?.description}
          </p>

          <div className="flex items-center justify-between py-2 border-y border-slate-100 mt-2">
            <div className="flex items-center gap-2 text-slate-600 font-bold text-xs">
              <LuClock size={14} className="text-sky-500" />
              {item?.duration} Days
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-400 block leading-none">
                Price
              </span>
              <span className="text-xl font-black text-slate-900">
                ${item?.price}
              </span>
            </div>
          </div>
        </Card.Content>

        <Card.Footer className="p-6 pt-0">
          <Link href={`/destinations/${item._id}`} className="w-full">
            <Button
              className="w-full h-14 bg-[#0088d1] text-white font-bold rounded-2xl shadow-[0_8px_20px_-5px_rgba(0,136,209,0.4)] hover:bg-[#0077b6] transition-all uppercase tracking-widest text-xs"
              endContent={<LuArrowRight size={16} />}
            >
              Book Now
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default DestinationCard;
