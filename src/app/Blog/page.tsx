"use client";

import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const categories = [
  {
    title: "Grammar",
    description: "Improve your grammar skills with these articles.",
    posts: [
      {
        title: "Mastering Grammar Basics",
        slug: "simple-present-tense",
        category: "Article",
        imageUrl:
          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36",
        author: "John Doe",
        date: "Mar 16, 2020",
        readTime: "6 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Discover the foundational rules and tips for mastering English grammar.",
      },

      {
        title: "Mastering Grammar Basics",
        slug: "simple-present-tense",
        category: "Article",
        imageUrl:
          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36",
        author: "John Doe",
        date: "Mar 16, 2020",
        readTime: "6 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Discover the foundational rules and tips for mastering English grammar.",
      },

      {
        title: "Mastering Grammar Basics",
        slug: "simple-present-tense",
        category: "Article",
        imageUrl:
          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36",
        author: "John Doe",
        date: "Mar 16, 2020",
        readTime: "6 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Discover the foundational rules and tips for mastering English grammar.",
      },
      // Add more grammar posts here
    ],
  },

  {
    title: "Listening",
    description: "Enhance your listening skills with these resources.",
    posts: [
      {
        title: "How to Improve Your Listening Skills",
        slug: "improve-listening-skills",
        category: "Video",
        imageUrl: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d",
        author: "Jane Smith",
        date: "Mar 10, 2020",
        readTime: "4 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Practical strategies and exercises to enhance your English listening abilities.",
      },

      {
        title: "How to Improve Your Listening Skills",
        slug: "improve-listening-skills",
        category: "Video",
        imageUrl: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d",
        author: "Jane Smith",
        date: "Mar 10, 2020",
        readTime: "4 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Practical strategies and exercises to enhance your English listening abilities.",
      },

      {
        title: "How to Improve Your Listening Skills",
        slug: "improve-listening-skills",
        category: "Video",
        imageUrl: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d",
        author: "Jane Smith",
        date: "Mar 10, 2020",
        readTime: "4 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Practical strategies and exercises to enhance your English listening abilities.",
      },
      // Add more listening posts here
    ],
  },
  {
    title: "Speaking",
    description: "Learn tips and tricks for better speaking.",
    posts: [
      {
        title: "Speaking Confidently",
        slug: "mastering-grammar-basics",
        category: "Case Study",
        imageUrl:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        author: "Sam Green",
        date: "Feb 12, 2020",
        readTime: "11 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Boost your confidence with these tried-and-tested tips for speaking English fluently.",
      },

      {
        title: "Speaking Confidently",
        slug: "mastering-grammar-basics",
        category: "Case Study",
        imageUrl:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        author: "Sam Green",
        date: "Feb 12, 2020",
        readTime: "11 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Boost your confidence with these tried-and-tested tips for speaking English fluently.",
      },

      {
        title: "Speaking Confidently",
        slug: "mastering-grammar-basics",
        category: "Case Study",
        imageUrl:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        author: "Sam Green",
        date: "Feb 12, 2020",
        readTime: "11 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Boost your confidence with these tried-and-tested tips for speaking English fluently.",
      },
      // Add more speaking posts here
    ],
  },
  {
    title: "Writing",

    description: "Refine your writing skills with practical advice.",
    posts: [
      {
        title: "Writing Tips for ESL Students",
        slug: "mastering-grammar-basics",
        category: "Guide",
        imageUrl:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        author: "Alex Blue",
        date: "Apr 18, 2020",
        readTime: "8 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Learn essential tips to improve clarity and coherence in your English writing.",
      },

      {
        title: "Writing Tips for ESL Students",
        slug: "mastering-grammar-basics",
        category: "Guide",
        imageUrl:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        author: "Alex Blue",
        date: "Apr 18, 2020",
        readTime: "8 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Learn essential tips to improve clarity and coherence in your English writing.",
      },

      {
        title: "Writing Tips for ESL Students",
        slug: "mastering-grammar-basics",
        category: "Guide",
        imageUrl:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        author: "Alex Blue",
        date: "Apr 18, 2020",
        readTime: "8 min read",
        authorImage: "/Logo_Fanti.jpeg",
        content:
          "Learn essential tips to improve clarity and coherence in your English writing.",
      },
      // Add more writing posts here
    ],
  },
];

const Blog: React.FC = () => {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); // Simulate a loading time of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }
  return (
    <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-8 lg:pb-10">
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl ">
        <div
          className="text-center mb-12 rounded relative bg-gradient-to-r from-blue-50 to-blue-100 bg-cover bg-center p-6 shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517849325426-6eac321919a0')",
          }}
        >
          <div className="absolute inset-0 bg-blue-100 opacity-50 rounded"></div>{" "}
          {/* Overlay */}
          <h2 className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl z-5">
            Explore Topics Through Blogs
          </h2>
          <p className="relative mx-auto mt-3 max-w-2xl text-xl sm:mt-4 italic text-gray-700 z-5">
            Dive into different areas to enhance your English skills.
          </p>
        </div>
        {categories.map((category, index) => (
          <section key={index} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {category.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6">{category.description}</p>
            <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-1">
              {category.posts.map((post, idx) => (
                <div
                  key={idx}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt={post.title}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <Link href={`/blog/${post.slug}`}>
                          <span className="hover:underline">
                            {post.category}
                          </span>
                        </Link>
                      </p>
                      <Link href={`/blogs/${post.slug}`} className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.content}
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <Link href={`/blogs/${post.slug}`}>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.authorImage}
                            alt={post.author}
                          />
                        </Link>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            {post.author}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time>{post.date}</time>
                          <span aria-hidden="true">·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
