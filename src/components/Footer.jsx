import React from "react";

export const Footer = () => {
  return (
    <footer className="h-36 md:h-48 bg-c-dark-green font-righteous text-c-light-cream">
      <div className="flex flex-col w-full h-full justify-center max-sm:items-center gap-8 md:gap-16 px-4 md:px-16">
        <div className="text-xl md:text-5xl self-end">Enjoy your stay!</div>
        <div className="text-sm md:text-2xl self-start">
          KKN Teman Temon &copy; 2023
        </div>
      </div>
    </footer>
  );
};
