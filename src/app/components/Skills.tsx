// components/Skills.tsx
interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "HTML", level: 80, category: "Frontend" },
    { name: "CSS", level: 60, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "React", level: 60, category: "Frontend" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "Git", level: 75, category: "Tools" },
    { name: "Figma", level: 65, category: "Tools" },
    { name: "Node.js", level: 60, category: "Backend" },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-purple-400">Skills</span>
        </h2>
        
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Here are the technologies and tools I use to bring ideas to life.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-purple-300">{category}</h3>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;