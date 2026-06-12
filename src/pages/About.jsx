import { motion } from "framer-motion";
import profileImage from "../assets/images/RoselleGarceraPicture.jpg";
import Navbar from "../components/layout/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">About Me</h1>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Learn more about my journey, skills, and passion for technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-full flex justify-center">
                <img
                  src={profileImage}
                  alt="Roselle Garcera"
                  className="w-full max-w-md h-[400px] object-cover rounded-2xl 
                shadow-lg border border-slate-700 border-transparent hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Roselle Garcera
              </h2>

              <p className="text-slate-300 leading-relaxed mb-6">
                I am a 3rd-year Information Technology student with a strong
                passion for software development, web technologies, and
                problem-solving. I enjoy building applications that provide
                practical solutions while continuously improving my technical
                and analytical skills.
              </p>

              <p className="text-slate-300 leading-relaxed mb-6">
                My experience includes developing projects using React.js, Java,
                Java Swing, MySQL, MongoDB, Git, and GitHub. Through academic
                and personal projects, I have gained valuable experience in
                designing user-friendly applications and implementing efficient
                software solutions. My goal is to become a Full-Stack Developer
                and contribute to innovative technology-driven projects.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-900 p-4 rounded-xl">
                  <h3 className="font-semibold text-blue-400">Education</h3>
                  <p className="text-slate-400">BS Information Technology Specialization with Mobile and Web Applications</p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl">
                  <h3 className="font-semibold text-blue-400">Goal</h3>
                  <p className="text-slate-400">Full-Stack Developer</p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl">
                  <h3 className="font-semibold text-blue-400">Experience</h3>
                  <p className="text-slate-400">Academic Projects</p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl">
                  <h3 className="font-semibold text-blue-400">Technologies</h3>
                  <p className="text-slate-400">React, Java, MySQL, MongoDB</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
