import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navRef = useRef(null);
  const linkRefs = useRef({});

  const handleMouseMove = (e) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();

      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="nav-main w-full z-50"
      ref={navRef}
      onMouseMove={handleMouseMove}
    >
     <div className="bg-amber-0 w-full px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold relative z-10"
          onClick={closeMenu}
        >
          allstar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 z-50 mx-4">
          {["work", "about", "contact", "blog"].map((item) => (
            <div
              key={item}
              className="relative overflow-hidden"
              ref={(el) => (linkRefs.current[item] = el)}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="hover:text-gray-600 transition-colors capitalize px-2 py-1 relative z-10 block"
                onClick={closeMenu}
                onMouseEnter={() => setHoveredLink(item)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span
                  className={
                    hoveredLink === item ? "opacity-0" : "opacity-100"
                  }
                >
                  {item}
                </span>

                {hoveredLink === item && (
                  <motion.span
                    className="absolute inset-[-5] blur-[0.8px] opacity-100"
                    initial={{
                      opacity: 0,
                      x:
                        mousePosition.x -
                        (linkRefs.current[item]?.getBoundingClientRect().left ||
                          0) -
                        20,
                      y:
                        mousePosition.y -
                        (linkRefs.current[item]?.getBoundingClientRect().top ||
                          0) -
                        10,
                    }}
                    animate={{
                      x:
                        mousePosition.x -
                        (linkRefs.current[item]?.getBoundingClientRect().left ||
                          0) -
                        20,
                      y:
                        mousePosition.y -
                        (linkRefs.current[item]?.getBoundingClientRect().top ||
                          0) -
                        10,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 300,
                      mass: 0.5,
                    }}
                  >
                    {item}
                  </motion.span>
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* Instagram */}
        <div className="hidden md:block z-50">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors px-3 py-1 block"
          >
            Instagram
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="block md:hidden focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col space-y-1.5">
            <span
              className={`block h-0.5 bg-black transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>

            <span
              className={`block h-0.5 bg-black transition-all ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            <span
              className={`block h-0.5 bg-black transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-8"
            onClick={closeMenu}
          >
            <motion.nav
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="flex flex-col items-center gap-8 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {["work", "about", "contact", "blog"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="text-3xl font-medium capitalize"
                >
                  {item}
                </Link>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}