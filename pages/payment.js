import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InputGameId from "./components/paymentPage/InputGameId";
import NominalTopUp from "./components/paymentPage/NominalTopUp";
import MetodePembayaran from "./components/paymentPage/MetodePembayaran";
import Image from "next/image";
import Freefayer from "./assets/toppng.png";
import BannerPayment from "./assets/banner-payment.png";
import { Box } from "@chakra-ui/react";

function payment() {
  return (
    <div className="bg-black">
      <div className="sticky top-0 z-30">
        <Navbar></Navbar>
      </div>
      <div className="relative">
        <Image src={BannerPayment} className="w-full" alt="banner"></Image>
      </div>

      <div className="">
        <div className="px-52">
          <div className="relative bottom-52 flex flex-row justify-between border-2 border-red-300">
            <div className="flex flex-col gap-10 justify-center basis-1/2 border-2 border-blue-300">
              <div className="bg-white max-w-fit px-2 py-10 rounded-full border-2 border-black">
                <Image src={Freefayer} alt="freefayer"></Image>
              </div>

              <div className="flex flex-col gap-5">
                <h1 className="font-bold text-3xl text-white">Free Fire</h1>

                <div className="flex flex-col gap-3">
                  <h1 className="text-white ">
                    PERINGATAN: Metode pembayaran DANA hanya tersedia untuk
                    Pengguna Aplikasi. Harap pastikan bahwa aplikasi DANA Anda
                    telah diperbarui dan memiliki saldo yang mencukupi sebelum
                    melakukan top up.
                  </h1>
                  <h1 className="text-white ">
                    Top up diamond FF hanya dalam hitungan detik! Cukup masukan
                    User ID Free Fire Anda, pilih jumlah Diamond yang Anda
                    inginkan, kemudian selesaikan pembayaran. Setelah pembayaran
                    berhasil Diamond FF akan secara langsung ditambahkan ke akun
                    Free Fire (FF) Anda.
                  </h1>
                  <h1 className="text-white ">
                    Bayarlah menggunakan GoPay, OVO, DANA, hingga Transfer Bank.
                    Oracle adalah cara terbaik untuk top up diamond (FF) Free
                    Fire secara online tanpa kartu kredit. Anda juga dapat
                    mendaftarkan sebagai pengguna premium dan mendapatkan diskon
                    yang menarik.
                  </h1>
                </div>
              </div>
            </div>

            <div className=" border-2 border-green-300 flex flex-col items-center gap-5">
              <div className="w-full">
                <InputGameId></InputGameId>
              </div>
              <div className="w-full">
                <NominalTopUp></NominalTopUp>
              </div>
              <div className="w-full">
                <MetodePembayaran></MetodePembayaran>
              </div>
              <div>
                <Box
                  as="button"
                  className="bg-white font-semibold px-16 py-3 rounded-lg"
                >
                  Beli
                </Box>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default payment;
