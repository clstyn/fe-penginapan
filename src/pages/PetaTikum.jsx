import React, { useEffect, useContext } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { NavbarBeforeLogin } from "../components/navbar/NavbarBeforeLogin";
import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";

import { AppContext } from "../context/AppContext";

export const PetaTikum = () => {
  const locations = [
    [
      "<div style='display:flex; flex-direction:column; width: 150px'><h1>SMPN 2 Temon</h1> <img src='img/tikum/Smp 2 temon.jpeg'/></div>",
      -7.875666,
      110.059465,
    ],
    [
      "<div style='display:flex; flex-direction:column; width: 150px'><h1>Bandara</h1> <img src='img/tikum/bandara.jpeg'/></div>",
      -7.895051,
      110.059187,
    ],
    [
      "<div style='display:flex; flex-direction:column; width: 150px'><h1>Balai Desa Hargomulyo</h1> <img src='img/tikum/hargomulyo.jpeg'/></div>",
      -7.868743,
      110.061158,
    ],
    [
      "<div style='display:flex; flex-direction:column; width: 150px'><h1>UPTD Puskesmas Temon 1</h1> <img src='img/tikum/puskes 1.jpeg'/></div>",
      -7.887767,
      110.051721,
    ],
    [
      "<div style='display:flex; flex-direction:column; width: 150px'><h1>UPTD Puskesmas Temon 2</h1> <img src='img/tikum/puskes 2.jpeg'/></div>",
      -7.88752,
      110.051158,
    ],
  ];

  const Rekomendasi = [
    [
      "<div style='display:flex; flex-direction:column; width: 150px'><h1>Kantor Kalurahan Palihan</h1> <img src='img/tikum/balai desa.jpg'/></div>",
      -7.886524,
      110.057314,
    ],
    [
      "<div style='display:flex; flex-direction:column; width: 150px'><h1>Gereja Katolik Santo Carolus Borromeus</h1> <img src='img/tikum/gereja.jpg'/></div>",
      -7.890384,
      110.04908,
    ],
  ];

  useEffect(() => {
    let marker, marker2;
    var map = L.map("map").setView([-7.894894, 110.061906], 15);
    var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; " + mapLink + " Contributors",
      maxZoom: 18,
    }).addTo(map);

    var myIcon = L.icon({
      iconUrl: "./img/tikum/pointer merah.png",
      iconSize: [45, 45], // size of the icon
    });
    var myIcon2 = L.icon({
      iconUrl: "./img/tikum/pointer biru.png",
      iconSize: [30, 45], // size of the icon
    });

    for (var i = 0; i < locations.length; i++) {
      marker = new L.marker([locations[i][1], locations[i][2]], {
        icon: myIcon,
      })
        .bindPopup(locations[i][0])
        .addTo(map);
    }

    for (var i = 0; i < Rekomendasi.length; i++) {
      marker2 = new L.marker([Rekomendasi[i][1], Rekomendasi[i][2]], {
        icon: myIcon2,
      })
        .bindPopup(Rekomendasi[i][0])
        .addTo(map);
    }
    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      login(user);
    }
  }, []);

  const { login, isLogged } = useContext(AppContext);

  return (
    <div className="">
      {!isLogged ? <NavbarBeforeLogin /> : <NavbarAfterLogin />}
      <div className="flex flex-col">
        <div>
          <p className="text-2xl xl:text-5xl mt-[115px] text-center font-semibold font-poppins">
            Peta Interaktif Rekomendasi Titik Kumpul
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
            src="img/Grup 26.png"
            className="absolute inset-0 w-[124px] xl:w-[314px] xl:h-[205px] xl:ml-[315px] xl:mt-[595px] object-cover rounded-lg z-20 max-xl:top-56 max-xl:left-8"
          ></img>
        </div>
      </div>
    </div>
  );
};
