import { NextResponse } from "next/server";
import { quizCreationSchema } from "@/schemas/form/quiz";
import { ZodError } from "zod";
import { strict_output } from "@/lib/gemini";
import { getAuthSession } from "@/lib/nextauth";

export const POST = async (req: Request, res: Response) => {
  try {
    const session = await getAuthSession();
    // if (session?.user) {
    //   return NextResponse.json(
    //     {
    //       error: "You must login to create quiz",
    //     },
    //     {
    //       status: 401,
    //     }
    //   );
    // }
    const body = await req.json();
    const { amount, topic, type } = quizCreationSchema.parse(body);
    const scoreRank = body.scoreRank || "Fundamentals";
    let questions: any;

    if (type === "open_ended") {
      questions = await strict_output(
        "You are a helpful AI that generates English grammar fill-in-the-blank questions. The system will hide the word in the sentence, and the user has to input the missing word. Each question should be related to the given topic and appropriate for the specified score rank. Each answer should not be more than 15 words. Store all pairs in a JSON array.",
        new Array(amount).fill(
          `Generate a sentence related to "${topic}" appropriate for ${scoreRank} level of Pearson with a verb or grammar-related word hidden. Use '____' to indicate the hidden word.`
        ),
        {
          question:
            "question with '____' indicating the hidden word and (base form) as hint",
          answer: "complete sentence with the hidden word revealed",
        }
      );
      console.log("Generating questions with:", {
        amount,
        topic,
        type,
        scoreRank,
      });
      console.log("Generated Questions:", questions);
    } else if (type === "mcq") {
      questions = await strict_output(
        "You are a helpful AI that generates English grammar fill-in-the-blank questions along with multiple-choice answers. Each question should be related to the given topic and appropriate for the specified score rank. Each answer should not be more than 15 words. Store all pairs in a JSON array.",
        new Array(amount).fill(
          `Generate a fill-in-the-blank question focusing on "${topic}" appropriate for ${scoreRank} level of Pearson with multiple-choice answers.`
        ),
        {
          question: "question",
          answer: "answer with max length of 15 words",
          option1: "option1 with max length of 15 words",
          option2: "option2 with max length of 15 words",
          option3: "option3 with max length of 15 words",
        }
      );
      console.log("Generating questions with:", {
        amount,
        topic,
        type,
        scoreRank,
      });
      console.log("Generated Questions:", questions);
    }

    return NextResponse.json(
      {
        questions: questions,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: error.issues,
        },
        { status: 400 }
      );
    }
  }
};
