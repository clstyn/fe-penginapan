import React, { useState } from "react";
import { Link } from "react-router-dom";

import Dropdown from "../common/Dropdown";
import { HiMenu, HiX } from "react-icons/hi";

export const NavbarBeforeLogin = () => {
  const [navbarPhoneOpen, setNavbarPhoneOpen] = useState(false);

  const toggleNavbarPhone = () => {
    setNavbarPhoneOpen(!navbarPhoneOpen);
  };

  const menuNormal = [
    { id: 1, value: "BERANDA", linkTo: "/" },
    { id: 2, value: "PETA PENGINAPAN", linkTo: "/maps-penginapan" },
    { id: 3, value: "PETA EVAKUASI", linkTo: "/maps-rekomendasi-evakuasi" },
    { id: 4, value: "PETA TITIK KUMPUL", linkTo: "/maps-rekomendasi-tikum" },
    { id: 5, value: "LOGIN", linkTo: "/login" },
  ];

  const menuPeta = [
    { id: 1, value: "Peta Penginapan", linkTo: "/maps-penginapan" },
    { id: 2, value: "Peta Evakuasi", linkTo: "/maps-rekomendasi-evakuasi" },
    { id: 3, value: "Peta Titik Kumpul", linkTo: "/maps-rekomendasi-tikum" },
  ];

  return (
    <nav
      role="navigation"
      className="h-16 w-full fixed top-0 z-40 bg-c-dark-green"
    >
      <div className="flex h-full items-center justify-between text-white px-3 md:px-8">
        <Link to="/" className="font-righteous text-lg md:text-2xl">
          Stay in Palihan
        </Link>
        <ul className="hidden md:flex gap-16 font-poppins text-xl">
          <li>
            <Link to={"/"} className="hover:font-semibold mx-2">
              BERANDA
            </Link>
          </li>
          <li>
            <Dropdown
              judul="PETA"
              items={menuPeta}
              className="hover:font-semibold mx-2"
            >
              PETA
            </Dropdown>
          </li>
          <li>
            <Link to={"/login"} className="hover:font-semibold mx-2">
              LOGIN
            </Link>
          </li>
        </ul>
        {/* <div className="md:hidden">
          <div className="cursor-pointer">
            <Dropdown items={menuNormal} />
          </div>
        </div> */}
        <div
          className={`md:hidden transition-all text-2xl relative navbar-phone-icon ${
            navbarPhoneOpen ? "open" : ""
          }`}
          onClick={toggleNavbarPhone}
        >
          {navbarPhoneOpen ? <HiX /> : <HiMenu />}
        </div>
        {navbarPhoneOpen ? (
          <div
            className={`absolute top-0 left-0 -z-10 w-full max-h-fit flex flex-col items-center justify-center bg-c-dark-green text-white pt-20 pb-4 navbar-menu ${
              navbarPhoneOpen ? "open" : "closed"
            }`}
          >
            {menuNormal.map((item) => {
              return (
                <Link
                  key={item.id}
                  className="font-poppins py-4 hover:font-bold"
                  to={item.linkTo}
                  onClick={() => setNavbarPhoneOpen(false)}
                >
                  {item.value}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </nav>
  );
};
