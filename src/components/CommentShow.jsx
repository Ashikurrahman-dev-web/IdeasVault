"use client";
import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import MyInteraction from "@/components/MyInteraction";

const CommentShow = () => {
const [comments, setComments] = useState([]);

const fetchComments = async () => {
  const res = await fetch("http://localhost:5000/commentData");
  const data = await res.json();
  setComments(data);
};
useEffect(() => {
  fetchComments();
}, []);
    return (
        <div>
           <div>
             <CommentSection refreshComments={fetchComments} />

      <MyInteraction
        comments={comments}
        refreshComments={fetchComments}
      />
            </div> 
        </div>
    );
};

export default CommentShow;