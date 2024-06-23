import { ArrowRight, MoveRight } from "lucide-react";
import Banner from "../../../public/images/ai-cleaning-banner.webp";
import { motion } from "framer-motion";

//bg-hero-banner bg-no-repeat

export const HeroBanner = () => {
  return (
    <div className="mx-2 lg:mx-6 transition-all">
      <div className="w-full h-[70vh] md:h-[90vh] bg-gray-900 bg-cover rounded-3xl px-[1rem] sm:px-[5rem] pb-[1rem] flex flex-col justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, marginLeft: 25 }}
          whileInView={{ opacity: 1, marginLeft: 0 }}
          className="mt-auto sm:mt-0"
        >
          <h1 className="text-white text-5xl sm:text-7xl font-bold">
            Your Expert <br /> Cleaning Services
          </h1>
        </motion.div>
        <div className="mt-auto sm:mt-0">
          <button className="sm:w-auto w-full px-4 py-3 bg-teal-400 rounded-xl flex items-center justify-center transition-colors font-bold hover:bg-teal-600">
            <span>Schedule A Cleaning</span>
            <MoveRight className="ml-2 h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
