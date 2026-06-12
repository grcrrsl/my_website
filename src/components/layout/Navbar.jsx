import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin , FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400"
        >
          RG.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-slate-300">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/skills" className="hover:text-blue-400">Skills</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://github.com/grcrrsl"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="cursor-pointer hover:text-blue-400" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="cursor-pointer hover:text-blue-400" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col p-6 gap-4 text-slate-300">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              About
            </Link>

            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              Projects
            </Link>

            <Link
              to="/skills"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              Skills
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              Contact
            </Link>

            <div className="flex gap-4 pt-4 border-t border-slate-800">
              <a
                href="https://github.com/grcrrsl"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-xl hover:text-blue-400" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-xl hover:text-blue-400" />
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;