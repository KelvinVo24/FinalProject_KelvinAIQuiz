import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import SignInButton from "./SignInButton";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  console.log(session?.user);
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex item-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        {/* <Link href="/" className="flex item-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            BTEC ESL AI QUIZ
          </p>
        </Link> */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/Logo.png" // Use absolute path if the image is in public
            alt="BTEC ESL AI Quiz Logo"
            className="h-10 w-35 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/quiz">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Quiz Creation
            </Button>
          </Link>
          <Link href="/history">
            <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              History
            </Button>
          </Link>
          <Link href="/aboutUs">
            <Button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              About Us
            </Button>
          </Link>
          <Link href="/Blog">
            <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Blog
            </Button>
          </Link>
          <Link href="/exam">
            <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Test English Exam
            </Button>
          </Link>
          <ThemeToggle className="mr-3 ml-3" />
          <div className="flex items-center">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text="Sign In" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
