"use client";

import React, { useEffect } from "react";
import { Game, Question } from "@prisma/client";
import { differenceInSeconds } from "date-fns";
import { BarChart, ChevronRight, Loader2, Timer, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { checkAnswerSchema } from "@/schemas/form/quiz";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { cn, formatTimeDelta } from "@/lib/utils";
import BlankAnswerInput from "./BlankAnswerInput";

type Props = {
  game: Game & { questions: Pick<Question, "id" | "question" | "answer">[] };
};

const OpenEnded = ({ game }: Props) => {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [blankAnswers, setBlankAnswers] = React.useState<string>("");
  const [examScoreRank, setExamScoreRank] = React.useState<string | null>(null);
  const [hasEnded, setHasEnded] = React.useState(false);
  const [now, setNow] = React.useState(new Date());
  const { toast } = useToast();

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!hasEnded) setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [hasEnded]);

  const currentQuestion = React.useMemo(
    () => game.questions[questionIndex],
    [questionIndex, game.questions]
  );

  const progress = ((questionIndex + 1) / game.questions.length) * 100;

  const { mutate: checkAnswer, isPending: isChecking } = useMutation({
    mutationFn: async () => {
      let filledAnswer = blankAnswers;
      document.querySelectorAll("#user-blank-input").forEach((input) => {
        filledAnswer = filledAnswer.replace("_____", input.value);
        input.value = "";
      });
      const payload: z.infer<typeof checkAnswerSchema> = {
        questionId: currentQuestion.id,
        userAnswer: filledAnswer,
      };
      const response = await axios.post("/api/checkAnswer", payload);
      return response.data;
    },
  });

  const handleNext = React.useCallback(() => {
    if (isChecking) return;
    checkAnswer(undefined, {
      onSuccess: ({ percentageSimilar }) => {
        toast({
          title: `You got ${percentageSimilar}% correct!`,
          description: "Keep it up!",
        });
        if (questionIndex === game.questions.length - 1) {
          setHasEnded(true);
          return;
        }
        setQuestionIndex((prev) => prev + 1);
      },
    });
  }, [checkAnswer, toast, isChecking, questionIndex, game.questions.length]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") handleNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleNext]);

  useEffect(() => {
    // Retrieve the score rank from local storage
    const storedScoreRank = localStorage.getItem("examScoreRank");
    if (storedScoreRank) {
      setExamScoreRank(storedScoreRank);
    }
  }, []);

  if (hasEnded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <Card className="w-full max-w-md p-8 text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Quiz Completed! 🎉
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 text-lg font-medium text-green-500 bg-green-500/10 rounded-lg">
              Time taken:{" "}
              {formatTimeDelta(differenceInSeconds(now, game.timeStarted))}
            </div>
            <Link
              href={`/statistics/${game.id}`}
              className="inline-flex items-center justify-center w-full gap-2 p-4 text-white transition-colors rounded-lg bg-slate-800 hover:bg-slate-700"
            >
              View Statistics
              <BarChart className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          {/* Header Section */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-slate-700">
                {game.topic}
              </span>
              <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-slate-700">
                {examScoreRank}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-slate-700">
              <Timer className="w-4 h-4" />
              {formatTimeDelta(differenceInSeconds(now, game.timeStarted))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-400">
              <span>
                Question {questionIndex + 1} of {game.questions.length}
              </span>
              <span>Progress: {Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="border-none shadow-lg bg-slate-800">
            <CardHeader className="p-6">
              <CardTitle className="text-xl font-medium text-white">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Answer Input */}
          <div className="flex flex-col items-center w-full mt-4">
            <BlankAnswerInput
              answer={currentQuestion.answer}
              setBlankAnswer={setBlankAnswers}
            />
            <Button className="mt-2" disabled={isChecking} onClick={handleNext}>
              {isChecking && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Next <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenEnded;
