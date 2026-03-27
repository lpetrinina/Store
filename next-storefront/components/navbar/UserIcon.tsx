import { LuUser } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";

async function UserIcon() {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img src={profileImage} className='w-6 h-6 rounded-full object-cover' />
    );
  }

  return (
    <div className='p-1 bg-primary rounded-full text-white'>
      <LuUser className='w-6 h-6' />
    </div>
  );
}

export default UserIcon;
