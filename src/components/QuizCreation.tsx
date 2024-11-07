"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useForm } from "react-hook-form";
import { quizCreationSchema } from "@/schemas/form/quiz";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "./ui/separator";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoadingQuestions from "./LoadingQuestions";
import Link from "next/link";
import Footer from "./Footer";

type Props = {
  topicParam: string;
};

type Input = z.infer<typeof quizCreationSchema>;

function QuizCreation({ topicParam }: Props) {
  const route = useRouter();
  const [showLoader, setShowLoader] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const { mutate: getQuestions, isPending } = useMutation({
    mutationFn: async ({ amount, topic, type }: Input) => {
      const response = await axios.post("/api/game", {
        amount,
        topic,
        type,
      });
      return response.data;
    },
  });
  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      topic: topicParam,
      type: "mcq",
      amount: 3,
    },
  });

  function onSubmit(input: Input) {
    setShowLoader(true);
    getQuestions(
      {
        amount: input.amount,
        topic: input.topic,
        type: input.type,
      },
      {
        onSuccess: ({ gameId }) => {
          setFinished(true);
          setTimeout(() => {
            if (form.getValues("type") === "open_ended") {
              route.push(`/play/open-ended/${gameId}`);
            } else {
              route.push(`/play/mcq/${gameId}`);
            }
          }, 1000);
        },
        onError: () => {
          setShowLoader(false);
        },
      }
    );
  }

  form.watch();
  if (showLoader) {
    return <LoadingQuestions finished={finished} />;
  }
  return (
    <>
      <div className="flex justify-center items-center md:flex-row mb-16">
        {/* Left Section - Image and Text */}
        <div className="w-1/2 flex flex-col items-center md:w-1/2 md:mb-0">
          <div className="mb-4">
            <img
              src="/QuizCreation.gif"
              alt="Quiz Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-3xl font-bold mt-2 text-center md:text-left text-blue-600">
            Quiz Creation
          </h2>
          <p className="text-gray-600 mt-2 text-center md:text-left">
            Choose topics and number of questions to practice English!
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 flex justify-center relative md:w-1/2">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl mx-auto w-[55%]"></div>
          <div className="relative bg-white shadow-lg sm:rounded-3xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-blue-600">
                  Quiz
                </CardTitle>
                <CardDescription className="text-center">
                  Choose a topic
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        form.handleSubmit(onSubmit)();
                      }
                    }}
                  >
                    {/* Topic Input */}
                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Topic</FormLabel> <br />
                          <FormControl>
                            <select
                              {...field}
                              className="form-select rounded-md overflow-hidden shadow-md duration-200 p-1 border border-dimmed text-xs md:text-sm focus:outline-none"
                            >
                              <option value="">Select a tense</option>
                              <option value="Present Simple">
                                Present Simple
                              </option>
                              <option value="Past Simple">Past Simple</option>
                              <option value="Future Simple">
                                Future Simple
                              </option>
                              <option value="Present Continuous">
                                Present Continuous
                              </option>
                              <option value="Past Continuous">
                                Past Continuous
                              </option>
                              <option value="Future Continuous">
                                Future Continuous
                              </option>
                              <option value="Present Perfect">
                                Present Perfect
                              </option>
                              <option value="Past Perfect">Past Perfect</option>
                              <option value="Future Perfect">
                                Future Perfect
                              </option>
                              <option value="Present Perfect Continuous">
                                Present Perfect Continuous
                              </option>
                              <option value="Past Perfect Continuous">
                                Past Perfect Continuous
                              </option>
                              <option value="Future Perfect Continuous">
                                Future Perfect Continuous
                              </option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Number of Questions Input */}
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Questions</FormLabel>
                          <FormControl>
                            <Input
                              className="rounded-lg"
                              placeholder="Enter an amount"
                              {...field}
                              type="number"
                              min={1}
                              max={50}
                              onChange={(e) =>
                                form.setValue(
                                  "amount",
                                  parseInt(e.target.value)
                                )
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Question Type Buttons */}
                    <div className="flex justify-between">
                      <Button
                        type="button"
                        className={`w-1/2 rounded-none rounded-l-lg ${
                          form.getValues("type") === "mcq"
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-200 text-black hover:bg-white"
                        }`}
                        onClick={() => form.setValue("type", "mcq")}
                      >
                        <CopyCheck className="w-8 h-4 mr-2" /> Multiple Choice
                      </Button>

                      <Separator orientation="vertical" />

                      <Button
                        type="button"
                        className={`w-1/2 rounded-none rounded-r-lg ${
                          form.getValues("type") === "open_ended"
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-200 text-black hover:bg-white"
                        }`}
                        onClick={() => form.setValue("type", "open_ended")}
                      >
                        <BookOpen className="w-4 h-4 mr-2" /> Open Ended
                      </Button>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-between items-center mt-2">
                      <Link href="/">
                        <Button
                          variant="secondary"
                          className="hover:opacity-70 transition duration-300 hover:scale-90 rounded-lg"
                        >
                          Return
                        </Button>
                      </Link>
                      <Button
                        disabled={isPending}
                        type="submit"
                        className="transition duration-300 hover:scale-90 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default QuizCreation;
