import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate, useSearchParams, Navigate } from "react-router-dom";

import { toast } from "react-toastify";

import storage from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { AppContext } from "../context/AppContext";

export const EditProperti = () => {
  const { isLogged } = useContext(AppContext);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const propertyId = searchParams.get("id");

  const [errorText, setErrorText] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);

  const pinRef = useRef(null);

  const [property, setProperty] = useState({
    userId: "",
    namaKost: "",
    hargaPerMonth: 0,
    totalRoom: 0,
    bookedRoom: 0,
    fasilitas: [],
    imgUrl: "",
    phoneNo: "",
    location: {
      type: "Point",
      coordinates: [],
    },
  });

  useEffect(() => {
    var map = L.map("map").setView([-7.894894, 110.061906], 15);
    var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; " + mapLink + " Contributors",
      maxZoom: 18,
    }).addTo(map);

    // var myIcon = L.icon({
    //   iconUrl: "/img/hr.png",
    //   iconSize: [30, 35],
    // });

    // if (!pinRef.current) {
    //   pinRef.current = L.marker(property.location.coordinates, {
    //     icon: myIcon,
    //     riseOnHover: true,
    //     draggable: true,
    //   });
    //   pinRef.current.addTo(map);
    // }

    const handleMapClick = (ev) => {
      var lat = ev.latlng.lat;
      var lng = ev.latlng.lng;

      var myIcon = L.icon({
        iconUrl: "/img/hr.png",
        iconSize: [30, 35],
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

      setProperty((prevData) => ({
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
    setProperty((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setProperty((prevData) => ({
      ...prevData,
      imgUrl: imgUrl,
    }));
  }, [imgUrl]);

  useEffect(() => {
    const fetchData = async (e) => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const response = await fetch(
          `https://be-penginapan.vercel.app/api/penginapan/${propertyId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error);
        }
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        toast.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(property);
  }, [property]);

  const uploadToFirebase = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !property.namaKost ||
        property.hargaPerMonth === 0 ||
        property.totalRoom === 0 ||
        property.bookedRoom === 0 ||
        !property.fasilitas ||
        !property.imgUrl ||
        !property.location.coordinates ||
        !property.phoneNo
      ) {
        throw new Error("Isi semua isian dengan benar");
      }
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await fetch(
        `https://be-penginapan.vercel.app/api/penginapan/${propertyId}`,
        {
          method: "PUT",
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(property),
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
      const data = await response.json();
      toast.success(data.message);
      setIsAdded(true);
    } catch (err) {
      toast.error(err);
      setErrorText(err.message);
      console.log(err);
    }
  };

  if (isAdded) {
    return <Navigate replace to="/my-property" />;
  }

  if (!isLogged) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-hero bg-cover font-poppins">
      <div className="bg-c-light-cream rounded-lg p-8 w-5/6 md:w-1/2 z-50 max-md:my-8 max-md:text-xs">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Update Properti
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="namaKost" className="block mb-1">
              Nama Properti
            </label>
            <input
              type="text"
              id="namaKost"
              className="border border-gray-300 px-4 py-2 w-full rounded"
              name="namaKost"
              value={property.namaKost}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hargaPerMonth" className="block mb-1">
              Harga/Rate
            </label>
            <input
              type="number"
              id="hargaPerMonth"
              className="border border-gray-300 px-4 py-2 w-full rounded"
              name="hargaPerMonth"
              value={property.hargaPerMonth}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <div className="mb-4 w-1/2">
              <label htmlFor="totalRoom" className="block mb-1">
                Total Kamar
              </label>
              <input
                type="number"
                id="totalRoom"
                className="border border-gray-300 px-4 py-2 w-full rounded"
                name="totalRoom"
                value={property.totalRoom}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-1/2">
              <label htmlFor="bookedRoom" className="block mb-1">
                Kamar Terisi
              </label>
              <input
                type="number"
                id="bookedRoom"
                className="border border-gray-300 px-4 py-2 w-full rounded"
                name="bookedRoom"
                value={property.bookedRoom}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="block mb-1">
              No. Telepon
            </label>
            <input
              type="text"
              id="phoneNo"
              className="border border-gray-300 px-4 py-2 w-full rounded"
              name="phoneNo"
              value={property.phoneNo}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fasilitas" className="block mb-1">
              Fasilitas
            </label>
            <input
              type="text"
              id="fasilitas"
              className="border border-gray-300 px-4 py-2 w-full rounded"
              name="fasilitas"
              value={property.fasilitas.join(". ")}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imgUrl" className="block mb-1">
              Unggah Gambar
            </label>
            <p className="text-slate-600">
              Tidak perlu unggah gambar lagi apabila tidak ingin mengganti
              gambar
            </p>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              lang="id"
              id="imgUrl"
              onChange={uploadToFirebase}
              className="border border-gray-300 px-4 py-2 w-full
            rounded"
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
            <p
              id="error-text"
              className="text-red-500 text-lg mr-8 font-poppins"
            >
              {errorText}
            </p>
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
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
