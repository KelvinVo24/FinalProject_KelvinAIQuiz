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
import Link from "next/link";
import { House } from "lucide-react";
import SearchLabel from "@/components/SearchLabel";

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
        <p className="text-3xl font-bold tracking-tight sm:text-4xl">
          Welcome back, {session.user.name}!
        </p>

        {/* Search Bar */}
        <SearchLabel />
      </div>

      <div className="relative w-full h-[420px]" id="home">
        <div className="absolute inset-0">
          <img
            className="object-cover object-center w-full h-full"
            src="/FANTI_Cover_AboutUs.png"
            alt="Background Image"
          />
        </div>
      </div>

      <div className="text-center py-8">
        <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-700 dark:from-cyan-400 dark:to-teal-700">
          Powered by the most innovative minds in{" "}
          <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
              <li>English</li>
              <li>Tech</li>
              <li>AI</li>
              <li>Education</li>
              <li>Language</li>
              <li aria-hidden="true">English</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="min-h-screen p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-lg ">
            <div className="p-2 bg-blue-500 rounded-lg">
              <House className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
          </div>
        </div>

        {/* First Row */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <QuizMeCard />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <HistoryCard />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-7">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all lg:col-span-4">
            <HotTopicsCard />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all lg:col-span-3">
            <RecentActivities />
          </div>
        </div>
      </div>
      <Blog />
      <Footer />
    </main>
  );
};

export default Dashboard;
