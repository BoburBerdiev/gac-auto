"use client";
import { CardServiceCar, ImgUI, NavbarCarInner, SaleCarModal } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FaCarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaDollarSign,
  FaDownload,
  FaFileContract,
  FaPhone,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Page() {
  const {t} = useTranslation()
  const interior = [
    {
      title: "Плоское нижнее рулевое колесо",
      image: "/empow-expansive1.jpg",
      id: 0,
    },
    {
      title: "Джойстик-переключатель",
      image: "/empow-expansive2.jpg",
      id: 1,
    },
    {
      title:
        "7 дюймов. экран приборной панели и 10,25-дюймовый. сенсорный дисплей",
      image: "/empow-expansive3.jpg",
      id: 2,
    },
  ];
  const swiperList = [
    {
      id: 0,
      title: "0,26CD сверхнизкий коэффициент аэродинамического сопротивления",
      image: "/empow-intelligent1.jpg",
    },
    {
      id: 1,
      title: "Помощь в рулевом управлении DP-EPS",
      image: "/empow-intelligent2.jpg",
    },
    {
      id: 2,
      title: "Динамическая поверхность",
      image: "/empow-intelligent3.jpg",
    },
    {
      id: 3,
      title: "Спортивное сиденье",
      image: "/empow-intelligent4.jpg",
    },
    {
      id: 4,
      title: "Спортивное сиденьеДоступна связь телефона с автомобилем.",
      image: "/empow-intelligent5.jpg",
    },
  ];

  const [saleModal , setSaleModal] = useState(false)
    
  useEffect(() => {
    if (saleModal === true) {
      document.body.classList.add('overflow-hidden')
    }else{
      document.body.classList.remove('overflow-hidden')
    }
  }, [saleModal])
  
  return (
    <div className={"relative"}>
      <NavbarCarInner />
      <section
        className={
          "w-full aspect-[5/7] xs:aspect-[4/3] lg:aspect-[16/7] relative overflow-hidden"
        }
      >
        <ImgUI src={"/empow-banner.jpg"} alt={"Banner"} />
      </section>
      <section>
        <h2
          className={
            "text-currentTextBlack text-center text-2xl lg:text-[42px] 2xl:text-[48px] 3xl:text-[60px] font-bold !leading-[1.2] py-10 px-[15px] lg:pt-[52px] 2xl:pt-[60px] 2xl:pb-12 3xl:pt-[75px] 3xl:pb-[60px]"
          }
        >
          Зажгите свое вдохновение вождения
        </h2>
        <PerfonmanceInterior list={interior} />
      </section>
      <section
        className={
          "w-full py-10 lg:pt-[60px] lg:pb-[50px] xl:pt-[70px] xl:pb-[55px] 3xl::pt-[90px] 3xl::pb-[70px]"
        }
      >
        <h2
          className={
            "text-currentTextBlack text-center text-2xl lg:text-[42px] 2xl:text-[48px] 3xl:text-[60px] font-bold !leading-[1.2] px-[15px] pb-[30px] lg:pb-[45px] 3xl:pb-[65px]"
          }
        >
          Интересно исследовать, никогда не скучно
        </h2>
        <PerfonmanceSwiper swiperList={swiperList} />
      </section>
      <section className={"bg-[#f5f5f5]  md:py-10"}>
                <div
                    className="container-fluid flex flex-wrap justify-evenly  divide-y md:divide-y-0 divide-[#e1e1e1] ">
                        <div className="w-full md:w-[30%] lg:w-[15%]">
                            <CardServiceCar href={'/drive'} text={t('serviceCard.testDrive')} id={'driveCard'} icon={<FaCarAlt />}/>
                        </div>
                        <div className="w-full md:w-[30%] lg:w-[15%]">
                            <CardServiceCar text={t('serviceCard.saleCar')} icon={<FaDollarSign /> } id={'saleCard'} onClick={()=> setSaleModal(true)}/>
                        </div>
                        <div className="w-full md:w-[30%] lg:w-[15%]">
                            <CardServiceCar download={true} href={'/AION-logo.png'} id={'catalogCard'} text={t('btn.downloadCatalog')} icon={<FaDownload />} />
                        </div>
                        <div className="w-full md:w-[30%] lg:w-[15%]">
                            <CardServiceCar href={'/dealers'} text={t('serviceCard.dealer')} id={'dealersCard'} icon={<FaFileContract />}/>      
                        </div>
                        <div className="w-full md:w-[30%] lg:w-[15%]">
                            <CardServiceCar href={'/dealers-center'} text={t('serviceCard.contactUs')} id={'contactCard'} icon={<FaPhone />}/>
                        </div>
                </div>
      </section>
      <SaleCarModal modal={saleModal} setModal={setSaleModal} />
    </div>
  );
}

