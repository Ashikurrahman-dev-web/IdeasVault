"use client";
import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import MyInteraction from "@/components/MyInteraction";
import { authClient } from "@/lib/auth-client";

const CommentShow = () => {
const [comments, setComments] = useState([]);
const fetchComments = async () => {
  const {data:tokenData} = await authClient.token()
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/commentData`,{
    headers:{
      authorization: `Bearer ${tokenData?.token}`
    }
  })
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