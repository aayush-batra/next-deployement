import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b-2 border-white mb-4">
      <Link href={"/"}>NEXT APP</Link>
      <div className="flex gap-8 items-center">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <Link href="/user-profile">Profile</Link>
          <SignOutButton />
        </SignedIn>
      </div>
    </nav>
  );
};
