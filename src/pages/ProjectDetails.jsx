import { useParams, Link } from "react-router-dom";
import projects from "../data/Projects.js";
import Navbar from "../components/layout/Navbar";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">

          <Link
            to="/projects"
            className="text-blue-400 hover:text-blue-300"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-5xl font-bold text-blue-400 mt-6 mb-2">
            {project.title}
          </h1>

          <p className="text-slate-400 mb-8">
            {project.category}
          </p>

          {/* Screenshot Placeholder */}
          <div className="h-[400px] bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mb-10">
            <p className="text-slate-500">
              Project Screenshot Coming Soon
            </p>
          </div>

          {/* Description */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Description
            </h2>

            <p className="text-slate-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 text-blue-400 px-4 py-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Features
            </h2>

            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Challenges
            </h2>

            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </div>

          {/* Lessons */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Lessons Learned
            </h2>

            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              {project.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}

export default ProjectDetails;