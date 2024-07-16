"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { ImgUI } from "@/components/index";

const HomeHeaderBanner = ({ priority = false, Quality, card, list  }) => {
  return (
    <Swiper
      className={`header-slider w-full h-full relative `}
       autoplay={{
          delay: 2500,
        }}
        loop={true}
      pagination={{
        clickable: true,
        el: ".inner-pagination",
      }}
    
      modules={[EffectFade, Autoplay, Pagination]}
    >
        {
            list?.map(slider => (
                <SwiperSlide key={slider?.id} className="relative flex justify-center w-full h-full">
                <div className={`w-full h-full relative`}>
                  <ImgUI
                    src={slider?.image}
                    alt={slider?.alt}
                    quality={Quality}
                    priority={priority}
                    imageStyle={"object-center"}
                    card={card || false}
                  />
                </div>
              </SwiperSlide>
            ))
        }
      <div className="absolute bottom-5 w-full z-20 flex justify-center items-center">
        <div className="inline-flex items-center gap-x-4 inner-pagination cursor-pointer"></div>
      </div>
    </Swiper>
  );
};

export default HomeHeaderBanner;