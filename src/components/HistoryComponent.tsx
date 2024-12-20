import { prisma } from "@/lib/db";
import { Clock, CopyCheck, Edit2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";

type Props = {
  limit: number;
  userId: string;
};

const HistoryComponent = async ({ limit, userId }: Props) => {
  const games = await prisma.game.findMany({
    where: {
      userId,
    },
    take: limit,
    orderBy: {
      timeStarted: "desc",
    },
  });
  return (
    <div className="space-y-8">
      {games.map((game) => (
        <div
          className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-all duration-300"
          key={game.id}
        >
          <div className="flex items-center">
            {game.gameType === "mcq" ? (
              <CopyCheck className="mr-3 text-green-500" />
            ) : (
              <Edit2 className="mr-3 text-green-500" />
            )}
            <div className="ml-4 space-y-1">
              <Link
                href={`/statistics/${game.id}`}
                className="text-lg font-semibold text-gray-900 hover:text-green-500"
              >
                {game.topic}
              </Link>
              <p className="flex items-center px-2 py-1 text-sm text-white bg-slate-800 rounded-lg w-fit">
                <Clock className="w-4 h-4 mr-1" />
                {new Date(game.timeStarted).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                {game.gameType === "mcq" ? "Multiple Choice" : "Open Ended"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryComponent;
