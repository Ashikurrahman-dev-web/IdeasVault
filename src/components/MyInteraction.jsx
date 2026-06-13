"use client";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { DeleteComment } from '@/components/DeleteComment';
import { EditComment } from '@/components/EditComment';

const MyInteraction = ({comments= [],refreshComments}) => {
  console.log(comments)
  const { data: userData } = authClient.useSession();
const user = userData?.user;
  return (
    <div className="max-w-7xl mx-auto mt-8 mb-8">
      <p>Comments({comments.length})</p>
      <div className="grid lg:grid-cols-2 gap-8">
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="bg-gray-300 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2">
<div className="flex flex-col gap-4 items-center">
<Avatar size="sm">
<Avatar.Image
alt={user?.name || "User"}
src={user?.image}
 referrerPolicy="no-referrer"
 />
<Avatar.Fallback>
{user?.name?.[0] || "U"}
</Avatar.Fallback>
</Avatar>
<span className="text-green-500 shadow-sm">{user?.name}</span>
<p className="text-xs text-gray-500">
  {new Date(comment.createdAt).toLocaleString()}
</p>
</div>
              <p>{comment.comment}</p>
            </div>

            <div className="flex gap-2 mt-3">
              <EditComment
                id={comment._id}
                data={comment}
                refreshComments={refreshComments}
              />

              <DeleteComment
                id={comment._id}
                refreshComments={refreshComments}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInteraction;