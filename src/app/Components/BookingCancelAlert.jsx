"use client";
import React from "react";
import { AlertDialog, Button, toast } from "@heroui/react";
import { LuTrash2 } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const BookingCancelAlert = ({ booking }) => {
  const router = useRouter();

  const handleCancelBooking = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );

    if (res.ok) {
      router.refresh();
      toast.success("Booking cancelled successfully!");
    }
  };

  return (
    <AlertDialog>
      <Button className="flex items-center gap-2 px-8 h-14 rounded-xl border-2 border-zinc-100 bg-white font-bold text-[11px] uppercase text-zinc-400 hover:border-rose-600 hover:text-rose-600 transition-all duration-300">
        <LuTrash2 size={16} />
        Cancel Trip
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] rounded-2xl border-none shadow-2xl bg-white overflow-hidden">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header className="flex flex-col items-center pt-10 px-8">
              <AlertDialog.Icon status="danger" className="mb-4" />
              <AlertDialog.Heading className="text-sml font-bold text-zinc-900 uppercase leading-tight text-center">
                Abort this Odyssey?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body className="px-10 py-6 text-center">
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                You are about to cancel your trip to{" "}
                <span className="text-sky-900 font-bold uppercase">
                  {booking.destinationName}
                </span>
                . This will release your reservation immediately.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="p-10 pt-2 flex gap-3">
              <Button
                slot="close"
                className="flex-1 h-14 rounded-xl font-bold uppercase text-[10px] text-zinc-400 bg-zinc-100 hover:bg-zinc-200 transition-colors"
              >
                Keep Trip
              </Button>
              <Button
                onClick={handleCancelBooking}
                slot="close"
                className="flex-1 h-14 bg-rose-600 text-white font-bold rounded-xl shadow-xl shadow-rose-600/20 hover:bg-rose-700 transition-all uppercase text-[10px]"
              >
                Confirm Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default BookingCancelAlert;
