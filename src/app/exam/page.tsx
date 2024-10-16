"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Timer, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  // ask 10 questions of english Grammar
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
  // Add remaining questions...
];

export default function QuestionsPage() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds

  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft, submitted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerChange = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setSubmitted(true);
      }
    }, 500); // Simulate checking delay
  };

  const score = answers.reduce((acc, answer, index) => {
    if (answer === questions[index].correct) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const getRank = (score: number) => {
    if (score < 5) return "Fundamentals";
    if (score < 10) return "Top Notch 1";
    if (score < 15) return "Top Notch 2";
    if (score < 18) return "Top Notch 3";
    return "Summit 1"; // Assuming a higher rank for scores 18 and above
  };

  const rank = getRank(score);

  const currentQuestion = questions[currentIndex];

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl">
      {!submitted ? (
        <>
          <div className="flex justify-between mb-4">
            <p className="flex items-center text-slate-400">
              <Timer className="mr-2" />
              Question {currentIndex + 1} / {questions.length}
            </p>
            <p className="flex items-center text-slate-400">
              Time left: {formatTime(timeLeft)}
            </p>
          </div>

          <Card className="w-full">
            <CardHeader className="mb-1">
              <CardTitle>Question {currentIndex + 1}</CardTitle>
              <CardDescription className="text-lg pt-2">
                {currentQuestion.question}
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="flex flex-col mt-4 space-y-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant={
                  answers[currentIndex] === index ? "default" : "secondary"
                }
                className="w-full py-6 justify-start"
                onClick={() => handleAnswerChange(index)}
              >
                <div className="flex items-center">
                  <div className="py-1 px-3 mr-5 border rounded-md text-base">
                    {index + 1}
                  </div>
                  <div className="text-base">{option}</div>
                </div>
              </Button>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Button
              variant="secondary"
              disabled={currentIndex === 0 || isChecking}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Button disabled={isChecking} onClick={handleNext}>
              {isChecking && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {currentIndex < questions.length - 1 ? "Next" : "Submit"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="mt-2 text-lg">
            Your score: {score} / {questions.length}
            <p>Your level: {rank}</p>
          </p>
        </div>
      )}
    </div>
  );
}
