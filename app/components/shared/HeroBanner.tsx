import { ArrowRight, MoveRight } from "lucide-react";
import Banner from "../../../public/images/ai-cleaning-banner.webp";

//bg-hero-banner bg-no-repeat

export const HeroBanner = () => {
  return (
    <div className="mx-2 lg:mx-6 h-[200vh] transition-all">
      <div className="w-full h-[60vh] bg-gray-900 bg-cover rounded-3xl px-[1rem] sm:px-[5rem] pb-[1rem] flex flex-col justify-center gap-6">
        <h1 className="text-white text-6xl sm:text-7xl font-bold mt-auto sm:mt-0">
          Your Expert <br /> Cleaning Services
        </h1>
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
