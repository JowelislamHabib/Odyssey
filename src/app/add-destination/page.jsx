"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import {
  LuMapPin,
  LuGlobe,
  LuDollarSign,
  LuClock,
  LuCalendar,
  LuImage,
  LuAlignLeft,
} from "react-icons/lu";

const AddDestinationPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destination`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(destination),
      },
    );

    const data = await res.json();

    if (res.ok) {
      const newId = data.insertedId;
      toast.success("You have added a new destination", {
        actionProps: {
          children: "View",
          onPress: () => {
            router.push(`/destinations/${newId}`);
          },
          className: "bg-success text-success-foreground",
        },
        description: "Your new destination has been added successfully.",
      });
    }
  };

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Page Header */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-black text-slate-900 uppercase ">
          Add Destination
        </h1>
        <div className="h-1.5 w-20 bg-[#0088d1] mt-2 rounded-xl hidden md:block" />
      </div>

      <form
        onSubmit={onSubmit}
        className="p-8 md:p-12 space-y-10 bg-white/50 backdrop-blur-md rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField
              name="destinationName"
              isRequired
              className="flex flex-col gap-2"
            >
              <Label className="text-base font-black uppercase text-slate-900 tracking-wider ml-1 flex items-center gap-2">
                <LuMapPin className="text-[#0088d1]" size={14} /> Destination
                Name
              </Label>
              <Input
                placeholder="Bali Paradise"
                className="rounded-xl border-slate-200 h-14 hover:border-[#0088d1] focus-within:!border-[#0088d1] transition-all bg-white"
              />
              <FieldError className="text-rose-500 text-base font-bold ml-1" />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="country" isRequired className="flex flex-col gap-2">
            <Label className="text-base font-black uppercase text-slate-900 tracking-wider ml-1 flex items-center gap-2">
              <LuGlobe className="text-[#0088d1]" size={14} /> Country
            </Label>
            <Input
              placeholder="Indonesia"
              className="rounded-xl border-slate-200 h-14 hover:border-[#0088d1] transition-all bg-white"
            />
            <FieldError className="text-rose-500 text-base font-bold ml-1" />
          </TextField>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <Label className="text-base font-black uppercase text-slate-900 tracking-wider ml-1">
              Category
            </Label>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="Select category"
            >
              <Select.Trigger className="rounded-xl border-slate-200 h-14 hover:border-[#0088d1] transition-all bg-white px-4">
                <Select.Value className="font-medium text-slate-700" />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover className="rounded-xl border-slate-200 shadow-xl">
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
                      className="rounded-xl hover:bg-sky-50 focus:bg-sky-100 transition-colors p-2 font-bold text-sm"
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
            <Label className="text-base font-black uppercase text-slate-900 tracking-wider ml-1 flex items-center gap-2">
              <LuDollarSign className="text-[#0088d1]" size={14} /> Price (USD)
            </Label>
            <Input
              type="number"
              placeholder="1299"
              className="rounded-xl border-slate-200 h-14 hover:border-[#0088d1] transition-all bg-white"
            />
            <FieldError className="text-rose-500 text-base font-bold ml-1" />
          </TextField>

          {/* Duration */}
          <TextField name="duration" isRequired className="flex flex-col gap-2">
            <Label className="text-base font-black uppercase text-slate-900 tracking-wider ml-1 flex items-center gap-2">
              <LuClock className="text-[#0088d1]" size={14} /> Duration
            </Label>
            <Input
              placeholder="7 Days / 6 Nights"
              className="rounded-xl border-slate-200 h-14 hover:border-[#0088d1] transition-all bg-white"
            />
            <FieldError className="text-rose-500 text-base font-bold ml-1" />
          </TextField>

          {/* Departure Date */}
          <div className="md:col-span-2">
            <TextField
              name="departureDate"
              type="date"
              isRequired
              className="flex flex-col gap-2"
            >
              <Label className="text-base font-black uppercase text-slate-900 tracking-wider ml-1 flex items-center gap-2">
                <LuCalendar className="text-[#0088d1]" size={14} /> Departure
                Date
              </Label>
              <Input
                type="date"
                className="rounded-xl border-slate-200 h-14 hover:border-[#0088d1] transition-all bg-white"
              />
              <FieldError className="text-rose-500 text-base font-bold ml-1" />
            </TextField>
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <TextField
              name="imageUrl"
              isRequired
              className="flex flex-col gap-2"
            >
              <Label className="text-base font-black uppercase text-slate-900 tracking-wider ml-1 flex items-center gap-2">
                <LuImage className="text-[#0088d1]" size={14} /> Image URL
              </Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-xl border-slate-200 h-14 hover:border-[#0088d1] transition-all bg-white"
              />
              <FieldError className="text-rose-500 text-base font-bold ml-1" />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField
              name="description"
              isRequired
              className="flex flex-col gap-2"
            >
              <Label className="text-base font-black uppercase text-slate-900 tracking-wider ml-1 flex items-center gap-2">
                <LuAlignLeft className="text-[#0088d1]" size={14} /> Description
              </Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-xl border-slate-200 p-4 hover:border-[#0088d1] transition-all bg-white min-h-[140px]"
              />
              <FieldError className="text-rose-500 text-base font-bold ml-1" />
            </TextField>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Button
            type="submit"
            className="w-full h-16 bg-[#0088d1] text-white font-black rounded-xl shadow-[0_10px_30px_-5px_rgba(0,136,209,0.5)] hover:bg-[#0077b6] transition-all uppercase tracking-widest text-sm"
          >
            Add Destination
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddDestinationPage;
