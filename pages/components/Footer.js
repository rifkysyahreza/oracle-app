import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import GPlay from "../assets/google-play.png";
import APPStore from "../assets/app-store.png";
import { PhoneIcon, EmailIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="px-52 py-10 bg-secondary">
      <Image src={logo} alt="Logo Oracle" />

      <div className="grid grid-cols-3 grid-flow-row justify-center py-10">
        <div className="text-white">
          <h1 className="font-semibold">INFO KONTAK</h1>
          <div className="flex flex-col items-start gap-1 ">
            <div className="flex flex-row items-center gap-5">
              <QuestionOutlineIcon />
              <h1>Jalan xxxx No.xx Kec.xxxx, Kel. xxxx, Kota xxxx</h1>
            </div>
            <div className="flex flex-row items-center gap-5">
              <PhoneIcon />
              <h1>012-3456-7890</h1>
            </div>
            <div className="flex flex-row items-center gap-5">
              <EmailIcon />
              <h1>customer.oracle@oracle.com</h1>
            </div>
          </div>
        </div>

        <div className="text-white">
          <h1 className="font-semibold">SOSIAL MEDIA</h1>
          <div className="flex flex-row gap-5">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaTelegramPlane />
            <FaYoutube />
          </div>
        </div>

        <div className="text-white">
          <h1 className="font-semibold">DOWNLOAD APP</h1>
          <div className="flex flex-row gap-3">
            <Image src={GPlay} alt="Google Play"></Image>
            <Image src={APPStore} alt="App Store"></Image>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center">
        <h1 className="text-white">
          Copyright © 2021 <span className="font-semibold">Oracle</span>. All
          rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
