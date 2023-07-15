import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";

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
  return (
    <div className="">
    <NavbarAfterLogin />
    <div class="flex flex-col">
      <div><p class="text-3xl mt-[100px] text-center font-semibold font-poppins">Peta Interaktif Rekomendasi Titik Kumpul</p></div>
      <div><p class="text-[15px] mt-[34px] ml-[277px] italic text-[#9D9797] font-poppins">Zoom in atau Zoom out pada peta dengan tanda +- di pojok kiri atau dengan kursor untuk menyesuaikan ukuran peta</p></div>
      <img src="img/image 7.png" class="absolute h-[173.25] w-[189px] mt-[97px] ml-[1355px] "></img>
      <div class="relative">
      <div id="map" className="w-[1026px] h-[505px] mt-[5px] ml-[276px] mr-[276px] rounded-lg z-10"></div>
      <img src="img/Grup 26.png" class="absolute inset-0 w-[235.5px] h-[153.75px] ml-[300px] mt-[330px] object-cover rounded-lg z-20"></img>
      </div>
      </div>
    </div>
  );
};
