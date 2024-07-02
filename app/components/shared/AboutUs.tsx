import Placeholder from "/images/placeholder.jpg";

export const AboutUs = () => {
  return (
    <div id="about" className="max-w-screen md:max-w-[85vw] w-full mx-auto">
      <div className="w-full px-[1rem] py-12 md:py-56">
        <div className="grid grid-cols-3 gap-12 md:gap-24 place-items-center">
          <div className="order-last md:order-first col-span-3 md:col-span-1 self-end">
            <img
              className="aspect-square w-full rounded-3xl border border-gray-100 shadow-sm"
              src={Placeholder}
              alt="Table, chair, lamp, painting, and plant in a white room."
            />
          </div>
          <div className="max-w-3xl col-span-3 md:col-span-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};
