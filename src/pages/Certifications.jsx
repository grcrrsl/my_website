import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2025",
    },
    {
      title: "Java Programming Fundamentals",
      issuer: "SoloLearn",
      year: "2025",
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Coursera",
      year: "2025",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold text-blue-400 mb-4">
            Certifications
          </h1>

          <p className="text-slate-400 mb-12">
            Certifications, courses, and achievements that support my
            continuous learning journey in software development and technology.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {certifications.map((cert, index) => (
              <div
                key={index}
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
                <FaCertificate
                  className="text-blue-400 mb-4"
                  size={30}
                />

                <h2 className="text-xl font-semibold mb-2">
                  {cert.title}
                </h2>

                <p className="text-slate-400">
                  {cert.issuer}
                </p>

                <span className="
                  inline-block
                  mt-4
                  px-3
                  py-1
                  bg-slate-800
                  text-blue-400
                  rounded-full
                  text-sm
                ">
                  {cert.year}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Certifications;