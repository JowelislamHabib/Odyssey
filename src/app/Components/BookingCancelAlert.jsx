"use client";
import React from "react";
import { AlertDialog, Button, toast } from "@heroui/react";
import { LuTrash2 } from "react-icons/lu";
import { useRouter } from "next/navigation";

const BookingCancelAlert = ({ booking }) => {
  const router = useRouter();
  const handleCancelBooking = async () => {
    "server client";
    console.log(booking.id);
    const res = await fetch(`http://localhost:8000/bookings/${booking._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      router.refresh();
      toast.success("Destination cancelled successfully!");
    }
  };
  return (
    <div>
      <AlertDialog>
        <Button
          variant="outline"
          className="flex items-center gap-2 px-6 h-11 py-3 rounded-xl border border-slate-200  font-bold text-sm hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 transition-all"
        >
          <LuTrash2 size={16} />
          Cancel
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Cancel{" "}
                  <span className="text-sky-500 font-bold">
                    {booking.destinationName} Booking
                  </span>{" "}
                  permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong>{booking.destinationName}</strong> booking and all of
                  its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  onClick={handleCancelBooking}
                  slot="close"
                  variant="danger"
                >
                  Cancel Booking
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default BookingCancelAlert;
