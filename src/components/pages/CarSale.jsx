"use client"

import { ImgUI } from "..";

export default function Page() {
    return (
        <>
         <div>
                <div className="px-2 md:px-5 h-screen  overflow-hidden bg-[#eeeff4] relative">
                    <div className={`grid mt-[60px]   grid-cols-1 lg:grid-cols-6 lg:grid-rows-1 grid-rows-2 lg:mt-[80px]`}>
                        <div className="relative h-[100%] md:h-full  md:col-span-4 ">
                            <div className="relative w-full h-full ">
                                {/* {loading ? (
                                    <div className="absolute top-[40%] left-[40%]">
                                        <img
                                            src={"/loading.gif"}
                                            alt={"loading leapmotor"}
                                            className={`w-5 h-5 md:w-[60px] md:h-[60px]`}
                                        />
                                    </div>
                                ) : (
                                    ""
                                )} */}

                                {/* {stepCar === "form-user" ?  */}
                                (
                                    <div className="flex items-center justify-center w-full h-full relative">
                                        <div className={'relative w-full h-full '}>
                                            <ImgUI
                                                fill
                                                src={"/login-bg.png"}
                                                alt={"login bg"}
                    //                             className={`duration-200 ease-in-out  
                    // ${
                    //                                 loading
                    //                                     ? "scale-110 blur-2xl grayscale"
                    //                                     : "scale-100  blur-0 grayscale-0"
                    //                             }
                    // `}
                                                priority={true}
                                                onLoadingComplete={() => setLoading(false)}
                                            />
                                        </div>
                                        <ImgUI
                                            width={300}
                                            height={200}
                                            src={"/login-logo.png"}
                                            alt={"login logo"}
                    //                         className={`duration-200 ease-in-out  
                    //   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    // ${
                    //                             loading
                    //                                 ? "scale-110 blur-2xl grayscale"
                    //                                 : "scale-100  blur-0 grayscale-0"
                    //                         }
                    // `}
                                            priority={true}
                                            onLoadingComplete={() => setLoading(false)}
                                        />
                                    </div>
                                ) 
                                {/* :  */}
                                (
                                    <ImgUI
                                        fill
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/${headerImage}`}
                                        alt={"banner image leapmotor"}
              //                           className={` ${
              //                               stepCar == "интерьер" ? "object-cover" : "object-contain"
              //                           } w-full h-full  duration-200 ease-in-out  
              // ${
              //                               loading
              //                                   ? "scale-110 blur-2xl grayscale"
              //                                   : "scale-100  blur-0 grayscale-0"
              //                           }
              //  `}
                                        priority={true}
                                        onLoadingComplete={() => setLoading(false)}
                                    />
                                )
                                {/* } */}
                            </div>
                        </div>
                        <div className={` h-[100%]  w-full col-span-2 p-1 bg-white rounded-lg md:p-3  left-0 mt-0  `}
                        >
                            <div
                                className={` 
                                ${
                                    // stepCar == "allProduct" || stepCar == "form-user"
                                    //     ? "hidden" 
                                    //     : "block lg:relative fixed"
                                    " "
                                }  
                                
                                
                                left-0 z-20   w-full lg:top-0 top-20 `}
                            >

                                <ul
                                    // onClick={(e) => returnStep(e)}
                                    className={` text-sm sm:text-xs flex justify-beetwen xl:text-sm font-medium text-center text-[#333] divide-x divide-gray-200 rounded-lg shadow  `}
                                >
                                    <li className="w-full">
                                        <button
                                            className={` inline-block w-full p-2  text-gray-900 rounded-l-lg   focus:outline-none `}
                                        >
                                            Версия
                                        </button>
                                    </li>
                                    <li className="w-full">
                                        <button
                                            className={`inline-block w-full p-2   focus:outline-none `}
                                        >
                                            Экстерьер
                                        </button>
                                    </li>
                                    <li className="w-full">
                                        <button
                                            className={`inline-block w-full p-2   focus:outline-none `}
                                        >
                                            Интерьер
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-3 pb-2 md:pt-5">

                                {stepCar === "Версия" ? (
                                    <SaleCardTitle title={"Выбрать Версия"}/>
                                ) : (
                                    ""
                                )}
                                {stepCar === "Экстерьер" ? (
                                    <SaleCardTitle title={"Выбрать Экстерьер"}/>
                                ) : (
                                    ""
                                )}
                                {stepCar === "интерьер" ? (
                                    <SaleCardTitle title={"Выбрать Интерьер"}/>
                                ) : (
                                    ""
                                )}
                               
                            </div>
                            <div
                                className={`
                ${
                                    stepCar === "allProduct"
                                        ? " h-[30vh] lg:h-[calc(100%-240px)]"
                                        : "h-[30vh] lg:h-[calc(100%-240px)]"
                                }
                
                ${
                                    stepCar === "form-user" ? "flex justify-center flex-col pb-4" : "overflow-y-scroll"
                                }  space-y-4 pb-3 md:pb-5    `}
                            >
                                {stepCar === "Версия" ? (
                                    <>
                                        <div className="text-[#333]">
                                            <div
                                                className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                                                {position?.data?.map((version) => {
                                                    const filterPosition=position.data.filter(item=>item?.price!==1)
                                                        return (
                                                            version?.price !== 1 && (
                                                                <div key={version?._id} className="col-span-4">
                                                                    <VersionCard
                                                                        headerImage={version?.image.path}
                                                                        title={version?.name}
                                                                        price={version?.price}
                                                                        content={version?.includedList}
                                                                        firstActive={filterPosition[0]}
                                                                    />
                                                                </div>
                                                            )
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    ""
                                )}
                                <></>
                                {stepCar === "Экстерьер" ? (
                                    <>
                                        <div className="text-[#333]">
                                            <div
                                                className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                                                {exterior?.data.map((ext) => (
                                                    <ColorCard
                                                        key={ext._id}
                                                        catalogType={stepCar}
                                                        colorImg={ext.colorImage.path}
                                                        img={ext.image.path}
                                                        colorName={ext.name}
                                                        firstActive={exterior.data[0]}
                                                        price={ext.price}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    ""
                                )}

                                {stepCar === "интерьер" ? (
                                    <>
                                        <div className="text-[#333]">
                                            <div
                                                className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                                                {interior?.data.map((int) => (
                                                    <ColorCard
                                                        key={int._id}
                                                        catalogType={stepCar}
                                                        colorImg={int.colorImage.path}
                                                        img={int.image.path}
                                                        colorName={int.name}
                                                        firstActive={interior.data[0]}
                                                        price={int.price}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    ""
                                )}
                                {/*{stepCar === "Необязательный" ? (*/}
                                {/*  <>*/}
                                {/*    {*/}
                                {/*      option?.data?.length > 0 ?*/}
                                {/*          <div className="text-[#333]">*/}
                                {/*            <div*/}
                                {/*                className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">*/}
                                {/*              {option?.data?.map((opt) => (*/}
                                {/*                  <ComplectCar*/}
                                {/*                      key={opt?._id}*/}
                                {/*                      bannerImage={opt.bannerImage.path}*/}
                                {/*                      headerImage={opt.mainImage.path}*/}
                                {/*                      includes={opt.includes}*/}
                                {/*                      title={opt.name}*/}
                                {/*                      price={opt.price}*/}
                                {/*                  />*/}
                                {/*              ))}*/}
                                {/*            </div>*/}
                                {/*          </div>*/}
                                {/*          :*/}

                                {/*          <p className={"text-xs opacity-40 font-bold text-center w-full"}>*/}
                                {/*          Для данной позиции не добавлено ни одного пакета. Вы можете перейти в следующий раздел*/}
                                {/*          </p>*/}
                                {/*    }*/}

                                {/*  </>*/}
                                {/*) : (*/}
                                {/*    ""*/}
                                {/*)}*/}
                                <></>
                                {stepCar === "allProduct" ? (
                                    <>
                                        <SaleCardTitle
                                            title={versionModel?.title}
                                            btnText={"refresh"}
                                            carModal={carModal}
                                        />
                                        <div className="border-b border-b-[#eee] py-4 space-y-2">
                                            <SaleList
                                                src={colorExterior?.colorImg}
                                                title={colorExterior?.colorName}
                                                // subtitle={colorExterior?.price}
                                            />
                                            <SaleList
                                                src={colorInterior?.colorImg}
                                                title={colorInterior?.colorName}
                                                // subtitle={colorInterior?.price}
                                            />
                                            {optionCar?.map((item, ind) => (
                                                <SaleList
                                                    key={ind}
                                                    src={item.headerImage}
                                                    title={item.optName}
                                                    // subtitle={item.price}
                                                />
                                            ))}
                                        </div>
                                        <div className="mb-3">
                                            <SaleCardTitle title={"Сводка конфигурации"}/>
                                        </div>
                                        {<VersionCard content={versionModel.content}/>}
                                    </>
                                ) : (
                                    ""
                                )}
                                {stepCar === "form-user" ? (
                                    <>
                                        {modal ? (
                                            <SaleCardTitle title={"Спасибо, ваша заявка принята."}/>
                                        ) : (
                                            <SaleCardTitle title={"Оставить заявку"}/>
                                        )}
                                        <form
                                            className={`${
                                                modal ? "hidden" : "block"
                                            } px-5 space-y-2 md:space-y-5`}
                                            onSubmit={handleSubmit(userSubmit)}
                                        >
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                                >
                                                    Имя
                                                </label>
                                                <input
                                                    {...register("userName", {
                                                        required: "Пожалуйста, заполните",
                                                    })}
                                                    type="text"
                                                    id="first_name"
                                                    className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                                    placeholder="Ваше имя"
                                                    required
                                                />
                                                {errors.userName && (
                                                    <span className={"text-red-600 text-xs"}>
                            Пожалуйста, заполните
                          </span>
                                                )}
                                            </div>
                                            <div className="space-y-3">
                                                <label
                                                    htmlFor="phone"
                                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                                >
                                                    телефон
                                                </label>

                                                <InputMask
                                                    // mask options
                                                    mask="+\9\98 (99) 999-99-99"
                                                    alwaysShowMask={false}
                                                    // input options
                                                    id={"buyerPhone"}
                                                    type={"text"}
                                                    placeholder="+998 99 999 99 99"
                                                    {...register("buyerPhone", {
                                                        required: "Пожалуйста, заполните",
                                                        minLength: {
                                                            value: 12,
                                                            message: "Пожалуйста, напишите свой полный номер",
                                                        },
                                                    })}
                                                    className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                                    required
                                                />
                                                {errors.buyerPhone && (
                                                    <span className={"text-red-600 text-xs"}>
                            Требуется регион
                          </span>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <button
                                                    type="submit"
                                                    className="text-[#333] text-lg bg-transparent border border-[#333] p-4 flex  justify-center py-2 hover:text-white hover:bg-[#333] rounded-md transition-all ease duration-500"
                                                >
                                                    {userPostLoading ? (
                                                        <span>
                              <LuLoader2 className={"animate-spin"}/>
                            </span>
                                                    ) : (
                                                        <span>Авторизоваться</span>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div
                                className={`${
                                    stepCar === "form-user" ? "hidden" : "flex"
                                }  items-center w-full h-auto py-5 lg:py-0 lg:h-[10vh] justify-between border-[#ddd] border-t fixed bottom-0 left-0 lg:static bg-white px-5 lg:px-0`}
                            >
                <span className="flex flex-col text-[#333] space-y-1">
                  <h5 className="text-xl font-bold">{priceModel?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')}</h5>
                    {/*<p className="text-xs">Депозит $5000</p>*/}
                </span>
                                <button
                                    onClick={changeStepList}
                                    className="text-[#333] text-lg bg-transparent border border-[#333] p-4 flex  justify-center py-2 hover:text-white hover:bg-[#333] rounded-md transition-all ease duration-500"
                                >
                                    {/* <MdDoubleArrow /> */}
                                    Далее
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

