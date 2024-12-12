import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Hourglass } from "lucide-react";
import { differenceInSeconds } from "date-fns";
import { formatTimeDelta } from "@/lib/utils";

type Props = {
  timeEnded: Date;
  timeStarted: Date;
};

const TimeTakenCard = ({ timeEnded, timeStarted }: Props) => {
  return (
    <Card className="md:col-span-4 bg-gradient-to-r from-sky-500 to-indigo-500">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-2">
        <CardTitle className="text-2xl font-bold text-white">
          Time Taken
        </CardTitle>
        <Hourglass className="text-white" />
      </CardHeader>
      <CardContent>
        <div className="text-sm font-medium text-white">
          {formatTimeDelta(differenceInSeconds(timeEnded, timeStarted))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeTakenCard;
