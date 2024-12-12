// src/app/api/pdf/route.ts
import { NextResponse } from "next/server";
import { GenerativeModel } from "@google/generative-ai";
import pdfParse from "pdf-parse";
import _ from "lodash";

// Initialize Gemini model
const genai = new GenerativeModel(process.env.GEMINI_API_KEY || "", {
  model: "gemini-1.5-flash",
});

// Define template for query prompt
const queryPromptTemplate = _.template(`
You are an intelligent assistant with a deep understanding of various fields. Your task is to answer questions based on the content of a provided PDF document. Also Explain the Content Clearly in two or three lines 
PDF Content:
<%= text %>
Question: <%= question %>
Please provide a detailed and accurate answer.
`);

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    // Parse the incoming form data
    const formData = await req.formData();

    // Get the file and question from form data
    const file = formData.get("pdf") as File | null;
    const question = formData.get("question") as string | null;

    // Validate inputs
    if (!file || !question) {
      return NextResponse.json(
        { error: "Missing file or question" },
        { status: 400 }
      );
    }

    // Convert File to ArrayBuffer then to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Parse PDF
    const pdfData = await pdfParse(buffer);
    const text = pdfData.text;

    // Generate the prompt
    const prompt = queryPromptTemplate({ text, question });

    // Get response from Gemini
    const result = await genai.generateContent(prompt);
    const response = await result.response;

    // Return the response
    return NextResponse.json({
      response: response.text(),
      tokenCount: "Token count functionality not implemented", // Placeholder for now
    });
  } catch (error) {
    console.error("Error in PDF processing:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
