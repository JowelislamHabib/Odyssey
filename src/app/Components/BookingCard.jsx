import { Button, Card, Input } from "@heroui/react";
import React from "react";
import { LuCalendar, LuCheck } from "react-icons/lu";

const BookingCard = ({ destination }) => {
  return (
    <div>
      <div className="lg:col-span-1">
        <Card className="p-8 rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/50 sticky top-8">
          <div className="mb-6">
            <span className="text-slate-400 font-bold uppercase text-xs ">
              Starting from
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <h3 className="text-4xl font-black text-[#0088d1] tracking-tighter">
                ${destination?.price}
              </h3>
              <span className="text-slate-400 font-bold text-sm">
                / per person
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3 border border-slate-200 rounded-2xl px-4 h-16 bg-slate-50 hover:border-sky-300 transition-all">
              <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <LuCalendar className="text-sky-600" size={20} />
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Select A Date
                </p>

                <Input
                  type="date"
                  defaultValue={destination?.departureDate}
                  variant="flat"
                />
              </div>
            </div>
          </div>

          <Button className="w-full h-16 bg-[#0088d1] text-white font-black rounded-xl shadow-[0_10px_30px_-5px_rgba(0,136,209,0.5)] hover:bg-[#0077b6] transition-all uppercase  text-sm">
            Book Now
          </Button>

          <div className="mt-8 space-y-3">
            {[
              "Free cancellation up to 7 days",
              "Travel insurance included",
              "24/7 customer support",
            ].map((info, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[13px] font-bold text-slate-500"
              >
                <LuCheck className="text-sky-500" size={16} />
                {info}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BookingCard;
