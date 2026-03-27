"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

function SignOutLink() {
  const handleLogout = function () {
    toast.success("Logout successful!");
  };

  return (
    <SignOutButton redirectUrl='/'>
      <button onClick={handleLogout} className='w-full text-left capitalize'>
        logout
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
