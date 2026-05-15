import React from "react";
import { LuCalendar, LuMapPin, LuEye, LuHash, LuUser } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import BookingCancelAlert from "../Components/BookingCancelAlert";
import { Button } from "@heroui/react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );
  const bookings = await res.json();

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mb-16 border-b border-zinc-100 pb-10">
        <div className="flex items-center gap-3 text-sky-900 mb-4">
          <div className="h-1 w-10 bg-sky-900" />
          <span className="text-[10px] font-bold uppercase">
            Your Itinerary
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 uppercase leading-none">
          My Bookings
        </h1>
        <p className="text-zinc-400 font-bold mt-4 uppercase text-[10px]">
          Adventure Awaits, {user?.name || "Traveler"}
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col lg:flex-row bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/5 transition-all hover:shadow-sky-900/10"
          >
            <div className="relative w-full lg:w-[450px] h-72 lg:h-auto overflow-hidden">
              <Image
                fill
                src={booking.destinationImage}
                alt={booking.destinationName}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-xl font-bold text-[9px] uppercase bg-sky-900 text-white shadow-xl">
                  {booking.category}
                </span>
              </div>
            </div>

            <div className="flex-1 p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sky-900">
                      <LuMapPin size={14} />
                      <span className="text-[10px] font-bold uppercase">
                        {booking.country}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-900 uppercase leading-tight">
                      {booking.destinationName}
                    </h2>
                  </div>
                  <div className="text-4xl font-bold text-sky-900 leading-none">
                    ${booking.price}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                  <div className="space-y-4">
                    <p className="text-[9px] font-bold uppercase text-zinc-400">
                      Traveler
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="relative size-12 rounded-xl overflow-hidden bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                        {booking.userImage ? (
                          <Image
                            fill
                            src={booking.userImage}
                            alt={booking.userName}
                            className="object-cover"
                          />
                        ) : (
                          <LuUser className="text-zinc-300" size={20} />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-zinc-900 uppercase">
                          {booking.userName}
                        </span>
                        <span className="text-[9px] text-zinc-400 font-bold uppercase">
                          ID: {booking.userId?.slice(-6)?.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[9px] font-bold uppercase text-zinc-400">
                      Departure
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-sky-50 text-sky-900 rounded-xl">
                        <LuCalendar size={20} />
                      </div>
                      <span className="text-sm font-bold text-zinc-900 uppercase">
                        {new Date(booking.departureDate).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric", year: "numeric" },
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[9px] font-bold uppercase text-zinc-400">
                      Reference
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-zinc-50 text-zinc-400 rounded-xl border border-zinc-100">
                        <LuHash size={20} />
                      </div>
                      <span className="text-sm font-bold text-zinc-900 font-mono">
                        #{booking._id?.slice(-8)?.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 flex items-center justify-end gap-4">
                <BookingCancelAlert booking={booking} />
                <Link
                  href={`/destinations/${booking.destinationId}`}
                  className="flex items-center gap-3 px-10 h-14 rounded-xl bg-zinc-900 text-white font-bold text-[11px] uppercase transition-all hover:bg-sky-900 shadow-xl shadow-zinc-900/10 no-underline"
                >
                  <LuEye size={16} />
                  View Trip
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {bookings.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 bg-zinc-50 rounded-3xl border-2 border-dashed border-zinc-200">
          <div className="p-8 bg-white rounded-2xl shadow-xl mb-6 text-zinc-200">
            <LuMapPin size={48} />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 uppercase">
            No Active Bookings
          </h3>
          <p className="text-zinc-400 font-bold mt-2 mb-10 uppercase text-sm">
            Your next adventure is waiting to be found.
          </p>
          <Link href="/destinations">
            <Button className="bg-sky-900 px-12 h-16 font-bold text-white rounded-xl uppercase text-sm shadow-2xl shadow-sky-900/20">
              Find a Destination
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
