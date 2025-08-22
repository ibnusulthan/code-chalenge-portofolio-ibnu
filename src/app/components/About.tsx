"use client";

import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-purple-400">Me</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/profile8.jpg"
                    alt="Foto Profil"
                    width={1280}
                    height={1280}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="text-lg text-gray-300 mb-6">
                I'm a front-end developer student with a passion for creating
                beautiful, functional, and user-friendly websites. I enjoy
                turning complex problems into simple, intuitive designs.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing my knowledge
                through blog posts and tutorials.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h3 className="text-purple-400 font-medium">Name:</h3>
                  <p className="text-gray-300">Ibnu Sulthan Bagaskara</p>
                </div>
                <div>
                  <h3 className="text-purple-400 font-medium">Email:</h3>
                  <p className="text-gray-300">ibnu.bagaskara@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-purple-400 font-medium">Age:</h3>
                  <p className="text-gray-300">25</p>
                </div>
                <div>
                  <h3 className="text-purple-400 font-medium">From:</h3>
                  <p className="text-gray-300">Jakarta, Indonesia</p>
                </div>
              </div>

              <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
