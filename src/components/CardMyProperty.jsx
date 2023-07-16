import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export const CardMyProperty = (props) => {
  const navigate = useNavigate();

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
              <FaEdit
                onClick={() => navigate("/editkost")}
                className="text-xl"
              />
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
    </div>
  );
};
