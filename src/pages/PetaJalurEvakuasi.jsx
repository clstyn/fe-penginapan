import React, { useEffect, useContext } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { NavbarBeforeLogin } from "../components/navbar/NavbarBeforeLogin";
import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";

import kompas from "../assets/images/kompas1.png";
import LegendaFix from "../assets/images/LegendaFix.png";
import { AppContext } from "../context/AppContext";

export const PetaJalurEvakuasi = () => {
  useEffect(() => {
    var map = L.map("map").setView([-7.894894, 110.061906], 15);
    var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; " + mapLink + " Contributors",
      maxZoom: 18,
    }).addTo(map);

    var arrowJalurEvakuasi1 = [
      [-7.893493, 110.050933],
      [-7.891501, 110.051737],
      [-7.892252, 110.053222],
      [-7.890398, 110.053942],
      [-7.888863, 110.054682],
      [-7.889563, 110.056415],
      [-7.88681, 110.057172],
      [-7.88227, 110.058437],
      [-7.876217, 110.060197],
      [-7.875662, 110.059485],
    ];

    for (var i = 0; i < arrowJalurEvakuasi1.length - 1; i++) {
      var startPoint = L.latLng(arrowJalurEvakuasi1[i]);
      var endPoint = L.latLng(arrowJalurEvakuasi1[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow1 = `<i class="fa fa-arrow-up" style="color:blue; transform: rotate(${angle}deg); font-size: 24px;"></i>`;

      var arrowIcon1 = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow1,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker1 = L.marker(startPoint, { icon: arrowIcon1 }).addTo(map);
    }

    var arrowJalurEvakuasi2 = [
      [-7.887508, 110.05121],
      [-7.888115, 110.052732],
    ];

    for (var i = 0; i < arrowJalurEvakuasi2.length - 1; i++) {
      var startPoint = L.latLng(arrowJalurEvakuasi2[i]);
      var endPoint = L.latLng(arrowJalurEvakuasi2[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow2 = `<i class="fa fa-arrow-up" style="color:red; transform: rotate(${angle}deg); font-size: 24px;"></i>`;

      var arrowIcon2 = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow2,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker2 = L.marker(startPoint, { icon: arrowIcon2 }).addTo(map);
    }

    var arrowJalurEvakuasi3 = [
      [-7.888115, 110.052732],
      [-7.889563, 110.056415],
    ];

    for (var i = 0; i < arrowJalurEvakuasi3.length - 1; i++) {
      var startPoint = L.latLng(arrowJalurEvakuasi3[i]);
      var endPoint = L.latLng(arrowJalurEvakuasi3[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow3 = `<i class="fa fa-arrow-up" style="color:green; transform: rotate(${angle}deg); font-size: 24px;"></i>`;

      var arrowIcon3 = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow3,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker3 = L.marker(startPoint, { icon: arrowIcon3 }).addTo(map);
    }

    var arrowJalurEvakuasi4 = [
      [-7.896009, 110.054964],
      [-7.8938, 110.05518],
      [-7.891605, 110.055944],
      [-7.889563, 110.056415],
      [-7.88681, 110.057172],
      [-7.88227, 110.058437],
      [-7.876217, 110.060197],
      [-7.875662, 110.059485],
    ];

    for (var i = 0; i < arrowJalurEvakuasi4.length - 1; i++) {
      var startPoint = L.latLng(arrowJalurEvakuasi4[i]);
      var endPoint = L.latLng(arrowJalurEvakuasi4[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow4 = `<i class="fa fa-arrow-up" style="color:LightSeaGreen; transform: rotate(${angle}deg); font-size: 24px;"></i>`;

      var arrowIcon4 = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow4,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker4 = L.marker(startPoint, { icon: arrowIcon4 }).addTo(map);
    }

    var arrowJalurEvakuasi44 = [
      [-7.892134, 110.057111],
      [-7.891605, 110.055944],
    ];

    for (var i = 0; i < arrowJalurEvakuasi44.length - 1; i++) {
      var startPoint = L.latLng(arrowJalurEvakuasi44[i]);
      var endPoint = L.latLng(arrowJalurEvakuasi44[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow44 = `<i class="fa fa-arrow-up" style="color:LightSeaGreen; transform: rotate(${angle}deg); font-size: 24px;"></i>`;

      var arrowIcon44 = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow44,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker44 = L.marker(startPoint, { icon: arrowIcon44 }).addTo(map);
    }

    var arrowJalurEvakuasi5 = [
      [-7.888719, 110.057427],
      [-7.888781, 110.057782],
      [-7.887562, 110.058052],
      [-7.886648, 110.05826],
      [-7.886676, 110.057518],
      [-7.88681, 110.057172],
      [-7.88227, 110.058437],
      [-7.876217, 110.060197],
      [-7.875662, 110.059485],
    ];

    for (var i = 0; i < arrowJalurEvakuasi5.length - 1; i++) {
      var startPoint = L.latLng(arrowJalurEvakuasi5[i]);
      var endPoint = L.latLng(arrowJalurEvakuasi5[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow4a = `<i class="fa fa-arrow-up" style="color:magenta; transform: rotate(${angle}deg); font-size: 24px;"></i>`;

      var arrowIcon4a = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow4a,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker4a = L.marker(startPoint, { icon: arrowIcon4a }).addTo(map);
    }

    var arrowJalurEvakuasi6 = [
      [-7.886522, 110.060113],
      [-7.886648, 110.05826],
      [-7.886676, 110.057518],
      [-7.88681, 110.057172],
      [-7.88227, 110.058437],
      [-7.876217, 110.060197],
      [-7.875662, 110.059485],
    ];

    for (var i = 0; i < arrowJalurEvakuasi6.length - 1; i++) {
      var startPoint = L.latLng(arrowJalurEvakuasi6[i]);
      var endPoint = L.latLng(arrowJalurEvakuasi6[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow4b = `<i class="fa fa-arrow-up" style="color:purple; transform: rotate(${angle}deg); font-size: 24px;"></i>`;

      var arrowIcon4b = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow4b,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker4b = L.marker(startPoint, { icon: arrowIcon4b }).addTo(map);
    }

    var arrowJalurEvakuasi7 = [
      [-7.88682, 110.054194],
      [-7.886783, 110.055457],
      [-7.88681, 110.057172],
      [-7.88227, 110.058437],
      [-7.876217, 110.060197],
      [-7.875662, 110.059485],
    ];

    for (var i = 0; i < arrowJalurEvakuasi7.length - 1; i++) {
      var startPoint = L.latLng(arrowJalurEvakuasi7[i]);
      var endPoint = L.latLng(arrowJalurEvakuasi7[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow4c = `<i class="fa fa-arrow-up" style="color:Tea Green; transform: rotate(${angle}deg); font-size: 24px;"></i>`;

      var arrowIcon4c = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow4c,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker4c = L.marker(startPoint, { icon: arrowIcon4c }).addTo(map);
    }

    var arrowJalurEvakuasi8 = [
      [-7.894288, 110.049782],
      [-7.892874, 110.050447],
      [-7.891304, 110.05108],
      [-7.889736, 110.051593],
      [-7.887855, 110.052186],
    ];

    for (var i = 0; i < arrowJalurEvakuasi8.length - 1; i++) {
      var startPoint = L.latLng(arrowJalurEvakuasi8[i]);
      var endPoint = L.latLng(arrowJalurEvakuasi8[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow4d = `<i class="fa fa-arrow-up" style="color:aqua; transform: rotate(${angle}deg); font-size: 24px;"></i>`;

      var arrowIcon4d = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow4d,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker4d = L.marker(startPoint, { icon: arrowIcon4d }).addTo(map);
    }

    var arrowJalurEvakuasi9 = [
      [-7.895806, 110.053303],
      [-7.894548, 110.053832],
      [-7.89353, 110.054298],
      [-7.892498, 110.053444],
      [-7.891599, 110.053457],
      [-7.890781, 110.053744],
      [-7.889676, 110.054281],
      [-7.888854, 110.05461],
    ];

    for (var i = 0; i < arrowJalurEvakuasi9.length - 1; i++) {
      var startPoint = L.latLng(arrowJalurEvakuasi9[i]);
      var endPoint = L.latLng(arrowJalurEvakuasi9[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow4e = `<i class="fa fa-arrow-up" style="color:DarkGoldenRod; transform: rotate(${angle}deg); font-size: 24px;"></i>`;

      var arrowIcon4e = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow4e,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker4e = L.marker(startPoint, { icon: arrowIcon4e }).addTo(map);
    }

    const htmlIconApotek =
      '<i class="fas fa-briefcase-medical" style="color:#9F000F; font-size: 28px;"></i>';

    var iconApotek = L.divIcon({
      className: "apotek-marker",
      html: htmlIconApotek,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    var hoveredIconUrl1 = "/img/puskesmas2.jpg";
    var hoveredIcon1 = L.icon({
      iconUrl: hoveredIconUrl1,
      iconSize: [130, 130],
      iconAnchor: [12, 12],
      popupAnchor: [12, 12],
    });

    var marker5 = L.marker([-7.890964, 110.0507], { icon: iconApotek }).addTo(
      map
    );
    marker5.on("mouseover", function (event) {
      marker5.setIcon(hoveredIcon1);
      marker5.bindPopup("Apotek Puskesmas 2").openPopup();
    });

    marker5.on("mouseout", function (event) {
      marker5.setIcon(iconApotek);
      marker5.closePopup();
    });

    const htmlIconApotek2 =
      '<i class="fas fa-briefcase-medical" style="color:#9F000F; font-size: 28px;"></i>';
    var iconApotek2 = L.divIcon({
      className: "apotek-marker",
      html: htmlIconApotek,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    var hoveredIconUrl2 = "/img/apotekkeluargasehat.jpg";
    var hoveredIcon2 = L.icon({
      iconUrl: hoveredIconUrl2,
      iconSize: [130, 130],
      iconAnchor: [12, 12],
      popupAnchor: [12, 12],
    });

    var marker6 = L.marker([-7.8869413, 110.0774064], {
      icon: iconApotek2,
    }).addTo(map);

    marker6.on("mouseover", function (event) {
      marker6.setIcon(hoveredIcon2);
      marker6.bindPopup("Apotek Keluarga Sehat").openPopup();
    });

    marker6.on("mouseout", function (event) {
      marker6.setIcon(iconApotek2);
      marker6.closePopup();
    });

    const htmlIconApotek3 =
      '<i class="fas fa-briefcase-medical" style="color:#9F000F; font-size: 28px;"></i>';
    var iconApotek3 = L.divIcon({
      className: "apotek-marker",
      html: htmlIconApotek,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    var hoveredIconUrl3 = "/img/apotekfarmasindo.jpg";
    var hoveredIcon3 = L.icon({
      iconUrl: hoveredIconUrl3,
      iconSize: [130, 130],
      iconAnchor: [12, 12],
      popupAnchor: [12, 12],
    });

    var marker7 = L.marker([-7.8868971, 110.0767331], {
      icon: iconApotek3,
    }).addTo(map);

    marker7.on("mouseover", function (event) {
      marker7.setIcon(hoveredIcon3);
      marker7.bindPopup("Apotek Farmasindo").openPopup();
    });

    marker7.on("mouseout", function (event) {
      marker7.setIcon(iconApotek3);
      marker7.closePopup();
    });

    const htmlIconApotek4 =
      '<i class="fas fa-briefcase-medical" style="color:#9F000F; font-size: 28px;"></i>';
    var iconApotek4 = L.divIcon({
      className: "apotek-marker",
      html: htmlIconApotek4,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
    var hoveredIconUrl4 = "/img/apotekglagahfarma.jpg";
    var hoveredIcon4 = L.icon({
      iconUrl: hoveredIconUrl4,
      iconSize: [130, 130],
      iconAnchor: [12, 12],
      popupAnchor: [12, 12],
    });

    var marker8 = L.marker([-7.9066473, 110.0809878], {
      icon: iconApotek4,
    }).addTo(map);

    marker8.on("mouseover", function (event) {
      marker8.setIcon(hoveredIcon4);
      marker8.bindPopup("Apotek Glagah Farma").openPopup();
    });

    marker8.on("mouseout", function (event) {
      marker8.setIcon(iconApotek4);
      marker8.closePopup();
    });

    const htmlIconApotek5 =
      '<i class="fas fa-briefcase-medical" style="color:#9F000F; font-size: 28px;"></i>';
    var iconApotek5 = L.divIcon({
      className: "apotek-marker",
      html: htmlIconApotek5,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
    var hoveredIconUrl5 = "/img/pratamafarma.jpg";
    var hoveredIcon5 = L.icon({
      iconUrl: hoveredIconUrl5,
      iconSize: [130, 130],
      iconAnchor: [12, 12],
      popupAnchor: [12, 12],
    });

    var marker9 = L.marker([-7.868451, 110.05986], { icon: iconApotek5 }).addTo(
      map
    );

    marker9.on("mouseover", function (event) {
      marker9.setIcon(hoveredIcon5);
      marker9.bindPopup("Apotek Pratama Farma").openPopup();
    });

    marker9.on("mouseout", function (event) {
      marker9.setIcon(iconApotek5);
      marker9.closePopup();
    });

    // TEA

    const htmlIconPointKumpul =
      '<i class="fas fa-map-marker-alt" style="color:red; font-size: 28px;"></i>';
    var titikKumpullIcon = L.divIcon({
      className: "titikkKumpul-marker",
      html: htmlIconPointKumpul,
      iconSize: [20, 20],
      iconAnchor: [12, 12],
    });

    var hoveredIconUrl = "/img/Tea.jpg";
    var hoveredIcon = L.icon({
      iconUrl: hoveredIconUrl,
      iconSize: [130, 130],
      iconAnchor: [12, 12],
      popupAnchor: [12, 12],
    });
    var markertea = L.marker([-7.868777, 110.061252], {
      icon: titikKumpullIcon,
    }).addTo(map);

    markertea.on("mouseover", function (event) {
      markertea.setIcon(hoveredIcon);
      markertea.bindPopup("Titik Evakuasi Akhir").openPopup();
    });

    markertea.on("mouseout", function (event) {
      markertea.setIcon(titikKumpullIcon);
      markertea.closePopup();
    });

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
    <div className="relative flex flex-col w-screen h-screen">
      {!isLogged ? <NavbarBeforeLogin /> : <NavbarAfterLogin />}
      <div className="flex flex-col items-center justify-center mt-24 mb-8 px-4">
        <h2 className="text-center font-righteous text-2xl md:text-3xl 2xl:text-[64px] text-center">
          Peta Rekomendasi Jalur Evakuasi
        </h2>
        <div className="absolute flex items-right justify-right right-8 mt-2 ">
          <img
            className="w-40 h-40 hidden xl:block"
            src={kompas}
            alt="Kompas"
          />
        </div>
        <p className="text-[15px] mt-[34px] italic text-[#9D9797] font-poppins text-center">
          Zoom in atau Zoom out pada peta dengan tanda +- di pojok kiri atau
          dengan kursor untuk menyesuaikan ukuran peta
        </p>
      </div>
      <div id="map" className=" relative mt-2 w-full h-full z-10"></div>
      <img
        src={LegendaFix}
        className="absolute left-2 bottom-2 w-[124px] xl:w-[279.48px] xl:h-[330px] xl:ml-[50px] xl:mt-[450px] object-cover rounded-lg z-20"
      ></img>
    </div>
  );
};
