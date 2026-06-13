"use client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";

export function EditComment({id, data,refreshComments}) {
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const commentData = Object.fromEntries(formData.entries());
        const res=await fetch(`http://localhost:5000/commentData/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });
        const result = await res.json();
        console.log(result);
         if (result.modifiedCount > 0) {
       await refreshComments();
    };
    toast.success("Successfully Edited")
    };
  const comment = data?.comment || "";
  return (
    <Modal>
      <Button variant="secondary" className={'bg-green-500 text-white'}>
       Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-3xl max-h-[90vh] overflow-hidden">

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>

              <Modal.Heading>
                Edit Comment
              </Modal.Heading>
            </Modal.Header>

            {/* Scrollable Body */}
            <Modal.Body className="overflow-y-auto max-h-[70vh] p-6">
              <Surface variant="default" className="p-4 rounded-xl">
                <form onSubmit={onSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    name="comment"
                    className="md:col-span-2"
                    defaultValue= {comment}
                  >
                    <Label>Comment</Label>
                    <Input placeholder="Edit Comment" />
                  </TextField>
<div className="flex justify-between gap-4">
  <Button slot="close" variant="secondary" className={'text-green-500'}>
                Cancel
              </Button>

              <Button slot="close" type="submit" className={'bg-green-500'}>
                Update Comment
              </Button>
</div>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}