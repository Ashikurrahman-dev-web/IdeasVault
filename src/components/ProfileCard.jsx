"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { UpdateUserModal } from "@/components/UpdateUserModal";

export default function ProfileCard() {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="p-10">
      <Card className="container mx-auto flex flex-col items-center p-6 space-y-4 max-w-md">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt={user?.name || "User"}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name ? user.name[0] : "U"}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-2xl font-bold">{user?.name || "No Name"}</h2>
        <p className="text-gray-500">{user?.email || "No Email"}</p>
        <UpdateUserModal img={user?.image} name={user?.name} />
      </Card>
    </div>
  );
}