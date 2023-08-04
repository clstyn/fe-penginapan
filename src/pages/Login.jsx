import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

export const Login = () => {
  const { login, isLogged } = useContext(AppContext);
  const [loading, isLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.username || !formData.password) {
      throw new Error("Isi semua isian dengan benar");
    }

    try {
      isLoading(true);
      const response = await fetch(
        "https://be-penginapan.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      const userData = await response.json();
      localStorage.setItem("user", JSON.stringify(userData.data));
      localStorage.setItem("token", JSON.stringify(userData.token));
      toast.success("Selamat datang!", {
        autoClose: 5000,
        className: "text-xl",
      });
      login(userData.user);
    } catch (error) {
      toast.error(error.message, { autoClose: 5000, className: "text-xl" });
    } finally {
      isLoading(false);
    }
  };

  if (isLogged) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="w-screen min-h-screen bg-c-dark-green flex flex-col items-center justify-center font-poppins">
      <form className="flex flex-col items-center jusityf-center w-5/6 md:w-3/5 gap-8">
        <h1 className="text-c-cream font-semibold text-2xl md:text-4xl 2xl:text-[64px] mb-2 md:mb-8">
          Masuk
        </h1>
        <input
          type="text"
          className="w-full xl:w-1/2 text-sm xl:text-xl
                                text-c-dark-green rounded-xl
                                focus:outline-none focus:ring-0 px-3 py-2 md:px-6 md:py-4"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          className="w-full xl:w-1/2 text-sm xl:text-xl
                                text-c-dark-green rounded-xl
                                focus:outline-none focus:ring-0 px-3 py-2 md:px-6 md:py-4"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <div className="flex w-full xl:w-1/2 justify-start text-white font-poppins">
          <Link
            to="/forgot-password"
            className="text-c-light-cream hover:underline"
          >
            Lupa kata sandi
          </Link>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full xl:w-1/2 font-semibold text-c-dark-green text-xl md:text-2xl xl:text-3xl bg-c-light-green rounded-xl pl-3 py-2 md:pl-6 md:py-4 hover:bg-c-light-cream my-4"
        >
          {loading ? "Loading..." : "Masuk"}
        </button>
      </form>
      <Link to="/register" className="text-c-light-cream">
        Belum punya akun? <span className="hover:underline">Daftar</span>
      </Link>
    </div>
  );
};
