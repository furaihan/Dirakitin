import React from "react";
import PartButtonLeft from "./PartButtonLeft";
import PartButtonRight from "./PartButtonRight";

export default function SpesificPartModal({
  selectedComponent,
  icon,
  text,
  positionStyle,
  onMouseEnter,
  onMouseLeave,
}) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div>
        {/* Calling Button with icon in the left side */}
        {selectedComponent === "left" && (
          <PartButtonLeft
            icon={icon}
            text={text}
            positionStyle={positionStyle}
            onClick={() => setShowModal(true)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        )}
        {/* Calling Button with icon in the right side */}
        {selectedComponent === "right" && (
          <PartButtonRight
            icon={icon}
            text={text}
            positionStyle={positionStyle}
            onClick={() => setShowModal(true)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        )}
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 flex h-screen w-screen max-w-3xl items-center justify-center">
              {/* Modal Content*/}
              <div className="relative flex h-3/5 w-5/6 flex-col gap-12 rounded-3xl border-0 bg-gray-700 px-16 py-10 shadow-lg outline-none focus:outline-none">
                {/* Choose item */}
                <div className="flex flex-col items-center justify-center bg-slate-200">
                  <p className="font-trispace text-4xl font-medium text-white">
                    Tipe:
                  </p>
                  <form action="flex flex-col items-center justify-center bg-blue-600">
                    <input
                      type="radio"
                      id="select1"
                      name="storageType"
                      value={"SSD"}
                      className="h-8 w-8 bg-white p-0"
                    />
                    <img
                      src="/src/assets/ssd_icon.svg"
                      alt="SSD"
                      id="select1"
                      className="h-10 w-10"
                    />
                    <label
                      htmlForfor="select1"
                      className="font-trispace text-4xl font-medium text-white"
                    >
                      SSD
                    </label>

                    <input
                      type="radio"
                      id="select2"
                      name="storageType"
                      value={"HDD"}
                      className=" h-8 w-8 bg-white p-0"
                    />
                    <img
                      src="/src/assets/hdd_icon.svg"
                      alt="HDD"
                      id="select2"
                      className="h-10 w-10"
                    />
                    <label
                      htmlForfor="select2"
                      className="font-trispace text-4xl font-medium text-white"
                    >
                      HDD
                    </label>
                  </form>
                </div>
                <button
                  className="flex items-center justify-center rounded-2xl bg-blue-600 px-16 py-3.5 text-sm font-bold uppercase text-white outline-none transition-all duration-150 ease-linear hover:bg-slate-500"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
