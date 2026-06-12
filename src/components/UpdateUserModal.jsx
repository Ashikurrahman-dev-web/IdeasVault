"use client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { Edit } from "lucide-react";
import { BiUser } from "react-icons/bi";
import { authClient } from '@/lib/auth-client';

export function UpdateUserModal({img,name}) {
    const onSubmit =async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        // console.log(name, image)
        await authClient.updateUser({
            name,
            image,
        })
    };
    
  return (
    <div className="flex gap-2">
      
      <Modal>
      <Button variant="secondary" className={"text-green-500"}><Edit></Edit>Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
              
        
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" defaultValue={name}>
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url" defaultValue={img}>
                    <Label>Image URL</Label>
                    <Input placeholder="Image Url" />
                  </TextField>
                   <Modal.Footer>
              <Button slot="close" variant="secondary" className='text-green-500'>
                Cancel
              </Button>
              <Button type="submit" slot="close" className='bg-green-500'>Save</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    </div>
  );
}