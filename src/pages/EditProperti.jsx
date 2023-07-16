import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const EditProperti = () => {
  const navigate = useNavigate();

  useEffect(() => {
    var map = L.map("map").setView([-7.894894, 110.061906], 15);
    var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; " + mapLink + " Contributors",
      maxZoom: 18,
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-hero bg-cover">
      <div className="bg-c-light-cream rounded-lg p-8 w-5/6 md:w-1/2 z-50 max-md:my-8 max-md:text-xs">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Update Properti
        </h2>

        <form>
          <div className="mb-4">
            <label htmlFor="namaKost" className="block mb-1">
              Nama Properti
            </label>
            <input
              type="text"
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
              type="text"
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
              accept=".jpg, .jpeg, .png"
              lang="id"
              id="imgUrl"
              className="border border-gray-300 px-4 py-2 w-full
            rounded"
            />
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
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
