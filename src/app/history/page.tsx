import Footer from "@/components/Footer";
import HistoryComponent from "@/components/HistoryComponent";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { LucideLayoutDashboard } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const HistoryPage = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-4 mb-16">
        {/* Left Section - Image and Text */}
        <div className="md:w-1/2 w-full flex flex-col items-center mb-4 md:mb-0">
          <div className="mb-4">
            <img
              src="/History.gif"
              alt="History Image"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-2 text-center md:text-left text-green-500">
            History of Your Quizzes
          </h2>
          <p className="text-gray-600 mt-2 text-center md:text-left">
            View your previous quiz attempts and scores.
          </p>
        </div>
        {/* Right Section - Card with History Content */}
        <div className="md:w-1/2 w-full flex justify-center relative">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl mx-auto w-[55%]"></div>

          {/* Card with History Content */}
          <div className="relative bg-white shadow-lg sm:rounded-3xl w-[400px]">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-green-500">
                    History
                  </CardTitle>
                  <Link href="/dashboard" className={buttonVariants()}>
                    <LucideLayoutDashboard className="mr-2" />
                    Back to Dashboard
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="max-h-[60vh] overflow-scroll">
                <HistoryComponent limit={100} userId={session.user.id} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryPage;
