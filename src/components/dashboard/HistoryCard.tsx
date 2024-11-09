"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { History, Clock, Target, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const HistoryCard = () => {
  const router = useRouter();

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group cursor-pointer bg-gradient-to-br from-purple-50 to-pink-50"
      onClick={() => {
        router.push("/history");
      }}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 bg-purple-500/10 rounded-full" />

      <CardHeader className="relative pb-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-purple-500 rounded-lg">
                <History className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                History
              </CardTitle>
            </div>
          </div>

          <div className="transform transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight className="w-5 h-5 text-purple-500" />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            View past quiz performances and track your progress
          </p>

          {/* Stats section */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-3 bg-white/80 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-500" />
                <div className="text-xs font-medium text-gray-500">Recent</div>
              </div>
              <div className="text-lg font-bold text-purple-600">
                Activities
              </div>
            </div>
            <div className="p-3 bg-white/80 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-purple-500" />
                <div className="text-xs font-medium text-gray-500">
                  Progress
                </div>
              </div>
              <div className="text-lg font-bold text-purple-600">Tracking</div>
            </div>
          </div>

          {/* Interactive indicator */}
          <div className="flex items-center text-sm text-purple-600 font-medium">
            <span className="mr-2">View History</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoryCard;
