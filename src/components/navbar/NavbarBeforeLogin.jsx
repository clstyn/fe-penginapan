import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "../common/Dropdown";

export const NavbarBeforeLogin = () => {
  const menuNormal = [
    { id: 1, value: "BERANDA", linkTo: "/" },
    { id: 2, value: "PETA", linkTo: "/maps" },
    { id: 3, value: "LOGIN", linkTo: "/login" },
  ];

  return (
    <nav
      role="navigation"
      className="h-16 w-full absolute top-0 bg-c-dark-green"
    >
      <div className="flex h-full items-center justify-between text-white px-3 md:px-8">
        <p className="font-righteous text-lg md:text-2xl">Penginapan.Palihan</p>
        <ul className="hidden md:flex gap-16 font-poppins text-xl">
          <li>
            <Link to={"/"} className="hover:font-semibold mx-2">
              BERANDA
            </Link>
          </li>
          <li>
            <Link to={"/maps"} className="hover:font-semibold mx-2">
              PETA
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="hover:font-semibold mx-2">
              LOGIN
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <div className="cursor-pointer">
            <Dropdown items={menuNormal} />
          </div>
        </div>
      </div>
    </nav>
  );
};
