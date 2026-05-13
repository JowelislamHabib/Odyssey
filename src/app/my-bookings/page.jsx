import React from "react";
import {
  LuCalendar,
  LuMapPin,
  LuTrash2,
  LuEye,
  LuHash,
  LuUser,
} from "react-icons/lu";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import BookingCancelAlert from "../Components/BookingCancelAlert";
import { Button } from "@heroui/react";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  const res = await fetch(`http://localhost:8000/bookings/${user?.id}`);
  const bookings = await res.json();
  console.log(bookings);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12 border-b border-slate-100 pb-8">
        <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
          My Bookings
        </h1>
        <p className="text-slate-500 font-bold mt-2 uppercase text-xs tracking-[0.2em]">
          Adventure Awaits, {bookings[0]?.userName}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col lg:flex-row bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            {/* Image Section */}
            <div className="relative w-full lg:w-[400px] h-64 lg:h-auto overflow-hidden">
              <Image
                fill
                src={booking.destinationImage}
                alt={booking.destinationName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest backdrop-blur-md border border-white/20 shadow-xl bg-sky-600 text-white">
                  {booking.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sky-600">
                      <LuMapPin size={14} strokeWidth={3} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        {booking.country}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                      {booking.destinationName}
                    </h2>
                  </div>
                  <div className="text-3xl font-black text-slate-900 leading-none">
                    ${booking.price}
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                  {/* Traveler (Manual User UI) */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                      Traveler
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="relative size-10 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center">
                        {booking.userImage ? (
                          <Image
                            fill
                            src={booking.userImage}
                            alt={booking.userName}
                            className="object-cover"
                          />
                        ) : (
                          <LuUser className="text-slate-400" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-800">
                          {booking.userName}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          Booking ID:{" "}
                          {booking.userId?.slice(0, 6)?.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                      Departure
                    </p>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="p-2 bg-sky-50 text-sky-600 rounded-xl">
                        <LuCalendar size={18} />
                      </div>
                      <span className="text-sm font-bold">
                        {new Date(booking.departureDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>
                  </div>

                  {/* ID */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                      Reference
                    </p>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="p-2 bg-slate-50 text-slate-400 rounded-xl border border-slate-100">
                        <LuHash size={18} />
                      </div>
                      <span className="text-sm font-bold font-mono tracking-tighter">
                        {booking._id?.slice(0, 8)?.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="mt-12 flex items-center justify-end gap-4">
                <BookingCancelAlert booking={booking} />
                <Link
                  href={`/destinations/${booking.destinationId}`}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-sky-600 shadow-lg shadow-slate-200 transition-all no-underline"
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
        <div className="flex flex-col items-center justify-center py-24 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
          <div className="p-6 bg-white rounded-full shadow-sm mb-4">
            <LuMapPin size={40} className="text-slate-300" />
          </div>
          <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
            No Bookings Yet
          </h3>
          <p className="text-slate-500 font-medium mt-2 mb-8">
            Ready to start your next adventure?
          </p>
          <Link href="/destinations">
            <Button className="bg-sky-600 px-10 py-7 font-bold text-white rounded-full uppercase text-lg shadow-lg shadow-sky-600/30">
              Explore Destinations
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
