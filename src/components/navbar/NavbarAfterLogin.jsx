import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import Dropdown from "../common/Dropdown";
import { AppContext } from "../../context/AppContext";

import { HiMenu, HiX } from "react-icons/hi";

export const NavbarAfterLogin = () => {
  const [navbarPhoneOpen, setNavbarPhoneOpen] = useState(false);
  const [menu, setMenu] = useState();

  const [isAdmin, setIsAdmin] = useState(false);
  const { logout, userData } = useContext(AppContext);

  const toggleNavbarPhone = () => {
    setNavbarPhoneOpen(!navbarPhoneOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    logout(userData);
    toast.success("Anda keluar");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      if (JSON.parse(localStorage.getItem("user")).role === "admin") {
        setIsAdmin(true);
      }
    }
  }, []);

  const menuUser = [
    { id: 1, value: "BERANDA", linkTo: "/" },
    { id: 2, value: "PETA PENGINAPAN", linkTo: "/maps-penginapan" },
    { id: 3, value: "PETA EVAKUASI", linkTo: "/maps-rekomendasi-evakuasi" },
    { id: 4, value: "PETA TITIK KUMPUL", linkTo: "/maps-rekomendasi-tikum" },
    { id: 5, value: "PROPERTI SAYA", linkTo: "/my-property" },
    { id: 6, value: "LOGOUT", linkTo: "/" },
  ];

  const menuAdmin = [
    { id: 1, value: "BERANDA", linkTo: "/" },
    { id: 2, value: "PETA PENGINAPAN", linkTo: "/maps-penginapan" },
    { id: 3, value: "PETA EVAKUASI", linkTo: "/maps-rekomendasi-evakuasi" },
    { id: 4, value: "PETA TITIK KUMPUL", linkTo: "/maps-rekomendasi-tikum" },
    { id: 5, value: "DAFTAR PENGGUNA", linkTo: "/admin" },
    { id: 6, value: "LOGOUT", linkTo: "/" },
  ];

  const menuPeta = [
    { id: 1, value: "Peta Penginapan", linkTo: "/maps-penginapan" },
    { id: 2, value: "Peta Evakuasi", linkTo: "/maps-rekomendasi-evakuasi" },
    { id: 3, value: "Peta Titik Kumpul", linkTo: "/maps-rekomendasi-tikum" },
  ];

  useEffect(() => {
    if (!isAdmin) {
      setMenu(menuUser);
    } else {
      setMenu(menuAdmin);
    }
  }, []);

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
            <Link
              to={"/"}
              onClick={handleLogout}
              className="hover:font-semibold mx-2"
            >
              LOGOUT
            </Link>
          </li>
        </ul>
        {/* <div className="md:hidden">
          <div className="cursor-pointer">
            {!isAdmin ? (
              <Dropdown items={menuUser} />
            ) : (
              <Dropdown items={menuAdmin} />
            )}
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
            {menu?.map((item) => {
              if (item.value === "LOGOUT") {
                return (
                  <Link
                    key={item.id}
                    className="font-poppins py-4 hover:font-bold"
                    to={item.linkTo}
                    onClick={handleLogout}
                  >
                    {item.value}
                  </Link>
                );
              } else {
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
              }
            })}
          </div>
        ) : null}
      </div>
    </nav>
  );
};
