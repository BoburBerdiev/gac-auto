"use client"

import apiService from "@/service/axios";
import { useMutation, useQuery } from "react-query";
import { ButtonUI, ImgUI, InputUI, SelectColorBtn, SuccessModal } from "..";
import { useEffect, useState } from "react";
import { langSelect } from "@/helper";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";
import InputMask from 'react-input-mask';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setModel } from "@/slice/carSale";


export default function Page() {
    const navigate = useRouter()
    const { model } = useSelector((state) => state.carSale);
    const dispatch = useDispatch();
    const {t , i18n} = useTranslation()
    const [ carModel, setCarModel] = useState('')
    const [position , setPosition] = useState('')
    const [exterior , setExterior] = useState('')
    const [interior , setInterior] = useState('')
    const [stepCar , setStepCar] = useState(0)
    const [price , setPrice] = useState(1)
    const [successModal, setSuccessModal] = useState(false)
    const {
      data: modelsData,
      refetch: modelsRefetch,
      isLoading: modelsIsLoading,
      isSuccess: modelsIsSucces,
    } = useQuery(
       "carSaleModels",
       () => apiService.getData(`/car/car-sale`),
       { enabled: false }
    );

    const {
      data: exteriorData,
      refetch: exteriorRefetch,
      isLoading: exteriorIsLoading,
      isSuccess: exteriorIsSucces,
    } = useQuery(
      "carSaleExterior",
      () => apiService.getData(`/position/exterior/${position?._id}`),
      { enabled: false }
    )
    const {
      data: interiorData,
      refetch: interiorRefetch,
      isLoading: interiorIsLoading,
      isSuccess: interiorIsSucces,
    } = useQuery(
      "carSaleInterior",
      () => apiService.getData(`/exterior/interior/${exterior?._id}`),
      { enabled: false }
    )

    const {
      register,
      handleSubmit,
      reset,
      control,
      formState: {errors},
  } = useForm();
  const {
      mutate: userSalePost,
      data: userSalePostData,
      isLoading: userSalePostLoading,
      isSuccess: userSalePostSuccess,
  } = useMutation(({url, data}) => apiService.postData(url, data));


  useEffect(() => {
      if (userSalePostSuccess) {
          reset();
          setSuccessModal(true);
          dispatch(setModel(' '))
          setTimeout(() => {
              setSuccessModal(false);
              navigate.push("/");
          }, 2000);
      }
  }, [userSalePostSuccess]);

      useEffect(() => {
        if (model !== ' ') {
          modelsData?.forEach(car => {
            model === car?._id &&
            setCarModel(car) 
          })
        } else if (modelsIsSucces) {
            setCarModel(modelsData[1])
        }
      }, [modelsData, model])
      useEffect(() => {
        if(carModel) {
            setPosition(carModel?.position[0])
        }
      }, [carModel])

      useEffect(() => {
        if (position) {
          setPrice(Number(position?.price))
        }
      }, [position])
      useEffect(() => {
        if (exterior) {
          setPrice(prevState => prevState + Number(exterior?.price))
        }
      }, [exterior])
      useEffect(() => {
        if (interior) {
          setPrice(prevState => prevState + Number(interior?.price))
        }
      }, [interior])


      
      useEffect(() => {
        if (exteriorIsSucces) {
          setExterior(exteriorData?.exterior[0]);
        }
       }, [exteriorData]);
       useEffect(() => {
        if (interiorIsSucces) {
          setInterior(interiorData?.interior[0]);
        }
       }, [interiorData]);

      useEffect(() => {
        modelsRefetch();
      }, []);
      useEffect(() => {
        if (stepCar === 2) {
          exteriorRefetch();
        }
      }, [stepCar]);
      useEffect(() => {
        if (stepCar === 3) {
          interiorRefetch();
        }
      } , [stepCar])
      

      const changleStepCar = (step) => {
        if (step < stepCar) {
            setStepCar(step)
        }
      }
      const refreshSelects = () => {
        modelsRefetch()
        setStepCar(0)
      }
      const changeStepList = () => {
        if (stepCar === 0 ) {
            setStepCar(1)
        }else if (stepCar === 1 && position) {
            setStepCar(2)
        }else if (stepCar === 2 && exterior) {
            setStepCar(3)
        }else if (stepCar === 3 && interior) {
          setStepCar(4)
        }else if (stepCar === 4 ) {
          setStepCar(5)
        }
      }

      const onSubmit = (data) => {
        const postData = {...data, model : carModel?.name ,position : position?._id, exterior:exterior?._id, interior: interior?._id, price: price }
        userSalePost({url: '/order', data: postData})
      }
    return (
        <>
                <div className="px-2 md:px-5  lg:h-[calc(100vh-48px)] min-h-screen  lg:overflow-hidden bg-[#eeeff4] relative">
                    <div className={`grid  h-full grid-cols-1 lg:grid-cols-6 lg:grid-rows-1 grid-rows-2 `}>
                        <div className="relative h-full md:col-span-4 flex items-center justify-center ">
                            <div className="relative w-[90%] max-lg:my-20 aspect-video">
                                {
                                    (stepCar === 0 || stepCar === 1) &&
                                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${carModel?.carCard?.path}`} alt={'Image Gac'}  objectFitContain/>
                                }
                                {
                                    stepCar === 2 &&
                                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${exterior?.carImage?.path}`} alt={'Image Gac'} objectFitContain/>
                                }
                                {
                                    (stepCar === 3 || stepCar === 4) &&
                                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${interior?.carImage?.path}`} alt={'Image Gac'} />
                                }
                                 {
                                    stepCar === 5 &&
                                    <div className="w-full h-full flex flex-col items-center justify-center">
                                      <div className="w-[180px] h-9 lg:w-[240px] lg:h-12 xl:w-[300px] xl:h-16  relative">
                                      <ImgUI
                                        src={"/gac-logo.png"}
                                        alt={"logo_gacmotors"}
                                        objectFitContain
                                      />
                                      </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className={` h-auto  lg:my-20 w-full flex flex-col justify-between col-span-2 p-1 bg-white rounded-lg md:p-3  left-0 mt-0  `}>
                          {
                            stepCar === 5 ? 
                            <div className="flex flex-col  justify-center h-full">
                              <h5 className="text-xl font-semibold text-center mb-5">Оставить заявку</h5>
                              <form className={`px-5 space-y-2 md:space-y-5`} onSubmit={handleSubmit(onSubmit)}>
                                <InputUI register={{...register('userName', {required: true})}} isError={errors.userName} labelText={'Имя'} placeholder={'Ваше имя'} nameLabel={'userName'} errorText={'Пожалуйста, заполните'} />
                                            <div className="space-y-3">
                                                <label
                                                    htmlFor="phone"
                                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                                >
                                                    телефон
                                                </label>

                                                <InputMask
                                                    mask="+\9\98 (99) 999-99-99"
                                                    alwaysShowMask={false}
                                                    id={'phone'}
                                                    type={'text'}
                                                    className="bg-white border focus:bg-currentRed/5 duration-300 border-currentGray text-sm outline-none block w-full p-2.5"
                                                    placeholder="+998 99 999 99 99"
                                                    required
                                                    {...register("phone", {required: true})}
                                                />
                                                {errors.phone && (
                                                    <span className={"text-red-600 text-xs"}>
                                                     Требуется телефон
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-center">
                                            <ButtonUI
                                               text={userSalePostLoading ?
                                                <AiOutlineLoading className="animate-spin text-2xl"/> : t("btn.send")}
                                                 extraStyle={
                                                      "!px-7 !py-3 !text-sm !bg-borderBtn hover:!text-white text-white"
                                                 }
                                            />
                                            </div>
                                        </form>
                            </div>
                            : 
                            <>
                          {
                            stepCar === 4 ? 
                            <div className="py-5 h-full">
                              <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold ">{langSelect(i18n.language, position?.titleRu , position?.titleUz)}</h2>
                                <button onClick={() => refreshSelects()} className="px-2 py-1.5 rounded-lg border border-currentRed text-currentRed"><FiRefreshCcw /></button>
                              </div>
                              <div className="space-y-2 my-5 xl:my-8">
                                <div className="flex items-center p-2 bg-[rgba(51,51,51,.06)] border rounded gap-x-3">
                                  <div className="relative w-10 aspect-square rounded-full overflow-hidden  xl:w-[50px]">
                                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${exterior?.colorImage?.path}`} alt={'Color Image'}/>
                                  </div>
                                  <div className="text-[#333] space-y-1">
                                    <h5 className="text-xs font-semibold">{langSelect(i18n.language, exterior?.colorNameRu , exterior?.colorNameUz)}</h5>
                                  </div>
                                </div>
                                <div className="flex items-center p-2 bg-[rgba(51,51,51,.06)] border rounded gap-x-3">
                                  <div className="relative w-10 aspect-square rounded-full overflow-hidden  xl:w-[50px]">
                                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${interior?.colorImage?.path}`} alt={'Color Image'}/>
                                  </div>
                                  <div className="text-[#333] space-y-1">
                                    <h5 className="text-xs font-semibold">{langSelect(i18n.language, interior?.colorNameRu , interior?.colorNameUz)}</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="border-t border-[#eee] py-4 flex flex-col items-center gap-5">
                                <h5 className="text-xl font-bold text-center">Сводка конфигурации</h5>
                                <div className="w-full">
                                  <PositionCard positionChild={position}/>
                                </div>
                              </div>
                            </div> :
                            <div className="h-[90%]">
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
                              <div className="w-full h-[90%] overflow-hidden">
                                  <div className="overflow-y-scroll h-full pt-3 pb-2 md:pt-5">
                                      { 
                                          stepCar === 0 &&
                                          <div className=" grid grid-cols-2 gap-3 ">
                                              {   modelsIsLoading  ?
                                              <div className="flex flex-col items-center w-full">
                                                <AiOutlineLoading3Quarters className="animate-spin text-black tetx-center text-2xl" />
                                              </div>
                                                  :
                                                  modelsData?.map((model) => (
                                                      <div 
                                                          key={model?._id}
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
                                                modelsIsLoading  ?
                                                <div className="flex flex-col items-center w-full">
                                                  <AiOutlineLoading3Quarters className="animate-spin text-black tetx-center text-2xl" />
                                                </div>
                                                :  
                                                carModel?.position?.length > 0 ?
                                              
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
                                          <div className=" grid grid-cols-3 gap-2 xl:grid-cols-4">
                                              {   
                                                exteriorIsLoading  ?
                                                <div className="flex flex-col items-center w-full">
                                                  <AiOutlineLoading3Quarters className="animate-spin text-black tetx-center text-2xl" />
                                                </div>
                                                 :
                                                  exteriorData?.exterior?.length > 0 ?
                                                  exteriorData?.exterior?.map((positionChild) => (
                                                      <SelectColorBtn key={positionChild?._id}  setState={setExterior} state={exterior} item={positionChild} />
                                                  ))
                                                  :
                                                  <p className="">
                                                       No Products
                                                  </p>
                                              }
                                          </div>
                                      }
                                      {
                                          (stepCar === 3 ) &&
                                          <div className=" grid grid-cols-3 gap-2 xl:grid-cols-4">
                                              {   interiorIsLoading  ?
                                              <div className="flex flex-col items-center w-full">
                                                <AiOutlineLoading3Quarters className="animate-spin text-black tetx-center text-2xl" />
                                              </div>
                                                 :
                                                  interiorData?.interior?.length > 0 ?
                                                  interiorData?.interior?.map((positionChild) => (
                                                      <SelectColorBtn key={positionChild?._id}  setState={setInterior} state={interior} item={positionChild} />
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
                            </div>
                          }

                            <div className={`flex h-fit  items-center justify-between border-t py-3 `}>
                                <span className="flex flex-col text-[#333] space-y-1">
                                    <h5 className="text-xl font-bold">
                                       {price?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')}
                                    </h5>
                                </span>
                                <ButtonUI
                                    text={'Далее'}
                                    onClick={changeStepList}
                                    className="text-[#333] text-lg bg-transparent border border-[#333] p-4 flex  justify-center py-2 hover:text-white hover:bg-[#333] rounded-md transition-all ease duration-500"
                                >
                                    
                                </ButtonUI>
                            </div>
                            
                            </>
                          }




                        </div>

                    </div>
                </div>
                <SuccessModal setModal={setSuccessModal} modal={successModal}/>
        </>
    );
}


 const  PositionCard = ({position, setPosition , positionChild}) => {
    const [openList , setOpenList] = useState(false)
    const {t , i18n} = useTranslation()
  return (
    <div>
      <div onClick={setPosition ? () => setPosition(positionChild) : undefined} className={` ${position?._id === positionChild?._id && 'border-currentRed'} px-3 cursor-pointer  py-2 space-y-2 border-[.5px] rounded-lg`} >
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