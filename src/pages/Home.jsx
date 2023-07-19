import React, { useEffect, useState, useContext } from "react";

import { BsFillSearchHeartFill } from "react-icons/bs";

import { NavbarBeforeLogin } from "../components/navbar/NavbarBeforeLogin";
import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";
import { Footer } from "../components/Footer";
import { CardPenginapan } from "../components/CardPenginapan";
import { AppContext } from "../context/AppContext";

import { staticData } from "../data/staticData";

export const Home = () => {
  const [penginapan, setPenginapan] = useState([]);
  const [filteredPenginapan, setFilteredPenginapan] = useState([]);
  const { login, isLogged } = useContext(AppContext);

  const scrollSmoothTo = () => {
    const targetSection = document.getElementById("penginapan");
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    setPenginapan(staticData);
  }, []);

  useEffect(() => {
    setFilteredPenginapan(penginapan);
  }, [penginapan]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      login(user);
    }
  }, []);

  const handleSearch = (e) => {
    const filtered = penginapan.filter((o) => {
      const facilities = o.fasilitas.some((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const names = o.namaKost.toLowerCase().includes(e.target.value);
      return facilities || names;
    });
    setFilteredPenginapan(filtered);
  };

  return (
    <div className="">
      {!isLogged ? <NavbarBeforeLogin /> : <NavbarAfterLogin />}

      <section className="bg-hero bg-cover min-h-screen flex items-center justify-center pt-36 md:pt-48 md:py-24 text-c-light-cream">
        <div className="container mx-auto max-md:px-12">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-32 md:px-12">
            <h2 className="font-righteous text-2xl md:text-4xl 2xl:text-[64px] text-center">
              Temukan penginapan terjangkau di
            </h2>
            <div className="flex flex-col md:gap-8 items-center justify-center">
              <h1 className="font-aksara text-[96px] md: text-[128px] xl:text-[200px] leading-none">
                Palihan
              </h1>
              <h1 className="font-righteous text-2xl md:text-4xl 2xl:text-[64px] text-center">
                Kecamatan Temon, Kabupaten Kulonprogo
              </h1>
            </div>
            <div
              onClick={() => scrollSmoothTo()}
              className="cursor-pointer bg-c-mid-green rounded-full px-4 md:px-16 py-2 md:py-4 text-xl md:text-4xl font-righteous hover:bg-c-cream hover:text-c-mid-green hover:border-2 hover:border-c-mid-green transition"
            >
              Cari Sekarang
            </div>
          </div>
        </div>
      </section>

      <section className="bg-c-cream min-h-screen flex items-center justify-center py-24 md:pt-32 text-c-black text-center font-righteous">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8 w-5/6 2xl:w-1/2">
          <p className="w-4/5 text-lg md:text-[32px] leading-loose">
            Selamat datang di Palihan, sebuah surga tersembunyi di Kecamatan
            Temon, Kabupaten Kulonprogo!
          </p>
          <p className="w-full text-sm md:text-[28px] leading-loose">
            Lokasi yang strategis dekat Yogyakarta International Airport,
            menjadikan Palihan sebagai pintu gerbang ideal untuk mengawali
            petualangan Anda!. Jarak yang terjangkau menuju pusat kota
            Yogyakarta membuat Anda semakin dekat dengan beragam destinasi
            ikonik.
          </p>
          <p className="w-full text-sm md:text-[28px] leading-loose">
            Palihan juga memiliki berbagai penginapan yang cocok untuk semua
            jenis wisatawan. Mulai dari kost hingga homestay yang nyaman. Di
            sini, selalu ada tempat istirahat yang sesuai dengan selera dan
            anggaran Anda!
          </p>
        </div>
      </section>

      <section
        id="penginapan"
        className="bg-c-light-cream min-h-screen flex items-start justify-center py-24 md:pt-32 text-c-black text-center font-righteous"
      >
        <div className="container mx-auto flex flex-col items-center justify-start h-full gap-8 w-5/6 md:w-2/3">
          <h1 className="text-c-black text-2xl md:text-3xl 2xl:text-5xl leading-none">
            Daftar Penginapan
          </h1>
          <div className="font-poppins text-xl relative w-3/4 md:w-1/2">
            <BsFillSearchHeartFill className="absolute left-4 top-3 w-4 h-4" />
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Cari nama/fasilitas kost..."
              className="w-full py-2 pl-10 pr-0 md:pr-10 border border-gray-300 rounded-md outline-none text-sm md:text-lg focus:border-c-dark-green pl-12"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
            {filteredPenginapan.length === 0 ? (
              <div className="">Tidak ditemukan kost yang sesuai</div>
            ) : (
              filteredPenginapan.map((item, index) => {
                return (
                  <CardPenginapan
                    key={index}
                    namaKost={item.namaKost}
                    hargaPerMonth={item.hargaPerMonth}
                    totalRoom={item.totalRoom}
                    bookedRoom={item.bookedRoom}
                    fasilitas={item.fasilitas}
                    phoneNo={item.phoneNo}
                    location={item.location}
                    imgUrl={item.imgUrl}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
