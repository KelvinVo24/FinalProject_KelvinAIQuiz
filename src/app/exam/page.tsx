"use client";

import React from "react";
import { differenceInSeconds } from "date-fns";
import {
  BarChart,
  ChevronRight,
  Loader2,
  Timer,
  BookOpen,
  ChevronLeft,
  NotebookPen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { cn, formatTimeDelta } from "@/lib/utils";

const questions = [
  {
    question: "She __________ (be) very tired yesterday.",
    options: ["is", "was", "are", "were"],
    correct: 1,
  },
  {
    question: "What time is it? 'It’s 9:15.'",
    options: [
      "Nine fifteen",
      "Quarter to nine",
      "Half past nine",
      "Quarter after ten",
    ],
    correct: 0,
  },
  {
    question: "Which sentence is correct?",
    options: [
      "She no like coffee.",
      "She doesn’t likes coffee.",
      "She doesn’t like coffee.",
      "She not likes coffee.",
    ],
    correct: 2,
  },
  {
    question: "Peter ________ play soccer on Saturdays.",
    options: ["usually", "every", "on", "how"],
    correct: 0,
  },
  {
    question: "I can't talk now. I'm in a __________.",
    options: ["meeting", "coffee", "breakfast", "dinner"],
    correct: 0,
  },
  {
    question: "_________ you ever traveled abroad?",
    options: ["Did", "Were", "Have", "Are"],
    correct: 2,
  },
  {
    question: "Select the sentence with the correct word order:",
    options: [
      "Tomorrow will rain in the morning.",
      "It will rain tomorrow in the morning.",
      "In the morning, it will rain tomorrow.",
      "It will rain in the morning tomorrow.",
    ],
    correct: 3,
  },
  {
    question: "Choose the most polite request:",
    options: [
      "I want coffee.",
      "Give me a coffee.",
      "Could I have a coffee, please?",
      "Coffee now, please.",
    ],
    correct: 2,
  },
  {
    question: "We should leave early to avoid the ________.",
    options: ["weather", "traffic", "appointment", "noise"],
    correct: 1,
  },
  {
    question: "Which word is closest in meaning to 'complicated'?",
    options: ["Easy", "Simple", "Complex", "Fast"],
    correct: 2,
  },
  {
    question: "If I __________ enough money, I would buy a new laptop.",
    options: ["have", "had", "will have", "would have"],
    correct: 1,
  },
  {
    question:
      "What is the best response? 'Could you help me carry these boxes?'",
    options: [
      "No, I can't.",
      "Maybe later.",
      "Sure, no problem!",
      "Carry yourself.",
    ],
    correct: 2,
  },
  {
    question: "The meeting __________ by the time we arrived.",
    options: ["finished", "had finished", "has finished", "will finish"],
    correct: 1,
  },
  {
    question: "Choose the sentence that uses passive voice:",
    options: [
      "They fixed the car yesterday.",
      "The car was fixed yesterday.",
      "They have to fix the car.",
      "The car is fixing by them.",
    ],
    correct: 1,
  },
  {
    question: "What does the idiom 'break the ice' mean?",
    options: [
      "Start a conversation",
      "Destroy something valuable",
      "Become very cold",
      "Win a prize",
    ],
    correct: 0,
  },
  {
    question: "Select the most logical sentence:",
    options: [
      "If I see John, I will tell him about the meeting.",
      "If I saw John, I tell him about the meeting.",
      "If I saw John, I will tell him about the meeting.",
      "If I see John, I would tell him about the meeting.",
    ],
    correct: 0,
  },
  {
    question: "She __________ have forgotten her phone at home.",
    options: ["can", "must", "would", "might"],
    correct: 3,
  },
  {
    question: "What does the phrase 'run out of time' mean?",
    options: [
      "Have no more time left",
      "Run as fast as possible",
      "Finish early",
      "Take your time",
    ],
    correct: 0,
  },
  {
    question: "What is the main cause of global warming mentioned in the text?",
    options: [
      "Natural disasters",
      "Fossil fuel burning",
      "Changes in weather patterns",
      "Solar activity",
    ],
    correct: 1,
  },
  {
    question:
      "What is the best way to politely disagree in a formal discussion?",
    options: [
      "You’re wrong.",
      "I disagree with you.",
      "I see your point, but I have a different perspective.",
      "No way that’s correct.",
    ],
    correct: 2,
  },
  // Add other questions here...
];

export default function ExamPage() {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [selectedChoices, setSelectedChoices] = React.useState<number[]>([]);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [wrongAnswers, setWrongAnswers] = React.useState(0);
  const [hasEnded, setHasEnded] = React.useState(false);
  const [now, setNow] = React.useState(new Date());
  const [timeStarted] = React.useState(new Date());
  const [isChecking, setIsChecking] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(30 * 60); // 30 minutes in seconds

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!hasEnded) {
        setNow(new Date());
        setTimeLeft((prev) => {
          if (prev <= 0) {
            setHasEnded(true);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [hasEnded]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const currentQuestion = questions[questionIndex];
  const progress = ((questionIndex + 1) / questions.length) * 100;

  const handleNext = () => {
    if (selectedChoices[questionIndex] === undefined) return;

    setIsChecking(true);
    setTimeout(() => {
      const isCorrect =
        selectedChoices[questionIndex] === currentQuestion.correct;

      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      } else {
        setWrongAnswers((prev) => prev + 1);
      }

      if (questionIndex === questions.length - 1) {
        setHasEnded(true);
      } else {
        setQuestionIndex((prev) => prev + 1);
      }
      setIsChecking(false);
    }, 500);
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") updateChoice(0);
      else if (event.key === "2") updateChoice(1);
      else if (event.key === "3") updateChoice(2);
      else if (event.key === "4") updateChoice(3);
      else if (event.key === "Enter") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
      else if (event.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleNext]);

  const updateChoice = (choice: number) => {
    setSelectedChoices((prevChoices) => {
      const updatedChoices = [...prevChoices];
      updatedChoices[questionIndex] = choice;
      return updatedChoices;
    });
  };

  const getRank = (score: number) => {
    if (score < 5) return "Fundamentals";
    if (score < 10) return "Top Notch 1";
    if (score < 15) return "Top Notch 2";
    if (score < 18) return "Top Notch 3";
    return "Summit 1";
  };

  if (hasEnded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <Card className="w-full max-w-md p-8 text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Exam Completed! 🏁
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 text-lg font-medium text-green-500 bg-green-500/10 rounded-lg">
              Time taken:{" "}
              {formatTimeDelta(differenceInSeconds(now, timeStarted))}
            </div>
            <div className="grid grid-cols-2 gap-4">
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
            <div className="p-4 rounded-lg bg-blue-500/10">
              <p className="text-2xl font-bold text-blue-500">
                {getRank(correctAnswers)}
              </p>
              <p className="text-sm text-slate-400">Your Level</p>
            </div>
            <Link href="/">
              <Button className="w-full gap-2 p-4 text-white transition-colors rounded-lg bg-slate-800 hover:bg-slate-700 mt-3">
                Return to Home
                <BarChart className="w-4 h-4" />
              </Button>
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
              <NotebookPen className="w-6 h-6" />
              <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-slate-700">
                English Test
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-slate-700">
              <Timer className="w-4 h-4" />
              Time left: {formatTime(timeLeft)}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-400">
              <span>
                Question {questionIndex + 1} of {questions.length}
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
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                className={cn(
                  "p-6 h-auto text-left transition-all",
                  "hover:scale-105 hover:shadow-lg",
                  selectedChoices[questionIndex] === index
                    ? "bg-slate-700 text-white hover:bg-slate-800"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
                )}
                onClick={() => updateChoice(index)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg text-white">{option}</span>
                </div>
              </Button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              className="px-3 py-3 text-sm font-medium transition-transform hover:scale-95"
              onClick={handlePrevious}
              disabled={questionIndex === 0 || isChecking}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </Button>
            <Button
              className="px-3 py-3 text-sm font-medium transition-transform hover:scale-95"
              onClick={handleNext}
              disabled={
                selectedChoices[questionIndex] === undefined || isChecking
              }
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
          </div>
        </div>
      </div>
    </div>
  );
}
