import React from "react";
import { Box, Input, InputGroup } from "@chakra-ui/react";

function InputKode() {
  return (
    <div className="text-white w-full">
      <Box p="6" className="bg-secondary flex flex-col gap-5">
        <h1 className="font-bold text-xl">Masukkan Kode Redeem</h1>
        <div className="bg-white text-black rounded-lg">
          <InputGroup>
            <Input placeholder="Silahkan kode anda" colorScheme="green"></Input>
          </InputGroup>
        </div>
        <h1>
          Jika Anda memiliki kode redeem, silakan masukkan di atas. abaikan jika
          Anda tidak memilikinya.
        </h1>
      </Box>
    </div>
  );
}

export default InputKode;