const PerfonmanceInterior = ({ list }) => {
  return (
    <div className={"relative"}>
      <div
        className={
          "w-full max-lg:aspect-[23/10] lg:h-[700px] 2xl:h-[800px] 3xl:h-[900px] relative overflow-hidden"
        }
      >
        <div className={"w-full h-full relative z-[5]"}>
          <ImgUI
            src={"/empow-expansive-bg.jpg"}
            imageStyle={"object-center"}
            alt={"Interior Image"}
          />
        </div>
        <div
          className={
            "absolute top-0 left-0 w-full h-full z-10 bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.5)60%,rgba(0,0,0,0)100%)]"
          }
        />
      </div>
      <div
        className={
          "flex flex-wrap justify-evenly gap-5 lg:gap-7 xl:gap-[30px] max-lg:bg-black py-10 px-[15px] lg:absolute z-10 lg:px-7 xl:px-[6.7%] bottom-0 left-0 w-full xl:bottom-[12%]"
        }
      >
        {list?.map((card) => (
          <div
            key={card?.id}
            className={
              "flex flex-col items-center gap-3 md:gap-[15px] lg:gap-[30px] w-[45%] lg:w-[22%]"
            }
          >
            <div className={"w-full aspect-[16/10] relative"}>
              <ImgUI src={card?.image} alt={"Perfonmance Interior"} />
            </div>
            <h3
              className={
                "text-white text-center !leading-[1.5] text-sm 2xl:text-base 3xl:text-lg"
              }
            >
              {card?.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const PerfonmanceSwiper = ({ swiperList }) => {
  return (
    <>
      <Swiper
        slidesPerView={2.3}
        spaceBetween={15}
        breakpoints={{
          280: {
            slidesPerView: "1.2",
            spaceBetween: "20",
          },
          1024: {
            spaceBetween: "50",
          },
          1440: {
            spaceBetween: "60",
          },
          1680: {
            spaceBetween: "75",
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        loop={true}
        centeredSlides={true}
        className="perfonmanceSwiper !w-full"
      >
        {swiperList?.map((slider) => (
          <SwiperSlide key={slider?.id} className={"w-full "}>
            <div
              className={
                "flex flex-col items-center gap-5 2xl:gap-[25px] 3xl:gap-[30px]"
              }
            >
              <div className={"aspect-[7/4] w-full swiper-image"}>
                <div className={"h-full relative w-full"}>
                  <ImgUI src={slider?.image} alt={slider?.title} />
                </div>
              </div>
              <h3
                className={
                  "text-center !leading-[1.5] text-sm px-3.5 lg:text-lg "
                }
              >
                {slider?.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next absolute bottom-2 z-[40] max-md:hidden right-[34%] translate-x-[34%] text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
          <FaChevronRight />
        </div>
        <div className="swiper-button-prev absolute bottom-2 z-[40] max-md:hidden left-[29%] translate-x-[29%] text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
          <FaChevronLeft />
        </div>
      </Swiper>
    </>
  );
};
