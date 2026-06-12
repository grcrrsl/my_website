import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Desktop Application",
    "Management System",
    "Web Application",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || project.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">My Projects</h1>

            <p className="text-slate-400">
              A collection of projects showcasing my skills in software and web
              development.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                bg-slate-900
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-blue-500
              "
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`
                  px-4 py-2 rounded-lg transition
                  ${
                    category === item
                      ? "bg-blue-600"
                      : "bg-slate-800 hover:bg-slate-700"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.03 }}
                className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-6
                shadow-lg
                hover:border-blue-500
                transition-all
                flex
                flex-col
                h-full
                "
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="
                    block
                    text-2xl
                    font-bold
                    text-blue-400
                    mb-3
                    hover:text-blue-300
                    transition-colors
                  "
                >
                  {project.title}
                </Link>

                <p className="text-slate-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-slate-800
                        text-blue-400
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                  {project.technologies.length > 3 && (
                    <span
                      className="
                        bg-slate-700
                        text-slate-300
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      "
                    >
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex justify-between mt-auto pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      hover:text-blue-400
                    "
                  >
                    <FaGithub />
                    GitHub Link
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      hover:text-blue-400
                    "
                  >
                    <FaPlayCircle />
                    Demo Video
                  </a>

                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="
                    flex items-center gap-2
                    hoveer:text-blue-400
                    "
                    >
                      <FaExternalLinkAlt />
                      Live Website
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
