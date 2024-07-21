"use client"

import {
    ButtonUI,
    CardServiceCar,
    FeaturesCard,
    ImgUI,
    NavbarCarInner,
    PerformanceCard,
    SectionTitleCar
} from "@/components";

const modelColors = [
    {
        id: 0,
        name: 'Lucky Gold',
        icon: "/icon-car-color7.png",
        active:true
    },
    {
        id: 1,
        name: 'Lucky Gold',
        icon: "/icon-car-color7.png",
        active: false
    },
    {
        id: 2,
        name: 'Lucky Gold',
        icon: "/icon-car-color7.png",
        active:false    
    },
    {
        id: 3,
        name: 'Lucky Gold',
        icon: "/icon-car-color7.png",
        active: false
    },
    {
        id: 4,
        name: 'Lucky Gold',
        icon: "/icon-car-color7.png",
        active: false
    },
    {
        id: 5,
        name: 'Lucky Gold',
        icon: "/icon-car-color7.png",
        active: false
    },
]
export default function ModelsDetails() {
    return (
        <div className={'relative'}>
            <NavbarCarInner/>
            <section className={'w-full h-[300px]  md:h-[500px] lg:h-[620px] xl:h-[800px] relative overflow-hidden'}>
                <ImgUI src={'/index-page/banner1.jpg'} alt={'banner'} imageStyle={'object-center'}/>
            </section>
            <section className={'bg-gradient-to-b lg:bg-gradient-to-r to-white from-50%  from-[#41454b] to-50% md:py-[70px] py-5'}>
                <div className="container grid grid-cols-1 lg:grid-cols-2 relative">
                    <div>
                        <SectionTitleCar title={'Specification'} isTextLeft={true} isTextWhite={true}/>
                        <ul className={'text-white  space-y-3 lg:space-y-8 py-5 lg:py-10'}>
                            <li>
                                <p className={'text-sm lg:text-base space-x-2'}>
                                    <span>Maximum power:</span>
                                    <span className={'font-bold'}>100kW</span>
                                </p>
                            </li>
                            <li>
                                <p className={'text-sm lg:text-base space-x-2'}>
                                    <span>Maximum power:</span>
                                    <span className={'font-bold'}>100kW</span>
                                </p>
                            </li>
                            <li>
                                <p className={'text-sm lg:text-base space-x-2'}>
                                    <span>Maximum power:</span>
                                    <span className={'font-bold'}>100kW</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={'flex flex-col lg:flex-row justify-start lg:justify-end'}>
                            <div className={'w-full shrink-1 h-[250px] lg:w-[600px] lg:h-[200px] xl:w-[700px] xl:h-[350px] '}>
                                <div className={' lg:absolute relative z-5 h-[250px] lg:w-[800px] xl:w-[850px] xl:h-[450px] lg:h-[320px] lg:top-[0] lg:left-[50%]  lg:translate-x-[-50%]'}>
                                    <ImgUI src={'/car-vehicle-color8.png'} objectFitContain={true} alt={'banner'}/>
                                </div>

                            </div>
                            <div
                                className={'flex flex-row w-full lg:flex-col items-center  lg:items-end justify-center lg:justify-end gap-5 lg:gap-y-3 relative z-20'}>
                                    {
                                        modelColors.map(modelColor => (
                                            <button key={modelColor?.id} className={`p-0 lg:py-1 lg:px-2 group cursor-pointer text-sm max-lg:pb-7 flex flex-col lg:flex-row  lg:justify-end items-center  border-none lg:border rounded-full relative  lg:hover:bg-[#ededed] lg:hover:shadow-modelColor ${modelColor?.active && ' lg:bg-[#ededed] lg:shadow-modelColor'}`}>
                                                <span className={`shrink-1 text-nowrap max-lg:absolute bottom-0  order-2 lg:order-1 text-[13px] font-semibold lg:px-5 lg:px-7 lg:group-hover:block ${modelColor?.active === true ? "block" : 'hidden'} `}>
                                                   { modelColor?.name}
                                                </span>
                                                <div className="">

                                                </div>
                                                <span className={'w-5 aspect-square lg:w-6 overflow-hidden  order-1 lg:order-2 relative rounded-full shrink-1'}>
                                                    <ImgUI src={modelColor?.icon} alt={'icon-color'} objectFitContain={true}/>
                                                </span>
                                           </button>
                                        ))
                                    }
                               
                               
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-center items-center relative z-10 col-span-1 lg:col-span-2 mt-10 lg:mt-20'}>
                        <ButtonUI text={'Read More'} href={'#'}/>
                    </div>
                </div>
            </section>
            <section
                className={'bg-[#efefef]  md:bg-[url(/bg-car-inner.jpg)] bg-no-repeat bg-cover bg-top bg-scroll lg:pt-[90px] md:pt-[72px] pt-20 pb-[15px] lg:pb-[20px]'}>
                <div className="container">
                    <SectionTitleCar title={'Dimensions'}/>
                    <div className={'w-full h-[350px] md:h-[450px] flex items-end'}>
                        <div className={'relative h-[350px] w-full'}>
                            <ImgUI src={'/dimensions-pic.png'} alt={'Gag Image'} imageStyle={'hidden md:block'} objectFitContain={true}
                                   priority={true}/>
                            <ImgUI src={'/dimensions-pic-mobile.png'} alt={'Gag Image'}  imageStyle={'block md:hidden'}
                                   objectFitContain={true} priority={true}/>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={'bg-[#fff]  lg:pt-[90px] md:pt-[72px] pt-20 pb-[15px] lg:pb-[20px]'}>
                <div className="container space-y-8 md:space-y-12 ">
                    <SectionTitleCar title={'The best style for fashion enthusiasts'}/>
                    <div className={'grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8'}>
                        <PerformanceCard src={'/performance-pic1.jpg'} isPng={true}
                                         text={'All-new megawave 3rd generation 1.5T GDI engine'}/>
                        <PerformanceCard src={'/performance-pic1.jpg'} isPng={true}
                                         text={'All-new megawave 3rd generation 1.5T GDI engine'}/>
                        <PerformanceCard src={'/performance-pic1.jpg'} isPng={true}
                                         text={'All-new megawave 3rd generation 1.5T GDI engine'}/>
                    </div>
                    <div className={'flex justify-center items-center '}>
                        <ButtonUI text={'Read More'} href={'/models/1/perfonmance'}/>
                    </div>
                </div>
            </section>
            <section
                className={'bg-[#fff]  lg:pt-[90px] md:py-[72px] py-20 '}>
                <div className="container space-y-8 md:space-y-12 ">
                    <SectionTitleCar title={'Features'}/>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
                        <FeaturesCard/>
                        <FeaturesCard/>
                        <FeaturesCard/>
                        <FeaturesCard/>
                    </div>
                    <div className={'flex justify-center items-center'}>
                        <ButtonUI text={'Read More'} href={'/models/1/perfonmance'}/>
                    </div>
                </div>
            </section>
            <section className={'bg-[#f5f5f5]  md:py-10'}>
                <div
                    className="container-fluid flex flex-col md:flex-row justify-center gap-x-20 divide-y md:divide-y-0 divide-[#e1e1e1] ">
                    <CardServiceCar/>
                    <CardServiceCar/>
                    <CardServiceCar/>
                </div>
            </section>
        </div>
    );
}
