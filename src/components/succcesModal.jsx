"use client";
import { useEffect } from "react";
import { ButtonUI, InputUI, SelectUI } from ".";
import { AnimatePresence, motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const  SucccesModal = ({ modal, setModal }) => {
  const {t} = useTranslation()
  return (
    <AnimatePresence key={'saleModal'}>
      {modal && (
        <motion.div
          key="SaleModal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModal(false)}
          className={`w-screen h-screen bg-black/50 fixed top-0 left-0 z-[9999] flex justify-center flex-col   `}
        >
          <div className=" container-fluid flex flex-col items-center ">
            {modal && (
              <motion.div 
                key="SaleModalForm"
                initial={{ opacity: 0, scale: 0, y: -400 }}
                animate={{ opacity: 1, scale: 1 , y: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-[600px] flex flex-col items-center gap-3.5 text-center md:gap-5  p-6 md:p-9 bg-white  ">
                  <GiCheckMark className="text-xl text-currentTextBlack md:text-3xl" />
                  <h2 className="font-semibold text-lg md:text-xl lg:text-2xl ">{t('modal.successTitle')}</h2>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default SucccesModal



