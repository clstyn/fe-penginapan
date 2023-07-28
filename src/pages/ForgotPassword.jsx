import React, { useState } from "react";
import { toast } from "react-toastify";

export const ForgotPassword = () => {
  const [loading, isLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    if (!formData.username || !formData.email) {
      throw new Error("Isi semua isian dengan benar");
    }

    try {
      isLoading(true);
      const response = await fetch(
        "https:///be-penginapan.vercel.app/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
      const data = await response.json();
      toast.success(data.message, { autoClose: 5000, className: "text-xl" });
    } catch (error) {
      toast.error(error.message, { autoClose: 5000, className: "text-xl" });
    } finally {
      isLoading(false);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-c-dark-green flex flex-col items-center justify-center font-poppins">
      <form className="flex flex-col items-center jusityf-center w-5/6 md:w-3/5 gap-8">
        <h1 className="text-c-cream font-semibold text-2xl md:text-4xl 2xl:text-[64px] mb-2 md:mb-8">
          Reset Kata Sandi
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
          type="email"
          className="w-full xl:w-1/2 text-sm xl:text-xl
                                text-c-dark-green rounded-xl
                                focus:outline-none focus:ring-0 pl-3 py-2 md:pl-6 md:py-4"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Alamat Email"
          required
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full xl:w-1/2 font-semibold text-c-dark-green text-xl md:text-2xl xl:text-3xl bg-c-light-green rounded-xl pl-3 py-2 md:pl-6 md:py-4 hover:bg-c-light-cream my-4"
        >
          {loading ? "Loading..." : "Kirim Email"}
        </button>
      </form>
    </div>
  );
};
