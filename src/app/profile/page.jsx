"use client";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
const ProfilePage = () => {
  const userData = authClient.useSession();
  // console.log(userData);
  const user = userData.data?.user;
  // console.log(user)
  return (
    <div>
      <Card className="container mx-auto flex flex-col items-center">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <UpdateUserModal></UpdateUserModal>
      </Card>
    </div>
  );
};

export default ProfilePage;