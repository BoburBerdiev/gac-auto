"use client"
import {ImgUI} from "@/components/index";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSmall = ({list}) => {
    return (
        <div className={'w-full h-[30vh] md:h-[60vh] lg:h-[35vh] xl:h-[55vh] '}>
            <Swiper className="mySwiper !h-full">
                {
                    list?.map(image => (
                        <SwiperSlide key={image?.id}>
                            <div className={'relative z-10 !w-full  !h-full lg:hidden'}>
                                <ImgUI src={image?.imgMob} alt="Banner" />
                            </div>
                            <div className={'relative z-10 !w-full !h-full max-lg:hidden'}>
                                <ImgUI src={image?.imgDes} alt="Banner"/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
export default BannerSmall;