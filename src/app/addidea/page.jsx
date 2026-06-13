"use client";
import React, { useState } from 'react';
import {Button, FieldError, Select, ListBox, Input, Label,TextArea, TextField} from "@heroui/react";
import toast from 'react-hot-toast';
const AddIdea = () => {
  const [isAdded, setIsAdded]= useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const ideaData = Object.fromEntries(formData.entries());
        
 const res=await fetch('http://localhost:5000/ideaData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ideaData), 
    });
    setIsAdded(true);
    toast.success("✅ Idea Added Successfully in My Ideas Page!");
        const data = await res.json();
    }
    return (
        <form
            className="p-10 space-y-8"
            onSubmit={onSubmit}
          >
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
                      <ListBox.Item id="Artificial Intelligence" textValue="Artificial Intelligence">
                        Artificial Intelligence
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cyber Security" textValue="Cyber Security">
                        Cyber Security
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

              {/* Image URL - Removed preview */}
              <div className="md:col-span-1">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/idea.jpg"
                    className="rounded-2xl text-gray-600"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2 ">
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

            {/* Buttons */}
<div className='flex justify-center'>
            <Button
              type="submit"
              variant="outline"
className="mt-6 cursor-pointer bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition shadow-sm"
            >
                {isAdded ? 'Idea Added' : 'Add Idea'}
            </Button></div>
          </form>
    );
};

export default AddIdea;