"use client";

import dynamic from "next/dynamic";


const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center text-gray-500 font-medium">
      Loading Profile...
    </div>
  ),
});

export default function ProfileClient() {
  return <ProfileCard />;
}