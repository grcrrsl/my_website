import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="w-full px-8 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        {/* Logo */}
<Link
  to="/"
  className="flex items-center"
>
  <span className="text-3xl md:text-4xl font-extrabold text-blue-500">
    RG
  </span>
</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `
                relative
                py-5
                text-sm
                font-medium
                transition-colors
                ${
                  isActive
                    ? "text-blue-500"
                    : "text-slate-300 hover:text-white"
                }
              `
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        w-full
                        h-[2px]
                        bg-blue-500
                      "
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <div className="flex flex-col py-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                  px-6 py-3
                  ${
                    isActive
                      ? "text-blue-500"
                      : "text-slate-300"
                  }
                `
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;