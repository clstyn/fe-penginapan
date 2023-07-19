import React, { useEffect, useState, useContext } from "react";

import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";
import { CardMyProperty } from "../components/CardMyProperty";

import { AppContext } from "../context/AppContext";

export const MyProperty = () => {
  const { isLogged, userData, login } = useContext(AppContext);
  const [myProperty, setMyProperty] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const userId = userData?._id;
      const response = await fetch(
        `https://be-penginapan.vercel.app/api/penginapan/user/${userId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
      const dataRes = await response.json();
      setMyProperty(dataRes.data);
    } catch (err) {
      toast.error(err);
    }
  };

  const handleDelete = async (kostId) => {
    //put logic to show delete confirmation popup here
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await fetch(
        `https://be-penginapan.vercel.app/api/penginapan/${kostId}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
      const data = await response.json();
      toast.success(data.message);
      fetchData();
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      const dataUser = JSON.parse(localStorage.getItem("user"));
      login(dataUser);
      if (JSON.parse(localStorage.getItem("user")).role === "admin") {
        navigate("/");
      }
    }
    fetchData();
  }, []);

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-c-light-cream min-h-screen font-poppins">
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
              return (
                <CardMyProperty
                  key={index}
                  property={item}
                  deleteFunction={() => handleDelete(item._id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
