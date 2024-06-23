import {
  Construction,
  Droplet,
  Home,
  Lamp,
  Layers,
  Trash,
  Waves,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Power Washing",
    sub: "Deep clean surfaces",
    icon: <Droplet className="h-8 w-8 text-gray-600 mb-6" />,
  },
  {
    name: "Gutter cleaning",
    sub: "Clear blocked gutters",
    icon: <Layers className="h-8 w-8 text-gray-600 mb-6" />,
  },
  {
    name: "Window Washing",
    sub: "Sparkling windows",
    icon: <Waves className="h-8 w-8 text-gray-600 mb-6" />,
  },
  {
    name: "Housekeeping",
    sub: "Tidy living spaces",
    icon: <Lamp className="h-8 w-8 text-gray-600 mb-6" />,
  },
  {
    name: "Trash Removal",
    sub: "Junk and waste",
    icon: <Trash className="h-8 w-8 text-gray-600 mb-6" />,
  },
  {
    name: "Construction",
    sub: "Pre & Post Site cleanup",
    icon: <Construction className="h-8 w-8 text-gray-600 mb-6" />,
  },
];

export const Services = () => {
  return (
    <div className="max-w-[80vw] mx-auto py-24">
      <div className="grid grid-cols-6 gap-24">
        <div className="col-span-2">
          <span className="text-gray-400 text-xl">SERVICES</span>
          <h2 className="text-gray-900 font-black text-5xl mt-2">
            Explore Our Services
          </h2>
          <p className="text-xl text-gray-500 mt-12">
            We'll help keep your property in top shape! We offer pressure
            washing for deep cleaning, gutter cleaning to clear blockages, and
            window washing for sparkling results. Our housekeeping maintains
            tidy spaces, while trash removal handles all your waste. Our pre and
            post construction cleaning ensures a spotless site
          </p>
          <p className="text-xl text-gray-500 mt-6">
            Discover the difference of our cleaning services today!
          </p>
        </div>
        <div className="col-span-4 grid grid-cols-3 gap-6">
          {services.map(({ name, sub, icon }, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                border: "1px solid rgb(243 244 246 / var(--tw-bg-opacity))",
              }}
              className="p-6 bg-gray-50 rounded-xl"
            >
              {icon}
              <h3 className="text-gray-900 font-bold text-3xl">{name}</h3>
              <p className="text-xl text-gray-500">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
