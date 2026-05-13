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

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  const res = await fetch(`http://localhost:8000/bookings/${user?.id}`);
  const bookings = await res.json();
  console.log(bookings);

  bookings.forEach((booking) => {
    booking.departureDate = new Date(booking.departureDate).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      },
    );
  });

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
              <img
                src={booking.destinationImage}
                alt={booking.destinationName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`px-4 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest backdrop-blur-md border border-white/20 shadow-xl ${
                    booking.status === "Confirmed"
                      ? "bg-emerald-500/90 text-white"
                      : "bg-amber-500/90 text-white"
                  }`}
                >
                  {booking.status}
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
                          <img
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
                          Guest ID: {booking.userId}
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
                        {booking.departureDate}
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
                        {booking._id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="mt-12 flex items-center justify-end gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-500 font-bold text-sm hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 transition-all">
                  <LuTrash2 size={16} />
                  Cancel
                </button>
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
    </div>
  );
};

export default MyBookingsPage;
