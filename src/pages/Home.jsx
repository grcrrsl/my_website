import Navbar from "../components/layout/Navbar";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <p className="text-blue-400 uppercase tracking-widest mb-4">
            Welcome To My Portfolio
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold">
            Roselle Garcera
          </h1>

          <TypeAnimation
            sequence={[
              "Aspiring Full-Stack Developer",
              2000,
              "Information Technology Student",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="block text-blue-400 text-2xl md:text-3xl mt-4"
          />

          <p className="max-w-2xl mx-auto mt-8 text-lg text-slate-400 leading-relaxed">
            Curently studying Information Technology, I am passionate about
            building modern web applications, solving real-world problems, and
            continuously learning modern technologies using React, Java, JavaFX,
            MySQL, Git, and GitHub.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/projects"
              className="
      bg-blue-600
      hover:bg-blue-700
      transition-all
      duration-300
      px-8
      py-4
      rounded-lg
      inline-block
    "
            >
              View Projects
            </Link>

            <button
              className="
      border
      border-blue-500
      hover:bg-blue-500
      hover:text-white
      transition-all
      duration-300
      px-8
      py-4
      rounded-lg
    "
            >
              Download Resume
            </button>
          </div>
        </div>
      </section>

       {/* Footer */}
        <Footer />
    </>
  );
}

export default Home;
