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
import { useParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

// Mock blog data - in a real app, this would come from your database or CMS
const blogPosts = {
  "simple-present-tense": {
    title: "Simple Present Tense: Examples and How to use it",
    category: "Grammar",
    subcategory: "Simple Present Tense",
    author: "Vo Van Thanh Binh",
    coverImage:
      "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/02/Simple-Present-Tense.png",
    content: [
      {
        type: "paragraph",
        text: "Verb tenses in English are quite challenging to learn and master. They sometimes confuse language learners. The present tense in English is not an exception. It has its own structure and appropriate use that are usually misused by students.",
      },
      {
        type: "heading",
        text: "#1. What is the Simple Present Tense?",
      },
      {
        type: "paragraph",
        text: 'Have you ever asked yourself how to use the present tense in English? For example, "I study English" and "I am studying English" convey the same intended meaning but actually differ in context...',
      },
      {
        type: "quote",
        text: "For example: He lives in a house by the lake.",
      },
      {
        type: "heading",
        text: "#2. Things to remember when using the simple present tense in sentences",
      },
      {
        type: "list",
        items: [
          'In the third person singular, the verb that ends in "-y" changes to "i" and is added with "-es" (ex: cry – cries, dry – dries).',
          'Verbs ending in sibilant clusters (ss, sh, ch, and x) are added with the suffix "-es" in the third person singular.',
          'Verbs ending in a single "o" are added with the suffix "-es" in the third person singular form.',
          "Verb forms of 'to have' are irregular: has – have – have.",
          'Adding the auxiliary verb "do" in the base form of the verb does not really sound like the present tense in English.',
        ],
      },
    ],
    tags: ["English", "Grammar", "PresentTense", "BTECFPT", "FantiEnglishClub"],
  },
  "improve-listening-skills": {
    title: "Improve Your Listening Skills",
    category: "Skills",
    subcategory: "Listening",
    author: "Vo Van Thanh Binh",
    coverImage: "https://images.unsplash.com/photo-1563120145-ecb346208872",
    content: [
      {
        type: "paragraph",
        text: "Listening is a critical skill for effective communication. Here are some tips to enhance your listening abilities...",
      },
      {
        type: "heading",
        text: "#1. Active Listening",
      },
      {
        type: "paragraph",
        text: "Active listening involves fully concentrating, understanding, responding, and then remembering what is being said. It requires effort and practice...",
      },
      {
        type: "quote",
        text: "For example: 'I hear you, and I understand your concerns.'",
      },
      {
        type: "heading",
        text: "#2. Avoid Interrupting",
      },
      {
        type: "list",
        items: [
          "Let the speaker finish their thoughts before you respond.",
          "Interrupting can disrupt the speaker's flow and may cause misunderstandings.",
          "Practice patience and wait for natural pauses in the conversation.",
        ],
      },
    ],
    tags: ["Listening", "Skills", "Communication"],
  },
  "learn-english-quickly": {
    title: "Learn English Quickly: Tips and Tricks",
    category: "Grammar",
    subcategory: "Advanced Grammar",
    author: "Vo Van Thanh Binh",
    coverImage: "https://images.unsplash.com/photo-1471440671318-55bdbb772f93",
    content: [
      {
        type: "paragraph",
        text: "Mastering advanced English grammar can significantly improve your writing and speaking skills...",
      },
      {
        type: "heading",
        text: "#1. Understanding Complex Sentences",
      },
      {
        type: "paragraph",
        text: "Complex sentences are an essential part of advanced English grammar. They allow you to express more detailed and nuanced ideas...",
      },
      {
        type: "quote",
        text: "For example: Although it was raining, we decided to go for a walk.",
      },
      {
        type: "heading",
        text: "#2. Using Subjunctive Mood",
      },
      {
        type: "list",
        items: [
          "The subjunctive mood is used to express wishes, hypothetical situations, or actions that have not yet occurred.",
          "It often follows certain verbs and expressions, such as 'suggest', 'recommend', 'important that', etc.",
          "In the subjunctive mood, the base form of the verb is used, regardless of the subject.",
        ],
      },
      {
        type: "heading",
        text: "#3. Using Subjunctive Mood",
      },
      {
        type: "heading",
        text: "#3. Mastering Passive Voice",
      },
      {
        type: "paragraph",
        text: "The passive voice is used to emphasize the action rather than the subject performing the action. It is useful for formal writing and scientific reports...",
      },
      {
        type: "quote",
        text: "For example: The book was read by the entire class.",
      },
      {
        type: "heading",
        text: "#4. Using Relative Clauses",
      },
      {
        type: "paragraph",
        text: "Relative clauses provide additional information about a noun without starting a new sentence. They help in creating complex and detailed sentences...",
      },
      {
        type: "quote",
        text: "For example: The artist, who was known for her paintings, held an exhibition.",
      },
      {
        type: "heading",
        text: "#5. Correct Use of Tenses",
      },
      {
        type: "paragraph",
        text: "Understanding and correctly using different tenses is crucial for clear communication. Pay special attention to perfect tenses...",
      },
      {
        type: "list",
        items: [
          "Past Perfect: Indicates an action completed before another past action.",
          "Present Perfect: Indicates an action that occurred at an unspecified time in the past.",
          "Future Perfect: Indicates an action that will be completed before another future action.",
        ],
      },
      {
        type: "heading",
        text: "#6. Phrasal Verbs",
      },
      {
        type: "paragraph",
        text: "Phrasal verbs combine a verb with a preposition or adverb, creating a meaning different from the original verb...",
      },
      {
        type: "quote",
        text: "For example: 'Give up' means to stop trying.",
      },
      {
        type: "heading",
        text: "#7. Modal Verbs for Expressing Probability",
      },
      {
        type: "paragraph",
        text: "Modal verbs such as 'might', 'could', 'must', and 'should' express different degrees of probability and necessity...",
      },
      {
        type: "quote",
        text: "For example: She might come to the party.",
      },
      {
        type: "heading",
        text: "#8. Using Conditionals",
      },
      {
        type: "paragraph",
        text: "Conditionals are used to discuss possible or hypothetical situations. There are different types of conditionals (zero, first, second, and third)...",
      },
      {
        type: "quote",
        text: "For example: If I had known, I would have acted differently.",
      },
      {
        type: "heading",
        text: "#9. Mastery of Advanced Punctuation",
      },
      {
        type: "paragraph",
        text: "Proper use of advanced punctuation, such as semicolons, colons, and dashes, can enhance the clarity and impact of your writing...",
      },
      {
        type: "quote",
        text: "For example: She has three favorite hobbies: reading, swimming, and painting.",
      },
      {
        type: "heading",
        text: "#10. Advanced Vocabulary Usage",
      },
      {
        type: "paragraph",
        text: "Expanding your vocabulary with advanced words and phrases can greatly improve your expression and comprehension...",
      },
      {
        type: "quote",
        text: "For example: Instead of saying 'very important', you might say 'crucial'.",
      },
    ],
    tags: ["English", "Grammar", "Advanced", "Tips", "BTECFPT"],
  },
};

const BlogPost = () => {
  const params = useParams();
  interface BlogPost {
    title: string;
    category: string;
    subcategory?: string;
    author: string;
    coverImage: string;
    content: { type: string; text?: string; items?: string[] }[];
    tags: string[];
  }

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data - in a real app, this would be an API call
    const fetchPost = () => {
      if (params) {
        const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
        const postData = blogPosts[slug as keyof typeof blogPosts];
        setPost(postData);
        setLoading(false);
      }
    };

    fetchPost();
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-screen-xl mx-auto p-5 text-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <Link
          href="/blogs"
          className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
      <div
        className="bg-cover h-64 text-center overflow-hidden"
        style={{
          height: "450px",
          backgroundImage: `url('${post.coverImage}')`,
        }}
      ></div>
      <div className="max-w-2xl mx-auto">
        <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div>
            <Link
              href={`/category/${post.category.toLowerCase()}`}
              className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              {post.category}
            </Link>
            {post.subcategory && (
              <>
                ,
                <Link
                  href={`/category/${post.subcategory
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  {post.subcategory}
                </Link>
              </>
            )}

            <h1 className="font-bold text-3xl mb-2">{post.title}</h1>

            <p className="text-xs mt-2">
              Written By: <span> </span>
              <Link
                href={`/author/${post.author
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                {post.author}
              </Link>
            </p>

            {post.content.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <p key={index} className="text-base leading-8 my-5">
                      {section.text}
                    </p>
                  );
                case "heading":
                  return (
                    <h3 key={index} className="text-2xl font-bold my-5">
                      {section.text}
                    </h3>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600"
                    >
                      {section.text}
                    </blockquote>
                  );
                case "list":
                  return (
                    <ul
                      key={index}
                      className="text-base leading-8 my-5 list-decimal"
                    >
                      {section.items &&
                        section.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  );
                default:
                  return null;
              }
            })}

            {post.tags &&
              post.tags.map((tag, index) => (
                <React.Fragment key={tag}>
                  <Link
                    href={`/tag/${tag.toLowerCase()}`}
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    #{tag}
                  </Link>
                  {index < post.tags.length - 1 && ", "}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
