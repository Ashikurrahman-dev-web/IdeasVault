"use client"
import { DeleteComment } from '@/components/DeleteComment';
import { EditComment } from '@/components/EditComment';
import {useEffect, useState} from 'react';

const MyInteraction = () => {
    const [comments, setComments] = useState([]);
const fetchComments = async () => {
    try {
      const res = await fetch("http://localhost:5000/commentData");
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };
   useEffect(() => {
    fetchComments();
  }, []);
    return (
      <div className="max-w-7xl mx-auto mt-8 mb-8 items-center">
        <div className='max-w-6xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
          {comments.map((comment) => (
  <div
    key={comment._id}
    className="bg-gray-300 rounded-2xl shadow-sm mx-auto p-4"
  >
    <p>{comment.comment}</p>
<div className='flex justify-center gap-2'>
    <EditComment
      id={comment._id}
      data={comment}
      refreshComments={fetchComments}
    />
    <DeleteComment id={comment._id} refreshComments={fetchComments}/></div>
  </div>
))}  
        </div>
        </div>
    );
};

export default MyInteraction;