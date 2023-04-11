import React from "react";
import Image from "next/image";
import LogoGopay from "../../assets/gopay.png";
import LogoOvo from "../../assets/ovo.png";
import LogoVisa from "../../assets/visa.png";
import LogoAtm from "../../assets/atm.png";
import LogoDana from "../../assets/dana.png";
import { Box, Input, InputGroup } from "@chakra-ui/react";

function MetodePembayaran() {
  return (
    <div className="text-white w-full">
      <Box p="6" className="bg-secondary flex flex-col gap-5">
        <h1 className="font-bold text-xl">Pilih Metode Pembayaran</h1>
        <Box
          as="button"
          className="bg-white text-black flex flex-row justify-between w-full px-6 py-3 rounded-lg"
        >
          <Image src={LogoGopay} alt="logo gopay"></Image>
          <h1>Rp. 100.000,-</h1>
        </Box>
        <Box
          as="button"
          className="bg-white text-black flex flex-row justify-between w-full px-6 py-3 rounded-lg"
        >
          <Image src={LogoOvo} alt="logo gopay"></Image>
          <h1>Rp. 100.000,-</h1>
        </Box>
        <Box
          as="button"
          _disabled={true}
          className="bg-white text-black flex flex-row justify-between w-full px-6 py-3 rounded-lg opacity-80"
        >
          <Image src={LogoDana} alt="logo gopay"></Image>
          <h1>Tidak tersedia untuk denominasi ini</h1>
        </Box>
        <Box
          as="button"
          className="bg-white text-black flex flex-row justify-between w-full px-6 py-3 rounded-lg"
        >
          <Image src={LogoVisa} alt="logo gopay"></Image>
          <h1>Rp. 100.000,-</h1>
        </Box>
        <Box
          as="button"
          className="bg-white text-black flex flex-row justify-between w-full px-6 py-3 rounded-lg"
        >
          <Image src={LogoAtm} alt="logo gopay"></Image>
          <h1>Rp. 100.000,-</h1>
        </Box>
      </Box>
    </div>
  );
}

export default MetodePembayaran;
