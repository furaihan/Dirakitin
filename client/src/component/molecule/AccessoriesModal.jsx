import React, { useState, useEffect } from "react";
import AdditionalButton from "../organism/AdditionalButton";

export default function AccessoriesModal({ icon1, icon2 }) {
  const [showModal, setShowModal] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(icon1);

  useEffect(() => {
    // Mengupdate buttonIcon saat icon1 atau icon2 berubah
    setButtonIcon(icon1);
  }, [icon1, icon2]);

  const handleModalToggle = () => {
    setShowModal(!showModal);
    // Mengupdate buttonIcon sesuai dengan status modal
    setButtonIcon(showModal ? icon1 : icon2);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setButtonIcon(icon1);
  };

  return (
    <>
      <div>
        <AdditionalButton
          text="Aksesoris"
          icon={buttonIcon}
          alt="plus"
          onClick={handleModalToggle}
        />
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto flex h-screen w-screen items-center justify-center">
              {/* Modal Content*/}
              <div className="h- relative flex h-4/6 w-1/2 flex-col gap-12 rounded-3xl border-0 bg-gray-700 px-16 py-10 shadow-lg outline-none focus:outline-none">
                {/* Button OK */}
                <button
                  className="mt-auto flex items-center justify-center rounded-2xl bg-blue-600 px-16 py-3.5 text-sm font-bold uppercase text-white outline-none transition-all duration-150 ease-linear hover:bg-slate-500"
                  type="button"
                  onClick={handleModalClose}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      )}
    </>
  );
}
