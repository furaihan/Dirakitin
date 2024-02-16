import React from "react";
import ComponentPartButton from "../component/componentPartButton";
import AdditionalButton from "../component/AdditionalButton";

function mainPage() {
  return (
    // container
    <div className="flex h-screen w-screen flex-col items-center justify-start bg-indigo-950">
      {/* header */}
      <div className="flex h-28 w-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="font-trispace text-5xl font-semibold text-white">
          Dirakitin
        </h1>
      </div>

      {/* Main page */}

      {/* Background */}
      <div className="bg-[url('/src/assets/background.png')] bg-cover bg-local bg-bottom bg-no-repeat">
        {/* Simualation */}
        <div className="flex h-auto w-screen items-center justify-center p-20">
          {/* simulation 1/3 = Componenent Part PC button*/}
          <div className="flex h-full w-1/3 flex-col items-center justify-center gap-16">
            <ComponentPartButton icon="/src/assets/cpu.svg" text="CPU" />
            <ComponentPartButton
              icon="/src/assets/motherboard.svg"
              text="Motherboard"
            />
            <ComponentPartButton icon="/src/assets/gpu.svg" text="GPU" />
            <ComponentPartButton icon="/src/assets/psu.svg" text="PSU" />
          </div>

          {/* simulation 2/3 = Simulation Image PC*/}
          <div className="flex h-full w-1/3 items-center justify-center">
            <img src="/src/assets/motherboard.png" alt="Motherboard" />
          </div>

          {/* simulation 3/3 = Componenent Part PC button*/}
          <div className="flex h-full w-1/3 flex-col items-center justify-center gap-16">
            <ComponentPartButton icon="/src/assets/ram.svg" text="RAM" />
            <ComponentPartButton
              icon="/src/assets/storage.svg"
              text="Storage"
            />
            <ComponentPartButton
              icon="/src/assets/coolingfan.svg"
              text="Cooling System"
            />
            <ComponentPartButton icon="/src/assets/casing.svg" text="Case" />
          </div>
        </div>

        {/* Accessories Modal Button*/}
        <div className="flex h-auto w-screen flex-col items-start justify-center gap-14 px-28">
          <AdditionalButton
            text="Aksesoris"
            icon="/src/assets/plus.svg"
            alt="plus"
          />
          <AdditionalButton
            text="Pratinjau"
            icon="/src/assets/closedeye.svg"
            alt="eye"
          />
        </div>
      </div>

      {/* Summary Break*/}
    </div>
  );
}

export default mainPage;
