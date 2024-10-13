import React from "react";

type Props = {
  question: string;
  answer: string;
  setBlankAnswer: React.Dispatch<React.SetStateAction<string>>;
};

const BLANKS = "____";

const BlankAnswerInput = ({ question, answer, setBlankAnswer }: Props) => {
  React.useEffect(() => {
    setBlankAnswer(question);
  }, [question, setBlankAnswer]);

  return (
    <div className="flex justify-start w-full mt-4">
      <h1 className="text-xl font-semibold">
        {question.split(BLANKS).map((part, index) => {
          return (
            <React.Fragment key={index}>
              {part}
              {index === question.split(BLANKS).length - 1 ? null : (
                <input
                  id="user-blank-input"
                  className="text-center border-b-2 border-black dark:border-white w-28 focus:border-2 focus:border-b-4 focus:outline-none"
                />
              )}
            </React.Fragment>
          );
        })}
      </h1>
    </div>
  );
};

export default BlankAnswerInput;
