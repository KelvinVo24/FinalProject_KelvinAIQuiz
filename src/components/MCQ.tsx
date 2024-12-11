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

const MCQ = ({
  game,
}: {
  game: Game & { questions: Pick<Question, "id" | "options" | "question">[] };
}) => {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [selectedChoice, setSelectChoice] = React.useState<number | null>(null);
  const [examScoreRank, setExamScoreRank] = React.useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [wrongAnswers, setWrongAnswers] = React.useState(0);
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

  const options = React.useMemo(() => {
    if (!currentQuestion?.options) return [];
    return JSON.parse(currentQuestion.options as string) as string[];
  }, [currentQuestion]);

  const progress = ((questionIndex + 1) / game.questions.length) * 100;

  const { mutate: checkAnswer, isPending: isChecking } = useMutation({
    mutationFn: async () => {
      if (selectedChoice === null) return;
      const payload: z.infer<typeof checkAnswerSchema> = {
        questionId: currentQuestion.id,
        userAnswer: options[selectedChoice],
      };
      const response = await axios.post("/api/checkAnswer", payload);
      return response.data;
    },
  });

  const handleNext = React.useCallback(() => {
    if (selectedChoice === null) {
      toast({
        title: "Select an answer",
        description: "Please choose an option to continue",
        variant: "destructive",
      });
      return;
    }

    checkAnswer(undefined, {
      onSuccess: ({ isCorrect }) => {
        if (isCorrect) {
          toast({
            title: "Correct! 🎉",
            description: "Great job!",
            variant: "success",
          });
          setCorrectAnswers((prev) => prev + 1);
        } else {
          toast({
            title: "Incorrect",
            description: "Keep trying!",
            variant: "destructive",
          });
          setWrongAnswers((prev) => prev + 1);
        }
        if (questionIndex === game.questions.length - 1) {
          setHasEnded(true);
          return;
        }
        setQuestionIndex((prev) => prev + 1);
        setSelectChoice(null);
      },
    });
  }, [
    checkAnswer,
    toast,
    questionIndex,
    game.questions.length,
    selectedChoice,
  ]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") setSelectChoice(0);
      else if (event.key === "2") setSelectChoice(1);
      else if (event.key === "3") setSelectChoice(2);
      else if (event.key === "4") setSelectChoice(3);
      else if (event.key === "Enter") handleNext();
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
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="p-4 rounded-lg bg-emerald-500/10">
                <p className="text-2xl font-bold text-emerald-500">
                  {correctAnswers}
                </p>
                <p className="text-sm text-slate-400">Correct</p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/10">
                <p className="text-2xl font-bold text-red-500">
                  {wrongAnswers}
                </p>
                <p className="text-sm text-slate-400">Incorrect</p>
              </div>
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

          {/* Options */}
          <div className="grid gap-4">
            {options.map((option, index) => (
              <Button
                key={index}
                className={cn(
                  "p-6 h-auto text-left transition-all",
                  "hover:scale-105 hover:shadow-lg",
                  selectedChoice === index
                    ? "bg-slate-700 text-white"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
                )}
                onClick={() => setSelectChoice(index)}
              >
                <div className="flex items-center gap-4">
                  {/* <span className="flex items-center justify-center w-8 h-8 text-sm font-medium rounded-full bg-slate-700">
                    {index + 1}
                  </span> */}
                  <span className="text-lg text-white">{option}</span>
                </div>
              </Button>
            ))}
          </div>

          {/* Next Button */}
          <Button
            className="self-end px-8 py-6 text-lg font-medium transition-transform hover:translate-x-1"
            onClick={handleNext}
            disabled={isChecking}
          >
            {isChecking ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <>
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>

          {/* Score Display */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-black">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">
                {correctAnswers}
              </p>
              <p className="text-sm text-white">Correct</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-500">{wrongAnswers}</p>
              <p className="text-sm text-white">Incorrect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCQ;
