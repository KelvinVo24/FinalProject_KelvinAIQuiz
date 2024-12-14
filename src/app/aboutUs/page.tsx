"use client";

import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const AboutUs: React.FC = () => {
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
    <>
      {/* Nav bar section */}

      {/* Hero section */}
      <div className="relative w-full h-[520px] top-[-13px]" id="home">
        <div className="absolute inset-0 opacity-80">
          <img
            className="object-cover object-center w-full h-full"
            src="/FANTI_Cover_AboutUs.png"
            alt="Background Image"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0 bg-white opacity-80 p-6 rounded-xl">
            <h1 className="font-medium text-4xl md:text-5xl leading-tight mb-2">
              Learning English by AI
            </h1>
            <p className="font-regular text-xl mb-8 mt-4 italic">
              Powered by BTEC FPT College with Fanti English Club
            </p>
            <Link href="#contactUs">
              <span className="px-6 py-3 bg-[#2abfe1] text-white font-medium rounded-full hover:bg-[#42d7f9] transition duration-200">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Services section */}
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service card example */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="h-96 w-full object-cover object-center"
                src="/activity/act7.jpg" // Placeholder image path
                alt="AI Learning"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium  mb-2">
                  AI-Powered Learning
                </h3>
                <p className="text-gray-700 text-base">
                  Our AI-driven platform enhances your English learning
                  experience through personalized assessments and tailored
                  lessons, ensuring effective skill development.
                </p>
              </div>
            </div>
            {/* Repeat service cards as needed */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/activity/act6.jpg" // Placeholder image path
                alt="Interactive Lessons"
                className="h-96 w-full object-cover object-center"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium mb-2">
                  Interactive Lessons
                </h3>
                <p className=" text-base">
                  Engage in interactive lessons that adapt to your learning
                  pace, making the process enjoyable and efficient.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/activity/act5.jpg" // Placeholder image path
                alt="Community Support"
                className="h-96 w-full object-cover object-center"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium 00 mb-2">
                  Community Support
                </h3>
                <p className="text-gray-700 text-base">
                  Join our supportive community through Fanti English Club,
                  where you can practice speaking and receive feedback from
                  peers and mentors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us section */}
      <section className="bg-gray-100" id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
              <p className="mt-4 text-gray-600 text-lg text-center">
                Fanti English Club, powered by BTEC FPT College, aims to enhance
                English language learning through innovative AI technologies. We
                offer tailored courses, community support, and interactive
                learning environments to help students excel in their language
                skills. Our commitment is to provide an enriching experience
                that fosters growth and confidence in using the English
                language.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="/activity/act8.jpg" // Placeholder image path
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us section */}
      <section className="text-gray-7</section>00 body-font mt-10">
        <div className="flex justify-center text-3xl font-bold text-center">
          Why Choose Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  {/* <img
                    src="/images/advanced-technology.png" // Placeholder image path
                    className="w-32 mb-3"
                    alt="Advanced Technology"
                  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-32 mb-3"
                  >
                    {" "}
                    <path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z" />
                  </svg>
                </div>
                <h2 className="title-font font-regular text-2xl ">
                  Advanced Technology
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-32 mb-3"
                  >
                    <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
                  </svg>
                </div>
                <h2 className="title-font font-regular text-2xl ">
                  Flexible Scheduling
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-32 mb-3"
                  >
                    <path d="M544 248l0 3.3 69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5L296 64c-37.1 0-67.6 28-71.6 64l-.4 0 0 120c0 22.1 17.9 40 40 40s40-17.9 40-40l0-72c0 0 0-.1 0-.1l0-15.9 16 0 136 0c0 0 0 0 .1 0l7.9 0c44.2 0 80 35.8 80 80l0 8zM336 192l0 56c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-118.6c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8l0-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z" />
                  </svg>
                </div>
                <h2 className="title-font font-regular text-2x">
                  Peer Support
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  {/* <img
                    src="/images/certified-instructors.png" // Placeholder image path
                    className="w-32 mb-3"
                    alt="Certified Instructors"
                  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-32 mb-3"
                  >
                    <path d="M160 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-11.8-25.5-29.9-47.5-52.4-64l99.6 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0 0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-32zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
                  </svg>
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Certified Instructors
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="body-font" id="gallery">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
          Here Are Some Activites!
        </div>

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {/* Add your images here */}
          <div className="group relative">
            <img
              src="/activity/act1.jpg"
              alt="Gallery Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform group-hover:scale-110"
            />
          </div>
          {/* Repeat for more images */}
          <div className="group relative">
            <img
              src="/activity/act2.jpg"
              alt="Gallery Image 2"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform group-hover:scale-110"
            />
          </div>
          <div className="group relative">
            <img
              src="/activity/act3.jpg"
              alt="Gallery Image 3"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform group-hover:scale-110"
            />
          </div>
          <div className="group relative">
            <img
              src="/activity/act4.jpg"
              alt="Gallery Image 4"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl font-extrabold text-gray-900"
              id="contactUs"
            >
              Visit Our Location
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Let us serve you the best
            </p>
          </div>
          <div className="mt-8 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                    <p className="mt-1 font-bold text-gray-600">
                      <a href="tel:+935529514">Phone: +935529514</a>
                    </p>
                    <a className="flex m-1" href="tel:+935529514">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-between h-10 w-30 rounded-md bg-blue-500 text-white p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                          Call now
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p className="mt-1 text-gray-600">
                      66 Vo Van Tan Street, Thanh Khe Distruct, Danang City.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Sunday : 7am - 5pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden order-none sm:order-first">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.4919859086361!2d108.20226967334749!3d16.067153194552326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142198f8fdfe4a5%3A0x5128c6012d663c05!2sBTEC%20FPT!5e0!3m2!1sen!2s!4v1730826965328!5m2!1sen!2s"
                  className="w-full"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
