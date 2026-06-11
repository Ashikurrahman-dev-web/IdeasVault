"use client"
import {useEffect, useState} from 'react';

const MyInteraction = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
      const fetchComments = async () => {
        try {
          const res = await fetch("http://localhost:5000/commentData");
          const data = await res.json();
          setComments(data);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchComments();
    }, []);
    return (
        <div className='max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {comments.map((comment)=>(
          <div key={comment._id} className='bg-gray-300 rounded-2xl shadow-sm mx-auto'>
            {comment.comment}
            </div> ))} 
            <button className='cursor-pointer rounded-2xl bg-gray-400'>
                edit
            </button>
        </div>
    );
};

export default MyInteraction;