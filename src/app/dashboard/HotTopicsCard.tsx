import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomWorldCloud from "@/components/ui/CustomWorldCloud";
import { prisma } from "@/lib/db";
import { Flame, TrendingUp } from "lucide-react";

const HotTopicsCard = async () => {
  const topics = await prisma.topicCount.findMany({});
  const formattedTopics = topics.map((topic) => ({
    text: topic.topic,
    value: topic.count,
  }));

  return (
    <Card className="col-span-4 overflow-hidden transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Decorative elements */}
      {/* <div className="absolute top-0 right-0 w-40 h-40 transform translate-x-20 -translate-y-20 bg-orange-500/10 rounded-full" /> */}
      {/* <div className="absolute bottom-0 left-0 w-32 h-32 transform -translate-x-16 translate-y-16 bg-amber-500/10 rounded-full" /> */}

      <CardHeader className="relative">
        <div className="flex items-center space-x-2 mb-2">
          <div className="p-2 bg-orange-500 rounded-lg">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Hot Topics
            </CardTitle>
            <CardDescription className="flex items-center mt-1 text-gray-600">
              <TrendingUp className="w-4 h-4 mr-1 text-orange-500" />
              Trending topics in real-time
            </CardDescription>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 gap-4 mt-4 mb-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xs text-gray-500 font-medium">
              Total Topics
            </div>
            <div className="text-lg font-bold text-orange-600">
              {formattedTopics.length}
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xs text-gray-500 font-medium">
              Most Popular
            </div>
            <div className="text-lg font-bold text-orange-600">
              {formattedTopics[0]?.text || "N/A"}
            </div>
          </div>
          {/* <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xs text-gray-500 font-medium">Active Now</div>
            <div className="text-lg font-bold text-orange-600">
              {formattedTopics.filter((t) => t.value > 5).length}
            </div>
          </div> */}
        </div>
      </CardHeader>

      <CardContent className="relative pl-2">
        <div className="transition-transform duration-300 hover:scale-105">
          <CustomWorldCloud formattedTopics={formattedTopics} />
        </div>
      </CardContent>

      {/* Interactive footer */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Card>
  );
};

export default HotTopicsCard;
