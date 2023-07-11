import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
    <div className="flex w-screen h-screen">
      <div id="map" className="w-full h-full"></div>
    </div>
  );
};
