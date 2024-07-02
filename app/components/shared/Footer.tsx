import RyfttLogo from "/images/ryftt-black.svg";

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-2 md:mx-6 p-4">
      <p>All Rights Reserved {new Date().getFullYear()} © Skyview Cleaning</p>
      <img className="h-10" src={RyfttLogo} />
    </div>
  );
};
