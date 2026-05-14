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
    departureDate,
    imageUrl,
    description,
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`http://localhost:8000/destination/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (res.ok) {
      router.refresh();
      toast.success("Destination information updated successfully!");
    }
  };

  return (
    <Modal>
      {/* Trigger Button matches the Details Page style */}
      <Button
        variant="bordered"
        className="font-bold border-slate-200 rounded-full px-6  bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors flex items-center gap-2"
      >
        <LuPencil size={18} />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          {/* Main Dialog with custom Odessy rounding */}
          <Modal.Dialog className="sm:max-w-2xl rounded-lg border-none shadow-2xl bg-white overflow-hidden">
            <Modal.CloseTrigger className="top-6 right-6" />

            <Modal.Header className="p-8 pb-0 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
                  <LuPencil size={24} />
                </div>
                <div>
                  <Modal.Heading className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-none">
                    Edit Destination
                  </Modal.Heading>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                    Update travel package details
                  </p>
                </div>
              </div>
            </Modal.Header>

            <Modal.Body className="p-8">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Destination Name */}
                  <div className="md:col-span-2">
                    <TextField
                      name="destinationName"
                      isRequired
                      defaultValue={destinationName}
                      className="flex flex-col gap-2"
                    >
                      <Label className="text-[10px] font-black uppercase text-slate-900 tracking-wider ml-1">
                        Destination Name
                      </Label>
                      <Input
                        placeholder="Bali Paradise"
                        className="rounded-lg border-slate-200 h-12 hover:border-sky-500 transition-all"
                      />
                      <FieldError className="text-rose-500 text-[10px] font-bold" />
                    </TextField>
                  </div>

                  {/* Country */}
                  <TextField
                    name="country"
                    isRequired
                    defaultValue={country}
                    className="flex flex-col gap-2"
                  >
                    <Label className="text-[10px] font-black uppercase text-slate-900 tracking-wider ml-1">
                      Country
                    </Label>
                    <Input className="rounded-xl border-slate-200 h-12 hover:border-sky-500 transition-all" />
                    <FieldError className="text-rose-500 text-[10px] font-bold" />
                  </TextField>

                  {/* Category */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-[10px] font-black uppercase text-slate-900 tracking-wider ml-1">
                      Category
                    </Label>
                    <Select
                      name="category"
                      isRequired
                      defaultValue={category}
                      className="w-full"
                    >
                      <Select.Trigger className="rounded-xl border-slate-200 h-12 hover:border-sky-500 transition-all px-4">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover className="rounded-xl">
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
                              className="rounded-xl p-2 hover:bg-sky-50"
                            >
                              {item}
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
                    defaultValue={price}
                    className="flex flex-col gap-2"
                  >
                    <Label className="text-[10px] font-black uppercase text-slate-900 tracking-wider ml-1">
                      Price (USD)
                    </Label>
                    <Input className="rounded-xl border-slate-200 h-12 hover:border-sky-500 transition-all" />
                    <FieldError className="text-rose-500 text-[10px] font-bold" />
                  </TextField>

                  {/* Duration */}
                  <TextField
                    name="duration"
                    isRequired
                    defaultValue={duration}
                    className="flex flex-col gap-2"
                  >
                    <Label className="text-[10px] font-black uppercase text-slate-900 tracking-wider ml-1">
                      Duration
                    </Label>
                    <Input className="rounded-xl border-slate-200 h-12 hover:border-sky-500 transition-all" />
                    <FieldError className="text-rose-500 text-[10px] font-bold" />
                  </TextField>

                  {/* Image URL */}
                  <div className="md:col-span-2">
                    <TextField
                      name="imageUrl"
                      isRequired
                      defaultValue={imageUrl}
                      className="flex flex-col gap-2"
                    >
                      <Label className="text-[10px] font-black uppercase text-slate-900 tracking-wider ml-1">
                        Image URL
                      </Label>
                      <Input className="rounded-xl border-slate-200 h-12 hover:border-sky-500 transition-all" />
                      <FieldError className="text-rose-500 text-[10px] font-bold" />
                    </TextField>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField
                      name="description"
                      isRequired
                      defaultValue={description}
                      className="flex flex-col gap-2"
                    >
                      <Label className="text-[10px] font-black uppercase text-slate-900 tracking-wider ml-1">
                        Description
                      </Label>
                      <TextArea className="rounded-lg border-slate-200 p-4 hover:border-sky-500 transition-all min-h-30" />
                      <FieldError className="text-rose-500 text-[10px] font-bold" />
                    </TextField>
                  </div>
                </div>

                {/* Modal Footer Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    slot="close"
                    variant="flat"
                    className="flex-1 h-14 rounded-xl font-bold text-slate-500"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    slot="close"
                    className="flex-[2] h-14 bg-[#0088d1] text-white font-black rounded-xl shadow-[0_10px_25px_-5px_rgba(0,136,209,0.4)] hover:bg-[#0077b6] transition-all uppercase tracking-widest text-xs"
                  >
                    Save Changes
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
