import React from "react";
import DestinationCard from "../Components/DestinationCard";
import { LuSearch, LuFilter } from "react-icons/lu";
import { Input, Button } from "@heroui/react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DestinationPage = async () => {
  // const { token } = await auth.api.getToken({
  //   headers: await headers(), // you need to pass the headers
  // });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
    // headers: {
    //   authorization: `Bearer ${token}`,
    // },
  });
  const destinations = await res.json();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Header & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
            All Destinations
          </h1>
          <p className="text-slate-500 font-medium">
            Explore {destinations.length} premium travel packages around the
            world
          </p>
        </div>

        {/* Quick Search/Filter UI */}
        <div className="flex w-full md:w-auto gap-3">
          <Input
            placeholder="Search destinations..."
            className="w-full md:w-72 rounded-xl border-slate-200 bg-white h-12 shadow-sm"
          />
          <Button
            variant="bordered"
            className="rounded-xl border-slate-200 font-bold h-12 bg-white"
            isIconOnly
          >
            <LuFilter size={20} />
          </Button>
        </div>
      </div>

      {/* Stats Ribbon */}
      <div className="flex gap-8 mb-10 pb-6 border-b border-slate-100">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Total Trips
          </span>
          <span className="text-xl font-black text-slate-900">
            {destinations.length}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Countries
          </span>
          <span className="text-xl font-black text-slate-900">
            {new Set(destinations.map((d) => d.country)).size}
          </span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((item) => (
          <DestinationCard key={item._id} item={item} />
        ))}
      </div>

      {/* Empty State */}
      {destinations.length === 0 && (
        <div className="py-20 text-center bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
          <p className="text-slate-500 font-bold uppercase tracking-widest">
            No destinations found
          </p>
        </div>
      )}
    </div>
  );
};

export default DestinationPage;
