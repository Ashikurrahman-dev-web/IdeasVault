"use client";
import { useState } from "react";
import {Button, FieldError, Label,TextArea, TextField} from "@heroui/react";

const CommentSection = () => {
    const [isPost, setIsPost] = useState(false);
    const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const commentData = Object.fromEntries(formData.entries());
  const res = await fetch('http://localhost:5000/commentData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  });
  setIsPost(true);
  const data = await res.json();
};
    return (
        <div>
           <div>
          <form className="p-10 space-y-8"
            onSubmit={onSubmit}>
            <div className="">
                            <TextField name="comment" isRequired>
                              <Label>Comment</Label>
                              <TextArea
                                placeholder="comment"
                                className="rounded-3xl text-gray-600"
                              />
                              <FieldError />
                            </TextField>
                          </div>
                          <div className='text-center mb-9'>
                                      <Button
                                        type="submit"
                                        variant="outline"
className="mt-6 cursor-pointer bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition shadow-sm"
                                      >
                                          {isPost ? 'Posted' : 'Post'}
                                      </Button></div>
          </form>
          </div>   
        </div>
    );
};

export default CommentSection;