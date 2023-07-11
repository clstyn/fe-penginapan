import React from "react";
import { Link } from "react-router-dom";
import Gambar from "../assets/images/image404.png";

export const Page404 = () => {
  return (
    <div className="w-screen min-h-screen bg-c-dark-green text-c-light-cream flex flex-col items-center justify-center font-poppins">
      <img src={Gambar} alt="404" className="my-4 md:my-12 max-md:w-1/2" />
      <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold">
        Halaman tidak ditemukan
      </h1>
      <Link to="/" className="text-lg lg:text-xl my-4 md:my-12 hover:underline">
        Kembali ke Beranda
      </Link>
    </div>
  );
};
