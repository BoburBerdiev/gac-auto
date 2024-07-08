"use client"
import {CardServiceCar, ImgUI, NavbarCarInner} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

export default function Page(props) {
    const interior = [
        {
            title: 'Super large space',
            image: "/perfonmance/perfonmance-inner1.jpg",
            id:0
        },
        {
            title: 'All-new trims design',
            image: "/perfonmance/perfonmance-inner1.jpg",
            id:1
        },
        {
            title: 'Second Row 40/60 Split-folding Seats',
            image: "/perfonmance/perfonmance-inner1.jpg",
            id:2
        },
        {
            title: 'Panoramic electric sunroof and sunshade style sunroof',
            image: "/perfonmance/perfonmance-inner1.jpg",
            id:3
        },
    ]
    const swiperList = [
        {
            id: 0,
            title: '32 color ambient light',
            image: '/perfonmance/perfonmance-swiper1.jpg'
        },
        {
            id: 1,
            title: 'Dual smart screens',
            image: '/perfonmance/perfonmance-swiper2.jpg'
        },
        {
            id: 2,
            title: 'User-friendly configuration',
            image: '/perfonmance/perfonmance-swiper3.jpg'
        },
        {
            id: 3,
            title: 'New air outlet design',
            image: '/perfonmance/perfonmance-swiper4.jpg'
        },
    ]
    return (
        <div className={'relative'}>
            <NavbarCarInner/>
            <section className={'w-full h-[300px]  md:h-[500px] lg:h-[620px] xl:h-[800px] relative overflow-hidden'}>
                <ImgUI src={'/perfonmance/perfonmance-banner.jpg'} alt={'Banner'}/>
            </section>
            <section>
                <h2 className={'text-currentTextBlack text-center text-2xl lg:text-[42px] 2xl:text-[48px] 3xl:text-[60px] font-bold !leading-[1.2] py-10 px-[15px] lg:pt-[52px] 2xl:pt-[60px] 2xl:pb-12 3xl:pt-[75px] 3xl:pb-[60px]'}>
                    Luxurious cinema-like interior seating space
                </h2>
                <PerfonmanceInterior list={interior}/>
            </section>
            <section
                className={'w-full py-10 lg:pt-[60px] lg:pb-[50px] xl:pt-[70px] xl:pb-[55px] 3xl::pt-[90px] 3xl::pb-[70px]'}>
                <h2 className={'text-currentTextBlack text-center text-2xl lg:text-[42px] 2xl:text-[48px] 3xl:text-[60px] font-bold !leading-[1.2] px-[15px] pb-[30px] lg:pb-[45px] 3xl:pb-[65px]'}>
                    Intelligent technology, leading the trend and providing a smart experience
                </h2>
                <PerfonmanceSwiper swiperList={swiperList}/>
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


const PerfonmanceInterior = ({list}) => {
    return (
        <div className={'relative'}>
            <div
                className={'w-full max-lg:aspect-[23/10] lg:h-[700px] 2xl:h-[800px] 3xl:h-[900px] relative overflow-hidden'}>
                <div className={'w-full h-full relative z-[5]'}>
                    <ImgUI src={'/perfonmance/perfonmance-interior.jpg'} imageStyle={'object-center'} alt={'Interior Image'}/>
                </div>
                <div className={'absolute top-0 left-0 w-full h-full z-10 bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.5)60%,rgba(0,0,0,0)100%)]'}>
                    <ImgUI src={'/perfonmance/perfonmance-bg.jpg'} alt={'Interior Bg'}/>
                </div>
            </div>
            <div className={'flex flex-wrap justify-evenly gap-5 lg:gap-7 xl:gap-[30px] max-lg:bg-black py-10 px-[15px] lg:absolute z-10 lg:px-7 xl:px-[6.7%] bottom-0 left-0 w-full xl:bottom-[12%]'}>
                {
                    list?.map(card => (
                        <div key={card?.id} className={'flex flex-col items-center gap-3 md:gap-[15px] lg:gap-[30px] w-[45%] lg:w-[22%]'}>
                            <div className={'w-full aspect-[16/10] relative'}>
                                <ImgUI src={card?.image} alt={'Perfonmance Interior'}/>
                            </div>
                            <h3 className={'text-white text-center !leading-[1.5] text-sm 2xl:text-base 3xl:text-lg'}>
                                {card?.title}
                            </h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};


const PerfonmanceSwiper = ({swiperList}) => {
    return (
        <>
            <Swiper
                slidesPerView={2.3}
                spaceBetween={15}
                breakpoints={{
                    1024: {
                        spaceBetween: '50'
                    },
                    1440: {
                        spaceBetween: '60'
                    },
                    1680: {
                        spaceBetween: '75'
                    },
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                loop={true}
                centeredSlides={true}
                className="perfonmanceSwiper !w-full"
            >
                {
                    swiperList?.map(slider => (
                        <SwiperSlide key={slider?.id} className={'w-full '}>
                            <div className={'flex flex-col items-center gap-5 2xl:gap-[25px] 3xl:gap-[30px]'}>
                                <div className={'aspect-[7/4] w-full swiper-image'}>
                                    <div className={'h-full relative w-full'}>
                                        <ImgUI src={slider?.image} alt={slider?.title}/>
                                    </div>
                                </div>
                                <h3 className={'text-center !leading-[1.5] text-sm px-3.5 lg:text-lg '}>
                                    {
                                        slider?.title
                                    }
                                </h3>
                            </div>
                        </SwiperSlide>

                    ))
                }
                <div className="swiper-button-next absolute bottom-2 z-[40] max-md:hidden right-[34%] translate-x-[34%] text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl"><FaChevronRight /></div>
                <div className="swiper-button-prev absolute bottom-2 z-[40] max-md:hidden left-[34%] translate-x-[34%] text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl"><FaChevronLeft /></div>
            </Swiper>
        </>
    );
};



