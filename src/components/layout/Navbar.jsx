import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-400"
        >
          RG.dev
        </Link>

        <div className="hidden md:flex gap-6 text-slate-300">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>

          <Link to="/projects" className="hover:text-blue-400">
            Projects
          </Link>

          <Link to="/skills" className="hover:text-blue-400">
            Skills
          </Link>

          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>

        <div className="flex gap-4">
          <FaGithub className="cursor-pointer hover:text-blue-400" />
          <FaLinkedin className="cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;