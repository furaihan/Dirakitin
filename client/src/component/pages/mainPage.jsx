import React, { useState } from "react";
import AdditionalButton from "../organism/AdditionalButton";
import CasualPartModal from "../organism/CasualPartModal";
import SpesificPartModal from "../organism/SpesificPartModal";
import AccessoriesModal from "../molecule/AccessoriesModal";
import NavigationBar from "../organism/NavigationBar";

function mainPage() {
  const [hoveredImage, setHoveredImage] = useState(
    "/src/assets/images/allpartcomponent.png",
  );

  const handleHoverImageChange = (newImage) => {
    setHoveredImage(newImage);
  };

  return (
    // container
    <div className="flex h-screen w-screen flex-col items-center justify-start bg-indigo-950">
      {/* header */}
      <NavigationBar title={"Dirakitin"} />

      {/* Main page */}

      {/* Background */}
      <div className="bg-[url('/src/assets/images/background.png')] bg-cover bg-local bg-bottom bg-no-repeat">
        {/* Simualation */}
        <div className="flex h-auto w-screen items-center justify-center p-20">
          {/* simulation 1/3 = Componenent Part PC button*/}
          <div className="flex h-full w-1/3 flex-col items-end justify-center gap-16">
            {/* Button Part CPU */}
            <SpesificPartModal
              selectedComponent="left"
              icon="/src/assets/icons/cpu.svg"
              text="CPU"
              positionStyle={{ transform: "translateX(-70%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/images/CPU_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange(
                  "/src/assets/images/allpartcomponent.png",
                )
              }
              placeholder={"Cari CPU..."}
              selectionIcon1={"/src/assets/icons/intel-logo.svg"}
              selectionIcon2={"/src/assets/icons/AMD-logo.svg"}
              selectionText1={"Intel"}
              selectionText2={"AMD"}
            />

            {/* Button Part Mother Board */}
            <CasualPartModal
              selectedComponent="left"
              icon="/src/assets/icons/motherboard.svg"
              text="Motherboard"
              positionStyle={{ transform: "translateX(-10%)" }}
              onMouseEnter={() =>
                handleHoverImageChange(
                  "/src/assets/images/Motherboard_invisible.png",
                )
              }
              onMouseLeave={() =>
                handleHoverImageChange(
                  "/src/assets/images/allpartcomponent.png",
                )
              }
              placeholder={"Cari MotherBoard..."}
            />

            {/* Button Part GPU */}
            <CasualPartModal
              selectedComponent="left"
              icon="/src/assets/icons/gpu.svg"
              text="GPU"
              positionStyle={{ transform: "translateX(-80%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/images/GPU_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange(
                  "/src/assets/images/allpartcomponent.png",
                )
              }
              placeholder={"Cari GPU..."}
            />

            {/* Button Part PSU */}
            <CasualPartModal
              selectedComponent="left"
              icon="/src/assets/icons/psu.svg"
              text="PSU"
              positionStyle={{ transform: "translateX(-50%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/images/PSU_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange(
                  "/src/assets/images/allpartcomponent.png",
                )
              }
            />
          </div>

          {/* simulation 2/3 = Simulation Image PC*/}
          <div className="flex h-full w-1/3 items-center justify-center">
            <img
              src={hoveredImage}
              alt="Motherboard"
              className="drop-shadow-2xl transition-all duration-300 ease-in-out"
            />
          </div>

          {/* simulation 3/3 = Componenent Part PC button*/}
          <div className="flex h-full w-1/3 flex-col items-start justify-center gap-16">
            {/* Button Part RAM */}
            <CasualPartModal
              selectedComponent="right"
              icon="/src/assets/icons/ram.svg"
              text="RAM"
              positionStyle={{ transform: "translateX(55%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/images/RAM_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange(
                  "/src/assets/images/allpartcomponent.png",
                )
              }
              placeholder={"Cari RAM..."}
            />

            {/* Button Part Storage */}
            <SpesificPartModal
              selectedComponent="right"
              icon="/src/assets/icons/storage.svg"
              text="Storage"
              positionStyle={{ transform: "translateX(15%)" }}
              onMouseEnter={() =>
                handleHoverImageChange(
                  "/src/assets/images/Storage_invisible.png",
                )
              }
              onMouseLeave={() =>
                handleHoverImageChange(
                  "/src/assets/images/allpartcomponent.png",
                )
              }
              placeholder={"Cari Storage..."}
              selectionIcon1={"/src/assets/icons/ssd_icon.svg"}
              selectionIcon2={"/src/assets/icons/hdd_icon.svg"}
              selectionText1={"SSD"}
              selectionText2={"HDD"}
            />

            {/* Button Part Cooling Fan */}
            <SpesificPartModal
              selectedComponent="right"
              icon="/src/assets/icons/coolingfan.svg"
              text="Cooling System"
              positionStyle={{ transform: "translateX(0%)" }}
              onMouseEnter={() =>
                handleHoverImageChange(
                  "/src/assets/images/CoolingFan_invisible.png",
                )
              }
              onMouseLeave={() =>
                handleHoverImageChange(
                  "/src/assets/images/allpartcomponent.png",
                )
              }
              placeholder={"Cari Cooling Fan..."}
              selectionIcon1={"/src/assets/icons/aircooler_icon.svg"}
              selectionIcon2={"/src/assets/icons/watercooler_icon.svg"}
              selectionText1={"Air Cooler"}
              selectionText2={"Water Cooler"}
            />

            {/* Button Part casing */}
            <CasualPartModal
              selectedComponent="right"
              icon="/src/assets/icons/casing.svg"
              text="Case"
              positionStyle={{ transform: "translateX(40%)" }}
              onMouseEnter={() =>
                handleHoverImageChange("/src/assets/images/case_invisible.png")
              }
              onMouseLeave={() =>
                handleHoverImageChange(
                  "/src/assets/images/allpartcomponent.png",
                )
              }
              placeholder={"Cari Casing..."}
            />
          </div>
        </div>

        {/* Accessories Modal Button*/}
        <div className="flex h-auto w-screen flex-col items-start justify-center gap-14 px-28">
          <AccessoriesModal
            icon1={"/src/assets/icons/plus.svg"}
            icon2={"/src/assets/icons/minus.svg"}
          />
          <AdditionalButton
            text="Pratinjau"
            icon1="/src/assets/icons/closedeye.svg"
            icon2={"/src/assets/icons/openeye.svg"}
            alt="eye"
          />
        </div>
      </div>
      {/* Summary Break*/}
    </div>
  );
}

export default mainPage;
