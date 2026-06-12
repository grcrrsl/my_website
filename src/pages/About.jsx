import { motion } from "framer-motion";
import profileImage from "../assets/images/RoselleGarceraPicture.jpg";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import certifications from "../data/Certifications";

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
        className="
          w-full
          max-w-md
          h-[400px]
          object-cover
          rounded-2xl
          shadow-lg
          border
          border-slate-700
          hover:scale-105
          transition-transform
          duration-300
        "
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
      I am a third-year Information Technology student with a strong
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

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
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
        <h3 className="font-semibold text-blue-400 mb-2">
          Education
        </h3>

        <p className="text-slate-400">
          BS Information Technology Specialization with Mobile and Web Applications
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
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
        <h3 className="font-semibold text-blue-400 mb-2">
          Goal
        </h3>

        <p className="text-slate-400">
          Full-Stack Developer
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
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
        <h3 className="font-semibold text-blue-400 mb-2">
          Experience
        </h3>

        <p className="text-slate-400">
          Academic Projects
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
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
        <h3 className="font-semibold text-blue-400 mb-2">
          Technologies
        </h3>

        <p className="text-slate-400">
          React, Java, MySQL, MongoDB
        </p>
      </motion.div>

    </div>
  </motion.div>

{/* Interests & Goals */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <h2 className="text-3xl font-bold text-blue-400 mb-8">
    Interests & Goals
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Interests */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
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
      <h3 className="text-xl font-semibold text-blue-400 mb-4">
        Interests
      </h3>

      <ul className="text-slate-400 space-y-2">
        <li>• Playing Volleyball</li>
        <li>• Watching Movies and TV Shows</li>
        <li>• Reading Books</li>
        <li>• Learning new languages (e.g., Spanish)</li>
        <li>• Listening to Music</li>
        <li>• Exploring New Technologies</li>
      </ul>
    </motion.div>

    {/* Goals */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
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
      <h3 className="text-xl font-semibold text-blue-400 mb-4">
        Career Goals
      </h3>

      <ul className="text-slate-400 space-y-2">
        <li>• Become a Full-Stack Developer</li>
        <li>• Build impactful software solutions</li>
        <li>• Gain industry experience through real-world projects</li>
        <li>• Continuously learn modern technologies</li>
        <li>• Contribute to innovative development teams</li>
        <li>• Grow into a Software Engineer role</li>
      </ul>
    </motion.div>

  </div>
</motion.div>

{/* Fun Facts */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <h2 className="text-3xl font-bold text-blue-400 mb-8">
    Fun Facts About Me
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
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
      <h3 className="text-xl font-semibold text-blue-400 mb-3">
         I Love Building Projects
      </h3>

      <p className="text-slate-400">
        I enjoy turning ideas into working applications, especially using
        Java and React.
      </p>
    </motion.div>

    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
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
      <h3 className="text-xl font-semibold text-blue-400 mb-3">
        Long Coding Sessions
      </h3>

      <p className="text-slate-400">
        I can spend hours debugging and building projects when I'm focused on a goal.
      </p>
    </motion.div>

    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
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
      <h3 className="text-xl font-semibold text-blue-400 mb-3">
        Always Learning
      </h3>

      <p className="text-slate-400">
        I enjoy exploring new technologies, frameworks, and development tools
        to improve my skills.
      </p>
    </motion.div>

    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
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
      <h3 className="text-xl font-semibold text-blue-400 mb-3">
         Goal-Oriented
      </h3>

      <p className="text-slate-400">
        My long-term goal is to become a professional Full-Stack Developer and
        create software that solves real-world problems.
      </p>
    </motion.div>

  </div>
</motion.div>

</div>
          {/* Certifications */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-24"
>
  <h2 className="text-3xl font-bold text-blue-400 mb-8">
    Certifications & Webinars
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {certifications.map((cert, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-8
          hover:border-blue-500
          transition-all
        "
      >
        <h3 className="font-semibold text-2xl mb-4">
          {cert.title}
        </h3>

        <p className="text-slate-400 text-lg">
          {cert.issuer} • {cert.year}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
