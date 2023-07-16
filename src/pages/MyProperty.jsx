import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";
import { CardMyProperty } from "../components/CardMyProperty";

export const MyProperty = () => {
  const [myProperty, setMyProperty] = useState([]);

  const navigate = useNavigate();

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
  }, []);

  return (
    <div className="bg-c-light-cream font-poppins">
      <NavbarAfterLogin />
      <div className="flex w-full items-center justify-center pt-20 md:pt-24 2xl:pt-36">
        <div className="flex flex-col w-full px-8 md:px-24 gap-4">
          <h1 className="text-black font-semibold text-2xl md:text-3xl 2xl:text-5xl">
            Selamat Datang
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl">
            Kelola bisnis kost atau penginapan Anda disini!
          </p>
          <div
            onClick={() => navigate("/tambahkost")}
            className="rounded-xl bg-c-mid-green text-white cursor-pointer px-4 md:px-8 py-2 md:py-4 mt-4 w-fit text-sm md:text-xl mb-8"
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
    </div>
  );
};
