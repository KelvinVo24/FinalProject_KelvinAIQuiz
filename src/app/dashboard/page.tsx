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
    <main className="p-8 mx-auto max-w-7xl fixed inset-0 overflow-y-auto top-[50px]">
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
