import React, { useRef, useEffect } from "react";

type Props = {
  answer: string;
  setBlankAnswer: React.Dispatch<React.SetStateAction<string>>;
};

const blank = "__";

const BlankAnswerInput = ({ answer, setBlankAnswer }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const wordToHide = React.useMemo(() => {
    const words = answer.split(" ");
    return words[2]; // Adjust this logic to hide the desired word.
  }, [answer]);

  const answerWithBlanks = React.useMemo(() => {
    const modifiedAnswer = answer.replace(wordToHide, blank);
    setBlankAnswer(modifiedAnswer); // Store the modified answer.
    return modifiedAnswer;
  }, [answer, wordToHide, setBlankAnswer]);

  // Collect input value on change and update the blank answer.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const updatedAnswer = answer.replace(wordToHide, userInput); // Fill in user input.
    setBlankAnswer(updatedAnswer); // Send updated answer back to parent.
  };

  return (
    <div className="flex justify-start w-full mt-4">
      <h1 className="text-xl font-semibold">
        {answerWithBlanks.split(blank).map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index === answerWithBlanks.split(blank).length - 1 ? (
              ""
            ) : (
              <input
                id="user-blank-input"
                ref={inputRef}
                className="text-center border-b-2 border-black dark:border-white w-28 focus:border-2 focus:border-b-4 focus:outline-none"
                type="text"
                onChange={handleInputChange} // Track user input here.
              />
            )}
          </React.Fragment>
        ))}
      </h1>
    </div>
  );
};

export default BlankAnswerInput;
