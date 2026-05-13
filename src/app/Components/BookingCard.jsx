"use client";
import { Button, Card, Input } from "@heroui/react";
import { LuCalendar, LuCheck } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { Calendar, DateField, DatePicker } from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";

import { useState } from "react";
const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  //   console.log(user);

  const [departureDate, setDepartureDate] = useState(today(getLocalTimeZone()));
  //   console.log(new Date(departureDate));

  const handleBooking = async () => {
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
    };
    const res = await fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();

    console.log(data);
  };

  //   console.log(destination, destination.imageUrl);

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
            <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              Departure Date
            </p>
            <div className="flex items-center gap-3 border border-slate-200 rounded-2xl px-4 h-16 bg-slate-50 hover:border-sky-300 transition-all">
              <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <LuCalendar className="text-sky-600" size={20} />
              </div>

              <div className="flex-1">
                <div>
                  <DatePicker
                    className="w-full"
                    name="date"
                    value={departureDate}
                    onChange={setDepartureDate}
                  >
                    <DateField.Group fullWidth>
                      <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                      </DateField.Input>
                      <DateField.Suffix>
                        <DatePicker.Trigger>
                          <DatePicker.TriggerIndicator />
                        </DatePicker.Trigger>
                      </DateField.Suffix>
                    </DateField.Group>
                    <DatePicker.Popover>
                      <Calendar aria-label="Event date">
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
                              <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                            )}
                          </Calendar.GridHeader>
                          <Calendar.GridBody>
                            {(date) => <Calendar.Cell date={date} />}
                          </Calendar.GridBody>
                        </Calendar.Grid>
                        <Calendar.YearPickerGrid>
                          <Calendar.YearPickerGridBody>
                            {({ year }) => (
                              <Calendar.YearPickerCell year={year} />
                            )}
                          </Calendar.YearPickerGridBody>
                        </Calendar.YearPickerGrid>
                      </Calendar>
                    </DatePicker.Popover>
                  </DatePicker>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleBooking}
            className="w-full h-16 bg-[#0088d1] text-white font-black rounded-xl shadow-[0_10px_30px_-5px_rgba(0,136,209,0.5)] hover:bg-[#0077b6] transition-all uppercase  text-sm"
          >
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
