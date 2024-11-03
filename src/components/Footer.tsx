// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-3 pt-4 lg:px-9 bg-white mt-3 rounded-lg shadow-lg transition">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            {/* <img src="BTEC_FPT.png" alt="logo" className="h-14 w-24" /> */}
            <span className="ml-0 text-xl font-bold tracking-wide text-gray-800">
              BTEC ESL AI QUIZ
            </span>
          </a>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm text-gray-800">
              Improve your English language skills with BTEC FPT's AI-powered
              English language learning platform. Our innovative technology
              offers personalized learning experiences, interactive quizzes, and
              engaging content to help you achieve your English language goals.
              Whether you're a beginner or an advanced learner, BTEC FPT has the
              resources you need to succeed.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <a href="#" className="text-gray-900">
            Phone: 0935529514
          </a>
          <a href="#" className="text-gray-900">
            Email: binhvvtbd00283@fpt.edu.vn
          </a>
          <a href="#" className="text-gray-900">
            Address: 66 Vo Van Tan Street, Thanh Khe Distruct, Danang City.
          </a>
        </div>

        <div>
          <p className="text-base font-bold tracking-wide text-gray-900 text-center">
            Discover us on
          </p>
          <div className="flex items-center gap-1 px-2">
            <a href="#" className="w-full min-w-xl">
              <img src="BTEC_FPT.png" alt="BTEC Button" className="h-14" />
            </a>
            <a className="w-full min-w-xl" href="#">
              <img src="Logo_Fanti.jpeg" alt="Fanti Button" className="h-28" />
            </a>
          </div>
          {/* <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a href="#" title="send email">
              admin@company.com
            </a>
          </div> */}
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2024 Company. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
