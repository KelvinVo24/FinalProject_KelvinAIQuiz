"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {
  formattedTopics: { text: string; value: number }[];
};

const fontSizeMapper = (word: any) => Math.log2(word.value) * 5 + 16;

const CustomWorldCloud = ({ formattedTopics }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <D3WordCloud
        height={550}
        data={formattedTopics}
        font={"sans-serif"}
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        onWordClick={(event, word) => {
          router.push(`/quiz?topic=${word.text}`);
        }}
        fill={theme.theme === "dark" ? "white" : "black"}
      />
    </>
  );
};

export default CustomWorldCloud;
