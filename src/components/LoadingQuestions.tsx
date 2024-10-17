"use client";

import Image from "next/image";
import React from "react";
import { Progress } from "./ui/progress";
import { clear } from "console";

type Props = {
  finished: boolean;
};
const loadingTexts = [
  "“I am always ready to learn although I do not always like being taught.” — Winston Churchill",
  "“Live as if you were to die tomorrow. Learn as if you were to live forever.” — Mahatma Gandhi",
  "“The beautiful thing about learning is nobody can take it away from you.” — B.B. King",
  "“Don't be shy, just try.” — Joe WW",
  "“If opportunity doesn’t knock, build a door.” — Milton Berle",
  "“The road to success is always under construction.” — Lily Tomlin",
  "“Self-belief and hard work will always earn you success.” – Virat Kohli",
  "“Procrastination is opportunity’s assassin.” – Victor Kiam",
];
const LoadingQuestions = ({ finished }: Props) => {
  const [progress, setProgress] = React.useState(0);
  const [loadingText, setLoadingText] = React.useState(loadingTexts[0]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setLoadingText(loadingTexts[randomIndex]);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (finished) return 100;
      setProgress((prev) => {
        if (prev === 100) {
          return 0;
        }
        if (Math.random() < 0.1) {
          return prev + 2;
        }
        return prev + 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [finished]);
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] md:w-[60vw] flex flex-col items-center">
      <Image
        src={"/Englishteacher.gif"}
        alt={"Loading animation"}
        width={400}
        height={400}
      />
      <Progress value={progress} className="w-full mt-4" />
      <h1 className="mt-2 text-xl">{loadingText}</h1>
    </div>
  );
};

export default LoadingQuestions;
