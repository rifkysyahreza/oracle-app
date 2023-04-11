import React from "react";
import { Box, Input, InputGroup } from "@chakra-ui/react";

function NominalTopUp() {
  return (
    <div className="text-white w-full">
      <Box p="6" className="bg-secondary flex flex-col gap-5">
        <h1 className="font-bold text-xl">Pilih Nominal Top Up</h1>
        <div className="grid grid-cols-3 grid-flow-row gap-3 place-items-center text-black">
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            5 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            12 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            50 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            70 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            140 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            355 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            720 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            1450 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            2180 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            3640 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            7290 Diamond
          </button>
          <button className="bg-white px-3 py-2 w-full rounded-lg">
            36500 Diamond
          </button>
        </div>
      </Box>
    </div>
  );
}

export default NominalTopUp;
