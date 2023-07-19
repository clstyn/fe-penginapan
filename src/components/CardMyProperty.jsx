import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Dialog } from "@headlessui/react";

export const CardMyProperty = (props) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = async () => {
    props.deleteFunction();
    closeModal();
  };

  return (
    <>
      <Dialog open={modalOpen} onClose={closeModal} as="div">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />

        <div className="fixed inset-0 flex flex-col top-12 items-center justify-center bg-white rounded-lg w-fit h-fit mx-auto px-6 py-4">
          <Dialog.Title className="text-lg font-medium text-gray-900">
            Konfirmasi Hapus Data
          </Dialog.Title>

          <div className="mt-3">
            <p className="text-gray-500">
              Apakah Anda yakin ingin menghapus {props?.property.namaKost}
            </p>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={closeModal}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Tidak
            </button>
            <button
              onClick={handleDelete}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Ya
            </button>
          </div>
        </div>
      </Dialog>

      <div className="w-full h-fit min-h-[300px] flex max-md:flex-col rounded-xl shadow-lg">
        <img
          src={props?.property.imgUrl}
          alt={props?.property.namaKost}
          className="max-md:rounded-t-xl md:rounded-l-xl md:w-1/2 2xl:w-1/3 object-cover object-center"
        />
        <div className="flex flex-col items-start px-4 py-3 md:pl-12 md:pr-4 md:py-6 md:w-1/2 xl:w-full gap-2 mb-4">
          <div className="flex justify-between items-center w-full mb-4 md:mb-8 font-semibold">
            <p className="text-lg md:text-2xl 2xl:text-3xl">
              {props?.property.namaKost}
            </p>
            <div className="flex gap-1">
              <Link
                to={{
                  pathname: "/editkost",
                  search: "?id=" + props?.property._id,
                }}
                className="cursor-pointer w-10 aspect-square bg-orange-400 hover:bg-orange-500 rounded-lg flex items-center justify-center text-white"
              >
                <FaEdit className="text-xl" />
              </Link>
              {/* <div
                onClick={() => navigate(`/editkost/${props?.property._id}`)}
                className="cursor-pointer w-10 aspect-square bg-orange-400 hover:bg-orange-500 rounded-lg flex items-center justify-center text-white"
              >
                <FaEdit className="text-xl" />
              </div> */}
              <div
                onClick={openModal}
                className="cursor-pointer w-10 aspect-square bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center text-white"
              >
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
      </div>
    </>
  );
};
