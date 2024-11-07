import { z } from "zod";

export const quizCreationSchema = z.object({
  topic: z
    .string()
    .min(4, {
      message: "You must choose a topic!",
    })
    .max(50, {
      message: "You must choose a topic!",
    }),
  type: z.enum(["mcq", "open_ended"]),
  amount: z.number().min(1).max(50),
});

export const checkAnswerSchema = z.object({
  questionId: z.string(),
  userAnswer: z.string(),
});
