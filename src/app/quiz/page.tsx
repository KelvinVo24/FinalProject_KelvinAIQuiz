import QuizCreation from "@/components/QuizCreation";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: {
    topic?: string;
  };
};

export const metadata = {
  title: "Quiz | BTEC ESL AI Quiz",
};
const QuizPage = async ({ searchParams }: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return <QuizCreation topicParam={searchParams.topic ?? ""} />;
};

export default QuizPage;
