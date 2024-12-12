// src/components/PdfChat.tsx
"use client";

import { useState, useEffect } from "react";
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
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // This is where you list your PDF files
  const pdfFiles = [
    { fileName: "TopNotch1_Vocabulary.pdf", displayName: "Top Notch 1" },
    {
      fileName: "TopNotch1_Vocabulary_2.pdf",
      displayName: "Top Notch 1 (Advanced)",
    },
    { fileName: "TopNotch2_Vocabulary.pdf", displayName: "Top Notch 2" },
    { fileName: "TopNotch3_Vocabulary.pdf", displayName: "Top Notch 3" },
    { fileName: "Summit1_Vocabulary.pdf", displayName: "Summit 1" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPdf || !question) {
      setError("Please select a PDF file and enter a question.");
      return;
    }

    setIsLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch("/api/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          pdfFileName: selectedPdf,
        }),
      });

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
        <CardTitle>Vocabulary - AI Chatbot Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
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

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question about the PDF..."
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !selectedPdf}>
              {isLoading ? "Loading..." : <Send className="w-5 h-5" />}
            </Button>
          </form>

          {error && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

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
