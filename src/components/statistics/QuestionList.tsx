import { Question } from "@prisma/client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type Props = {
  questions: Question[];
};

const QuestionList = ({ questions }: Props) => {
  let gameType = questions[0].questionType;

  return (
    <div className="overflow-x-auto">
      <Table className="w-full mt-4 border-separate border-spacing-y-4 rounded-lg bg-sky-800 shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="px-4 py-3 font-bold text-left text-white bg-sky-700">
              No.
            </TableHead>
            <TableHead className="px-4 py-3 font-bold text-left text-white bg-sky-700">
              Question & Correct Answer
            </TableHead>
            <TableHead className="px-4 py-3 font-bold text-left text-white bg-sky-700">
              Your Answer
            </TableHead>
            {gameType === "open_ended" && (
              <TableHead className="px-4 py-3 font-medium text-right text-white bg-sky-700 rounded-tr-lg">
                Accuracy
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {questions.map((question, index) => (
            <TableRow
              key={question.id}
              className="transition-colors duration-300 bg-sky-800 hover:bg-sky-700"
            >
              <TableCell className="px-4 py-3 font-medium text-white">
                {index + 1}
              </TableCell>
              <TableCell className="px-4 py-3 text-white">
                <p className="font-semibold text-white">{question.question}</p>
                <div className="mt-1 font-medium text-gray-400">
                  Correct answer:{" "}
                  <span className="text-teal-300">{question.answer}</span>
                </div>
              </TableCell>
              {gameType === "mcq" && (
                <TableCell
                  className={cn(
                    "px-4 py-3 font-medium transition-colors duration-300",
                    question.isCorrect
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-red-500 hover:text-red-400"
                  )}
                >
                  {question.userAnswer}
                </TableCell>
              )}
              {gameType === "open_ended" && (
                <TableCell className="px-4 py-3 text-white">
                  {question.userAnswer}
                </TableCell>
              )}
              {gameType === "open_ended" && (
                <TableCell className="px-4 py-3 font-medium text-right text-white">
                  {question.percenttageCorrect}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default QuestionList;
