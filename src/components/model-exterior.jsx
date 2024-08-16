import React, { useEffect, useState } from "react";
import { ButtonUI, ImgUI, SectionTitleCar } from ".";
import { useTranslation } from "react-i18next";
import { langSelect } from "@/helper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useQuery } from "react-query";
import apiService from "@/service/axios";

const   ModelExterior = ({ data, positionList }) => {
  const { t, i18n } = useTranslation();
  const [isInterior, setIsInterior] = useState(false);
  const [position, setPosition] = useState();
  const [exterior, setExterior] = useState();
  const [interior, setInterior] = useState();

  const {
    data: exteriorData,
    refetch: exteriorRefetch,
    isSuccess: exteriorIsSucces,
  } = useQuery(
    "exterior",
    () => apiService.getData(`/position/exterior/${position}`),
    { enabled: false }
  );
  const {
    data: interiorData,
    refetch: interiorRefetch,
    isSuccess: interiorIsSucces,
  } = useQuery(
    "interior",
    () => apiService.getData(`/exterior/interior/${exterior._id}`),
    { enabled: false }
  );

  useEffect(() => {
    setPosition(positionList[0]?._id);
  }, [positionList]);
  
  useEffect(() => {
      setExterior(exteriorData?.exterior[0]);
  }, [exteriorData]);

  useEffect(() => {
    setInterior(interiorData?.interior[0]);
  }, [interiorData]);

  useEffect(() => {
    if (position) {
      setIsInterior(false)
      exteriorRefetch();
    }
  }, [position]);

  useEffect(() => {
    if (exterior) {
      interiorRefetch();
    }
  }, [exterior]);

  return (
    <>
      <div className="bg-[#f8f8f8] py-10">
        <div className="container space-y-4 md:space-y-9">
          <SectionTitleCar title={t('innerModel.positions')} />
          <div className="w-full">
            <Swiper
              slidesPerView={3}
              navigation={{
                nextEl: ".button-next-btn",
                prevEl: ".button-prev-btn",
              }}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2.6,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }} 
              modules={[Navigation]}
              className="mySwiper w-full relative"
            >
              {positionList?.map((item) => (
                <SwiperSlide key={item?._id} className="!h-full ">
                  <div
                    className={` bg-black  cursor-pointer !h-full flex flex-col justify-between  ${
                      item?._id === position && "shadow-md shadow-borderBtn"
                    } divide-y divide-white`}
                    onClick={() => setPosition(item?._id)}
                  >
                    <div
                      className={`px-4 py-3 text-white ${
                        item?._id === position && "bg-borderBtn"
                      }  md:p-5 lg:p-7 space-y-1`}
                    >
                      <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
                        {langSelect(
                          i18n.language,
                          item?.titleRu,
                          item?.titleUz
                        )}
                      </h3>
                      <p>от {item?.price} сум</p>
                    </div>
                    <div className=" p-5 md:p-8 lg:p-9 xl:px-10">
                      <div className="text-white text-sm lg:text-base space-y-1 ">
                        {item?.list?.map((child) => (
                          <div key={child?._id} className="flex gap-2">
                            <div className="w-1.5 shrink-0 h-1.5 mt-2 rounded-full bg-white"></div>
                            <p>{langSelect(
                              i18n.language,
                              child?.titleRu,
                              child?.titleUz
                            )}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <button className="cursor-pointer text-currentBlue absolute xl:hidden top-1/2 left-0 z-10 p-2  button-prev-btn bg-borderBtn flex justify-center items-center rounded-full text-white ">
                <GrPrevious className="text-lg" />
              </button>
              <button className="cursor-pointer text-currentBlue absolute xl:hidden top-1/2 right-0 z-10 p-2 bg-borderBtn flex justify-center items-center rounded-full text-white   button-next-btn ">
                <GrNext className="text-lg" />
              </button>
            </Swiper>
          </div>
        </div>
      </div>
      <div className={ "bg-gradient-to-b lg:bg-gradient-to-r to-white from-50% relative  from-[#41454b] to-50% "}>

        <div className="flex gap-4 absolute top-4 right-3 md:right-6 lg:right-12 z-40">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsInterior(false)}
          >
            <div className="border border-currentRed rounded-full p-0.5">
              <div
                className={`w-2.5 h-2.5 ${
                  isInterior ? "bg-transparent" : "bg-currentRed"
                } rounded-full`}
              ></div>
            </div>
            <p className=" text-xs md:text-sm max-lg:text-white max-lg-shadow-text lg:text-currentTextBlack">
              {langSelect(i18n.language , 'Экстерьер' , "Tashqi ko'rinish")}
            </p>
          </div>
          {
            interiorData &&
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsInterior(true)}
          >
            <div className="border border-currentRed rounded-full p-0.5">
              <div
                className={`w-2.5 h-2.5 ${
                  isInterior ? "bg-currentRed" : "bg-transparent"
                } rounded-full`}
              ></div>
            </div>
            <p className=" text-xs md:text-sm max-lg:text-white max-lg-shadow-text lg:text-currentTextBlack">
                {langSelect(i18n.language , 'Интерьер' , "Ichki")}
            </p>
          </div>
          }
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10">
          <div className="w-full h-[250px] sm:aspect-[16/7.5] lg:h-full xl:col-span-2 ">
            <InteriorExterior
              interior={interior}
              exterior={exterior}
              setInterior={setInterior}
              setExterior={setExterior}
              isInterior={isInterior}
              list={
                isInterior
                  ? interiorData?.interior
                  : exteriorData?.exterior
                  ? exteriorData?.exterior
                  : interiorData?.interior
              }
            />
          </div>
          <div className={"grid grid-cols-1  md:py-[70px] lg:h-full items-center py-5 lg:px-[3%] "}>
            <div>
              <SectionTitleCar
                title={t("innerModel.specs")}
                isTextLeft={true}
              />
              <ul className={"space-y-3 lg:space-y-8 py-5 lg:py-10"}>
                  {data?.character?.map((item) => (
                    <li key={item?._id}>
                      <p className={"text-sm lg:text-base space-x-2"}>
                        <span>
                          {langSelect(i18n.language, item?.keyRu, item?.keyUz)}
                        </span> :
                        <span className={"font-bold"}>
                          {langSelect(i18n.language, item?.valueRu, item?.valueUz)}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
                <div className=" flex gap-4 max-lg:w-full max-lg:justify-center">
                <ButtonUI
                  text={t("btn.downloadCatalog")}
                   download={true}
                  href={`${process.env.NEXT_PUBLIC_API_URL}/${data?.pdf?.path}`}
                  />
                   <ButtonUI
                   text={t("btn.send")}
                   disabled={true}
                  />
                </div>
            </div>
          </div>
          {/* <div
            className={
              "flex justify-center items-center relative z-10 col-span-1 lg:col-span-2 mt-10 lg:mt-20"
            }
          >
            
          </div> */}
        </div>
      </div>
    </>
  );
};
export default ModelExterior;






const InteriorExterior = ({ isInterior, list , interior, setInterior, exterior, setExterior }) => {
  const { i18n } = useTranslation();

  const handleModelColor = ( car, exteriorId) => {
    if (!isInterior) {
      setExterior(car);
    }else  if (isInterior){
      setInterior(car);
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center  `">
      <div className={` w-full h-full  ${!isInterior && "relative z-5 md:py-[70px] py-5"}`}>
        <div className={`${isInterior ? 'absolute w-full h-1/2 top-0 left-0 lg:w-1/2 lg:h-full xl:w-[60%]' : 'h-full w-full'} `}>
          <ImgUI
             src={`${process.env.NEXT_PUBLIC_API_URL}/${isInterior ? interior?.carImage?.path : exterior?.carImage?.path}`}
             objectFitContain={isInterior ? false : true}
             alt={"banner"}
             imageStyle={"object-center"}
           />
        </div>
      </div>
      <div className="flex flex-col w-fit items-center absolute top-[38%] md:top-[41%] lg:top-auto lg:bottom-5 ">
        <div className="bg-white flex py-1 border-[0.5px] border-black/30 px-3 rounded-full items-center gap-3 lg:gap-4 mb-1">
          {list?.map((modelColor) => (
            <button
              onClick={() =>
                handleModelColor( modelColor, modelColor?._id)
              }
              key={modelColor?._id}
              className={`w-5 lg:w-7 aspect-square  overflow-hidden shrink-1  rounded-full relative border-2  ${
                isInterior ? interior?._id === modelColor?._id
                ? "border-borderBtn"
                : "border-currentTextBlack" : exterior?._id === modelColor?._id
                ? "border-borderBtn"
                : "border-currentTextBlack"
              }`}
            >
              <ImgUI
                src={`${process.env.NEXT_PUBLIC_API_URL}/${modelColor?.colorImage?.path}`}
                alt={"icon-color"}
              />
            </button>
          ))}
        </div>
        <span
          className={`shrink-1 text-nowrap text-white  shadow-text   text-[13px] font-semibold`}
        >
          {isInterior ? langSelect(
            i18n.language,
            interior?.colorNameRu,
            interior?.colorNameUz
          ) : langSelect(
            i18n.language,
            exterior?.colorNameRu,
            exterior?.colorNameUz
          )}
        </span>
      </div>
    </div>
  );
};
