// src/app/api/pdf/route.ts
import { NextResponse } from "next/server";
import { GenerativeModel } from "@google/generative-ai";
import pdfParse from "pdf-parse";
import _ from "lodash";
import fs from "fs";
import path from "path";

// Initialize Gemini model
const genai = new GenerativeModel(process.env.GEMINI_API_KEY || "", {
  model: "gemini-1.5-flash",
});

// Define template for query prompt
const queryPromptTemplate = _.template(`
You are an intelligent assistant with a deep understanding of various fields. Your task is to answer questions based on the content of a provided PDF document. Also Explain the Content Clearly in two or three lines. 
Important Instructions:
- Provide your response in plain text format
- Do not use Markdown formatting
- Do not use asterisks or bullet points
- Use regular paragraphs with line breaks
- Use numbers for any lists (1., 2., etc.)
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
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
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
    } else {
      const { question, pdfFileName } = await req.json();

      // Validate inputs
      if (!question || !pdfFileName) {
        return NextResponse.json(
          { error: "Missing question or PDF file name" },
          { status: 400 }
        );
      }

      // Read PDF from public folder
      const pdfPath = path.join(process.cwd(), "public", "books", pdfFileName);
      const pdfBuffer = fs.readFileSync(pdfPath);

      // Parse PDF
      const pdfData = await pdfParse(pdfBuffer);
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
    }
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
