"use client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { IoTrashBin } from "react-icons/io5";

const DeleteAlert = ({ destination }) => {
  const router = useRouter();
  const { _id, destinationName } = destination;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/destination/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      router.push("/destinations");
    }
  };
  return (
    <div>
      <AlertDialog>
        <Button variant="danger">
          <IoTrashBin />
          Delete Project
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete project permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong>My Awesome Project</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button slot="close" variant="danger" onClick={handleDelete}>
                  Delete Project
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
