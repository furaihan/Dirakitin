import React, { useState } from "react";
import AdditionalButton from "../component/AdditionalButton";
import CasualPartModal from "../component/CasualPartModal";
import SpesificPartModal from "../component/SpesificPartModal";

function mainPage() {
  const [hoveredImage, setHoveredImage] = useState(
    "/src/assets/allpartcomponent.png",
  );

  const handleHoverImageChange = (newImage) => {
    setHoveredImage(newImage);
  };

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
          <div className="flex h-full w-1/3 flex-col items-end justify-center gap-16">
            {/* Button Part CPU */}
            <SpesificPartModal
              selectedComponent="left"
              icon="/src/assets/cpu.svg"
              text="CPU"
              positionStyle={{ transform: "translateX(-70%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/CPU_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange("/src/assets/allpartcomponent.png")
              }
            />

            {/* Button Part Mother Board */}
            <CasualPartModal
              selectedComponent="left"
              icon="/src/assets/motherboard.svg"
              text="Motherboard"
              positionStyle={{ transform: "translateX(-10%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/Motherboard_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange("/src/assets/allpartcomponent.png")
              }
              placeholder={"Cari MotherBoard..."}
            />

            {/* Button Part GPU */}
            <CasualPartModal
              selectedComponent="left"
              icon="/src/assets/gpu.svg"
              text="GPU"
              positionStyle={{ transform: "translateX(-80%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/GPU_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange("/src/assets/allpartcomponent.png")
              }
              placeholder={"Cari GPU..."}
            />

            {/* Button Part PSU */}
            <CasualPartModal
              selectedComponent="left"
              icon="/src/assets/psu.svg"
              text="PSU"
              positionStyle={{ transform: "translateX(-50%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/PSU_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange("/src/assets/allpartcomponent.png")
              }
            />
          </div>

          {/* simulation 2/3 = Simulation Image PC*/}
          <div className="flex h-full w-1/3 items-center justify-center">
            <img src={hoveredImage} alt="Motherboard" />
          </div>

          {/* simulation 3/3 = Componenent Part PC button*/}
          <div className="flex h-full w-1/3 flex-col items-start justify-center gap-16">
            {/* Button Part RAM */}
            <CasualPartModal
              selectedComponent="right"
              icon="/src/assets/ram.svg"
              text="RAM"
              positionStyle={{ transform: "translateX(55%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/RAM_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange("/src/assets/allpartcomponent.png")
              }
            />

            {/* Button Part Storage */}
            <SpesificPartModal
              selectedComponent="right"
              icon="/src/assets/storage.svg"
              text="Storage"
              positionStyle={{ transform: "translateX(15%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/Storage_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange("/src/assets/allpartcomponent.png")
              }
            />

            {/* Button Part Cooling Fan */}
            <SpesificPartModal
              selectedComponent="right"
              icon="/src/assets/coolingfan.svg"
              text="Cooling System"
              positionStyle={{ transform: "translateX(0%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/CoolingFan_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange("/src/assets/allpartcomponent.png")
              }
            />

            {/* Button Part casing */}
            <CasualPartModal
              selectedComponent="right"
              icon="/src/assets/casing.svg"
              text="Case"
              positionStyle={{ transform: "translateX(40%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/case_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange("/src/assets/allpartcomponent.png")
              }
            />
          </div>
        </div>

        {/* Accessories Modal Button*/}
        <div className="flex h-auto w-screen flex-col items-start justify-center gap-14 px-28">
          <AdditionalButton
            text="Aksesoris"
            icon1="/src/assets/plus.svg"
            icon2="/src/assets/minus.svg"
            alt="plus"
          />
          <AdditionalButton
            text="Pratinjau"
            icon1="/src/assets/closedeye.svg"
            icon2={"/src/assets/openeye.svg"}
            alt="eye"
          />
        </div>
      </div>

      {/* Summary Break*/}
    </div>
  );
}

export default mainPage;
