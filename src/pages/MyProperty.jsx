import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";
import { CardMyProperty } from "../components/CardMyProperty";

export const MyProperty = () => {
  const [myProperty, setMyProperty] = useState([]);
  const [location, setLocation] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const MyPropertyDummy = [
    {
      namaKost: "Nama Kost 2",
      hargaPerMonth: 1200000,
      totalRoom: 10,
      bookedRoom: 1,
      fasilitas: ["AC", "Wi-Fi"],
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/palihan-penginapan-kkn.appspot.com/o/files%2Fcoba%2F3922687.jpg?alt=media",
      phoneNo: "081234567890",
      location: {
        type: "Point",
        coordinates: [110.052031, -7.891401],
      },
    },
    {
      namaKost: "Nama Kost 3",
      hargaPerMonth: 1500000,
      totalRoom: 12,
      bookedRoom: 2,
      fasilitas: ["AC", "TV", "Wi-Fi"],
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/palihan-penginapan-kkn.appspot.com/o/files%2Fcoba%2F3922687.jpg?alt=media",
      phoneNo: "081234567891",
      location: {
        type: "Point",
        coordinates: [110.052031, -7.891401],
      },
    },
  ];

  useEffect(() => {
    setMyProperty(MyPropertyDummy);
  }, [MyPropertyDummy]);

  // useEffect(() => {
  //   var map = L.map("map").setView([-7.894894, 110.061906], 15);
  //   var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
  //   L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     attribution: "&copy; " + mapLink + " Contributors",
  //     maxZoom: 18,
  //   }).addTo(map);

  //   return () => {
  //     map.remove();
  //   };
  // }, [setIsModalOpen]);

  return (
    <div className="bg-c-light-cream font-poppins">
      <NavbarAfterLogin />
      <div className="flex w-full items-center justify-center pt-16 md:pt-24 2xl:pt-36">
        <div className="flex flex-col w-full px-24 gap-4">
          <h1 className="text-black font-semibold text-2xl md:text-3xl 2xl:text-5xl">
            Selamat Datang
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl">
            Kelola bisnis kost atau penginapan Anda disini!
          </p>
          <div
            onClick={openModal}
            className="rounded-xl bg-c-mid-green text-white cursor-pointer px-4 md:px-8 py-2 md:py-4 mt-4 w-fit text-lg md:text-xl mb-8"
          >
            Tambah Properti
          </div>
          <div className="flex flex-col gap-8 mb-12 md:mb-16 2xl:mb-24">
            {myProperty?.map((item, index) => {
              return <CardMyProperty key={index} property={item} />;
            })}
          </div>
        </div>
      </div>

      <Transition
        show={isModalOpen}
        as={React.Fragment}
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="bg-c-light-cream rounded-lg p-8 w-3/4 md:w-1/2 z-50">
            <h2 className="text-xl font-semibold mb-4">Tambah Properti</h2>

            {/* Add Penginapan Form */}
            {/* Replace with your form fields and styling */}
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
                  Unggah Gambar (Pilih 1 gambar)
                </label>
                <input
                  type="file"
                  id="imgUrl"
                  className="border border-gray-300 px-4 py-2 w-full rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="map" className="block mb-1">
                  Pilih Lokasi
                </label>
                <div
                  id="map"
                  className="border border-gray-300 px-4 py-2 w-full h-[150px] rounded"
                ></div>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  className="mr-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={closeModal}
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
      </Transition>
    </div>
  );
};
