"use client";
import { Button, Card, toast } from "@heroui/react";
import { LuCalendar, LuCheck } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { Calendar, DateField, DatePicker } from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BookingCard = ({ destination }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [departureDate, setDepartureDate] = useState(today(getLocalTimeZone()));

  const handleBooking = async () => {
    const { data: tokenData } = await authClient.token();

    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      userImage: user?.image,
      destinationId: destination?._id,
      destinationName: destination?.destinationName,
      destinationImage: destination?.imageUrl,
      price: destination?.price,
      country: destination?.country,
      departureDate: new Date(departureDate),
      category: destination?.category,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
  };

  return (
    <div className="w-full">
      <Card className="p-8 rounded-2xl border border-zinc-100 bg-white shadow-2xl shadow-sky-900/5">
        <div className="mb-8">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
            Investment
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-5xl font-black text-sky-900 tracking-tighter">
              ${destination?.price}
            </h3>
            <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest">
              / Guest
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
            Departure Date
          </p>
          <div className="flex items-center gap-4 border border-zinc-100 rounded-xl px-4 h-20 bg-zinc-50/50 hover:bg-white hover:border-sky-900 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-sky-900 flex items-center justify-center shrink-0 shadow-lg shadow-sky-900/20">
              <LuCalendar className="text-white" size={18} />
            </div>

            <div className="flex-1 overflow-hidden">
              <DatePicker
                className="w-full"
                name="date"
                value={departureDate}
                onChange={setDepartureDate}
              >
                <DateField.Group className="bg-transparent border-none shadow-none p-0">
                  <DateField.Input className="font-black text-[11px] uppercase tracking-widest text-zinc-900">
                    {(segment) => <DateField.Segment segment={segment} />}
                  </DateField.Input>
                  <DateField.Suffix>
                    <DatePicker.Trigger>
                      <DatePicker.TriggerIndicator className="text-sky-900" />
                    </DatePicker.Trigger>
                  </DateField.Suffix>
                </DateField.Group>

                <DatePicker.Popover>
                  <Calendar aria-label="Departure Date">
                    <Calendar.Header>
                      <Calendar.YearPickerTrigger>
                        <Calendar.YearPickerTriggerHeading />
                        <Calendar.YearPickerTriggerIndicator />
                      </Calendar.YearPickerTrigger>
                      <Calendar.NavButton slot="previous" />
                      <Calendar.NavButton slot="next" />
                    </Calendar.Header>
                    <Calendar.Grid>
                      <Calendar.GridHeader>
                        {(day) => (
                          <Calendar.HeaderCell className="text-sky-900 font-black text-[10px]">
                            {day}
                          </Calendar.HeaderCell>
                        )}
                      </Calendar.GridHeader>
                      <Calendar.GridBody>
                        {(date) => <Calendar.Cell date={date} />}
                      </Calendar.GridBody>
                    </Calendar.Grid>
                  </Calendar>
                </DatePicker.Popover>
              </DatePicker>
            </div>
          </div>
        </div>

        <Button
          onPress={() =>
            toast.success("You have booked a destination", {
              actionProps: {
                children: "My Bookings",
                onPress: () => {
                  router.push("/my-bookings");
                },
                className: "bg-success text-success-foreground",
              },
              description: "Your booking has been confirmed!",
            })
          }
          onClick={handleBooking}
          className="w-full h-16 bg-sky-900 text-white font-black rounded-xl shadow-xl shadow-sky-900/20 hover:bg-sky-800 transition-all uppercase tracking-[0.3em] text-[11px] mb-8"
        >
          Book Now
        </Button>

        <div className="space-y-4 pt-8 border-t border-zinc-50">
          {[
            "Free cancellation up to 7 days",
            "Travel insurance included",
            "24/7 Global concierge",
          ].map((info, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-500"
            >
              <div className="h-5 w-5 rounded-full bg-sky-50 flex items-center justify-center">
                <LuCheck className="text-sky-900" size={12} />
              </div>
              {info}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BookingCard;
