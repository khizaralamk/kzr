export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL", "Java"]
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "Vue.js", "Next.js", "Tailwind CSS", "Bootstrap", "Sass/SCSS"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "REST APIs"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Adobe Creative Suite"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "OpenAI API", "LangChain", "Computer Vision", "NLP", "Data Analysis"]
    },
    {
      title: "Other Skills",
      skills: ["UI/UX Design", "Responsive Design", "Performance Optimization", "Testing", "Agile/Scrum", "Project Management"]
    }
  ];

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-9 py-12 md:py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Heading */}
        <div className="flex w-full justify-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-benne text-center">skills & expertise</h2>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-black p-6 hover:shadow-lg transition-all duration-300 group"
            >
                             <h3 className="text-xl md:text-2xl font-benne mb-4 text-center">
                 {category.title}
               </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm md:text-base text-gray-700 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

                 
      </div>
    </section>
  );
}
