import {
  Construction,
  Droplet,
  Layers,
  Lamp,
  Trash,
  Waves,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    name: "Power Washing",
    sub: "Deep clean surfaces",
    icon: <Droplet className="h-8 w-8 text-inherit mb-6" />,
  },
  {
    name: "Gutter Cleaning",
    sub: "Clear blocked gutters",
    icon: <Layers className="h-8 w-8 text-inherit mb-6" />,
  },
  {
    name: "Window Washing",
    sub: "Sparkling windows",
    icon: <Waves className="h-8 w-8 text-inherit mb-6" />,
  },
  {
    name: "Housekeeping",
    sub: "Tidy living spaces",
    icon: <Lamp className="h-8 w-8 text-inherit mb-6" />,
  },
  {
    name: "Trash Removal",
    sub: "Junk and waste",
    icon: <Trash className="h-8 w-8 text-inherit mb-6" />,
  },
  {
    name: "Construction",
    sub: "Pre & Post Site cleanup",
    icon: <Construction className="h-8 w-8 text-inherit mb-6" />,
  },
];
export const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const serviceVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <div
      ref={ref}
      id="services"
      className="mx-2 lg:mx-6 transition-all bg-gray-50 rounded-3xl"
    >
      <div className="max-w-[80vw] mx-auto py-12 md:py-56">
        <div className="grid grid-cols-1 xl:grid-cols-6 gap-12 md:gap-24">
          {/* Animated Left Text */}
          <motion.div
            className="col-span-6 xl:col-span-2"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <span className="text-gray-400 text-lg md:text-xl">SERVICES</span>
            <h2 className="text-gray-900 font-black text-3xl md:text-5xl mt-2">
              Explore Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mt-6 md:mt-12">
              We'll help keep your property in top shape! We offer pressure
              washing for deep cleaning, gutter cleaning to clear blockages, and
              window washing for sparkling results. Our housekeeping maintains
              tidy spaces, while trash removal handles all your waste. Our pre
              and post construction cleaning ensures a spotless site.
            </p>
            <p className="text-lg md:text-xl text-gray-500 mt-6">
              Discover the difference of our cleaning services today!
            </p>
          </motion.div>

          {/* Animated Services */}
          <div className="col-span-6 xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map(({ name, sub, icon }, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={serviceVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <span className="text-gray-400">{icon}</span>
                <h3 className="text-gray-900 font-bold text-xl md:text-3xl">
                  {name}
                </h3>
                <p className="text-lg md:text-xl text-gray-500">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
