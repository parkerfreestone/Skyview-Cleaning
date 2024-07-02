import { MoveRight } from "lucide-react";
import Banner from "/images/hero.jpg";
import { motion } from "framer-motion";

export const HeroBanner = () => {
  return (
    <div id="home" className="mx-2 lg:mx-6 transition-all">
      <div className="relative w-full h-[70vh] md:h-[90vh] bg-cover rounded-3xl px-[1rem] sm:px-[5rem] pb-[1rem] flex flex-col justify-center gap-6 bg-hero-banner">
        <img
          src={Banner}
          alt="Cleaning Services"
          className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl z-10"></div>
        <motion.div
          initial={{ opacity: 0, marginLeft: 25 }}
          whileInView={{ opacity: 1, marginLeft: 0 }}
          className="mt-auto sm:mt-0 z-20"
        >
          <h1 className="text-white text-5xl sm:text-7xl font-bold">
            Your Expert <br /> Cleaning Services
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, marginLeft: 25 }}
          whileInView={{ opacity: 1, marginLeft: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-auto sm:mt-0 z-20"
        >
          <button className="sm:w-auto w-full px-4 py-3 bg-teal-400 rounded-xl flex items-center justify-center transition-colors font-bold hover:bg-teal-600">
            <span>Schedule A Cleaning</span>
            <MoveRight className="ml-2 h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
