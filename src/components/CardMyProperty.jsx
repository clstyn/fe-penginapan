import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export const CardMyProperty = (props) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openModal = () => {
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="w-full h-fit min-h-[300px] flex max-md:flex-col rounded-xl shadow-lg">
      <img
        src={props?.property.imgUrl}
        alt={props?.property.namaKost}
        className="rounded-t-xl md:rounded-l-xl md:w-1/2 2xl:w-1/3 object-cover object-center"
      />
      <div className="flex flex-col items-start px-4 py-3 md:pl-12 md:pr-4 md:py-6 md:w-1/2 xl:w-full gap-2 mb-4">
        <div className="flex justify-between items-center w-full mb-4 md:mb-8 font-semibold">
          <p className="text-lg md:text-2xl 2xl:text-3xl">
            {props?.property.namaKost}
          </p>
          <div className="flex gap-1">
            <div className="cursor-pointer w-10 aspect-square bg-orange-400 hover:bg-orange-500 rounded-lg flex items-center justify-center text-white">
              <FaEdit onClick={openModal} className="text-xl" />
            </div>
            <div className="cursor-pointer w-10 aspect-square bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center text-white">
              <RiDeleteBinLine className="text-xl" />
            </div>
          </div>
        </div>
        <p className="font-semibold text-sm md:text-base 2xl:text-xl">
          Harga:{" "}
          <span className="font-normal">{props?.property.hargaPerMonth}</span>
        </p>
        <p className="font-semibold text-sm md:text-base 2xl:text-xl">
          Total kamar:{" "}
          <span className="font-normal">{props?.property.totalRoom}</span>
        </p>
        <p className="font-semibold text-sm md:text-base 2xl:text-xl">
          Kamar terisi:{" "}
          <span className="font-normal">{props?.property.bookedRoom}</span>
        </p>
        <p className="font-semibold text-sm md:text-base 2xl:text-xl">
          Fasilitas:{" "}
          {props?.property.fasilitas.map((element, index) => {
            return (
              <span key={index} className="font-normal">
                {element},{" "}
              </span>
            );
          })}
        </p>
        <p className="font-semibold text-sm md:text-base 2xl:text-xl">
          No. Telp:{" "}
          <span className="font-normal">{props?.property.phoneNo}</span>
        </p>
        <p className="font-semibold text-sm md:text-base 2xl:text-xl">
          Lokasi:{" "}
          <span className="font-normal">
            {props?.property.location.coordinates[1]}
          </span>
          ,{" "}
          <span className="font-normal">
            {props?.property.location.coordinates[0]}
          </span>
        </p>
      </div>

      {/* Modal */}

      <Transition
        show={isEditModalOpen}
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
            <h2 className="text-xl font-semibold mb-4">Ubah Properti</h2>

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
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </div>
  );
};
