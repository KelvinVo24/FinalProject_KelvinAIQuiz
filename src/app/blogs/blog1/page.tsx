"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Timer, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import router from "next/router";
import Link from "next/link";
import Footer from "@/components/Footer";

const BlogPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
      <div
        className="bg-cover h-64 text-center overflow-hidden"
        style={{
          height: "450px",
          backgroundImage:
            "url('https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/02/Simple-Present-Tense.png')",
        }}
      ></div>
      <div className="max-w-2xl mx-auto">
        <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div>
            <a
              href="#"
              className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              Grammar
            </a>
            ,
            <a
              href="#"
              className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              Simple Present Tense
            </a>
            <h1 className=" font-bold text-3xl mb-2">
              Simple Present Tense: Examples and How to use it
            </h1>
            <p className=" text-xs mt-2">
              Written By: <span> </span>
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Vo Van Thanh Binh
              </a>
            </p>
            <p className="text-base leading-8 my-5">
              Verb tenses in English are quite challenging to learn and master.
              They sometimes confuse language learners. The present tense in
              English is not an exception. It has its own structure and
              appropriate use that are usually misused by students.
            </p>
            <h3 className="text-2xl font-bold my-5">
              #1. What is the Simple Present Tense?
            </h3>
            <p className="text-base leading-8 my-5">
              Have you ever asked yourself how to use the present tense in
              English? For example, “I study English” and “I am studying
              English” convey the same intended meaning but actually differ in
              context. The sentence “I study English” is in the present form,
              while the sentence “I am studying English” is in the present
              continuous form. You must be confused about the two tenses where
              in fact they are both in the present form. However, we have to
              consider the context of each sentence and examine the structure as
              well as the semantics. The present tense in English may be far
              different from the concept of the present tense in your own
              language, which may result in a different perception of the tense
              when used in the new language. The present tense in English is not
              too easy to understand and analyze. There are 4 types of present
              tense in English simple present, present continuous, present
              perfect, and present perfect continuous tenses.
              <br />
              <br />
              In this article, we will focus more on the simple present tense in
              English and give you further insights into it. This article is
              mainly intended for language learners to learn more about the
              present tense in English and understand it better for proper usage
              in sentences. The simple present tense in English talks about an
              action that is done as a habit or happens regularly. It also
              refers to a permanent situation. Check out the timeline below to
              understand this tense.
            </p>
            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
              For example: He lives in a house by the lake.
            </blockquote>
            <h3 className="text-2xl font-bold my-5">
              #2. Things to remember when using the simple present tense in
              sentences
            </h3>
            <ul className="text-base leading-8 my-5 list-decimal">
              <li>
                In the third person singular, the verb that ends in “-y” changes
                to “i” and is added with “-es” (ex: cry – cries, dry – dries).
              </li>
              <li>
                Verbs ending in sibilant clusters (ss, sh, ch, and x) are added
                with the suffix “-es” in the third person singular (ex: kiss –
                kisses, teach – teaches, smash – smashes, fix – fixes).
              </li>
              <li>
                Verbs ending in a single “o” are added with the suffix “-es” in
                the third person singular form (ex: go – goes, do – does). The
                be-verbs are always irregular: am – is – are.
              </li>
              <li>Verb forms of “to have” are irregular: has – have – have.</li>
              <li>
                Adding the auxiliary verb “do” in the base form of the verb does
                not really sound like the present tense in English, but rather
                an emphatic form to emphasize the action (ex: I do write my
                letters in English instead of I write my letters in English).
              </li>
            </ul>
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #English
            </a>
            ,
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #Grammar
            </a>
            ,
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #PresentTense
            </a>
            ,
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #BTECFPT
            </a>
            ,
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #FantiEnglishClub
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
