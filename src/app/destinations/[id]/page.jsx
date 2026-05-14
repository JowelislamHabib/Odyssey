import React from "react";
import Image from "next/image";
import { Button, Card, Separator, Input, AlertDialog } from "@heroui/react";
import {
  LuMapPin,
  LuStar,
  LuCalendar,
  LuCheck,
  LuArrowLeft,
} from "react-icons/lu";
import Link from "next/link";
import { IoTrashBin } from "react-icons/io5";
import { EditModal } from "@/app/Components/EditModal";
import DeleteAlert from "@/app/Components/DeleteAlert";
import BookingCard from "@/app/Components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(), // you need to pass the headers
  }); // Get the token from better-auth
  const res = await fetch(`http://localhost:8000/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`, // Add the token to headers
    },
  });
  const destination = await res.json();

  if (!destination) return <div className="p-20 text-center">Loading...</div>;

  return (
    <div className="container mx-auto px-6 py-8 font-sans">
      {/* Top Navigation & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors font-bold text-sm"
        >
          <LuArrowLeft size={18} />
          Back to Destinations
        </Link>

        <div className="flex gap-3">
          <EditModal destination={destination} />
          <DeleteAlert destination={destination} />
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-125 rounded-lg overflow-hidden mb-12 shadow-2xl">
        <Image
          src={destination?.imageUrl}
          alt={destination?.destinationName}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Info */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <div className="flex items-center gap-2 text-slate-400 font-bold uppercase  text-xs mb-2">
              <LuMapPin size={14} className="text-sky-500" />
              {destination?.country}
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase  mb-6">
              {destination?.destinationName}
            </h1>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-1.5">
                <LuStar size={20} className="fill-amber-400 text-amber-400" />
                <span className="font-black text-slate-900">4.9</span>
                <span className="text-slate-400 font-medium">
                  (234 reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-bold">
                <LuCalendar size={20} className="text-sky-500" />
                {destination?.duration} Days /{" "}
                {parseInt(destination?.duration) - 1} Nights
              </div>
            </div>
          </div>

          <Separator className="bg-slate-100" />

          {/* Overview */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 uppercase  mb-4">
              Overview
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              {destination?.description}
            </p>
          </section>

          {/* Highlights (Mock data based on image) */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 uppercase  mb-6">
              Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Luxury beachfront accommodation",
                "Traditional Balinese spa treatment",
                "Sunrise trek to Mount Batur",
                "Visit Uluwatu Temple at sunset",
                "Private beach dinner experience",
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-slate-700 font-bold"
                >
                  <LuCheck className="text-emerald-500 shrink-0" size={20} />
                  {highlight}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Booking Sidebar */}
        <BookingCard destination={destination} />
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
