"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";
import { LuPencil } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function EditModal({ destination }) {
  const router = useRouter();

  const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    imageUrl,
    description,
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(updatedData),
      },
    );

    if (res.ok) {
      router.refresh();
      toast.success("Destination information updated successfully!");
    }
  };

  return (
    <Modal>
      <Button className="font-bold border-2 border-sky-900 rounded-xl px-6 h-12 bg-white text-sky-900 hover:bg-sky-900 hover:text-white transition-all duration-300 flex items-center gap-2 uppercase text-[10px] ">
        <LuPencil size={14} />
        Edit
      </Button>

      <Modal.Backdrop className="bg-zinc-900/40 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-2xl rounded-2xl border-none shadow-2xl bg-white overflow-hidden">
            <Modal.CloseTrigger className="top-6 right-6 text-zinc-400 hover:text-sky-900 transition-colors" />

            <Modal.Header className="p-10 pb-0 flex flex-col gap-1">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-sky-50 text-sky-900 rounded-xl">
                  <LuPencil size={24} />
                </div>
                <div>
                  <Modal.Heading className="text-3xl font-bold text-zinc-900 uppercase  leading-none">
                    Edit Destination
                  </Modal.Heading>
                  <p className="text-sky-900/40 text-[9px] font-bold uppercase  mt-2">
                    Refine global travel package parameters
                  </p>
                </div>
              </div>
            </Modal.Header>

            <Modal.Body className="p-10">
              <form onSubmit={onSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <TextField
                      name="destinationName"
                      isRequired
                      defaultValue={destinationName}
                      className="flex flex-col gap-2"
                    >
                      <Label className="text-[10px] font-bold uppercase text-sky-900  ml-1">
                        Destination Name
                      </Label>
                      <Input
                        placeholder="ENTER DESTINATION NAME..."
                        className="rounded-xl border-zinc-200 h-14 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold uppercase text-[10px]  px-4"
                      />
                      <FieldError className="text-rose-500 text-[9px] font-bold uppercase " />
                    </TextField>
                  </div>

                  <TextField
                    name="country"
                    isRequired
                    defaultValue={country}
                    className="flex flex-col gap-2"
                  >
                    <Label className="text-[10px] font-bold uppercase text-sky-900  ml-1">
                      Country
                    </Label>
                    <Input className="rounded-xl border-zinc-200 h-14 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold uppercase text-[10px]  px-4" />
                    <FieldError className="text-rose-500 text-[9px] font-bold uppercase " />
                  </TextField>

                  <div className="flex flex-col gap-2">
                    <Label className="text-[10px] font-bold uppercase text-sky-900  ml-1">
                      Category
                    </Label>
                    <Select
                      name="category"
                      isRequired
                      defaultValue={category}
                      className="w-full"
                    >
                      <Select.Trigger className="rounded-xl border-zinc-200 h-14 bg-zinc-50/50 hover:border-sky-900 transition-all px-4 font-bold uppercase text-[10px] ">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover className="rounded-xl border-zinc-100 shadow-xl">
                        <ListBox className="p-2">
                          {[
                            "Beach",
                            "Mountain",
                            "City",
                            "Adventure",
                            "Cultural",
                            "Luxury",
                          ].map((item) => (
                            <ListBox.Item
                              key={item}
                              id={item}
                              textValue={item}
                              className="rounded-lg p-3 font-bold uppercase text-[10px]  hover:bg-sky-50 text-zinc-600 data-[selected=true]:text-sky-900 data-[selected=true]:bg-sky-50"
                            >
                              {item}
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
                    defaultValue={price}
                    className="flex flex-col gap-2"
                  >
                    <Label className="text-[10px] font-bold uppercase text-sky-900  ml-1">
                      Price (USD)
                    </Label>
                    <Input className="rounded-xl border-zinc-200 h-14 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold uppercase text-[10px]  px-4" />
                    <FieldError className="text-rose-500 text-[9px] font-bold uppercase " />
                  </TextField>

                  <TextField
                    name="duration"
                    isRequired
                    defaultValue={duration}
                    className="flex flex-col gap-2"
                  >
                    <Label className="text-[10px] font-bold uppercase text-sky-900  ml-1">
                      Duration (Days)
                    </Label>
                    <Input className="rounded-xl border-zinc-200 h-14 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold uppercase text-[10px]  px-4" />
                    <FieldError className="text-rose-500 text-[9px] font-bold uppercase " />
                  </TextField>

                  <div className="md:col-span-2">
                    <TextField
                      name="imageUrl"
                      isRequired
                      defaultValue={imageUrl}
                      className="flex flex-col gap-2"
                    >
                      <Label className="text-[10px] font-bold uppercase text-sky-900  ml-1">
                        Asset URL
                      </Label>
                      <Input className="rounded-xl border-zinc-200 h-14 bg-zinc-50/50 hover:border-sky-900 transition-all font-bold text-[10px]  px-4" />
                      <FieldError className="text-rose-500 text-[9px] font-bold uppercase " />
                    </TextField>
                  </div>

                  <div className="md:col-span-2">
                    <TextField
                      name="description"
                      isRequired
                      defaultValue={description}
                      className="flex flex-col gap-2"
                    >
                      <Label className="text-[10px] font-bold uppercase text-sky-900  ml-1">
                        Narrative Description
                      </Label>
                      <TextArea className="rounded-xl border-zinc-200 p-4 bg-zinc-50/50 hover:border-sky-900 transition-all min-h-32 font-medium text-sm text-zinc-600 leading-relaxed" />
                      <FieldError className="text-rose-500 text-[9px] font-bold uppercase " />
                    </TextField>
                  </div>
                </div>

                <div className="flex gap-4 pt-6 pb-2">
                  <Button
                    slot="close"
                    variant="flat"
                    className="flex-1 h-16 rounded-xl font-bold uppercase  text-[10px] text-zinc-400 bg-zinc-100 hover:bg-zinc-200 transition-colors"
                  >
                    Discard
                  </Button>
                  <Button
                    type="submit"
                    slot="close"
                    className="flex-[2] h-16 bg-sky-900 text-white font-bold rounded-xl shadow-xl shadow-sky-900/20 hover:bg-sky-800 transition-all uppercase  text-[10px]"
                  >
                    Commit Changes
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
