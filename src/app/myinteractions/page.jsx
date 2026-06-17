"use client";
import { useEffect, useState } from "react";
import MyInteraction from "@/components/MyInteraction";
import { authClient } from "@/lib/auth-client";

export default function Page() {
  const [comments, setComments] = useState([]);
  const [mounted, setMounted] = useState(false); 

  const fetchComments = async () => {
   
    if (!mounted) return;
    
    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/commentData`, {
          headers: {
            authorization: `Bearer ${tokenData?.token}`
          }
        }
      );
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // mounted ট্রু হলেই কেবল ডাটা ফেচ হবে
  useEffect(() => {
    if (mounted) {
      fetchComments();
    }
  }, [mounted]);

  // সার্ভার সাইড বা বিল্ড টাইমে ব্ল্যাঙ্ক UI রেন্ডার হবে যাতে বিল্ড ক্র্যাশ না করে
  if (!mounted) {
    return <div className="p-10 text-center text-gray-500 font-medium">Loading Page Data...</div>;
  }

  return (
    <MyInteraction
      comments={comments}
      refreshComments={fetchComments}
    />
  );
}