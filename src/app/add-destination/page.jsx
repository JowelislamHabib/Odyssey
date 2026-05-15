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
      toast.success("Destination Added", {
        actionProps: {
          children: "View Trip",
          onPress: () => {
            router.push(`/destinations/${newId}`);
          },
          className: "bg-sky-900 text-white font-bold uppercase text-sm",
        },
        description: "Your new odyssey has been listed successfully.",
      });
    }
  };

  return (
    <div className="container mx-auto py-16 px-6">
      <div className="mb-12 border-b border-zinc-100 pb-10">
        <div className="flex items-center gap-3 text-sky-900 mb-4">
          <div className="h-1 w-10 bg-sky-900" />
          <span className="text-sm font-bold uppercase">Expansion</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 uppercase leading-none">
          Add Destination
        </h1>
      </div>

      <form
        onSubmit={onSubmit}
        className="p-10 md:p-14 space-y-12 bg-white border border-zinc-100 rounded-2xl shadow-2xl shadow-sky-900/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          <div className="md:col-span-2">
            <TextField
              name="destinationName"
              isRequired
              className="flex flex-col gap-3"
            >
              <Label className="text-sm font-bold uppercase text-sky-900 ml-1 flex items-center gap-2">
                <LuMapPin size={14} /> Destination Name
              </Label>
              <Input
                placeholder="E.G. AMALFI COAST"
                className="rounded-xl border-zinc-200 h-16 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold text-[11px] uppercase px-4"
              />
              <FieldError className="text-rose-500 text-[9px] font-bold uppercase ml-1" />
            </TextField>
          </div>

          <TextField name="country" isRequired className="flex flex-col gap-3">
            <Label className="text-sm font-bold uppercase text-sky-900 ml-1 flex items-center gap-2">
              <LuGlobe size={14} /> Country
            </Label>
            <Input
              placeholder="ITALY"
              className="rounded-xl border-zinc-200 h-16 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold text-[11px] uppercase px-4"
            />
            <FieldError className="text-rose-500 text-[9px] font-bold uppercase ml-1" />
          </TextField>

          <div className="flex flex-col gap-3">
            <Label className="text-sm font-bold uppercase text-sky-900 ml-1">
              Category
            </Label>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="SELECT CATEGORY"
            >
              <Select.Trigger className="rounded-xl border-zinc-200 h-16 bg-zinc-50/50 hover:border-sky-900 transition-all px-4 font-bold text-[11px] uppercase">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover className="rounded-xl border-zinc-100 shadow-2xl">
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
                      className="rounded-lg p-3 font-bold uppercase text-sm hover:bg-sky-50 text-zinc-600 data-[selected=true]:text-sky-900 data-[selected=true]:bg-sky-50"
                    >
                      {cat}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <TextField
            name="price"
            type="number"
            isRequired
            className="flex flex-col gap-3"
          >
            <Label className="text-sm font-bold uppercase text-sky-900 ml-1 flex items-center gap-2">
              <LuDollarSign size={14} /> Investment (USD)
            </Label>
            <Input
              type="number"
              placeholder="2500"
              className="rounded-xl border-zinc-200 h-16 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold text-[11px] uppercase px-4"
            />
            <FieldError className="text-rose-500 text-[9px] font-bold uppercase ml-1" />
          </TextField>

          <TextField name="duration" isRequired className="flex flex-col gap-3">
            <Label className="text-sm font-bold uppercase text-sky-900 ml-1 flex items-center gap-2">
              <LuClock size={14} /> Duration
            </Label>
            <Input
              placeholder="10 DAYS / 9 NIGHTS"
              className="rounded-xl border-zinc-200 h-16 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold text-[11px] uppercase px-4"
            />
            <FieldError className="text-rose-500 text-[9px] font-bold uppercase ml-1" />
          </TextField>

          <div className="md:col-span-2">
            <TextField
              name="departureDate"
              type="date"
              isRequired
              className="flex flex-col gap-3"
            >
              <Label className="text-sm font-bold uppercase text-sky-900 ml-1 flex items-center gap-2">
                <LuCalendar size={14} /> Scheduled Departure
              </Label>
              <Input
                type="date"
                className="rounded-xl border-zinc-200 h-16 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold text-[11px] uppercase px-4"
              />
              <FieldError className="text-rose-500 text-[9px] font-bold uppercase ml-1" />
            </TextField>
          </div>

          <div className="md:col-span-2">
            <TextField
              name="imageUrl"
              isRequired
              className="flex flex-col gap-3"
            >
              <Label className="text-sm font-bold uppercase text-sky-900 ml-1 flex items-center gap-2">
                <LuImage size={14} /> Asset URL (High Res)
              </Label>
              <Input
                type="url"
                placeholder="HTTPS://IMAGE-HOST.COM/PHOTO.JPG"
                className="rounded-xl border-zinc-200 h-16 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold text-[11px] uppercase px-4"
              />
              <FieldError className="text-rose-500 text-[9px] font-bold uppercase ml-1" />
            </TextField>
          </div>

          <div className="md:col-span-2">
            <TextField
              name="description"
              isRequired
              className="flex flex-col gap-3"
            >
              <Label className="text-sm font-bold uppercase text-sky-900 ml-1 flex items-center gap-2">
                <LuAlignLeft size={14} /> Narrative Description
              </Label>
              <TextArea
                placeholder="DESCRIBE THE ODYSSEY..."
                className="rounded-xl border-zinc-200 p-6 bg-zinc-50/50 hover:border-sky-900 transition-all min-h-[160px] font-medium text-sm text-zinc-600 leading-relaxed"
              />
              <FieldError className="text-rose-500 text-[9px] font-bold uppercase ml-1" />
            </TextField>
          </div>
        </div>

        <div className="pt-8">
          <Button
            type="submit"
            className="w-full h-18 bg-sky-900 text-white font-bold rounded-xl shadow-2xl shadow-sky-900/20 hover:bg-sky-800 transition-all uppercase text-[12px] h-16"
          >
            Create Destination
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddDestinationPage;
