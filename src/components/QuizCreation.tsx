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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BookOpen, CopyCheck, Route } from "lucide-react";
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
      type: "open_ended",
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
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-2 md:text-left">
            Quiz Creation
          </h2>
          <p className="text-gray-600 mt-2 md:text-left">
            Choose topics and number of question to practice English!
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 flex justify-center relative md:w-1/2">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl mx-auto w-[55%]"></div>
          <div className="relative bg-white shadow-lg sm:rounded-3xl ">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Quiz</CardTitle>
                <CardDescription>Choose a topic</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    {/* Topic Input */}
                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Topic</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter a topic" {...field} />
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
                        className="w-1/2 rounded-none rounded-l-lg"
                        onClick={() => form.setValue("type", "mcq")}
                        variant={
                          form.getValues("type") === "mcq"
                            ? "default"
                            : "secondary"
                        }
                      >
                        <CopyCheck className="w-8 h-4 mr-2" /> Multiple Choice
                      </Button>

                      <Separator orientation="vertical" />

                      <Button
                        type="button"
                        className="w-1/2 rounded-none rounded-r-lg"
                        onClick={() => form.setValue("type", "open_ended")}
                        variant={
                          form.getValues("type") === "open_ended"
                            ? "default"
                            : "secondary"
                        }
                      >
                        <BookOpen className="w-4 h-4 mr-2" /> Open Ended
                      </Button>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-between items-center mt-2">
                      <Link href="/">
                        <Button
                          variant="secondary"
                          className="hover:opacity-70 transition duration-300 hover:scale-90"
                        >
                          Return
                        </Button>
                      </Link>
                      <Button
                        disabled={isPending}
                        type="submit"
                        className="transition duration-300 hover:scale-90"
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
