import { SignedIn, UserProfile } from "@clerk/nextjs";
import React from "react";

const UserProfilePage = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <SignedIn>
        <UserProfile path="/user-profile" />
      </SignedIn>
    </div>
  );
};

export default UserProfilePage;
