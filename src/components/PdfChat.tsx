// src/components/PdfChat.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FileUp, Send } from "lucide-react";

const PdfChat = () => {
  const [pdfContent, setPdfContent] = useState<string>("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("pdf", file);

      // Read PDF content as text
      const text = await file.text();
      setPdfContent(text);
    } catch (error) {
      console.error("Error reading PDF:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfContent || !question) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdfContent, question }),
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Chat with PDF</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="pdf-upload"
            />
            <label
              htmlFor="pdf-upload"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
            >
              <FileUp className="w-5 h-5" />
              Upload PDF
            </label>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question about the PDF..."
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !pdfContent}>
              <Send className="w-5 h-5" />
            </Button>
          </form>

          {answer && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-800">{answer}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PdfChat;
