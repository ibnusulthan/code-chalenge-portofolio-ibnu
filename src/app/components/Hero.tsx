"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/profile5.jpg"
                  alt="Foto Profil"
                  width={1280}
                  height={1280}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hello, I&apos;m <span className="text-purple-400">Ibnu Sulthan</span>
          </h1>

          <p className="text-xl md:text-2xl text-red-600 mb-8">
            MAAF BGT BRO BELUM NEMU FOTO SENDIRI <p className="text-xl md:text-2xl text-gray-300 mb-8">A passionate Front-End Developer focused on creating interactive and
            responsive web applications.</p>
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
