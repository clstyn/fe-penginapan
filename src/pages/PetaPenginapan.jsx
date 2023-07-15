import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";

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
  return (
  <div className="">
    <NavbarAfterLogin />
    <div class="flex flex-col">
      <div><p class="text-3xl mt-[100px] text-center font-semibold font-poppins">Peta Interaktif Daftar Penginapan</p></div>
      <div><p class="text-[15px] mt-[34px] ml-[277px] italic text-[#9D9797] font-poppins">Zoom in atau Zoom out pada peta dengan tanda +- di pojok kiri atau dengan kursor untuk menyesuaikan ukuran peta</p></div>
      <img src="img/image 7.png" class="absolute h-[173.25] w-[189px] mt-[97px] ml-[1355px] "></img>
      <div class="relative">
      <div id="map" className="w-[1026px] h-[505px] mt-[5px] ml-[276px] mr-[276px] rounded-lg z-10"></div>
      <img src="img/Group 24.png" class="absolute inset-0 w-[235.5px] h-[153.75px] ml-[300px] mt-[330px] object-cover rounded-lg z-20"></img>
      </div>
      </div>
    </div>
  

    
  );
};
