import React from "react";
import Image from "next/image";
import { Button, Separator } from "@heroui/react";
import {
  LuMapPin,
  LuStar,
  LuCalendar,
  LuCheck,
  LuArrowLeft,
} from "react-icons/lu";
import Link from "next/link";
import { EditModal } from "@/app/Components/EditModal";
import DeleteAlert from "@/app/Components/DeleteAlert";
import BookingCard from "@/app/Components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  let session = null;
  let token = null;

  try {
    session = await auth.api.getSession({ headers: await headers() });
  } catch (err) {}

  const user = session?.user;
  console.log(user);

  try {
    const tokenRes = await auth.api.getToken({ headers: await headers() });
    token = tokenRes?.token;
  } catch (err) {}

  const headersObj = {};
  if (token) {
    headersObj.authorization = `Bearer ${token}`;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,
    {
      headers: headersObj,
      cache: "no-store",
    },
  );
  const destination = await res.json();

  if (!destination)
    return (
      <div className="py-40 text-center font-bold uppercase tracking-[0.3em] text-zinc-400">
        Loading Destination...
      </div>
    );

  return (
    <div className="container mx-auto px-6 lg:px-10 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <Link
          href="/destinations"
          className="group flex items-center gap-2 text-sky-900 transition-colors font-bold text-[10px] uppercase tracking-[0.2em]"
        >
          <LuArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Destinations
        </Link>

        {user?.role === "admin" && (
          <div className="flex gap-3">
            <EditModal destination={destination} />
            <DeleteAlert destination={destination} />
          </div>
        )}
      </div>

      <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-16 shadow-2xl shadow-sky-900/10">
        <Image
          src={destination?.imageUrl}
          alt={destination?.destinationName}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-8 left-8 bg-sky-900 text-white text-[10px] font-bold px-4 py-1.5 rounded-xl uppercase tracking-[0.2em] shadow-2xl">
          Premium Experience
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sky-900 font-bold uppercase text-[10px] tracking-[0.3em]">
              <div className="h-[2px] w-8 bg-sky-900" />
              <LuMapPin size={14} />
              {destination?.country}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tighter uppercase leading-[0.85]">
              {destination?.destinationName}
            </h1>

            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <LuStar size={18} className="fill-amber-400 text-amber-400" />
                <span className="font-bold text-zinc-900 text-sm uppercase">
                  4.9
                </span>
                <span className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">
                  (234 reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 text-sky-900 font-bold text-[10px] uppercase tracking-[0.1em]">
                <LuCalendar size={18} />
                {destination?.duration} Days /{" "}
                {parseInt(destination?.duration) - 1} Nights
              </div>
            </div>
          </div>

          <Separator className="bg-zinc-100" />

          <section className="space-y-6">
            <h2 className="text-[10px] font-bold text-sky-900 uppercase tracking-[0.4em]">
              The Overview
            </h2>
            <p className="text-zinc-500 leading-relaxed text-lg font-medium max-w-3xl">
              {destination?.description}
            </p>
          </section>

          <section className="space-y-8 bg-sky-50/50 p-10 rounded-2xl border border-sky-100">
            <h2 className="text-[10px] font-bold text-sky-900 uppercase tracking-[0.4em]">
              Journey Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Luxury beachfront accommodation",
                "Traditional Balinese spa treatment",
                "Sunrise trek to Mount Batur",
                "Visit Uluwatu Temple at sunset",
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-zinc-700 font-bold text-sm uppercase tracking-tight"
                >
                  <div className="mt-1 h-5 w-5 rounded-full bg-sky-900 flex items-center justify-center shrink-0">
                    <LuCheck className="text-white" size={12} />
                  </div>
                  {highlight}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="relative">
          <div className="sticky top-24">
            <BookingCard destination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
