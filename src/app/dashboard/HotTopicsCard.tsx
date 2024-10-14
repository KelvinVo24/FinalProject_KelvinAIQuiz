import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomWorldCloud from "@/components/ui/CustomWorldCloud";
import { prisma } from "@/lib/db";
import React from "react";

type Props = {};

const HotTopicsCard = async (props: Props) => {
  const topics = await prisma.topicCount.findMany({});
  const formmattedTopics = topics.map((topic) => {
    return {
      text: topic.topic,
      value: topic.count,
    };
  });
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click here to see the latest hot topics!
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <CustomWorldCloud formattedTopics={formmattedTopics} />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
