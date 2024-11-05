"use client";

import Footer from "@/components/Footer";
import Link from "next/link";

const AboutUs: React.FC = () => {
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service card example */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="h-96 w-full object-cover object-center"
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/442493316_122195811638065171_7346494693987857937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wjmFK8S7x5MQ7kNvgHv0xaQ&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=Ayrp1Y5dtVf40r8eMMU9oSy&oh=00_AYCYRqpg2DjYQaPsq1LhnCsOsmYKXe5U4K5b1PNUdC2sKg&oe=67303AAA" // Placeholder image path
                alt="AI Learning"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
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
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/462564623_122252406164065171_6834329963117128133_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-VsIn5eUsWYQ7kNvgHwKUa6&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AFjij6xMxuCsS7XH-CPtLmu&oh=00_AYCGGG5iMreuS3N_DPiRzIeZjpT4RrTkhRkkwvqVuajr-Q&oe=67305136" // Placeholder image path
                alt="Interactive Lessons"
                className="h-96 w-full object-cover object-center"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Interactive Lessons
                </h3>
                <p className="text-gray-700 text-base">
                  Engage in interactive lessons that adapt to your learning
                  pace, making the process enjoyable and efficient.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/464587854_122257467908065171_7686997290798538820_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=md6xM2_dQKcQ7kNvgH102E5&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=ApiaRIFfdjbEdN-5msNLeT-&oh=00_AYA_RRp-Grpk-nmCA2rk-0xZWq2NiFz6KWdAjz3_0YoYAw&oe=67303D94" // Placeholder image path
                alt="Community Support"
                className="h-96 w-full object-cover object-center"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
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
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
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
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/464695051_122258084342065171_3246204300999251184_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c-Zio3X0kGYQ7kNvgGrzrQo&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&_nc_gid=A4Kqx6wjd7a8tJz0uAwxzEi&oh=00_AYCozFoGIGRyZLPkaGxs-RmFl_pqgYpND1kGWBfBG6xwIQ&oe=673025B1"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us section */}
      <section className="text-gray-700 body-font mt-10">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
          Why Choose Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="/images/advanced-technology.png" // Placeholder image path
                    className="w-32 mb-3"
                    alt="Advanced Technology"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Advanced Technology
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="/images/flexible-scheduling.png" // Placeholder image path
                    className="w-32 mb-3"
                    alt="Flexible Scheduling"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Flexible Scheduling
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="/images/peer-support.png" // Placeholder image path
                    className="w-32 mb-3"
                    alt="Peer Support"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Peer Support
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="/images/certified-instructors.png" // Placeholder image path
                    className="w-32 mb-3"
                    alt="Certified Instructors"
                  />
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
      <section className="text-gray-700 body-font" id="gallery">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
          Gallery
        </div>

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {/* Add your images here */}
          <div className="group relative">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Gallery Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform group-hover:scale-110"
            />
          </div>
          {/* Repeat for more images */}
          <div className="group relative">
            <img
              src="https://images.unsplash.com/photo-1556826910-67e7631786f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Gallery Image 2"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform group-hover:scale-110"
            />
          </div>
          <div className="group relative">
            <img
              src="https://images.unsplash.com/photo-1605482792341-fd707bf0dc88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Gallery Image 3"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform group-hover:scale-110"
            />
          </div>
          <div className="group relative">
            <img
              src="https://images.unsplash.com/photo-1591161363079-c208eae6b5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
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
                      <a href="tel:+123">Phone: +91 123456789</a>
                    </p>
                    <a className="flex m-1" href="tel:+919823331842">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">
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
                      Sale galli, 60 foot road, Latur
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Sunday : 2pm - 9pm
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
