"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  BookOpen,
  BotMessageSquare,
  Loader2,
  Send,
  Upload,
} from "lucide-react";
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
      category: "Vocabulary",
    },
    {
      fileName: "TopNotch2_Vocabulary.pdf",
      displayName: "Top Notch 2 Vocabulary",
      category: "Vocabulary",
    },
    {
      fileName: "TopNotch3_Vocabulary.pdf",
      displayName: "Top Notch 3 Vocabulary",
      category: "Vocabulary",
    },
    {
      fileName: "Summit1_Vocabulary.pdf",
      displayName: "Summit 1 Vocabulary",
      category: "Vocabulary",
    },
    {
      fileName: "Fundamentals_book.pdf",
      displayName: "Fundamentals Book",
      category: "Books",
    },
    {
      fileName: "TopNotch1_book.pdf",
      displayName: "Top Notch 1 Book",
      category: "Books",
    },
    {
      fileName: "TopNotch2_book.pdf",
      displayName: "Top Notch 2 Book",
      category: "Books",
    },
    {
      fileName: "TopNotch3_book.pdf",
      displayName: "Top Notch 3 Book",
      category: "Books",
    },
    {
      fileName: "Summit1_book.pdf",
      displayName: "Summit 1 Book",
      category: "Books",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question || (!uploadedFile && !selectedPdf)) {
      setError(
        "Please select your material or upload a file and enter a question."
      );
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

  const groupedPdfs = pdfFiles.reduce((acc, pdf) => {
    if (!acc[pdf.category]) {
      acc[pdf.category] = [];
    }
    acc[pdf.category].push(pdf);
    return acc;
  }, {} as Record<string, typeof pdfFiles>);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-lg">
      <Card className="w-full max-w-4xl mx-auto shadow-xl border-0">
        <CardHeader className="space-y-1 pb-4 border-b">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            BTEC ESL Assistant
          </CardTitle>
          <p className="text-sm text-gray-500">
            Ask questions about your ESL materials
          </p>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Select Material
              </label>
              <Select value={selectedPdf} onValueChange={setSelectedPdf}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose your learning material" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(groupedPdfs).map(([category, pdfs]) => (
                    <div key={category}>
                      <div className="px-2 py-1.5 text-sm font-semibold text-gray-500">
                        {category}
                      </div>
                      {pdfs.map((pdf) => (
                        <SelectItem
                          key={pdf.fileName}
                          value={pdf.fileName}
                          className="pl-4"
                        >
                          <span className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            {pdf.displayName}
                          </span>
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Or Upload Your Own
              </label>
              <div className="flex items-center gap-4">
                <label htmlFor="file-upload" className="flex-1 cursor-pointer">
                  <div className="w-full border-2 border-dashed border-gray-300 rounded-lg px-4 py-2.5 hover:border-blue-500 transition-colors duration-200 flex items-center justify-center gap-2">
                    <Upload className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {uploadedFile ? uploadedFile.name : "Upload PDF"}
                    </span>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf"
                    onChange={(e) =>
                      setUploadedFile(e.target.files?.[0] || null)
                    }
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-4">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What would you like to know about the material?"
              className="pr-24"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              {isLoading ? (
                "Loading..."
              ) : (
                <BotMessageSquare className="w-5 h-5" />
              )}
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
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                {answer}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PdfChat;
