import React, { useEffect, useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BsCheck } from "react-icons/bs";
import { toast } from "react-toastify";

import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";

import { AppContext } from "../context/AppContext";

export const AdminPage = () => {
  const [dataUser, setDataUser] = useState([]);
  const { isLogged } = useContext(AppContext);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await fetch(
        "https://be-penginapan.vercel.app/api/admin/get-users/",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setDataUser(data);
    } catch (err) {
      toast.error(err, { autoClose: 5000, className: "text-xl" });
    }
  };

  useEffect(() => {
    if (!(JSON.parse(localStorage.getItem("user")).role === "admin")) {
      navigate("/");
    }
    fetchData();
  });

  const handleActivate = async (targetId) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await fetch(
        `https://be-penginapan.vercel.app/api/admin/activate/${targetId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      toast.success(data.message, { autoClose: 5000, className: "text-xl" });
      fetchData();
    } catch (err) {
      console.log(err);
      toast.error(err, { autoClose: 5000, className: "text-xl" });
    }
  };

  if (!isLogged) {
    return <Navigate to="/" />;
  }

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
            <span className="inline-block ml-2 md:ml-4 ">
              <BsCheck className="bg-c-dark-green rounded-md w-4 h-4 md:w-6 md:h-6 text-white flex items-center justify-center" />
            </span>
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
              {dataUser.map((data, index) => (
                <tr key={index} className="text-center bg-white">
                  <td className="py-4">{data.fullName}</td>
                  <td className="py-4">{data.address}</td>
                  <td className="py-4">{data.NIK}</td>
                  <td className="py-4">{data.username}</td>
                  <td className="py-4">
                    {data.isActive ? (
                      "Sudah Aktif"
                    ) : (
                      <span
                        onClick={() => handleActivate(data._id)}
                        className="cursor-pointer inline-block ml-2 md:ml-4 "
                      >
                        <BsCheck className="bg-c-dark-green rounded-md w-4 h-4 md:w-6 md:h-6 text-white flex items-center justify-center" />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
