import React, { useEffect, useContext } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { NavbarBeforeLogin } from "../components/navbar/NavbarBeforeLogin";
import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";

import { AppContext } from "../context/AppContext";

export const PetaPenginapan = () => {
  const locations = [
    [
      "<div style='display:flex; flex-direction:column; width: 150px'><h1>Rifda Kos</h1> <img src='img/rifda kos.jpg'/></div>",
      -7.891401,
      110.052031,
    ],
    [
      "<div style='display:flex; flex-direction:column; width: 150px'><h1>Kos Bu Jumadi</h1> <img src='img/kos bu jumadi.jpeg'/></div>",
      -7.891683,
      110.052852,
    ],
    [
      "<div style='display:flex; flex-direction:column; width: 150px'><h1>Kos Pak Kusmono</h1> <img src='img/kusmono.jpg'/></div>",
      -7.896528,
      110.054949,
    ],
  ];

  useEffect(() => {
    var map = L.map("map").setView([-7.894894, 110.061906], 15);
    var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; " + mapLink + " Contributors",
      maxZoom: 18,
    }).addTo(map);

    var myIcon = L.icon({
      iconUrl: "/img/hr.png",
      iconSize: [30, 35], // size of the icon
    });

    for (var i = 0; i < locations.length; i++) {
      var marker = new L.marker([locations[i][1], locations[i][2]], {
        icon: myIcon,
      })
        .bindPopup(locations[i][0])
        .addTo(map);
    }
    return () => {
      map.remove();
    };
  }, []);

  const { login, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      login(user);
    }
  }, []);

  return (
    <div className="">
      {!isLogged ? <NavbarBeforeLogin /> : <NavbarAfterLogin />}
      <div className="flex flex-col justify-center">
        <div>
          <p className="text-2xl xl:text-5xl mt-[115px] text-center font-semibold font-poppins">
            Peta Interaktif Daftar Penginapan
          </p>
        </div>
        <div>
          <p className="text-sm xl:text-[15px] mt-8 xl:mt-[50px] mx-8 xl:ml-[277px] italic text-[#9D9797] font-poppins text-center">
            Zoom in atau Zoom out pada peta dengan tanda +- di pojok kiri atau
            dengan kursor untuk menyesuaikan ukuran peta
          </p>
        </div>
        <img
          src="img/image 7.png"
          className="absolute h-[198px] w-[216px] mt-[125px] ml-[2030px] hidden xl:block"
        ></img>
        <div className="relative">
          <div
            id="map"
            className="w-[320.15px] h-[350.8px] xl:w-[1692.6px] xl:h-[830.8px] mt-[5px] xl:ml-[276px] xl:mr-[276px] rounded-lg z-10 mx-auto relative"
          ></div>
          <img
            src="img/Group 24.png"
            className="absolute inset-0 w-[124px] xl:w-[314px] xl:h-[205px] xl:ml-[315px] xl:mt-[595px] object-cover rounded-lg z-20 max-xl:top-56 max-xl:left-8"
          ></img>
        </div>
      </div>
    </div>
  );
};
