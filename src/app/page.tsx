// import { Button } from "@/components/ui/button";
import React from "react";
import { prisma } from "@/lib/db";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SignInButton from "@/components/SignInButton";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getAuthSession();
  if(session?.user){
    redirect('/dashboard');
  }
  return(
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>
              Rick Astley
            </CardTitle>
            <CardDescription>
              Never gonna give you up
              Never gonna let you down
              Never gonna run around and desert you
              Never gonna make you cry
              Never gonna say goodbye
              Never gonna tell a lie and hurt you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInButton text="Sign In with Gooogle" />
          </CardContent>
        </Card>
    </div>
  )
}
