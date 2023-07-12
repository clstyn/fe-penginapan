import React, { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";

import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";

export const AdminPage = () => {
  const [dataUser, setDataUser] = useState([]);
  const dataDummy = [
    {
      id: 1,
      nama: "John Doe",
      alamat: "Jalan Contoh 123",
      nik: "1234567890",
      username: "johndoe",
      aktivasi: "Aktif",
    },
    {
      id: 2,
      nama: "Jane Smith",
      alamat: "Jalan Lain 456",
      nik: "0987654321",
      username: "janesmith",
      aktivasi: "Aktif",
    },
  ];

  useEffect(() => {
    setDataUser(dataDummy);
  }, []);

  return (
    <div className="bg-c-light-cream font-poppins min-h-screen max-xl:overflow-x-scroll">
      <NavbarAfterLogin />
      <div className="flex w-full items-center justify-center pt-24 2xl:pt-36">
        <div className="flex flex-col w-full px-16 md:px-24 gap-4">
          <h1 className="text-black font-semibold text-lg md:text-2xl md:text-3xl 2xl:text-5xl">
            Selamat Datang, Admin
          </h1>
          <p className="text-sm md:text-lg xl:text-2xl">
            Aktivasi akun pengguna dengan klik pada tombol
            <div className="inline-block ml-2 md:ml-4 ">
              <BsCheck className="bg-c-dark-green rounded-md w-4 h-4 md:w-6 md:h-6 text-white flex items-center justify-center" />
            </div>
          </p>
          <table className="mt-12 md:mt-16 2xl:mt-24 text-sm md:text-lg xl:text-2xl drop-shadow-xl">
            <thead className="bg-c-light-green border-b-2 border-c-dark-green rounded-t-xl">
              <tr>
                <th className="py-4 max-md:px-2 rounded-tl-xl">Nama</th>
                <th className="py-4 max-md:px-2">Alamat</th>
                <th className="py-4 max-md:px-2">NIK</th>
                <th className="py-4 max-md:px-2">Username</th>
                <th className="py-4 max-md:px-2 rounded-tr-xl">Aktivasi</th>
              </tr>
            </thead>
            <tbody>
              {dataDummy.map((data) => (
                <tr key={data.id} className="text-center bg-white">
                  <td className="py-4">{data.nama}</td>
                  <td className="py-4">{data.alamat}</td>
                  <td className="py-4">{data.nik}</td>
                  <td className="py-4">{data.username}</td>
                  <td className="py-4">{data.aktivasi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
