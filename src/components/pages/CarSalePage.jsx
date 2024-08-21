"use client"

import apiService from "@/service/axios";
import { useQuery } from "react-query";
import { ImgUI } from "..";
import { useEffect, useState } from "react";
import { langSelect } from "@/helper";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


export default function Page() {
    const {t , i18n} = useTranslation()
    const [ carModel, setCarModel] = useState('')
    const [position , setPosition] = useState('')
    const [exterior , setExterior] = useState('')
    const [interior , setInterior] = useState('')
    const [stepCar , setStepCar] = useState(0)
    const {
        data: modelsData,
        refetch: modelsRefetch,
        isSuccess: modelsIsSucces,
      } = useQuery(
        "carSaleModels",
        () => apiService.getData(`/car/car-sale`),
        { enabled: false }
      );

      const {
        data: exteriorData,
        refetch: exteriorRefetch,
        isSuccess: exteriorIsSucces,
      } = useQuery(
        "carSaleExterior",
        () => apiService.getData(`/position/exterior/${position?._id}`),
        { enabled: false }
      );
      useEffect(() => {
        setExterior(exteriorData?.exterior[0]);
       }, [exteriorData]);

     useEffect(() => {
        if (modelsIsSucces) {
            setCarModel(modelsData[0])
        }
      }, [modelsData])
      useEffect(() => {
        modelsRefetch();
      }, []);

      useEffect(() => {
        if (position) {
          exteriorRefetch();
        }
      }, [position]);

     

      useEffect(() => {
        if(carModel) {
            setPosition(carModel?.position[0])
        }
      }, [carModel])

      const changleStepCar = (step) => {
        if (step < stepCar) {
            setStepCar(step)
        }
      }
      
      const changeStepList = () => {
        if (stepCar === 0) {
            setStepCar(1)
        }else if (stepCar === 1) {
            setStepCar(2)
        }else if (stepCar === 2) {
            setStepCar(3)
        }
      }

      console.log(carModel?.position?.length);
    return (
        <>
                <div className="px-2 md:px-5  lg:h-[calc(100vh-48px)]  lg:overflow-hidden bg-[#eeeff4] relative">
                    <div className={`grid  h-full grid-cols-1 lg:grid-cols-6 lg:grid-rows-1 grid-rows-2 `}>
                        <div className="relative h-full md:col-span-4 flex items-center justify-center ">
                            <div className="relative lg:w-[90%] aspect-video">
                                {
                                    (stepCar === 0 || stepCar === 1) &&
                                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${carModel?.carCard?.path}`} alt={'Image Gac'}  objectFitContain/>
                                }
                                {
                                    stepCar === 2 &&
                                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${exterior?.carImage?.path}`} alt={'Image Gac'} objectFitContain/>
                                }
                                {
                                    stepCar === 3 &&
                                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${interior?.carCard?.path}`} alt={'Image Gac'} />
                                }
                            </div>
                        </div>
                        <div className={` h-auto  lg:my-20 w-full flex flex-col justify-between col-span-2 p-1 bg-white rounded-lg md:p-3  left-0 mt-0  `}>
                            <div className="w-full h-fit">
                                <ul
                                    className={` text-sm sm:text-xs flex justify-beetwen xl:text-sm font-medium text-center text-[#333] divide-x divide-gray-200 rounded-lg shadow  `}>
                                    <li className="w-full">
                                        <button onClick={() => changleStepCar(0)} className={`inline-block ${stepCar === 0 && 'bg-[#eeeff4]'}  w-full p-2   focus:outline-none `}>
                                            Model
                                        </button>
                                    </li>
                                    <li className="w-full">
                                        <button onClick={() => changleStepCar(1)} className={`inline-block ${stepCar === 1 && 'bg-[#eeeff4]'}  w-full p-2   focus:outline-none `}>
                                            Position
                                        </button>
                                    </li>
                                    <li className="w-full">
                                        <button onClick={() => changleStepCar(2)} className={`inline-block ${stepCar === 2 && 'bg-[#eeeff4]'}  w-full p-2   focus:outline-none `}>
                                            Экстерьер
                                        </button>
                                    </li>
                                    <li className="w-full">
                                        <button onClick={() => changleStepCar(3)} className={`inline-block ${stepCar === 3 && 'bg-[#eeeff4]'}  w-full p-2   focus:outline-none `}>
                                            Интерьер
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full h-[60vh] overflow-hidden">
                                <div className="overflow-y-scroll h-full pt-3 pb-2 md:pt-5">
                                    { 
                                        stepCar === 0 &&
                                        <div className=" grid grid-cols-2 gap-3 ">
                                            {   modelsIsSucces &&
                                                modelsData?.map((model) => (
                                                    <div 
                                                        onClick={() => setCarModel(model)}
                                                        className={`border rounded flex flex-col cursor-pointer h-full items-center p-3 ${carModel?._id === model?._id && 'border-currentRed'}`}>
                                                        <h2>{model?.name}</h2>
                                                        <div className="relative w-full aspect-video">
                                                            <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${model?.carCard?.path}`} alt={"Car Image"}/>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                    {
                                        (stepCar === 1 ) &&
                                        <div className=" space-y-3">

                                            {   
                                                carModel?.position?.length >! 0 ?
                                            
                                               carModel?.position?.map((positionChild) => (
                                                    <PositionCard positionChild={positionChild} position={position} key={positionChild?._id} setPosition={setPosition} />
                                                ))
                                                :
                                                <p className="">
                                                     No Products
                                                </p>
                                            }
                                        </div>
                                    }
                                    {
                                        (stepCar === 2 ) &&
                                        <div className=" space-y-3">

                                            {   
                                                carModel?.position?.length >! 0 ?
                                            
                                               carModel?.position?.map((positionChild) => (
                                                    <PositionCard positionChild={positionChild} position={position} key={positionChild?._id} setPosition={setPosition} />
                                                ))
                                                :
                                                <p className="">
                                                     No Products
                                                </p>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className={` space-y-4 pb-3 md:pb-5    `}>
                               
                            </div>
                            <div className={`flex h-fit  items-center justify-between border-t py-3 `}>
                                <span className="flex flex-col text-[#333] space-y-1">
                                    <h5 className="text-xl font-bold">
                                        Price
                                    </h5>
                                </span>
                                <button
                                    disabled={carModel?.position?.length <! 0 ? true : false }
                                    onClick={changeStepList}
                                    className="text-[#333] text-lg bg-transparent border border-[#333] p-4 flex  justify-center py-2 hover:text-white hover:bg-[#333] rounded-md transition-all ease duration-500"
                                >
                                    Далее
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
        </>
    );
}


 const  PositionCard = ({position, setPosition , positionChild}) => {
    const [openList , setOpenList] = useState(false)
    const {t , i18n} = useTranslation()
  return (
    <div>
      <div onClick={() => setPosition(positionChild)} className={` ${position?._id === positionChild?._id && 'border-currentRed'} px-3 cursor-pointer  py-2 space-y-2 border-[.5px] rounded-lg`} >
        <div className="flex items-start gap-2 justify-between text-sm font-semibold">
          <h4> {langSelect(i18n.language , positionChild?.titleRu , positionChild?.titleUz)} </h4>
          <span className={'whitespace-nowrap'}>{positionChild?.price?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} </span>
        </div>
        <ul className="space-y-1 text-xs font-thin list-disc list-inside ">
          {
            positionChild?.list?.map((item , ind) => (
              <li className={`${ind < 3 || openList ?'':'hidden'}`} key={item?._id}>
                {langSelect(i18n.language , item?.titleRu , item?.titleUz)}
              </li>
            ))
          }
          <li className="list-none">
            <button onClick={() => (setOpenList(!openList))} className="flex items-center space-x-2">
              <span>больше конфигурации</span>
              {
                openList ? 
                <MdKeyboardArrowUp className='text-xl' />:
                <MdKeyboardArrowDown className="text-xl" />
              }
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}