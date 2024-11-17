import React from "react";
import { CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const BlogList: React.FC = () => {
  // Define blog data structure to make the component more maintainable
  const blogs = [
    {
      id: 1,
      slug: "simple-present-tense",
      title: "Simple Present Tense: Examples and How to use it",
      description:
        "Verb tenses in English are quite challenging to learn and master. They sometimes confuse language learners. The present tense in English is not an exception. It has its own structure and appropriate use that are usually misused by students.",
      image: "/simple_present.jpg",
    },
    {
      id: 2,
      slug: "improve-listening-skills",
      title: "10 Ways To Improve Your Listening Skills (With Examples)",
      description:
        "Strong communication skills are a valued trait in every industry and listening skills are an essential part of effective communication. It can be beneficial to assess and strengthen your listening skills in professional situations and beyond.",
      image: "/listening.png",
    },
    {
      id: 3,
      slug: "learn-english-quickly",
      title: "How to learn English quickly: 10 tips",
      description:
        "English is a fun language to learn (here are 10 reasons why it rocks), and even though it's considered an accessible and relatively easy one to learn, with 750,000 words and spelling that can throw off even the most skilled learner, learning English fast can seem impossible.",
      image: "/book.png",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-1">
      <CardTitle className="text-2xl font-bold mb-4 mt-4">Blog Me!</CardTitle>
      <p className="text-sm text-muted-foreground mb-4">
        Read our latest articles and learn more about English
      </p>
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog.id}
            className="block hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="py-4 px-8">
              <img
                src="/Logo_Fanti.jpeg"
                className="rounded-full h-12 w-12 mb-4 shadow-lg"
                alt="Logo"
              />
              <h4 className="text-lg mb-3 font-semibold">{blog.title}</h4>
              <p className="mb-2 text-sm text-justify">{blog.description}</p>
              <img
                src={blog.image}
                className="w-full h-52 object-cover object-center"
                alt={blog.title}
              />
              <hr className="mt-4" />
              <span className="text-xs">ARTICLE</span>
              &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <Link href="/Blog">
          <div className="flex flex-wrap justify-center gap-6">
            <span className="relative">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-black hover:text-white">
                Read More
              </span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
