import { Calendar, GanttChart, Menu, MenuSquare } from "lucide-react";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setTopNavContainerClasses("py-3 bg-teal-400");
        setTopNavButtonClasses("text-gray-50 bg-gray-900 hover:bg-gray-600");
        setTopNavLinkClasses("text-gray-900 hover:text-gray-500");
      } else {
        setTopNavContainerClasses("py-6 bg-white");
        setTopNavButtonClasses("text-gray-900 bg-teal-400 hover:bg-teal-600");
        setTopNavLinkClasses("text-gray-500 hover:text-gray-900");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return (
    <nav
      className={`${topNavContainerClasses} px-4 lg:px-12 transition-all sticky top-0`}
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

        <div className="md:hidden p-3 bg-gray-100 rounded-lg text-gray-900">
          <GanttChart className="h-5 w-5" />
        </div>

        <button
          className={`${topNavButtonClasses} hidden px-4 py-2 rounded-md md:flex items-center justify-center transition-colors`}
        >
          <Calendar className="hidden md:flex mr-2 h-4 w-4" />
          <span className="inline-block md:hidden">Schedule</span>
          <span className="hidden md:inline-block">Schedule A Cleaning</span>
        </button>
      </div>
    </nav>
  );
};
