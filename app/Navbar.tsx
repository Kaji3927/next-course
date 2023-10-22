"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex gap-3 bg-slate-200 p-5 space-x-5">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
