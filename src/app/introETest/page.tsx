"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingQuestions from "@/components/LoadingQuestions";

function EnglishTestDescription() {
  const [showLoader, setShowLoader] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    setShowLoader(true);
    setTimeout(() => {
      setFinished(true);
      router.push("/exam");
    }, 3000);
  };

  if (showLoader) {
    return <LoadingQuestions finished={finished} />;
  }

  return (
    <>
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        <div className="flex justify-between items-center mb-12">
          <div className="w-5/6">
            <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
              English Level Test
            </h2>
            <p className="text-lg text-gray-500">
              There are five English levels spreading from Fundamentals to
              Summit 1, the exam includes 20 multiple choice questions and you
              have 30 minutes to complete it. After complete, you will receive
              your score and the level of English you are in. Good luck and do
              your best!
            </p>
          </div>
          <Button
            className="px-4 py-4 text-white rounded-lg flex items-center hover:scale-95 duration-300 transition-all"
            onClick={handleSubmit}
          >
            {/* <Link href="/exam" className="flex items-center">
              Test now */}
            Test now
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            {/* </Link> */}
          </Button>
        </div>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 text-lg font-bold text-gray-800">
                      Fundamentals (A1)
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Basics of English grammar, vocabulary, and sentence
                    structure, ideal for beginners.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 text-lg font-bold text-gray-800">
                      Top Notch 1 (A1+)
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-red-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Focuses on essential conversational skills and everyday
                    grammar
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-green-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 text-lg font-bold text-gray-800">
                      Top Notch 2 (A2)
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-green-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Intermediate grammar and vocabulary, suitable for advanced
                    daily interactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-purple-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 text-lg font-bold text-gray-800">
                      Top Notch 3 (B1)
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Builds fluency with complex structures, prepping for
                    academic and professional contexts.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 text-lg font-bold text-gray-800">
                      Summit 1 (B1+)
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Advanced communication skills for academic and professional
                    proficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EnglishTestDescription;
