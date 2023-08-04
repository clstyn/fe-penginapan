import React, { useEffect, useState, useContext } from "react";

import { BsFillSearchHeartFill } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { toast } from "react-toastify";

import AOS from "aos";
import "aos/dist/aos.css";

import { NavbarBeforeLogin } from "../components/navbar/NavbarBeforeLogin";
import { NavbarAfterLogin } from "../components/navbar/NavbarAfterLogin";
import { Footer } from "../components/Footer";
import { CardPenginapan } from "../components/CardPenginapan";
import { AppContext } from "../context/AppContext";

import Light from "../assets/images/light-hero.png";

// import { staticData } from "../data/staticData";

export const Home = () => {
  const [penginapan, setPenginapan] = useState([]);
  const [filteredPenginapan, setFilteredPenginapan] = useState([]);
  const [loading, setLoading] = useState(false);
  const { login, isLogged } = useContext(AppContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollSmoothTo = () => {
    const targetSection = document.getElementById("penginapan");
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://be-penginapan.vercel.app/api/penginapan/`
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
      const data = await response.json();
      setPenginapan(data);
    } catch (err) {
      toast.error(err, { autoClose: 5000, className: "text-xl" });
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const toTopButton = document.getElementById("toTopButton");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      toTopButton.classList.remove("hidden");
      toTopButton.classList.add("block");
    } else {
      toTopButton.classList.remove("block");
      toTopButton.classList.add("hidden");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init();
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

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
        <div className="container mx-auto max-md:px-12 relative z-20">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-32 md:px-12">
            <h2
              className="font-righteous text-2xl md:text-3xl 2xl:text-5xl text-center"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Temukan penginapan terjangkau di Kalurahan
            </h2>
            <div
              className="flex flex-col md:gap-8 items-center justify-center"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <h1 className="font-poppins text-[96px] md: text-[128px] xl:text-[200px] leading-none">
                Palihan
              </h1>
              <h1 className="font-righteous text-2xl md:text-3xl 2xl:text-5xl text-center">
                Kecamatan Temon, Kabupaten Kulonprogo
              </h1>
            </div>
            <div
              onClick={() => scrollSmoothTo()}
              className="cursor-pointer bg-c-mid-green rounded-full px-4 md:px-16 py-2 md:py-4 text-xl md:text-4xl font-righteous hover:bg-c-cream hover:text-c-mid-green hover:border-2 hover:border-c-mid-green transition"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Cari Sekarang
            </div>
          </div>
        </div>
        <img
          src={Light}
          alt="lightlayer"
          className="absolute bottom-0 w-full pointer-events-none z-10"
        />
      </section>

      <section className="bg-c-cream min-h-screen flex items-center justify-center py-24 md:pt-32 text-c-black text-center font-righteous">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8 w-5/6 2xl:w-1/2">
          <p
            className="w-4/5 text-lg md:text-[32px] leading-loose"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Selamat datang di Palihan, salah satu Kalurahan yang terletak di
            Kecamatan Temon, Kabupaten Kulon Progo.
          </p>
          <p
            className="w-full text-sm md:text-[28px] leading-loose"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Berada di Barat Daya Kabupaten Kulon Progo yang dekat dengan kawasan
            pantai, dan sewilayah dengan Bandar Udara Yogyakarta International
            Airport, menjadikan desa Palihan sebagai kawasan yang cukup tentram
            namun tidak kalah strategis untuk tinggal.
          </p>
          <p
            className="w-full text-sm md:text-[28px] leading-loose"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Banyak kost, kontrakan, atau penginapan yang tersedia di sini yang
            siap menunjang kehidupan Anda saat tinggal di desa kami. Telusuri
            hunian yang sesuai dengan keinginan Anda di sini!
          </p>
        </div>
      </section>

      <section
        id="penginapan"
        className="bg-c-light-cream min-h-screen flex items-start justify-center py-24 md:pt-32 text-c-black text-center font-righteous"
      >
        <div className="container mx-auto flex flex-col items-center justify-start h-full gap-8 w-5/6 md:w-2/3">
          <h1
            className="text-c-black text-2xl md:text-3xl 2xl:text-5xl leading-none"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Daftar Penginapan
          </h1>
          <div
            className="font-poppins text-xl relative w-3/4 md:w-1/2"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <BsFillSearchHeartFill className="absolute left-4 top-3 w-4 h-4" />
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Cari nama/fasilitas kost..."
              className="w-full py-2 pl-10 pr-0 md:pr-10 border border-gray-300 rounded-md outline-none text-sm md:text-lg focus:border-c-dark-green pl-12"
            />
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full md:mt-12"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            {loading ? (
              <p className="col-span-full">Mengambil Data...</p>
            ) : null}
            {!loading && filteredPenginapan.length === 0 ? (
              <div className="col-span-3 text-center">
                Tidak ditemukan kost yang sesuai
              </div>
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
      <button
        id="toTopButton"
        onClick={scrollToTop}
        className="fixed bg-c-dark-green hidden rounded-xl aspect-square w-8 xl:w-16 bottom-4 right-4 xl:bottom-16 xl:right-16 border-2 border-white hover:scale-110 transition"
      >
        <MdKeyboardArrowUp className="text-white text-4xl mx-auto" />
      </button>
    </div>
  );
};
