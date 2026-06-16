"use client";

import { useEffect, useState } from "react";
import MyInteraction from "@/components/MyInteraction";
import { authClient } from "@/lib/auth-client";

export default function Page() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const {data:tokenData} = await authClient.token()
    const res = await fetch(
      "http://localhost:5000/commentData",{
    headers:{
      authorization: `Bearer ${tokenData?.token}`
    }
  });
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <MyInteraction
      comments={comments}
      refreshComments={fetchComments}
    />
  );
}