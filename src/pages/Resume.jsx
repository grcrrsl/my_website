import Navbar from "../components/layout/Navbar";
import { FaDownload, FaFilePdf } from "react-icons/fa";

function Resume() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-400 mb-4">
              Resume
            </h1>

            <p className="text-slate-400">
              View or download my resume to learn more about my education,
              skills, and project experience.
            </p>
          </div>

          {/* Resume Preview */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center mb-8">
            <FaFilePdf className="text-7xl text-red-500 mx-auto mb-6" />

            <h2 className="text-2xl font-bold mb-3">
              Roselle Garcera Resume
            </h2>

            <p className="text-slate-400 mb-6">
              Information Technology Student | Aspiring Full-Stack Developer
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                bg-blue-600
                hover:bg-blue-700
                px-6
                py-3
                rounded-lg
                transition-all
              "
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          {/* Quick Summary */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                Education
              </h3>

              <p className="text-slate-300">
                Bachelor of Science in Information Technology
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                Skills
              </h3>

              <p className="text-slate-300">
                Java, React, JavaScript, MySQL, Git, GitHub
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                Experience
              </h3>

              <p className="text-slate-300">
                Academic and Personal Software Development Projects
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Resume;