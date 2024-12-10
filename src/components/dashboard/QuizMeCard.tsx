"use client";

import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BrainCircuit, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const QuizMeCard = () => {
  const [examScoreRank, setExamScoreRank] = React.useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    // Retrieve the score rank from local storage
    const storedScoreRank = localStorage.getItem("examScoreRank");
    if (storedScoreRank) {
      setExamScoreRank(storedScoreRank);
    }
  }, []);

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50"
      onClick={() => {
        router.push("/quiz");
      }}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 bg-blue-500/10 rounded-full" />

      <CardHeader className="relative pb-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-500 rounded-lg">
                <BrainCircuit className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Quiz Now!
              </CardTitle>
            </div>
          </div>

          <div className="transform transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight className="w-5 h-5 text-blue-500" />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Test your English knowledge with our AI powered quiz
          </p>

          {/* Stats or features section */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-3 bg-white/80 rounded-lg backdrop-blur-sm">
              <div className="text-xs font-medium text-gray-500">Questions</div>
              <div className="text-lg font-bold text-blue-600">AI-Powered</div>
            </div>
            <div className="p-3 bg-white/80 rounded-lg backdrop-blur-sm">
              <div className="text-xs font-medium text-gray-500">
                Difficulty
              </div>
              <div className="text-lg font-bold text-blue-600">
                {examScoreRank !== null && <span> {examScoreRank}</span>}
              </div>
            </div>
          </div>

          {/* Interactive indicator */}
          <div className="flex items-center text-sm text-blue-600 font-medium">
            <span className="mr-2">Start Quiz</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizMeCard;
