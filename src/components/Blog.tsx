import React from "react";
import { CardContent, CardTitle } from "./ui/card";

const Blog: React.FC = () => {
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
              src="https://tailwindcss.com/img/jonathan.jpg"
              className="rounded-full h-12 w-12 mb-4"
            />
            <a href="#">
              <h4 className="text-lg mb-3 font-semibold">
                How to be effective at working remotely?
              </h4>
            </a>
            <p className="mb-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <img
              src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              className="w-100"
            />
            <hr className="mt-4" />
            <span className="text-xs">ARTICLE</span>
            &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
          </div>
        </div>

        <div className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
          <div className="py-4 px-8">
            <img
              src="https://tailwindcss.com/img/jonathan.jpg"
              className="rounded-full h-12 w-12 mb-4"
            />
            <a href="#">
              <h4 className="text-lg mb-3 font-semibold">
                How to be effective at working remotely?
              </h4>
            </a>
            <p className="mb-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <img
              src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              className="w-100"
            />
            <hr className="mt-4" />
            <span className="text-xs">ARTICLE</span>
            &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
          </div>
        </div>

        <div className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
          <div className="py-4 px-8">
            <img
              src="https://tailwindcss.com/img/jonathan.jpg"
              className="rounded-full h-12 w-12 mb-4"
            />
            <a href="#">
              <h4 className="text-lg mb-3 font-semibold">
                How to be effective at working remotely?
              </h4>
            </a>
            <p className="mb-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <img
              src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              className="w-100"
            />
            <hr className="mt-4" />
            <span className="text-xs">ARTICLE</span>
            &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
