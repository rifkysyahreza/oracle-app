import React from "react";
import { Box, Input, InputGroup } from "@chakra-ui/react";

function InputGameId() {
  return (
    <div className="text-white">
      <Box p="6" maxW="lg" className="bg-secondary flex flex-col gap-5">
        <h1 className="font-bold text-xl">Masukkan Game ID</h1>
        <div className="bg-white text-black rounded-lg">
          <InputGroup>
            <Input
              placeholder="Silahkan masukkanID anda"
              colorScheme="green"
            ></Input>
          </InputGroup>
        </div>
        <h1>
          Untuk menemukan ID Anda, klik pada ikon karakter. User ID tercantum di
          bawah nama karakter Anda. Contoh: '1234567890'.
        </h1>
      </Box>
    </div>
  );
}

export default InputGameId;
