"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteIdea({ id }) {
  const router = useRouter()
 const handleDelete = async () => {
  const {data:tokenData} = await authClient.token()
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/ideaData/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         authorization: `Bearer ${tokenData?.token}`
      },
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
     router.push("/ideas");
    }
    toast.success("❌ Delete Confirmed")
  };

  return (
    <AlertDialog>
      <Button variant="danger">Delete Idea</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete idea permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>This Idea</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}