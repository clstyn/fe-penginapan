import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = () => {
  const [isDone, setIsDone] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    address: "",
    NIK: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      toast.error("Password dan password yang diulang harus sama");
      return;
    }

    fetch("https://be-penginapan.vercel.app/api/auth/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error);
        }

        const data = await response.json();
        toast.success(data.message);

        setIsDone(true);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  if (isDone) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="w-screen min-h-screen bg-c-dark-green flex flex-col items-center justify-center font-poppins">
      <form className="flex flex-col items-center jusityf-center w-5/6 md:w-3/5 gap-8">
        <h1 className="text-c-cream font-semibold text-2xl md:text-4xl 2xl:text-[64px] mb-2 md:mb-8">
          Daftar
        </h1>
        <input
          type="text"
          className="w-full xl:w-1/2 text-sm xl:text-xl
                                text-c-dark-green rounded-xl
                                focus:outline-none focus:ring-0 pl-3 py-2 md:pl-6 md:py-4"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Nama Lengkap"
          required
        />
        <input
          type="text"
          className="w-full xl:w-1/2 text-sm xl:text-xl
                                text-c-dark-green rounded-xl
                                focus:outline-none focus:ring-0 pl-3 py-2 md:pl-6 md:py-4"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="text"
          className="w-full xl:w-1/2 text-sm xl:text-xl
                                text-c-dark-green rounded-xl
                                focus:outline-none focus:ring-0 pl-3 py-2 md:pl-6 md:py-4"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Alamat"
          required
        />
        <input
          type="text"
          className="w-full xl:w-1/2 text-sm xl:text-xl
                                text-c-dark-green rounded-xl
                                focus:outline-none focus:ring-0 pl-3 py-2 md:pl-6 md:py-4"
          name="NIK"
          value={formData.NIK}
          onChange={handleChange}
          placeholder="NIK"
          required
        />
        <input
          type="password"
          className="w-full xl:w-1/2 text-sm xl:text-xl
                                text-c-dark-green rounded-xl
                                focus:outline-none focus:ring-0 pl-3 py-2 md:pl-6 md:py-4"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          className="w-full xl:w-1/2 text-sm xl:text-xl
                                text-c-dark-green rounded-xl
                                focus:outline-none focus:ring-0 pl-3 py-2 md:pl-6 md:py-4"
          name="repeatPassword"
          value={formData.repeatPassword}
          onChange={handleChange}
          placeholder="Ulangi Password"
          required
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full xl:w-1/2 font-semibold text-c-dark-green text-xl md:text-2xl xl:text-3xl bg-c-light-green rounded-lg pl-3 py-2 md:pl-6 md:py-4 hover:bg-c-light-cream my-4"
        >
          Daftar
        </button>
      </form>
      <a href="/register" className="text-c-light-cream">
        Sudah punya akun? <span className="hover:underline">Masuk</span>
      </a>
    </div>
  );
};
