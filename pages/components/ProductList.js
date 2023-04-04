import React from "react";
import Image from "next/image";
import GarenaFF from "../assets/Garena-Free-Fire.png";
import Pubg from "../assets/pubg.png";
import Ml from "../assets/ml.png";
import Lol from "../assets/lol.png";
import Aov from "../assets/aov.png";
import LordMobile from "../assets/lord-mobile.png";
import Valorant from "../assets/valorant.png";
import Pb from "../assets/pb.png";
import Dota2 from "../assets/dota.png";
import Dn from "../assets/dn.png";
import Minecraft from "../assets/Minecraft_cover.png";
import Cod from "../assets/cod.png";
import Ps from "../assets/PS.png";
import Gemscool from "../assets/Gemscool.png";
import Garena from "../assets/Garena.png";
import Razer from "../assets/Razer PIN.png";
import Spotify from "../assets/Spotify.png";
import Gplay from "../assets/Google Play.png";

function ProductList() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <h1 className="text-white">Mobile</h1>
        <h1 className="text-blue-400">Lainnya...</h1>
      </div>

      <div className="flex flex-row justify-between gap-3">
        <Image src={GarenaFF} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Pubg} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Ml} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Lol} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Aov} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={LordMobile} alt="Garena FF" className="rounded-xl"></Image>
      </div>

      <div className="flex flex-row justify-between">
        <h1 className="text-white">PC Games</h1>
        <h1 className="text-blue-400">Lainnya...</h1>
      </div>

      <div className="flex flex-row justify-between gap-3">
        <Image src={Valorant} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Pb} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Dota2} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Dn} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Minecraft} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Cod} alt="Garena FF" className="rounded-xl"></Image>
      </div>

      <div className="flex flex-row justify-between">
        <h1 className="text-white">Others</h1>
        <h1 className="text-blue-400">Lainnya...</h1>
      </div>

      <div className="flex flex-row justify-between gap-3">
        <Image src={Ps} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Gemscool} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Garena} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Razer} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Spotify} alt="Garena FF" className="rounded-xl"></Image>
        <Image src={Gplay} alt="Garena FF" className="rounded-xl"></Image>
      </div>
    </div>
  );
}

export default ProductList;
