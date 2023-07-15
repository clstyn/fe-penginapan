import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiX } from "react-icons/hi";

export const CardPenginapan = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="rounded-3xl w-3/4 md:w-full min-h-[400px] h-fit flex flex-col shadow-lg mx-auto">
      <img
        src={props.imgUrl}
        alt={props.namaKost}
        className="rounded-t-3xl w-full h-[200px] md:h-[260px] object-cover object-center"
      />
      <div className="p-4 xl:p-8 font-poppins text-c-black flex flex-col gap-4 h-1/2">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg md:text-xl 2xl:text-[28px] font-semibold">
            {props.namaKost}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${props.location.coordinates[1]},${props.location.coordinates[0]}`}
            target="_blank"
            rel="norefferer noopener"
            className="hover:underline text-xs md:text-sm xl:text-base"
          >
            Lokasi
          </a>
        </div>

        <p className="font-semibold self-start text-xs md:text-sm xl:text-base">
          mulai dari Rp {props.hargaPerMonth.toLocaleString("id-ID")}
        </p>
        <p className="self-start text-xs md:text-sm xl:text-base">
          Total kamar: {props.totalRoom}
        </p>
        <p className="self-start text-xs md:text-sm xl:text-base">
          Kamar kosong: {props.totalRoom - props.bookedRoom}
        </p>

        <div className="flex items-center justify-between">
          <a
            href={`https://wa.me/62` + `${props.phoneNo.substring(1)}`}
            className="bg-c-mid-green text-sm md:text-md 2xl:text-lg px-3 md:px-4 py-1 md:py-2 rounded-full text-c-light-cream font-semibold"
            target="_blank"
            rel="norefferer noopener"
          >
            Hubungi
          </a>
          <div
            onClick={openModal}
            className="cursor-pointer bg-c-light-green text-sm md:text-md 2xl:text-lg px-3 md:px-4 py-1 md:py-2 rounded-full text-c-light-cream font-semibold"
            target="_blank"
            rel="norefferer noopener"
          >
            Detail
          </div>
        </div>
      </div>

      <Transition show={isOpen} as={React.Fragment}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Transition.Child
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-50"></div>
          </Transition.Child>

          <Transition.Child
            enter="transition-all duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-c-light-cream rounded-lg p-2 md:-8 relative mx-auto w-2/3 ">
              <div className="absolute top-0 left-0 bg-c-dark-green flex items-center justify-between w-full px-4 md:px-12 text-white rounded-t-lg">
                <h2 className="text-xl my-4">{props.namaKost}</h2>
                <HiX onClick={closeModal} className="w-8 h-8 cursor-pointer" />
              </div>
              <div className="flex flex-col md:flex-row items-start justify-start py-2 px-3 md:py-6 px-8 gap-8">
                <img
                  src={props.imgUrl}
                  alt={props.namaKost}
                  className="mt-16 rounded-xl md:w-1/2 object-cover object-center"
                />
                <div className="flex flex-col items-start md:mt-16 text-black font-poppins text-left w-full">
                  <p className="font-semibold text-lg md:text-xl 2xl:text-2xl">
                    Fasilitas:{" "}
                    {props.fasilitas.map((element, index) => {
                      return (
                        <span key={index} className="font-normal">
                          {element},{" "}
                        </span>
                      );
                    })}
                  </p>
                  <p className="font-semibold text-lg md:text-xl 2xl:text-2xl">
                    Harga Mulai Dari:{" "}
                    <span className="font-normal">
                      {props.hargaPerMonth.toLocaleString("id-ID")}
                    </span>
                  </p>
                  <p className="font-semibold text-lg md:text-xl 2xl:text-2xl">
                    Kamar kosong:{" "}
                    <span className="font-normal">
                      {props.totalRoom - props.bookedRoom}
                    </span>
                  </p>
                  <div className="flex gap-4 self-center md:self-end mt-4 md:mt-16">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${props.location.coordinates[1]},${props.location.coordinates[0]}`}
                      className="bg-c-dark-green text-sm md:text-md 2xl:text-lg px-3 md:px-4 py-1 md:py-2 rounded-lg text-c-light-cream font-semibold"
                      target="_blank"
                      rel="norefferer noopener"
                    >
                      Lihat Lokasi
                    </a>
                    <a
                      href={
                        `https://wa.me/62` + `${props.phoneNo.substring(1)}`
                      }
                      className="bg-c-mid-green text-sm md:text-md 2xl:text-lg px-3 md:px-4 py-1 md:py-2 rounded-lg text-c-light-cream font-semibold"
                      target="_blank"
                      rel="norefferer noopener"
                    >
                      Hubungi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </div>
  );
};
