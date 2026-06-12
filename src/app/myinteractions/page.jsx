"use client";

import { useEffect, useState } from "react";
import MyInteraction from "@/components/MyInteraction";

export default function Page() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await fetch(
      "http://localhost:5000/commentData"
    );
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