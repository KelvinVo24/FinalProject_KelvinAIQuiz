import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, Trophy } from "lucide-react";

type Props = {
  accuaracy: number;
};

const ResultsCard = ({ accuaracy }: Props) => {
  return (
    <Card className="md:col-span-7 bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-xl rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-3xl font-extrabold">Results</CardTitle>
        <Award className="text-yellow-400 animate-bounce" size={36} />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-3/6">
        {accuaracy > 75 ? (
          <>
            <Trophy className="mr-4 text-yellow-400 animate-pulse" size={60} />
            <div className="flex flex-col text-2xl font-semibold text-yellow-300">
              <span className="text-center">Impressive!</span>
              <span className="text-sm text-center text-white opacity-80">
                {"> 75% Accuracy"}
              </span>
            </div>
          </>
        ) : accuaracy > 25 ? (
          <>
            <Trophy className="mr-4 text-gray-300" size={60} />
            <div className="flex flex-col text-2xl font-semibold text-gray-200">
              <span className="text-center">Good Job!</span>
              <span className="text-sm text-center text-white opacity-80">
                {"> 25% Accuracy"}
              </span>
            </div>
          </>
        ) : (
          <>
            <Trophy className="mr-4 text-red-400" size={60} />
            <div className="flex flex-col text-2xl font-semibold text-red-200">
              <span className="text-center">Nice Try!</span>
              <span className="text-sm text-center text-white opacity-80">
                {"< 25% Accuracy"}
              </span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultsCard;
