import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InputGameId from "./components/paymentPage/InputGameId";
import NominalTopUp from "./components/paymentPage/NominalTopUp";
import MetodePembayaran from "./components/paymentPage/MetodePembayaran";
import Image from "next/image";
import BannerPayment from "./assets/banner-payment.png";
import { Box } from "@chakra-ui/react";

function payment() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <div className="">
        <Image src={BannerPayment} className="w-full" alt="banner"></Image>
      </div>

      <div className="relative">
        <div className="px-52">
          <div className="flex flex-row justify-between border-2 border-red-300">
            <div className="basis-1/2 border-2 border-blue-300">
              <h1 className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi et doloribus nesciunt natus provident adipisci
                perferendis sequi eum ipsum fuga nihil, quae eos. Ea, quam sunt
                alias sapiente eaque reprehenderit.
              </h1>
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
                <Box as="button" className="bg-white px-16 py-3 rounded-lg">
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
