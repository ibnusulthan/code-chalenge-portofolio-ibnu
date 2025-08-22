"use client";
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce website with product filtering, cart functionality, and checkout process.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      image: "",
      link: "",
    },
    {
      id: 2,
      title: "TUKU! App",
      description:
        "COMING SOON, TUKU application with user authentication and real-time updates.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
      image: "",
      link: "",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current and forecasted weather for any location.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
      image: "",
      link: "",
    },
    {
      id: 4,
      title: "Recipe Finder",
      description:
        "An application that helps users discover recipes based on ingredients they have available.",
      technologies: ["Vue.js", "Express.js", "Spoonacular API", "MongoDB"],
      image: "",
      link: "",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-purple-400">Projects</span>
        </h2>

        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Here are some of the projects I've worked on. Each project represents
          my skills and passion for web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  Something special is coming...
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Project
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
