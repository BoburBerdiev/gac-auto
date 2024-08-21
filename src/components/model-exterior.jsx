import React, { useEffect, useState } from "react";
import { ButtonUI, ImgUI, SectionTitleCar } from ".";
import { useTranslation } from "react-i18next";
import { langSelect } from "@/helper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { useQuery } from "react-query";
import apiService from "@/service/axios";
import {useDispatch , useSelector} from 'react-redux'

const   ModelExterior = ({ data, positionList }) => {
  const { t, i18n } = useTranslation();
  const [isInterior, setIsInterior] = useState(false);
  const dispatch = useDispatch()





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
      <div className="bg-white py-10">
        <div className="container space-y-4 md:space-y-9 ">
          <SectionTitleCar title={t('innerModel.positions')} />
          <div className="w-full flex flex-col items-center">
            <Swiper
              slidesPerView={3}
              pagination={true}
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
              modules={[Pagination]}
              className="positionsSwiper w-full relative max-w-[1300px] xl:!px-6 !px-4"
            >
              {positionList?.map((item) => (
                <SwiperSlide key={item?._id} className=" !h-auto rounded-xl overflow-hidden ">
                  <div
                    className={` bg-white  cursor-pointer !h-full flex flex-col justify-between `}
                    onClick={() => setPosition(item?._id)}
                  >
                    <div
                      className={`px-4 pt-3 pb-2 lg:pt-7 lg:pb-5 lg:px-7  text-white ${
                        item?._id === position ? "bg-borderBtn" : "bg-[#1A1A1A]"
                      }  md:p-5 lg:p-7 space-y-1`}
                    >
                      <h3 className="font-semibold text-lg md:text-xl lg:text-2xl !leading-[1.4]">
                        {langSelect(
                          i18n.language,
                          item?.titleRu,
                          item?.titleUz
                        )}
                      </h3>
                      <p className=" font-medium !leading-[1.4]">от {item?.price} сум</p>
                    </div>
                    <div className={` px-4 pt-3 pb-2 lg:pt-7 lg:pb-5 lg:px-7 h-full  bg-[#DDDDDD]  ${ item?._id === position ? "text-black" : "text-[#00000099]"}`}>
                      <p className="font-semibold pb-1 lg:pb-3 lg:text-lg">Основные опции</p>
                      <div className=" text-sm lg:text-base space-y-1.5 lg:space-y-2 ">
                        {item?.list?.map((child) => (
                          <div key={child?._id} className="flex gap-2">
                            <div className={`w-1 shrink-0 h-1 mt-2 rounded-full ${ item?._id === position ? "bg-black" : "bg-[#00000099]"} `}></div>
                            <p className="!leading-[1.2] font-medium">{langSelect(
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
             
            </Swiper>
          </div>
        </div>
      </div>
      {
        exteriorData &&
          <div className={ "bg-[#EFEFEF]  py-10 flex flex-col gap-7 lg:gap-8 "}>
            <div className="container flex flex-col items-center  max-lg:order-2">
              <SectionTitleCar title={t("innerModel.specs")} />
            </div>
              <div className="w-full max-lg:order-1">
                <InteriorExterior interior={interior} exterior={exterior} setInterior={setInterior} setExterior={setExterior} isInterior={isInterior} setIsInterior={setIsInterior} list={isInterior ? interiorData?.interior : exteriorData?.exterior ? exteriorData?.exterior : interiorData?.interior}/>
              </div>
              <div className="flex flex-wrap justify-evenly max-lg:order-3 !w-full gap-y-4">
                   {data?.character?.map((item) => (
                     <div key={item?._id} className="flex flex-col items-center text-center !w-[30%] lg:!w-[18%] xl:!w-[12%] gap-2">
                      <h4 className={"font-medium md:text-xl lg:text-2xl xl:text-4xl"}>
                        {langSelect(i18n.language, item?.valueRu, item?.valueUz)}
                      </h4>
                      <p className={"text-xs md:text-sm lg:text-base xl:text-xl"}>
                          {langSelect(i18n.language, item?.keyRu, item?.keyUz)}
                      </p>
                     </div>
                   ))}
              </div>
          </div>
      }
      
    </>
  );
};
export default ModelExterior;






const InteriorExterior = ({ isInterior, list , interior, setInterior, exterior, setExterior, setIsInterior }) => {
  const { i18n, t } = useTranslation();
  const handleModelColor = ( car) => {
    if (!isInterior) {
      setExterior(car);
    }else  if (isInterior){
      setInterior(car);
    }
  };
  return (
    <div className="w-full flex flex-col items-center relative justify-center ">
      <div className={`w-full relative aspect-[5/3] md:aspect-[43/21] lg:max-w-[700px] xl:max-w-[860px] z-[5] py-10`}>
        <ImgUI
           src={`${process.env.NEXT_PUBLIC_API_URL}/${isInterior ? interior?.carImage?.path : exterior?.carImage?.path}`}
           objectFitContain={isInterior ? false : true}
           alt={"banner"}
           imageStyle={"object-center"}
         />
      </div>
      <div className="container absolute z-20 flex flex-col gap-5 max-lg:justify-between  max-lg:w-full max-lg:h-full max-lg:top-0 max-lg:left-0 max-lg:py-1 ">
        <div className="flex  gap-2 max-lg:bg-white max-lg:py-2 max-lg:px-1 max-lg:rounded-full w-fit max-lg:flex-col">
           <div onClick={() => setIsInterior(false)} className={`p-1 lg:p-2 cursor-pointer rounded-full border border-[#CCCCCC] w-fit ${!isInterior ? "bg-[#C1C1C1]" : 'bg-white'}`} >
            <div className="relative w-6 h-6 lg:w-8 lg:h-8 ">
              <ImgUI src={'/car-icon.png'} objectFitContain/>
            </div>
           </div>
           {
             interior &&
             <div onClick={() => setIsInterior(true)} className={`p-1 lg:p-2 cursor-pointer rounded-full border border-[#CCCCCC] w-fit ${isInterior ? "bg-[#C1C1C1]" : 'bg-white'}`} >
              <div className="relative w-6 h-6 lg:w-8 lg:h-8 ">
                <ImgUI src={'/interior-icon.png'} objectFitContain/>
              </div>
             </div>
           }
        </div>
        <div className="w-fit max-lg:self-center flex relative flex-col max-lg:items-center">
          <div className="max-lg:bg-white  flex max-lg:py-1 mb-7 max-lg:border-[0.5px] border-black/30 max-lg:px-3 max-lg:rounded-full max-lg:items-center lg:flex-col gap-3 lg:gap-4 ">
            {list?.map((modelColor) => (
              <div className="flex items-center gap-2  max-lg:flex-col ">
                <button
                  onClick={() =>
                    handleModelColor( modelColor, modelColor?._id)
                  }
                  key={modelColor?._id}
                  className={`w-6 lg:w-10 aspect-square overflow-hidden  shrink-1  rounded-full relative border  ${
                    isInterior ? interior?._id === modelColor?._id
                    ? "border-black"
                    : "border-white" : exterior?._id === modelColor?._id
                    ? "border-black"
                    : "border-white"
                  }`}
                > 
                  <div className="w-full h-full relative !overflow-hidden ">
                    <ImgUI
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${modelColor?.colorImage?.path}`}
                      alt={"icon-color"}
                    />
                  </div>
                </button>
                {
                  isInterior ? interior?._id === modelColor?._id
                  ? <span className={`shrink-1 max-lg:absolute bottom-0 left-1/2 max-lg:-translate-x-1/2 z-10 text-nowrap ${isInterior ? 'text-white lg:text-black' : 'text-black'}   text-[13px] font-semibold`}>
                  {
                    isInterior ? langSelect( i18n.language, interior?.colorNameRu, interior?.colorNameUz) 
                    : langSelect( i18n.language, exterior?.colorNameRu, exterior?.colorNameUz)
                  }
                </span>
                  : " " : exterior?._id === modelColor?._id
                  ? <span className={`shrink-1 max-lg:absolute bottom-0 left-1/2 max-lg:-translate-x-1/2 z-10 text-nowrap ${isInterior ? 'text-white' : 'text-black'}   text-[13px] font-semibold`}>
                  {
                    isInterior ? langSelect( i18n.language, interior?.colorNameRu, interior?.colorNameUz) 
                    : langSelect( i18n.language, exterior?.colorNameRu, exterior?.colorNameUz)
                  }
                </span>
                  : " "
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};











//              








// <ButtonUI
//                   text={t("btn.downloadCatalog")}
//                    download={true}
//                   href={`${process.env.NEXT_PUBLIC_API_URL}/${data?.pdf?.path}`}
//                   />
//                    <ButtonUI
//                    text={t("btn.send")}
//                    disabled={true}
//                   />