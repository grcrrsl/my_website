import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              RG.dev
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Aspiring Full-Stack Developer passionate about building
              desktop and web applications with Java, React, and modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>

              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>

              <Link to="/projects" className="hover:text-blue-400 transition">
                Projects
              </Link>

              <Link to="/skills" className="hover:text-blue-400 transition">
                Skills
              </Link>

              <Link to="/resume" className="hover:text-blue-400 transition">
                Resume
              </Link>

              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/grcrrsl"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  p-3
                  rounded-xl
                  hover:border-blue-500
                  hover:text-blue-400
                  transition-all
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="YOUR_LINKEDIN_LINK"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  p-3
                  rounded-xl
                  hover:border-blue-500
                  hover:text-blue-400
                  transition-all
                "
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="YOUR_FACEBOOK_LINK"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  p-3
                  rounded-xl
                  hover:border-blue-500
                  hover:text-blue-400
                  transition-all
                "
              >
                <FaFacebook size={22} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Roselle Garcera • Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;