import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import logo from "../../public/logo.png";
import search_vector from "../../public/search_vector.png";
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="absolute w-full">
      <div className="flex flex-row justify-between items-center bg-secondary px-52 py-5">
        <div className="flex flex-row gap-5 items-center text-white font-semibold">
          <Image src={logo} alt="Logo Oracle" />
          <Link href="/">Home</Link>
          <Link href="/premium">Premium</Link>
          <Link href="/download">Download</Link>
          <div className="bg-white">
            <InputGroup>
              <Input
                placeholder="Search"
                className="text-black"
                colorScheme="green"
              ></Input>
              <InputRightElement>
                <span className="text-gray-300">
                  <FaSearch></FaSearch>
                </span>
              </InputRightElement>
            </InputGroup>
          </div>
        </div>

        <button
          className="px-6 py-3 bg-gray-500 rounded-full flex flex-row items-center gap-1 text-white font-semibold"
          onClick={openModal}
        >
          LOGIN
          <ChevronRightIcon />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black pb-6 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    className="text-white flex justify-end pt-3 hover:cursor-pointer"
                    onClick={closeModal}
                  >
                    X
                  </Dialog.Title>
                  <div className="text-white text-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold leading-6"
                    >
                      Login
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-md font-medium">
                        Selamat datang kembali
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm">
                        Masukkan nomor telepon Anda dan kami akan mengirimkan
                        kode verifikasi Anda
                      </p>
                    </div>
                  </div>

                  <InputGroup className="mt-4">
                    <InputLeftAddon>+62</InputLeftAddon>
                    <Input
                      placeholder="Nomor telepon"
                      className="text-white"
                    ></Input>
                  </InputGroup>

                  <div className="mt-4 flex flex-row justify-center w-full">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Kirim
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Navbar;
