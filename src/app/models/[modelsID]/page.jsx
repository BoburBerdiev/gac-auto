import {
    ButtonUI,
    CardServiceCar,
    FeaturesCard,
    ImgUI,
    NavbarCarInner,
    PerformanceCard,
    SectionTitleCar
} from "@/components";

export default function ModelsDetails() {
    return (
        <div className={'relative'}>
            <NavbarCarInner/>
            <section className={'w-full h-[300px]  md:h-[500px] lg:h-[620px] xl:h-[800px] relative overflow-hidden'}>
                <ImgUI src={'/car1.jpg'} alt={'banner'} imageStyle={'object-center'}/>
            </section>
            <section className={'bg-gradient-to-b md:bg-gradient-to-r to-white from-50%  from-[#41454b] to-50% md:py-[70px] py-5'}>
                <div className="container grid grid-cols-1 md:grid-cols-2 relative">
                    <div>
                        <SectionTitleCar title={'Specification'} isTextLeft={true} isTextWhite={true}/>
                        <ul className={'text-white  space-y-3 md:space-y-8 py-5 md:py-10'}>
                            <li>
                                <p className={'text-sm md:text-base space-x-2'}>
                                    <span>Maximum power:</span>
                                    <span className={'font-bold'}>100kW</span>
                                </p>
                            </li>
                            <li>
                                <p className={'text-sm md:text-base space-x-2'}>
                                    <span>Maximum power:</span>
                                    <span className={'font-bold'}>100kW</span>
                                </p>
                            </li>
                            <li>
                                <p className={'text-sm md:text-base space-x-2'}>
                                    <span>Maximum power:</span>
                                    <span className={'font-bold'}>100kW</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={'flex flex-col md:flex-row justify-start md:justify-end'}>
                            <div className={'relative md:absolute z-5 w-full shrink-1 h-[250px] md:w-[800px] md:h-[420px]  md:top-[0] md:left-[50%]  md:translate-x-[-50%]'}>
                                <div className={' relative w-full h-full '}>
                                    <ImgUI src={'/car-vehicle-color8.png'} objectFitContain={true} alt={'banner'}/>
                                </div>

                            </div>
                            <div
                                className={'flex flex-row w-[350px] overflow-x-scroll md:flex-col items-center justify-center md:justify-end gap-5 md:gap-y-3 relative z-20'}>
                                <button
                                    className={' p-0 md:py-2 md:px-3 cursor-pointer text-sm flex flex-col md:flex-row  md:justify-end items-center gap-x-2 border-none md:border rounded-full md:hover:bg-currentGray'}>
                                <span className={'shrink-1 text-nowrap order-2 md:order-1'}>
                                    Glamour Black
                                </span>
                                    <span
                                        className={'w-5 h-5 md:w-7 md:h-7 overflow-hidden order-1 md:order-2 relative rounded-full shrink-1'}>
                                    <ImgUI src={'/icon-car-color7.png'} alt={'icon-color'} objectFitContain={true}/>
                                </span>
                                </button>
                                <button
                                    className={' p-0 md:py-2 md:px-3 cursor-pointer text-sm flex flex-col md:flex-row  md:justify-end items-center gap-x-2 border-none md:border rounded-full md:hover:bg-currentGray'}>
                                <span className={'shrink-1 text-nowrap order-2 md:order-1'}>
                                    Glamour Black
                                </span>
                                    <span
                                        className={'w-5 h-5 md:w-7 md:h-7 overflow-hidden order-1 md:order-2 relative rounded-full shrink-1'}>
                                    <ImgUI src={'/icon-car-color7.png'} alt={'icon-color'} objectFitContain={true}/>
                                </span>
                                </button>
                                <button
                                    className={' p-0 md:py-2 md:px-3 cursor-pointer text-sm flex flex-col md:flex-row  md:justify-end items-center gap-x-2 border-none md:border rounded-full md:hover:bg-currentGray'}>
                                <span className={'shrink-1 text-nowrap order-2 md:order-1'}>
                                    Glamour Black
                                </span>
                                    <span
                                        className={'w-5 h-5 md:w-7 md:h-7 overflow-hidden order-1 md:order-2 relative rounded-full shrink-1'}>
                                    <ImgUI src={'/icon-car-color7.png'} alt={'icon-color'} objectFitContain={true}/>
                                </span>
                                </button>
                                <button
                                    className={' p-0 md:py-2 md:px-3 cursor-pointer text-sm flex flex-col md:flex-row  md:justify-end items-center gap-x-2 border-none md:border rounded-full md:hover:bg-currentGray'}>
                                <span className={'shrink-1 text-nowrap order-2 md:order-1'}>
                                    Glamour Black
                                </span>
                                    <span
                                        className={'w-5 h-5 md:w-7 md:h-7 overflow-hidden order-1 md:order-2 relative rounded-full shrink-1'}>
                                    <ImgUI src={'/icon-car-color7.png'} alt={'icon-color'} objectFitContain={true}/>
                                </span>
                                </button>
                                <button
                                    className={' p-0 md:py-2 md:px-3 cursor-pointer text-sm flex flex-col md:flex-row  md:justify-end items-center gap-x-2 border-none md:border rounded-full md:hover:bg-currentGray'}>
                                <span className={'shrink-1 text-nowrap order-2 md:order-1'}>
                                    Glamour Black
                                </span>
                                    <span
                                        className={'w-5 h-5 md:w-7 md:h-7 overflow-hidden order-1 md:order-2 relative rounded-full shrink-1'}>
                                    <ImgUI src={'/icon-car-color7.png'} alt={'icon-color'} objectFitContain={true}/>
                                </span>
                                </button>
                                <button
                                    className={' p-0 md:py-2 md:px-3 cursor-pointer text-sm flex flex-col md:flex-row  md:justify-end items-center gap-x-2 border-none md:border rounded-full md:hover:bg-currentGray'}>
                                <span className={'shrink-1 text-nowrap order-2 md:order-1'}>
                                    Glamour Black
                                </span>
                                    <span
                                        className={'w-5 h-5 md:w-7 md:h-7 overflow-hidden order-1 md:order-2 relative rounded-full shrink-1'}>
                                    <ImgUI src={'/icon-car-color7.png'} alt={'icon-color'} objectFitContain={true}/>
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-center items-center col-span-1 md:col-span-2 mt-10 md:mt-20'}>
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
