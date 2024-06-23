import { Calendar, GanttChart, Menu, MenuSquare, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type NavLink = {
  text: string;
  link: string;
};

const navLinks: NavLink[] = [
  {
    text: "Home",
    link: "#hero",
  },
  {
    text: "Services",
    link: "#services",
  },
  {
    text: "About Us",
    link: "#about",
  },
];

const threshold = 350;

export const TopNavigation = () => {
  const [topNavContainerClasses, setTopNavContainerClasses] =
    useState("py-6 bg-white");
  const [topNavButtonClasses, setTopNavButtonClasses] = useState(
    "text-gray-900 bg-teal-400 hover:bg-teal-600"
  );
  const [topNavLinkClasses, setTopNavLinkClasses] = useState(
    "text-gray-500 hover:text-gray-900"
  );

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setTopNavContainerClasses("py-3 bg-teal-400");
        setTopNavButtonClasses("text-gray-50 bg-gray-900 hover:bg-gray-600");
        setTopNavLinkClasses("text-gray-900 hover:text-gray-500");
      } else {
        setTopNavContainerClasses("py-6 px-6 bg-white mx-0");
        setTopNavButtonClasses("text-gray-900 bg-teal-400 hover:bg-teal-600");
        setTopNavLinkClasses("text-gray-500 hover:text-gray-900");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileNavOpen]);

  return (
    <>
      <nav
        className={`${topNavContainerClasses} px-6 lg:px-12 transition-all top-0 sticky z-50`}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 flex gap-12 items-center justify-start">
            <p className="text-2xl tracking-wide font-bold text-gray-900 text-center md:text-left">
              Skyview Cleaning
            </p>

            <div className="hidden flex-1 md:flex items-end justify-start gap-6">
              {navLinks.map(({ text, link }) => (
                <a
                  key={text}
                  href={link}
                  className={`${topNavLinkClasses} text-lg transition-colors`}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="md:hidden p-3 bg-gray-100 rounded-lg text-gray-900"
          >
            {isMobileNavOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <GanttChart className="h-5 w-5" />
            )}
          </button>

          <button
            className={`${topNavButtonClasses} hidden px-4 py-2 rounded-md md:flex items-center justify-center transition-colors`}
          >
            <Calendar className="hidden md:flex mr-2 h-4 w-4" />
            <span className="inline-block md:hidden">Schedule</span>
            <span className="hidden md:inline-block">Schedule A Cleaning</span>
          </button>
        </div>

        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isMobileNavOpen ? "0%" : "-100%" }}
          transition={{ type: "tween", ease: "easeInOut" }}
          className="fixed top-0 left-0 w-screen h-screen bg-white -z-10 flex flex-col items-center justify-start pt-20 p-6"
        >
          {navLinks.map(({ text, link }) => (
            <a
              key={text}
              href={link}
              className={`${topNavLinkClasses} text-lg transition-colors w-full py-6 border-t`}
              onClick={() => setIsMobileNavOpen(false)}
            >
              {text}
            </a>
          ))}
          <button
            className={`${topNavButtonClasses} px-4 py-2 rounded-md mt-4`}
            onClick={() => setIsMobileNavOpen(false)}
          >
            <span>Schedule A Cleaning</span>
          </button>
        </motion.div>
      </nav>
    </>
  );
};
