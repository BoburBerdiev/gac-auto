"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation ,Pagination } from "swiper/modules";
import {ImgUI} from "@/components/index";

const HomeHeaderBanner = ({

                              priority= false,
                            Quality,
                              card
                          }) => {
    return (

            <Swiper
                className={`header-slider w-full h-full relative `}
                spaceBetween={30}
                effect={"fade"}
                pagination={{
                    clickable: true,
                    el: ".inner-pagination",
                }}
                navigation={{
                    nextEl: ".swipper-button-next-btn",
                    prevEl: ".swipper-button-prev-btn",
                }}
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
            >
                <SwiperSlide
                    className="relative flex justify-center w-full h-full"
                >
                    <div className={`w-full h-full relative`}>
                        <ImgUI src={'/index-page/banner1.jpg'} alt={'banner'} quality={Quality} priority={priority}
                               imageStyle={'object-center'}
                               card={card || false}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className="relative flex justify-center w-full h-full"
                >
                    <div className={`w-full h-full relative`}>
                        <ImgUI src={'/index-page/banner1.jpg'} alt={'banner'} quality={Quality} priority={priority}
                               imageStyle={'object-center'}
                               card={card || false}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className="relative flex justify-center w-full h-full"
                >
                    <div className={`w-full h-full relative`}>
                        <ImgUI src={'/index-page/banner1.jpg'} alt={'banner'} quality={Quality} priority={priority}
                               imageStyle={'object-center'}
                               card={card || false}/>
                    </div>
                </SwiperSlide>

                    <div className="absolute bottom-5 w-full z-20 flex justify-center items-center">
                        <div className="inline-flex items-center gap-x-4 inner-pagination"></div>
                    </div>
            </Swiper>
    );
};

export default HomeHeaderBanner;