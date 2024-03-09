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
  placeholder,
  selectionIcon1,
  selectionIcon2,
  selectionText1,
  selectionText2,
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
              <div className="relative flex h-4/6 w-11/12 flex-col gap-8 rounded-3xl border-0 bg-gray-700 px-12 py-8 shadow-lg outline-none focus:outline-none">
                {/* Choose item */}
                <div className="flex flex-col items-center justify-center gap-6">
                  <p className="w-full font-trispace text-4xl font-medium text-white">
                    Tipe:
                  </p>
                  <form
                    action=""
                    className="flex h-6 w-full flex-row items-center justify-center gap-3"
                  >
                    <input
                      type="radio"
                      id="select1"
                      name="storageType"
                      value={"SSD"}
                      className="h-5 w-5"
                    />
                    <img
                      src={selectionIcon1}
                      alt="SSD"
                      id="select1"
                      className="h-12 w-12"
                    />
                    <label
                      htmlForfor="select1"
                      className="mr-auto font-trispace text-3xl font-medium text-white"
                    >
                      {selectionText1}
                    </label>

                    <input
                      type="radio"
                      id="select2"
                      name="storageType"
                      value={"HDD"}
                      className=" h-5 w-5"
                    />
                    <img
                      src={selectionIcon2}
                      alt="HDD"
                      id="select2"
                      className="h-12 w-12"
                    />
                    <label
                      htmlForfor="select2"
                      className="font-trispace text-3xl font-medium text-white"
                    >
                      {selectionText2}
                    </label>
                  </form>
                </div>

                {/* Choose item */}
                <form
                  id=""
                  method=""
                  className="flex flex-col justify-center gap-3 align-middle"
                >
                  <span className="font-trispace text-3xl font-medium text-white">
                    {text}:
                  </span>
                  <input
                    type="search"
                    className="rounded-2xl px-9 py-3 font-trispace font-normal italic outline-none"
                    placeholder={placeholder}
                  />
                </form>

                {/* How Many sir ? */}
                <form id="" action="" method="" className="flex flex-col gap-3">
                  <span className="font-trispace text-3xl font-medium text-white">
                    Jumlah:
                  </span>
                  <input
                    type="number"
                    id=""
                    method=""
                    className="flex w-1/3 rounded-2xl px-9 py-3 font-trispace text-3xl font-medium outline-none"
                    min={0}
                  />
                </form>

                {/* total */}
                <div className="flex flex-col justify-center gap-3 align-middle">
                  <span className="font-trispace text-3xl font-medium text-white">
                    Total:
                  </span>
                  <form action="" className="flex flex-row items-center gap-5">
                    <span className="font-trispace text-3xl font-medium text-white">
                      Rp
                    </span>
                    <input
                      type="text"
                      name=""
                      id=""
                      readOnly
                      className="flex w-max rounded-2xl px-9 py-3 font-trispace font-normal outline-none"
                    />
                  </form>
                </div>

                <button
                  className="mt-auto flex items-center justify-center rounded-2xl bg-blue-600 px-16 py-3.5 text-sm font-bold uppercase text-white outline-none transition-all duration-150 ease-linear hover:bg-slate-500"
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
