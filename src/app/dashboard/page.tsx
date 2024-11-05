import HistoryCard from "@/components/dashboard/HistoryCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { title } from "process";
import React from "react";
import HotTopicsCard from "./HotTopicsCard";
import RecentActivities from "./RecentActivities";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

type Props = {};

export const metadata = {
  title: "Dashboard | BTEC ESL AI Quiz",
};

const Dashboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <main className="p-8 mx-auto max-w-7xl fixed inset-0 overflow-y-auto top-[50px] ">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 mb-4">
        {/* Welcome Message */}
        <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Welcome back, {session.user.name}!
        </p>

        {/* Search Bar */}
        <label
          className="relative bg-white flex flex-col md:flex-row items-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
          htmlFor="search-bar"
        >
          <input
            id="search-bar"
            placeholder="What do you want to learn?"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
          <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white active:scale-95 duration-100 border rounded-xl transition-all disabled:opacity-70">
            <div className="relative flex items-center justify-center">
              <span className="text-sm font-semibold">Search</span>
            </div>
          </button>
        </label>
      </div>
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivities />
      </div>
      <Blog />
      <Footer />
    </main>
  );
};

export default Dashboard;
