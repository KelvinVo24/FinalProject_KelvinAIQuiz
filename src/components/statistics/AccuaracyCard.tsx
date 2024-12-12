import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Target } from "lucide-react";

type Props = { accuaracy: number };

const AccuaracyCard = ({ accuaracy }: Props) => {
  accuaracy = Math.round(accuaracy * 100) / 100;
  return (
    <Card className="md:col-span-3 bg-gradient-to-r from-sky-500 to-indigo-500">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold text-white">
          Average Accuracy
        </CardTitle>
        <Target className="text-white" />
      </CardHeader>
      <CardContent>
        <div className="text-sm font-medium text-white">
          {accuaracy.toString()}%
        </div>
      </CardContent>
    </Card>
  );
};

export default AccuaracyCard;
