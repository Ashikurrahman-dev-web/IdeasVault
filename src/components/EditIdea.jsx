"use client";
import { useRouter } from "next/navigation";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export function EditModal({id, data}) {
  const { title, tag, imageUrl, shortDescription, targetAudience, problemStatement, proposedSolution,
    description, category } = data
  const router = useRouter();
const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const ideaData = Object.fromEntries(formData.entries());
        const {data:tokenData} = await authClient.token() 
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/ideaData/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(ideaData),
    });
        const data = await res.json();
        console.log(data);
         if (data.modifiedCount > 0) {
      router.refresh(); 
    };
    toast.success("Successfully Edited")
    }
  return (
    <Modal>
      <Button variant="secondary" className={'bg-green-500 text-white'}>
       Edit Idea
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
                Edit Idea
              </Modal.Heading>
            </Modal.Header>

            {/* Scrollable Body */}
            <Modal.Body className="overflow-y-auto max-h-[70vh] p-6">
              <Surface variant="default" className="p-4 rounded-xl">
                <form 
                onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Category */}
                  <div className="md:col-span-2">
                    <Select
                      name="category"
                      className="w-full"
                      placeholder="Select category"
                      defaultValue={category}
                    >
                      <Label>Category</Label>

                      <Select.Trigger className="rounded-xl">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Politics"  textValue="Politics">
                            Politics
                          </ListBox.Item>

                          <ListBox.Item id="Education"  textValue="Education">
                            Education
                          </ListBox.Item>

                          <ListBox.Item id="Technology"  textValue="Technology">
                            Technology
                          </ListBox.Item>

                          <ListBox.Item id="Artificial Intelligence" textValue="ArtificialIntelligence">
                            ArtificialIntelligence
                          </ListBox.Item>

                          <ListBox.Item id="Cyber Security" textValue="CyberSecurity">
                            CyberSecurity
                          </ListBox.Item>

                          <ListBox.Item id="Environment" textValue="Environment">
                            Environment
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  {/* Title */}
                  <TextField name="title" defaultValue={title}>
                    <Label>Title</Label>
                    <Input placeholder="Edit title" />
                  </TextField>

                  {/* Tag */}
                  <TextField name="tag" defaultValue={tag}>
                    <Label>Tag</Label>
                    <Input placeholder="Edit tag" />
                  </TextField>

                  {/* Short Description */}
                  <TextField
                    name="shortDescription"
                    className="md:col-span-2"
                    defaultValue={shortDescription}
                  >
                    <Label>Short Description</Label>
                    <Input placeholder="Edit short description" />
                  </TextField>

                  {/* Target Audience */}
                  <TextField name="targetAudience" defaultValue={targetAudience}>
                    <Label>Target Audience</Label>
                    <Input placeholder="Edit target audience" />
                  </TextField>

                  {/* Image URL */}
                  <TextField name="imageUrl" defaultValue={imageUrl}>
                    <Label>Image URL</Label>
                    <Input placeholder="https://example.com/image.jpg" />
                  </TextField>

                  {/* Problem Statement */}
                  <TextField
                    name="problemStatement"
                    className="md:col-span-2"
                    defaultValue={problemStatement}
                  >
                    <Label>Problem Statement</Label>
                    <Input placeholder="Edit problem statement" />
                  </TextField>

                  {/* Proposed Solution */}
                  <TextField
                    name="proposedSolution"
                    className="md:col-span-2"
                    defaultValue={proposedSolution}
                  >
                    <Label>Proposed Solution</Label>
                    <Input placeholder="Edit proposed solution" />
                  </TextField>

                  {/* Description */}
                  <TextField
                    name="description"
                    className="md:col-span-2"
                    defaultValue={description}
                  >
                    <Label>Description</Label>
                    <Input placeholder="Edit full description" />
                  </TextField>
<div className="flex justify-between gap-4">
  <Button slot="close" variant="secondary" className={'text-green-500'}>
                Cancel
              </Button>

              <Button slot="close" type="submit" className={'bg-green-500'}>
                Update Idea
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