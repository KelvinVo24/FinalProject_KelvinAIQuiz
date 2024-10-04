'use client';

import { useTheme } from 'next-themes';
import React, { use } from 'react'
import D3WordCloud from 'react-d3-cloud'

type Props = {}

const data = [
    {
        text: "Đẹt",
        value: 5,
    },

    {
        text: "Khùm",
        value: 10,
    },

    {
        text: "Hehehe",
        value: 5,
    },

    {
        text: "Present Continuous",
        value: 10,
    },

    {
        text: "Present Simple",
        value: 5,
    }
];

const fontSizeMapper = (word: any) => Math.log2(word.value) * 5 + 16;

const CustomWorldCloud = (props: Props) => {
    const theme = useTheme();
  return (
    <>
    <D3WordCloud 
    height={550}
    data={data}
    font={"sans-serif"}
    fontSize={fontSizeMapper}
    rotate={0}
    padding={10}
    fill = {theme.theme === 'dark' ? 'white' : 'black'}
    />
    </>
  );
}

export default CustomWorldCloud