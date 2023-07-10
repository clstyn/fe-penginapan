import React, { useState } from "react";
import { Link } from "react-router-dom";

import Dropdown from "../common/Dropdown";

export const NavbarBeforeLogin = () => {
  const menuUser = [
    { id: 1, value: "BERANDA", linkTo: "/" },
    { id: 2, value: "PETA", linkTo: "/maps" },
    { id: 3, value: "PROPERTI SAYA", linkTo: "/my-property" },
    { id: 4, value: "LOGOUT", linkTo: "/logout" },
  ];

  const menuAdmin = [
    { id: 1, value: "BERANDA", linkTo: "/" },
    { id: 2, value: "PETA", linkTo: "/maps" },
    { id: 3, value: "DAFTAR PENGGUNA", linkTo: "/admin" },
    { id: 4, value: "LOGOUT", linkTo: "/logout" },
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
            <Link to={"/"}>BERANDA</Link>
          </li>
          <li>
            <Link to={"/maps"}>PETA</Link>
          </li>
          <li>
            <Link to={"/login"}>LOGIN</Link>
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
