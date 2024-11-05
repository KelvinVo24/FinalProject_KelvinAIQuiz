import React from "react";
import { CardContent, CardTitle } from "./ui/card";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to be effective at working remotely?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      authorImage: "https://tailwindcss.com/img/jonathan.jpg",
      coverImage:
        "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "ARTICLE",
      type: "PROCESS",
    },
    {
      id: 2,
      title: "Top 10 Tips for Learning English Faster",
      description:
        "Discover ways to accelerate your English learning journey with tips from language experts and experienced learners.",
      authorImage: "https://tailwindcss.com/img/jonathan.jpg",
      coverImage:
        "https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "TUTORIAL",
      type: "LEARNING",
    },
    {
      id: 3,
      title: "Exploring English Culture through Literature",
      description:
        "An insightful look at how literature can deepen your understanding of English culture and language nuances.",
      authorImage: "https://tailwindcss.com/img/jonathan.jpg",
      coverImage:
        "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/465679333_964216225740648_273758882563076451_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1vHZWN5aGa8Q7kNvgExwMj8&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AVncoBg-QCgUoRosLL9ZkZ9&oh=00_AYBWDxj7_3KLnrDd8pJOTBUEdq-fRy1SH5uPesCvCblx7Q&oe=672F4F76",
      category: "INSIGHT",
      type: "CULTURE",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <CardTitle className="text-2xl font-bold mb-4 mt-4">Blog Me!</CardTitle>
      <p className="text-sm text-muted-foreground mb-4">
        Read our latest articles and learn more about English
      </p>
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="py-4 px-8">
              <img
                src={post.authorImage}
                alt="Author"
                className="rounded-full h-12 w-12 mb-4"
              />
              <a href="#">
                <h4 className="text-lg mb-3 font-semibold">{post.title}</h4>
              </a>
              <p className="mb-2 text-sm">{post.description}</p>
              <img src={post.coverImage} alt="Cover" className="w-full" />
              <hr className="mt-4" />
              <span className="text-xs">{post.category}</span>
              &nbsp;<span className="text-xs text-gray-500">{post.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
