import React, { useRef } from "react";

type Props = {
  answer: string;
  setBlankAnswer: React.Dispatch<React.SetStateAction<string>>;
};

const BlankAnswerInput = ({ answer, setBlankAnswer }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Replace the entire answer with blank
  React.useEffect(() => {
    setBlankAnswer("_____");
  }, [answer, setBlankAnswer]);

  // Handle input change and update the blank answer
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setBlankAnswer(userInput);
  };

  return (
    <div className="flex justify-start w-full mt-4">
      <input
        id="user-blank-input"
        ref={inputRef}
        className="w-full text-xl font-semibold text-center border-b-2 border-black dark:border-white focus:border-2 focus:border-b-4 focus:outline-none py-2"
        type="text"
        onChange={handleInputChange}
        placeholder="Type your full sentence here..."
      />
    </div>
  );
};

export default BlankAnswerInput;
