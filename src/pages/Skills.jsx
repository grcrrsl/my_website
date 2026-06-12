import Navbar from "../components/layout/Navbar";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "SQL"],
    },
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      skills: ["Java", "JDBC", "REST API Fundamentals"],
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL Server Management Studio (SSMS)"],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "IntelliJ IDEA",
        "Figma",
      ],
    },
    {
      title: "Concepts",
      skills: [
        "Object-Oriented Programming (OOP)",
        "Data Structures",
        "Software Development Lifecycle",
        "Responsive Design",
        "CRUD Operations",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              My Skills
            </h1>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Technologies, tools, and concepts I use to build
              desktop and web applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-2xl
                  p-6
                  hover:border-blue-500
                  transition-all
                "
              >
                <h2 className="text-2xl font-bold text-blue-400 mb-6">
                  {category.title}
                </h2>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        bg-slate-800
                        text-blue-400
                        px-4
                        py-2
                        rounded-full
                        text-sm
                      "
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
    </>
  );
}

export default Skills;