import React from "react";
import { CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const BlogList: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-1">
      <CardTitle className="text-2xl font-bold mb-4 mt-4">Blog Me!</CardTitle>
      <p className="text-sm text-muted-foreground mb-4">
        Read our latest articles and learn more about English
      </p>
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
        <div className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
          <div className="py-4 px-8">
            <img
              src="/Logo_Fanti.jpeg"
              className="rounded-full h-12 w-12 mb-4 shadow-lg"
            />
            <a href="/blogs/blog1">
              <h4 className="text-lg mb-3 font-semibold">
                Simple Present Tense: Examples and How to use it
              </h4>
            </a>
            <p className="mb-2 text-sm text-justify">
              Verb tenses in English are quite challenging to learn and master.
              They sometimes confuse language learners. The present tense in
              English is not an exception. It has its own structure and
              appropriate use that are usually misused by students.
            </p>
            <img
              src="/simple_present.jpg"
              className="w-full h-52 object-cover object-center"
            />
            <hr className="mt-4" />
            <span className="text-xs">ARTICLE</span>
            &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
          </div>
        </div>

        <div className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
          <div className="py-4 px-8">
            <img
              src="/Logo_Fanti.jpeg"
              className="rounded-full h-12 w-12 mb-4 shadow-lg"
            />
            <a href="#">
              <h4 className="text-lg mb-3 font-semibold">
                10 Ways To Improve Your Listening Skills (With Examples)
              </h4>
            </a>
            <p className="mb-2 text-sm text-justify">
              Strong communication skills are a valued trait in every industry
              and listening skills are an essential part of effective
              communication. It can be beneficial to assess and strengthen your
              listening skills in professional situations and beyond.
            </p>
            <img
              src="/listening.png"
              className="w-full h-52 object-cover object-center"
            />
            <hr className="mt-4" />
            <span className="text-xs">ARTICLE</span>
            &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
          </div>
        </div>

        <div className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
          <div className="py-4 px-8">
            <img
              src="/Logo_Fanti.jpeg"
              className="rounded-full h-12 w-12 mb-4 shadow-lg"
            />
            <a href="#">
              <h4 className="text-lg mb-3 font-semibold">
                How to learn English quickly: 10 tips
              </h4>
            </a>
            <p className="mb-2 text-sm text-justify">
              English is a fun language to learn (here are 10 reasons why it
              rocks), and even though it’s considered an accessible and
              relatively easy one to learn, with 750,000 words and spelling that
              can throw off even the most skilled learner, learning English fast
              can seem impossible.
            </p>
            <img
              src="/book.png"
              className="w-full h-52 object-cover object-center"
            />
            <hr className="mt-4" />
            <span className="text-xs">ARTICLE</span>
            &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Link
          href="/Blog"
          className="flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center hover:bg-indigo-700 hover:text-white transition duration-300"
        >
          <span>View More</span>
          <svg
            className="w-6 h-6 ml-2"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
