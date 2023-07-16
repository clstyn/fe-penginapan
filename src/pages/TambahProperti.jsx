import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import storage from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const TambahProperti = () => {
  const navigate = useNavigate();

  const pinRef = useRef(null);

  const [imgUrl, setImgUrl] = useState("");

  const [formData, setFormData] = useState({
    userId: "",
    namaKost: "",
    hargaPerMonth: 0,
    totalRoom: 0,
    fasilitas: [],
    imgUrl: "",
    phoneNo: "",
    location: {
      type: "Point",
      coordinates: [],
    },
  });

  const [progresspercent, setProgresspercent] = useState(0);

  useEffect(() => {
    var map = L.map("map").setView([-7.894894, 110.061906], 15);
    var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; " + mapLink + " Contributors",
      maxZoom: 18,
    }).addTo(map);

    const handleMapClick = (ev) => {
      var lat = ev.latlng.lat;
      var lng = ev.latlng.lng;

      console.log(lat);
      console.log(lng);

      var myIcon = L.icon({
        iconUrl: "/img/hr.png",
        iconSize: [30, 35], // size of the icon
      });

      if (!pinRef.current) {
        pinRef.current = L.marker(ev.latlng, {
          icon: myIcon,
          riseOnHover: true,
          draggable: true,
        });
        pinRef.current.addTo(map);

        pinRef.current.on("drag", (ev) => {
          lat = ev.latlng.lat;
          lng = ev.latlng.lng;
        });
      } else {
        pinRef.current.setLatLng(ev.latlng);
      }

      setFormData((prevData) => ({
        ...prevData,
        location: {
          type: "Point",
          coordinates: [lng, lat],
        },
      }));
    };

    map.on("click", handleMapClick);

    return () => {
      map.remove();
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      imgUrl: imgUrl,
    }));
  }, [imgUrl]);

  const uploadToFirebase = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `files/kostUploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL.split("&token=")[0]);
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageUploaded = e.target
      .querySelectorAll("div")[7]
      .querySelector("input");
    const file = imageUploaded?.files[0];
    uploadToFirebase(file);
  };

  const setFacilities = (e) => {
    const { value } = e.target;

    const fasilitasArray = value.split(",").map((item) => item.trim());

    setFormData((prevData) => ({
      ...prevData,
      fasilitas: fasilitasArray,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-hero bg-cover">
      <div className="bg-c-light-cream rounded-lg p-8 w-5/6 md:w-1/2 z-50 max-md:my-8 max-md:text-xs">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Tambah Properti
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="namaKost" className="block mb-1">
              Nama Properti
            </label>
            <input
              type="text"
              name="namaKost"
              value={formData.namaKost}
              onChange={handleChange}
              id="namaKost"
              className="border border-gray-300 px-4 py-2 w-full rounded"
              placeholder="Nama Kost/Homestay/Penginapan"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hargaPerMonth" className="block mb-1">
              Harga/Rate
            </label>
            <input
              type="number"
              name="hargaPerMonth"
              value={formData.hargaPerMonth}
              onChange={handleChange}
              id="hargaPerMonth"
              className="border border-gray-300 px-4 py-2 w-full rounded"
              placeholder="Harga Sewa per Bulan"
            />
          </div>
          <div className="flex gap-2">
            <div className="mb-4 w-1/2">
              <label htmlFor="totalRoom" className="block mb-1">
                Total Kamar
              </label>
              <input
                type="number"
                name="totalRoom"
                value={formData.totalRoom}
                onChange={handleChange}
                id="totalRoom"
                className="border border-gray-300 px-4 py-2 w-full rounded"
                placeholder="Jumlah total kamar"
              />
            </div>
            <div className="mb-4 w-1/2">
              <label htmlFor="bookedRoom" className="block mb-1">
                Kamar Terisi
              </label>
              <input
                type="number"
                name="bookedRoom"
                value={formData.bookedRoom}
                onChange={handleChange}
                id="bookedRoom"
                className="border border-gray-300 px-4 py-2 w-full rounded"
                placeholder="Jumlah kamar yang terisi"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="block mb-1">
              No. Telepon
            </label>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              id="phoneNo"
              className="border border-gray-300 px-4 py-2 w-full rounded"
              placeholder="Nomor telepon yang terhubung dengan WhatsApp"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fasilitas" className="block mb-1">
              Fasilitas
            </label>
            <input
              type="text"
              onBlur={setFacilities}
              id="fasilitas"
              className="border border-gray-300 px-4 py-2 w-full rounded"
              placeholder="Sebutkan fasilitas yang tersedia. Dipisahkan dengan koma. Misalnya AC, Wi-Fi, Kamar Mandi Dalam"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imgUrl" className="block mb-1">
              Unggah Gambar
            </label>
            <input
              type="file"
              id="imgUrl"
              className="unggah-gambar border border-gray-300 px-4 py-2 w-full rounded"
            />
            <p className="mt-2 ml-4">{progresspercent}%</p>
          </div>
          <div className="mb-4">
            <label htmlFor="map" className="block mb-1">
              Pilih Lokasi
            </label>
            <div
              id="map"
              className="border border-gray-300 px-4 py-2 w-full h-16 md:h-[240px] rounded"
            ></div>
          </div>
          <div className="flex justify-end mt-8">
            <button
              onClick={() => navigate("/my-property")}
              type="button"
              className="mr-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-c-mid-green hover:bg-c-dark-green text-white font-semibold py-2 px-4 rounded"
            >
              Tambahkan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
