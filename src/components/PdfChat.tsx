"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ChatResponse {
  response?: string;
  tokenCount?: string;
  error?: string;
}

const PdfChat = () => {
  const [selectedPdf, setSelectedPdf] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Pre-saved PDF files
  const pdfFiles = [
    {
      fileName: "TopNotch1_Vocabulary_2.pdf",
      displayName: "Top Notch 1 Vocabulary",
    },
    {
      fileName: "TopNotch2_Vocabulary.pdf",
      displayName: "Top Notch 2 Vocabulary",
    },
    {
      fileName: "TopNotch3_Vocabulary.pdf",
      displayName: "Top Notch 3 Vocabulary",
    },
    { fileName: "Summit1_Vocabulary.pdf", displayName: "Summit 1 Vocabulary" },
    { fileName: "Fundamentals_book.pdf", displayName: "Fundamentals Book" },
    { fileName: "TopNotch1_book.pdf", displayName: "Top Notch 1 Book" },
    { fileName: "TopNotch2_book.pdf", displayName: "Top Notch 2 Book" },
    { fileName: "TopNotch3_book.pdf", displayName: "Top Notch 3 Book" },
    { fileName: "Summit1_book.pdf", displayName: "Summit 1 Book" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question || (!uploadedFile && !selectedPdf)) {
      setError("Please upload a file or select a PDF and enter a question.");
      return;
    }

    setIsLoading(true);
    setError("");
    setAnswer("");

    try {
      let response;

      if (uploadedFile) {
        // Handle file upload
        const formData = new FormData();
        formData.append("pdf", uploadedFile);
        formData.append("question", question);

        response = await fetch("/api/pdf", {
          method: "POST",
          body: formData,
        });
      } else {
        // Handle pre-saved file
        response = await fetch("/api/pdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
            pdfFileName: selectedPdf,
          }),
        });
      }

      const data: ChatResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to process request");
      }

      if (data.response) {
        setAnswer(data.response);
      } else {
        throw new Error("No response received from server");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(
        error instanceof Error ? error.message : "Failed to process request"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>BTEC ESL - AI Chatbot Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Select pre-saved PDF */}
          <div className="flex items-center gap-4">
            <Select value={selectedPdf} onValueChange={setSelectedPdf}>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Select Pearson Level" />
              </SelectTrigger>
              <SelectContent>
                {pdfFiles.map((pdf) => (
                  <SelectItem key={pdf.fileName} value={pdf.fileName}>
                    {pdf.displayName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* File upload */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 transition duration-200 px-4 py-2 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Upload PDF
              <input
                id="file-upload"
                type="file"
                accept=".pdf"
                onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                className="sr-only"
              />
            </label>
            {uploadedFile && (
              <span className="text-gray-700 text-sm truncate max-w-[200px]">
                {uploadedFile.name}
              </span>
            )}
          </div>

          {/* Question input and submit */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question about the lesson..."
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : <Send className="w-5 h-5" />}
            </Button>
          </form>

          {/* Error message */}
          {error && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Answer display */}
          {answer && (
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-800 whitespace-pre-wrap">{answer}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PdfChat;
