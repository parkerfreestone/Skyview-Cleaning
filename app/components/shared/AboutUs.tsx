import { motion, useInView } from "framer-motion";
import Placeholder from "/images/placeholder.jpg";
import { useRef } from "react";

export const AboutUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      id="about"
      className="max-w-screen md:max-w-[85vw] w-full mx-auto"
    >
      <div className="w-full px-[1rem] py-12 md:py-56">
        <div className="grid grid-cols-3 gap-12 md:gap-24 place-items-center">
          {/* Animated Image */}
          <motion.div
            className="order-last md:order-first col-span-3 md:col-span-1 self-end"
            initial={{ x: -100, rotate: -10, opacity: 0 }}
            animate={inView ? { x: 0, rotate: 0, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1,
            }}
          >
            <img
              className="aspect-square w-full rounded-3xl border border-gray-100 shadow-sm"
              src={Placeholder}
              alt="Table, chair, lamp, painting, and plant in a white room."
            />
          </motion.div>

          {/* Animated Text Content */}
          <motion.div
            className="max-w-3xl col-span-3 md:col-span-2"
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
          >
            <span className="text-gray-400 text-lg md:text-xl">ABOUT</span>
            <h2 className="text-gray-900 font-black text-3xl md:text-5xl mt-2">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mt-6 md:mt-12">
              Our company is dedicated to providing top-notch cleaning services
              that go beyond the ordinary. We pride ourselves on being
              detail-oriented and efficiently powered, delivering an exceptional
              cleaning experience every time. Servicing the Northern Utah area,
              our range of services includes pressure washing, gutter cleaning,
              window washing, housekeeping, trash removal, and pre and post
              construction cleaning. Trust us to handle your cleaning needs with
              professionalism and care.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
