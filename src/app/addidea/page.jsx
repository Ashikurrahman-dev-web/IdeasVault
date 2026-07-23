"use client";
import React, { useState, useEffect } from 'react'; 
import { Button, FieldError, Select, ListBox, Input, Label, TextArea, TextField } from "@heroui/react";
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { uploadImage } from '@/utils/uploadImage';

const AddIdea = () => {
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);
  const [mounted, setMounted] = useState(false); 
const [preview, setPreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
  useEffect(() => {
    setMounted(true);
  }, []);
const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ideaData = Object.fromEntries(formData.entries());
   let imageUrl = "";
           if (imageFile) {
               try {
                   imageUrl = await uploadImage(imageFile);
               } catch (uploadErr) {
                   toast.error("Image upload failed!");
                   setLoading(false);
                   return;
               }
           } else {
               toast.error("Please upload an avatar first");
               setLoading(false);
               return;
           }; 
    const { data: tokenData } = await authClient.token();     
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/ideaData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(ideaData), 
    });
    
    setIsAdded(true);
    toast.success("✅ Idea Added Successfully in My Ideas Page!");
    router.push("/myideas");
    const data = await res.json();
  };

  if (!mounted) {
    return <div className="p-10 text-center text-gray-500 font-medium">Loading Add Idea Form...</div>;
  }

  return (
    <form className="p-10 space-y-8" onSubmit={onSubmit}>
      <div className="flex flex-col items-center gap-3 mb-4 w-full">
                        <div className="relative">
<div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 shadow-lg bg-slate-800">
                                {preview ? (
<img src={preview} alt="Profile Preview" className="w-full h-full object-cover" />
                                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500">
                                        <FaUser size={32} />
                                    </div>
                                )}
                            </div>
<label htmlFor="image" className="absolute bottom-0 right-0 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full cursor-pointer shadow-lg transition">
                                <FaCamera size={12} />
                            </label>
                        </div>
<input id="image" name="image" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                        <p className="text-xs text-green-500">Upload your profile picture</p>
                    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Select
            name="category"
            isRequired
            className="w-full"
            placeholder="Select category"
          >
            <Label>Category</Label>
            <Select.Trigger className="rounded-2xl">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="Politics" textValue="Politics">
                  Politics
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Education" textValue="Education">
                  Education
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Technology" textValue="Technology">
                  Technology
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="ArtificialIntelligence" textValue="ArtificialIntelligence">
                  ArtificialIntelligence
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="CyberSecurity" textValue="CyberSecurity">
                  CyberSecurity
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Environment" textValue="Environment">
                  Environment
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>            
        
        <div className="md:col-span-1">
          <TextField name="title" isRequired>
            <Label>Title of Idea</Label>
            <Input placeholder="Title" className="rounded-2xl text-gray-600" />
            <FieldError />
          </TextField>
        </div>

        <TextField name="tag" isRequired>
          <Label>Tag</Label>
          <Input placeholder="Tag" className="rounded-2xl text-gray-600" />
          <FieldError />
        </TextField>

        <div className="md:col-span-1">
          <TextField name="shortDescription" isRequired>
            <Label>Short Description</Label>
            <Input
              placeholder="Short description of the idea"
              className="rounded-2xl text-gray-600"
            />
            <FieldError />
          </TextField>
        </div>

        <div className="md:col-span-1">
          <TextField name="targetAudience" isRequired>
            <Label>Target Audience</Label>
            <Input
              placeholder="Target audience of the idea"
              className="rounded-2xl text-gray-600"
            />
            <FieldError />
          </TextField>
        </div>

        <div className="md:col-span-1">
          <TextField name="problemStatement" isRequired>
            <Label>Problem Statement</Label>
            <Input
              placeholder="Problem statement of the idea"
              className="rounded-2xl text-gray-600"
            />
            <FieldError />
          </TextField>
        </div>

        <div className="md:col-span-1">
          <TextField name="proposedSolution" isRequired>
            <Label>Proposed Solution</Label>
            <Input
              placeholder="Proposed solution of the idea"
              className="rounded-2xl text-gray-600"
            />
            <FieldError />
          </TextField>
        </div>

        <div className="md:col-span-2">
          <TextField name="description" isRequired>
            <Label>Describe Idea's</Label>
            <TextArea
              placeholder="Describe the idea..."
              className="rounded-3xl text-gray-600"
            />
            <FieldError />
          </TextField>
        </div>
      </div>

      <div className='flex justify-center'>
        <Button
          type="submit"
          variant="outline"
          className="mt-6 cursor-pointer bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition shadow-sm"
        >
          {isAdded ? 'Idea Added' : 'Add Idea'}
        </Button>
      </div>
    </form>
  );
};

export default AddIdea;