import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5">
      <div className="max-w-6xl mx-auto">

        {/* Navbar Header */}
        <div className="flex items-center justify-between">

          {/* Name */}
          <h1 className="text-2xl font-bold">
            MD Arsalan Alam
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  transition-colors
                  duration-300
                  hover:text-blue-400
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="
              md:hidden
              mt-4
              border-t
              border-gray-800
              pt-5
              pb-2
            "
          >
            <div className="flex flex-col items-center gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="
                    bg-blue-500
                    rounded-[5px]
                    px-6
                    py-2
                    min-w-32
                    text-center
                    transition-all
                    duration-300
                    hover:bg-blue-600
                    hover:-translate-y-1
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;