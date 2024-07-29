"use client";

import { ButtonUI, ImgUI, InputUI, SelectUI } from "@/components";
import React from "react";
const models = [
  {
    title: "Empow",
  },
  {
    title: "GS3",
  },
  {
    title: "Emkoo",
  },
  {
    title: "GS8",
  },
];
const DrivePage = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black">
        <ImgUI
          src={`/empow-banner.jpg`}
          fill
          className="object-cover z-7"
          alt={"test-drive"}
        />
        <div className="container-fluid relative h-full">
          <div className="relative z-10 w-full  h-screen pt-[10%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
            <div className="px-3 py-3 space-y-5 sm:py-5 sm:px-5 rounded-xl h-fit bg-white md:cols-span-1">
              <h5 className="mb-2 text-xl font-bold md:text-2xl">
                Запрос на тест-драйв
              </h5>
              <div className=" ">
                <SelectUI
                  placeholder={"Выберите модель"}
                  nameLabel={"chooseModel"}
                  labelText={"Выберите модель"}
                  errorText={"Требуется модель"}
                  optionValues={models}
                />
              </div>
              <form className="space-y-2 sm:space-y-3">
                <div>
                  <h5 className="mb-2 text-base font-bold md:text-xl">
                    Выбор дилера
                  </h5>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <SelectUI
                        errorText={"Требуется регион"}
                        labelText={"Выберите регион"}
                        optionValues={[{ title: "Tashkent" }]}
                        nameLabel={"countries"}
                        placeholder={"Выберите регион"}
                      />
                    </div>
                    <div>
                      <SelectUI
                        errorText={"Требуется дилера"}
                        labelText={" Выберите дилера"}
                        optionValues={[{ title: "Gac motor" }]}
                        nameLabel={"dealer"}
                        placeholder={"Выберите дилера"}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-bold md:text-xl">
                    Договориться о времени
                  </h5>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <InputUI
                        errorText={"Требуется день"}
                        nameLabel={"day"}
                        labelText={" Выберите день"}
                        type={"date"}
                        placeholder={"Выберите день"}
                      />
                    </div>
                    <div>
                      <SelectUI
                        errorText={"Требуется время"}
                        labelText={"  Выберите время"}
                        optionValues={[{ title: "Tashkent" }]}
                        nameLabel={"hour"}
                        placeholder={"Выберите время"}
                      />
                    </div>
                  </div>
                </div>
                <div className={""}>
                  <h5 className="mb-2 text-base font-bold md:text-xl">
                    Ваши данные
                  </h5>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <InputUI
                        errorText={"Требуется ваши данные"}
                        nameLabel={"name"}
                        labelText={" Имя"}
                        placeholder={"Фамилия имя отчество"}
                      />
                    </div>
                    <div>
                      <InputUI
                        errorText={"Требуется телефон данные"}
                        nameLabel={"tel"}
                        labelText={"  Телефон"}
                        placeholder={" +998 99 999 99 99"}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <ButtonUI
                    isBorderBtn={true}
                    text={"Отправить запрос"}
                    type={"submit"}
                    extraStyle={"!px-7 !py-3 !text-sm !bg-borderBtn text-white"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DrivePage;
