import React from "react";

export const CardPenginapan = (props) => {
  return (
    <div className="rounded-3xl w-3/4 md:w-full min-h-[350px] h-fit flex flex-col shadow-lg mx-auto">
      <div className="w-full h-1/2">
        <img
          src={props.imgUrl}
          alt={props.namaKost}
          className="rounded-t-3xl"
        />
      </div>
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
          mulai dari Rp {props.hargaPerMonth}
        </p>
        <p className="self-start text-xs md:text-sm xl:text-base">
          Total kamar: {props.totalRoom}
        </p>
        <p className="self-start text-xs md:text-sm xl:text-base">
          Kamar kosong: {props.totalRoom - props.bookedRoom}
        </p>

        <div className="flex items-center justify-between">
          <a
            href="/"
            className="bg-c-mid-green text-sm md:text-md 2xl:text-lg px-3 md:px-4 py-1 md:py-2 rounded-full text-c-light-cream font-semibold"
            target="_blank"
            rel="norefferer noopener"
          >
            Hubungi
          </a>
          <a
            href="/"
            className="bg-c-light-green text-sm md:text-md 2xl:text-lg px-3 md:px-4 py-1 md:py-2 rounded-full text-c-light-cream font-semibold"
            target="_blank"
            rel="norefferer noopener"
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};
