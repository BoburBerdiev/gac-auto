"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay,  Pagination } from "swiper/modules";
import { ImgUI } from "@/components/index";

const SectionHeaderBanner = ({ priority = false, Quality, card, list }) => {
  return (
    <Swiper
      className={`section-slider w-full h-full relative `}
      pagination={{
        clickable: true,
        el: ".inner-pagination",
      }}
      loop={true}
      modules={[EffectFade, Autoplay, Pagination]}
    >
      {list?.map((slider) => (
        <SwiperSlide key={slider?._id} className="relative  w-full h-full">
          <ImgUI
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${slider?.bannerWeb?.path}`}
                    alt={'Banner Home'}
                    quality={Quality}
                    priority={priority}
                    Style={"!object-center max-lg:hidden"}
                    card={card || false}
                  />
                  <ImgUI
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${slider?.bannerRes?.path}`}
                    alt={'Banner Home'}
                    quality={Quality}
                    priority={priority}
                    imageStyle={"object-center lg:hidden"}
                    card={card || false}
                  />
        </SwiperSlide>
      ))}
      <div className="absolute bottom-5 w-full z-20 flex justify-center items-center">
        <div className="inline-flex items-center gap-x-4 inner-pagination "></div>
      </div>
    </Swiper>
  );
};

export default SectionHeaderBanner;