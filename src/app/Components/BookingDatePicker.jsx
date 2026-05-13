"use client";
import { DateValue } from "@internationalized/date";

import { Calendar, DateField, DatePicker, Label } from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";

import { useState } from "react";

export function BookingDatePicker() {
  // const [value, setValue] =
  //   (useState < DateValue) | (null > today(getLocalTimeZone()));
  // console.log(value);
  const [departureDate, setDepartureDate] = useState(today(getLocalTimeZone()));
  console.log(new Date(departureDate));

  return (
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
                {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
              </Calendar.GridHeader>
              <Calendar.GridBody>
                {(date) => <Calendar.Cell date={date} />}
              </Calendar.GridBody>
            </Calendar.Grid>
            <Calendar.YearPickerGrid>
              <Calendar.YearPickerGridBody>
                {({ year }) => <Calendar.YearPickerCell year={year} />}
              </Calendar.YearPickerGridBody>
            </Calendar.YearPickerGrid>
          </Calendar>
        </DatePicker.Popover>
      </DatePicker>
    </div>
  );
}
