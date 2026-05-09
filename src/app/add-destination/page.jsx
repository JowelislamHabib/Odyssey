"use cliet";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import React from "react";

const AddDestinationPage = () => {
  return (
    <div className="container mx-auto">
      <div> Add Destination</div>
      <form className="p-6 md:p-10 space-y-8 bg-white/50 backdrop-blur-md rounded-[40px] border border-slate-200 shadow-xl shadow-slate-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField
              name="destinationName"
              isRequired
              className="flex flex-col gap-2"
            >
              <Label className="text-slate-900 font-bold uppercase tracking-wider text-xs ml-1">
                Destination Name
              </Label>
              <Input
                placeholder="Bali Paradise"
                className="rounded-2xl border-slate-200 h-14 hover:border-sky-500 focus-within:!border-sky-600 transition-all bg-white"
              />
              <FieldError className="text-rose-500 text-xs ml-1" />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="country" isRequired className="flex flex-col gap-2">
            <Label className="text-slate-900 font-bold uppercase tracking-wider text-xs ml-1">
              Country
            </Label>
            <Input
              placeholder="Indonesia"
              className="rounded-2xl border-slate-200 h-14 hover:border-sky-500 transition-all bg-white"
            />
            <FieldError className="text-rose-500 text-xs ml-1" />
          </TextField>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <Label className="text-slate-900 font-bold uppercase tracking-wider text-xs ml-1">
              Category
            </Label>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="Select category"
            >
              <Select.Trigger className="rounded-2xl border-slate-200 h-14 hover:border-sky-500 transition-all bg-white px-4">
                <Select.Value className="text-slate-700" />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover className="rounded-2xl border-slate-200 shadow-xl">
                <ListBox className="p-2">
                  {[
                    "Beach",
                    "Mountain",
                    "City",
                    "Adventure",
                    "Cultural",
                    "Luxury",
                  ].map((cat) => (
                    <ListBox.Item
                      key={cat}
                      id={cat}
                      textValue={cat}
                      className="rounded-xl hover:bg-sky-50 focus:bg-sky-100 transition-colors p-2"
                    >
                      {cat}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField
            name="price"
            type="number"
            isRequired
            className="flex flex-col gap-2"
          >
            <Label className="text-slate-900 font-bold uppercase tracking-wider text-xs ml-1">
              Price (USD)
            </Label>
            <Input
              type="number"
              placeholder="1299"
              className="rounded-2xl border-slate-200 h-14 hover:border-sky-500 transition-all bg-white"
            />
            <FieldError className="text-rose-500 text-xs ml-1" />
          </TextField>

          {/* Duration */}
          <TextField name="duration" isRequired className="flex flex-col gap-2">
            <Label className="text-slate-900 font-bold uppercase tracking-wider text-xs ml-1">
              Duration
            </Label>
            <Input
              placeholder="7 Days / 6 Nights"
              className="rounded-2xl border-slate-200 h-14 hover:border-sky-500 transition-all bg-white"
            />
            <FieldError className="text-rose-500 text-xs ml-1" />
          </TextField>

          {/* Departure Date */}
          <div className="md:col-span-2">
            <TextField
              name="departureDate"
              type="date"
              isRequired
              className="flex flex-col gap-2"
            >
              <Label className="text-slate-900 font-bold uppercase tracking-wider text-xs ml-1">
                Departure Date
              </Label>
              <Input
                type="date"
                className="rounded-2xl border-slate-200 h-14 hover:border-sky-500 transition-all bg-white"
              />
              <FieldError className="text-rose-500 text-xs ml-1" />
            </TextField>
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <TextField
              name="imageUrl"
              isRequired
              className="flex flex-col gap-2"
            >
              <Label className="text-slate-900 font-bold uppercase tracking-wider text-xs ml-1">
                Image URL
              </Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-2xl border-slate-200 h-14 hover:border-sky-500 transition-all bg-white"
              />
              <FieldError className="text-rose-500 text-xs ml-1" />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField
              name="description"
              isRequired
              className="flex flex-col gap-2"
            >
              <Label className="text-slate-900 font-bold uppercase tracking-wider text-xs ml-1">
                Description
              </Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-[32px] border-slate-200 p-4 hover:border-sky-500 transition-all bg-white min-h-[120px]"
              />
              <FieldError className="text-rose-500 text-xs ml-1" />
            </TextField>
          </div>
        </div>

        {/* Buttons */}
        <Button
          type="submit"
          className="w-full h-16 bg-[#0088d1] text-white font-bold rounded-[22px] shadow-[0_10px_30px_-5px_rgba(0,136,209,0.5)] hover:bg-[#0077b6] transition-all uppercase tracking-widest text-lg"
        >
          Add destination
        </Button>
      </form>
    </div>
  );
};

export default AddDestinationPage;
