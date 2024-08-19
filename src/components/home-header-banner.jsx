"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { ImgUI } from "@/components/index";
import Link from "next/link";

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
                <SwiperSlide key={slider?._id} className="relative flex justify-center w-full h-full">
                <Link href={slider?.link ? slider?.link : '#'} className={`w-full h-full block relative`}>
                  {
                    slider?.bannerWeb ? 
                    <>
                  <ImgUI
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${slider?.bannerWeb?.path}`}
                    alt={'Banner Home'}
                    quality={Quality}
                    priority={priority}
                    Style={"!object-center object-cover max-lg:hidden"}
                    card={card || false}
                  />
                  <ImgUI
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${slider?.bannerRes?.path}`}
                    alt={'Banner Home'}
                    quality={Quality}
                    priority={priority}
                    imageStyle={"!object-center object-cover lg:hidden"}
                    card={card || false}
                  />
                    </> : 
                     <video className="!w-full !h-full object-cover" controls autoPlay  muted loop playsInline>
                     <source src={`${process.env.NEXT_PUBLIC_API_URL}/${slider?.video?.path}`} type="video/mp4" />
                   </video>
                  }
                </Link>
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