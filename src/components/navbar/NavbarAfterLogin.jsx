import React, { useState } from "react";
import { Link } from "react-router-dom";

import Dropdown from "../common/Dropdown";

export const NavbarAfterLogin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const menuUser = [
    { id: 1, value: "BERANDA", linkTo: "/" },
    { id: 2, value: "PETA PENGINAPAN", linkTo: "/maps-penginapan" },
    { id: 3, value: "PETA EVAKUASI", linkTo: "/maps-rekomendasi-evakuasi" },
    { id: 4, value: "PETA TITIK KUMPUL", linkTo: "/maps-rekomendasi-tikum" },
    { id: 5, value: "PROPERTI SAYA", linkTo: "/my-property" },
    { id: 6, value: "LOGOUT", linkTo: "/logout" },
  ];

  const menuAdmin = [
    { id: 1, value: "BERANDA", linkTo: "/" },
    { id: 2, value: "PETA PENGINAPAN", linkTo: "/maps-penginapan" },
    { id: 3, value: "PETA EVAKUASI", linkTo: "/maps-rekomendasi-evakuasi" },
    { id: 4, value: "PETA TITIK KUMPUL", linkTo: "/maps-rekomendasi-tikum" },
    { id: 5, value: "DAFTAR PENGGUNA", linkTo: "/admin" },
    { id: 6, value: "LOGOUT", linkTo: "/logout" },
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
          {!isAdmin ? (
            <li>
              <Link to={"/my-property"} className="hover:font-semibold mx-2">
                PROPERTI SAYA
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/admin"} className="hover:font-semibold mx-2">
                DAFTAR PENGGUNA
              </Link>
            </li>
          )}
          <li>
            <Link to={"/"} className="hover:font-semibold mx-2">
              LOGOUT
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <div className="cursor-pointer">
            {!isAdmin ? (
              <Dropdown items={menuUser} />
            ) : (
              <Dropdown items={menuAdmin} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
