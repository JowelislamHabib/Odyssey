"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { IoTrashBin } from "react-icons/io5";

const DeleteAlert = ({ destination }) => {
  const router = useRouter();
  const { _id, destinationName } = destination;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );

    if (res.ok) {
      router.push("/destinations");
      toast.danger("Destination deleted");
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button className="font-bold border-2 border-rose-600 rounded-xl px-6 h-12 bg-white text-rose-600 hover:bg-rose-600 hover:text-white transition-all uppercase text-[10px]">
          <IoTrashBin size={14} />
          Delete
        </Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px] rounded-2xl">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading className="font-bold uppercase text-zinc-900">
                  Delete {destinationName} permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  This will permanently delete{" "}
                  <strong>{destinationName}</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button
                  slot="close"
                  className="font-bold uppercase text-[10px] bg-zinc-100 text-zinc-500 rounded-xl px-6 h-12"
                >
                  Cancel
                </Button>
                <Button
                  slot="close"
                  className="font-bold uppercase text-[10px] bg-rose-600 text-white rounded-xl px-6 h-12 shadow-lg shadow-rose-600/20"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteAlert;
