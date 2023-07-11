import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@fortawesome/fontawesome-free/css/all.css";

export const PetaJalurEvakuasi = () => {
  var arrowDataCongot = [
    [-7.905835, 110.050465],
    [-7.903877, 110.044963],
    [-7.901817, 110.038839],
    [-7.895628, 110.034905],
    [-7.89269, 110.036129],
    [-7.889214, 110.036134],
    [-7.884965, 110.040389],
    [-7.880806, 110.038839],
    [-7.901817, 110.0433],
    [-7.88339, 110.047729],
    [-7.8966031, 110.0604628],
  ];

  useEffect(() => {
    var map = L.map("map").setView([-7.894894, 110.061906], 15);
    var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; " + mapLink + " Contributors",
      maxZoom: 18,
    }).addTo(map);

    for (var i = 0; i < arrowDataCongot.length - 1; i++) {
      var startPoint = L.latLng(arrowDataCongot[i]);
      var endPoint = L.latLng(arrowDataCongot[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow = `<i class="fa fa-arrow-up" style="color:red; transform: rotate(${angle}deg); font-size: 15px;"></i>`;

      var arrowIcon = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker = L.marker(startPoint, { icon: arrowIcon }).addTo(map);
    }

    var arrowDataPalihan = [
      [-7.899413, 110.055258],
      [-7.888956, 110.056888],
      [-7.885994, 110.057428],
      [-7.876217, 110.060197],
      [-7.868353, 110.059983],
    ];

    for (var i = 0; i < arrowDataPalihan.length - 1; i++) {
      var startPoint = L.latLng(arrowDataPalihan[i]);
      var endPoint = L.latLng(arrowDataPalihan[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow1 = `<i class="fa fa-arrow-up" style="color:blue; transform: rotate(${angle}deg); font-size: 15px;"></i>`;

      var arrowIcon1 = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow1,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker1 = L.marker(startPoint, { icon: arrowIcon1 }).addTo(map);
    }

    var arrowDataPalihan2 = [
      [-7.892252, 110.053222],
      [-7.890398, 110.053942],
      [-7.888863, 110.054682],
      [-7.888956, 110.056888],
    ];

    for (var i = 0; i < arrowDataPalihan2.length - 1; i++) {
      var startPoint = L.latLng(arrowDataPalihan2[i]);
      var endPoint = L.latLng(arrowDataPalihan2[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow2 = `<i class="fa fa-arrow-up" style="color:DeepPink; transform: rotate(${angle}deg); font-size: 15px;"></i>`;

      var arrowIcon2 = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow2,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker2 = L.marker(startPoint, { icon: arrowIcon2 }).addTo(map);
    }

    var arrowDataPalihan3 = [
      [-7.895068, 110.05627],
      [-7.888956, 110.056888],
    ];

    for (var i = 0; i < arrowDataPalihan3.length - 1; i++) {
      var startPoint = L.latLng(arrowDataPalihan3[i]);
      var endPoint = L.latLng(arrowDataPalihan3[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow3 = `<i class="fa fa-arrow-up" style="color:LimeGreen; transform: rotate(${angle}deg); font-size: 15px;"></i>`;

      var arrowIcon3 = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow3,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker3 = L.marker(startPoint, { icon: arrowIcon3 }).addTo(map);
    }

    var arrowDataPalihan4 = [
      [-7.890964, 110.0507],
      [-7.888956, 110.056888],
    ];

    for (var i = 0; i < arrowDataPalihan4.length - 1; i++) {
      var startPoint = L.latLng(arrowDataPalihan4[i]);
      var endPoint = L.latLng(arrowDataPalihan4[i + 1]);

      var angle =
        (Math.atan2(
          endPoint.lng - startPoint.lng,
          endPoint.lat - startPoint.lat
        ) *
          180) /
        Math.PI;
      const htmlIconArrow4 = `<i class="fa fa-arrow-up" style="color:LimeGreen; transform: rotate(${angle}deg); font-size: 15px;"></i>`;

      var arrowIcon4 = L.divIcon({
        className: "arrow-marker",
        html: htmlIconArrow4,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      var marker4 = L.marker(startPoint, { icon: arrowIcon4 }).addTo(map);
    }

    const htmlIconApotek =
      '<i class="fas fa-briefcase-medical" style="color:#9F000F; font-size: 20px;"></i>';

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
      '<i class="fas fa-briefcase-medical" style="color:#9F000F; font-size: 20px;"></i>';
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
      '<i class="fas fa-briefcase-medical" style="color:#9F000F; font-size: 20px;"></i>';
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
      '<i class="fas fa-briefcase-medical" style="color:#9F000F; font-size: 20px;"></i>';
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
      '<i class="fas fa-briefcase-medical" style="color:#9F000F; font-size: 20px;"></i>';
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
      '<i class="fas fa-map-marker-alt" style="color:green; font-size: 28px;"></i>';
    var titikKumpullIcon = L.divIcon({
      className: "titikkKumpul-marker",
      html: htmlIconPointKumpul,
      iconSize: [20, 20],
      iconAnchor: [12, 12],
    });

    var hoveredIconUrl = "/img/palihan.jpg";
    var hoveredIcon = L.icon({
      iconUrl: hoveredIconUrl,
      iconSize: [130, 130],
      iconAnchor: [12, 12],
      popupAnchor: [12, 12],
    });
    var markertea = L.marker([-7.868603, 110.06145], {
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

  return (
    <div className="flex w-screen h-screen">
      <div id="map" className="w-full h-full"></div>
    </div>
  );
};
