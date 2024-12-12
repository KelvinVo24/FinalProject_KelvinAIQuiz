// src/app/api/pdf/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export async function POST(req: Request) {
  try {
    const { pdfContent, question } = await req.json();

    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 2048,
        temperature: 0.9,
      },
    });

    const prompt = `Given the following PDF content: ${pdfContent}
    Please answer this question: ${question}
    Provide a clear and concise response based on the PDF content.`;

    const result = await chat.sendMessage(prompt);
    const response = await result.response;

    return NextResponse.json({ answer: response.text() });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process PDF" },
      { status: 500 }
    );
  }
}
