import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const { login, userData, isLogged } = useContext(AuthContext);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://be-penginapan.vercel.app/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user.data));
        localStorage.setItem("token", JSON.stringify(user.token));
        toast.success("Selamat datang!");
        login(user.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    console.log(userData);
    console.log(isLogged);
  }, [userData, isLogged]);

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
                                focus:outline-none focus:ring-0 pl-3 py-2 md:pl-6 md:py-4"
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
                                focus:outline-none focus:ring-0 pl-3 py-2 md:pl-6 md:py-4"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full xl:w-1/2 font-semibold text-c-dark-green text-xl md:text-2xl xl:text-3xl bg-c-light-green rounded-xl pl-3 py-2 md:pl-6 md:py-4 hover:bg-c-light-cream my-4"
        >
          Masuk
        </button>
      </form>
      <a href="/register" className="text-c-light-cream">
        Belum punya akun? <span className="hover:underline">Daftar</span>
      </a>
    </div>
  );
};
