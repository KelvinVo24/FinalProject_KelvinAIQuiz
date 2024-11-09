import HistoryComponent from "@/components/HistoryComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";
import { prisma } from "@/lib/db";
import { Clock } from "lucide-react";

type Props = {};

const RecentActivities = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  const gamesCount = await prisma.game.count({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <Card className="col-span-4 lg:col-span-3 overflow-hidden transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-green-50 to-cyan-50">
      <CardHeader className="relative ">
        <div className="flex items-center space-x-2 mb-2">
          <div className="p-2 bg-green-500 rounded-lg">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
              Recent Activities
            </CardTitle>
            <CardDescription className="text-gray-600">
              You have played a total of {gamesCount} games.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative max-h-[550px] overflow-scroll">
        <HistoryComponent limit={10} userId={session.user.id} />
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
