"use client";
import { useEffect } from "react";
import { ButtonUI, InputUI, SelectUI } from ".";
import { AnimatePresence, motion } from "framer-motion";

const SaleCarModal = ({ modal, setModal }) => {
  const models = [
    {
      title: "Aion S",
    },
    {
      title: "Aion S Max",
    },
    {
      title: "Aion Y",
    },
    {
      title: "Aion Y Plus",
    },
  ];
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
                className="w-full max-w-[600px]  p-6 md:p-9 bg-white  ">
                <form className="md:space-y-5 space-y-3">
                  <h2 className="font-semibold text-lg md:text-xl lg:text-2xl ">Заполните форму</h2>
                  <div>
                    <SelectUI
                      placeholder={"Выберите автомобиль"}
                      nameLabel={"chooseCar"}
                      labelText={"Выберите автомобиль"}
                      errorText={"Нужно выбрать автомобиль"}
                      optionValues={models}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <InputUI
                        placeholder={"Ваше имя"}
                        nameLabel={"name"}
                        labelText={"Ваше имя"}
                        errorText={"Требуется ваша имя"}
                      />
                    </div>
                    <div>
                      <InputUI
                        placeholder={"Ваше номер"}
                        nameLabel={"number"}
                        labelText={"Ваше номер"}
                        errorText={"Требуется ваш номер"}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-end-3">
                      <ButtonUI
                        isBorderBtn={true}
                        extraStyle={"!text-sm !px-2 !w-full md:mt-3"}
                        text={"Отправить заявку"}
                      />
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default SaleCarModal;
