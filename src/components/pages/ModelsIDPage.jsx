"use client";
import {
  FaDownload,
  FaFileContract,
  FaPhone,
  FaCarAlt,
  FaDollarSign,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import {
  ButtonUI,
  CardServiceCar,
  FeaturesCard,
  ImgUI,
  ModelExterior,
  NavbarCarInner,
  PerformanceCard,
  SaleCarModal,
  SectionTitleCar,
} from "@/components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { langSelect } from "@/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function ModelsDetails({ data }) {
  const [innerPage, setInnerPage] = useState('overview')
  const [saleModal, setSaleModal] = useState(false);
  console.log(data);
  const { t, i18n } = useTranslation();
  useEffect(() => {
   
    if (saleModal === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [saleModal]);

  const handleInnerPage = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    setInnerPage('performance')
  }
  return (
    <div className={"relative"}>
      <NavbarCarInner innerPage={innerPage} setInnerPage={setInnerPage}
        logo={`${process.env.NEXT_PUBLIC_API_URL}/${data?.logoInner?.path}`}
      />
      {
        innerPage === 'overview' && 
        <>
          <section
            className={
              "w-full aspect-[5/4] xs:aspect-[4/3] lg:aspect-[16/7] relative overflow-hidden"
            }
          >
            <ImgUI
              src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.overviewBannerRes?.path}`}
              alt={"banner"}
              imageStyle={"object-center lg:hidden"}
            />
            <ImgUI
              src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.overviewBannerWeb?.path}`}
              alt={"banner"}
              imageStyle={"object-center max-lg:hidden"}
            />
          </section>
          {
            data?.position.length > 0 &&
          <section>
            <ModelExterior data={data} positionList={data?.position}/>
          </section>
          }
          <section className={"relative md:py-10 py-5"}>
        <div className="container-fluid flex flex-wrap relative z-10 justify-evenly  divide-y md:divide-y-0 divide-[#e1e1e1] ">
          {
            data?.isTestDrive && 
              <div className="w-full md:w-[30%] lg:w-[15%]">
                <CardServiceCar
                  href={"/drive"}
                  text={t("serviceCard.testDrive")}
                  id={"driveCard"}
                  icon={<FaCarAlt />}
                />
              </div>
          }
          {/* <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              text={t("serviceCard.saleCar")}
              icon={<FaDollarSign />}
              id={"saleCard"}
              onClick={() => setSaleModal(true)}
            />
          </div> */}
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              download={true}
              href={`${process.env.NEXT_PUBLIC_API_URL}/${data?.pdf?.path}`}
              id={"catalogCard"}
              text={t("btn.downloadCatalog")}
              icon={<FaDownload />}
            />
          </div>
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              href={"/dealers"}
              text={t("serviceCard.dealer")}
              id={"dealersCard"}
              icon={<FaFileContract />}
            />
          </div>
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              href={"/dealers-center"}
              text={t("serviceCard.contactUs")}
              id={"contactCard"}
              icon={<FaPhone />}
            />
          </div>
        </div>
          </section>
          <section
            className={
              "bg-[#efefef]  md:bg-[url(/bg-car-inner.jpg)] bg-no-repeat bg-cover bg-top bg-scroll lg:pt-[90px] md:pt-[72px] pt-20 pb-[15px] lg:pb-[20px]"
            }
          >
            <div className="container">
              <SectionTitleCar title={t("innerModel.sizes")} />
              <div className={"w-full h-[350px] md:h-[450px] flex items-end"}>
                <div className={"relative h-[350px] w-full"}>
                  <ImgUI
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.sizeBannerWeb?.path}`}
                    alt={"Gag Image"}
                    imageStyle={"hidden md:block"}
                    objectFitContain={true}
                    priority={true}
                  />
                  <ImgUI
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.sizeBannerRes?.path}`}
                    alt={"Gag Image"}
                    imageStyle={"block md:hidden"}
                    objectFitContain={true}
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </section>
          {
            data?.performance?.titleRu !== '' &&
          <section className={ "bg-[#fff]  lg:pt-[90px] md:pt-[72px] pt-20 pb-[15px] lg:pb-[20px] space-y-8 md:space-y-12"}>
            <div className="container  ">
              <SectionTitleCar title={langSelect(i18n.language , data?.performance?.titleRu , data?.performance?.titleUz)} />
            </div>
            <PerfonmanceSwiper swiperList={data?.performance?.list}/>
            <div className={"flex justify-center items-center w-full "}>
              <ButtonUI text={t("btn.readMore")} onClick={() => handleInnerPage()} />
            </div>
          </section>
          }
          <section className="bg-[#f8f8f8] py-7 md:py-14 ">
            <div className="container flex flex-col items-center gap-6 md:gap-8 ">
              <SectionTitleCar title={t("innerModel.tvc")} />
              <div className="w-full aspect-video">
              <video className="w-full h-full " controls autoPlay  muted loop playsInline>
                <source src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.video?.path}`} type="video/mp4" />
              </video>
              </div>
            </div>
          </section>
          <section className={"bg-[#fff]  lg:pt-[90px] md:py-[72px] py-20 space-y-8 md:space-y-12 "}>
            <div className="container  ">
              <SectionTitleCar title={t("innerModel.features")} />
            </div>
              <div>
                <PerfonmanceSwiper swiperList={data?.feutures}/>
              </div>
              <div className={"flex justify-center items-center"}>
                <ButtonUI text={t("btn.readMore")} onClick={() => handleInnerPage()} />
              </div>
          </section>

        </>
      }
      {
        innerPage === 'performance' &&
        <>
          <section
            className={
              "w-full aspect-[5/4] xs:aspect-[4/3] lg:aspect-[16/7] relative overflow-hidden"
            }
          >
            <ImgUI
              src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.performanceBannerRes?.path}`}
              alt={"banner"}
              imageStyle={"object-center lg:hidden"}
            />
            <ImgUI
              src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.performanceBannerWeb?.path}`}
              alt={"banner"}
              imageStyle={"object-center max-lg:hidden"}
            />
          </section>
          <section className={"relative md:pt-10 pt-5"}>
        <div className="container-fluid flex flex-wrap relative z-10 justify-evenly  divide-y md:divide-y-0 divide-[#e1e1e1] ">
          {
            data?.isTestDrive && 
              <div className="w-full md:w-[30%] lg:w-[15%]">
                <CardServiceCar
                  href={"/drive"}
                  text={t("serviceCard.testDrive")}
                  id={"driveCard"}
                  icon={<FaCarAlt />}
                />
              </div>
          }
          {/* <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              text={t("serviceCard.saleCar")}
              icon={<FaDollarSign />}
              id={"saleCard"}
              onClick={() => setSaleModal(true)}
            />
          </div> */}
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              download={true}
              href={`${process.env.NEXT_PUBLIC_API_URL}/${data?.pdf?.path}`}
              id={"catalogCard"}
              text={t("btn.downloadCatalog")}
              icon={<FaDownload />}
            />
          </div>
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              href={"/dealers"}
              text={t("serviceCard.dealer")}
              id={"dealersCard"}
              icon={<FaFileContract />}
            />
          </div>
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              href={"/dealers-center"}
              text={t("serviceCard.contactUs")}
              id={"contactCard"}
              icon={<FaPhone />}
            />
          </div>
        </div>
          </section>
          {
            data?.design?.titleRu !== ''  &&
          <section>
            <div className="container py-10 px-[15px] lg:pt-[52px] 2xl:pt-[60px] 2xl:pb-12 3xl:pt-[75px] 3xl:pb-[60px] flex flex-col items-center gap-3">
              <SectionTitleCar title={langSelect(i18n.language , data?.design?.titleRu , data?.design?.titleUz )}/>
              <p className="text-center !leading-[1.5] text-sm  lg:text-lg ">{langSelect(i18n.language , data?.design?.textRu , data?.design?.textUz )}</p>
            </div> 
             <PerfonmanceSwiper swiperList={data?.design?.list} />
         </section>
          }
          <section>
           <div className="container py-10 px-[15px] lg:pt-[52px] 2xl:pt-[60px] 2xl:pb-12 3xl:pt-[75px] 3xl:pb-[60px]">
                <SectionTitleCar title={langSelect(i18n.language , data?.expensive.titleRu , data?.expensive.titleUz )}/>
           </div>
        <PerfonmanceInterior bannerImage={data?.expensive?.bannerImage?.path} list={data?.expensive?.list} />
         </section>
         <section
        className={
          "w-full py-10 lg:pt-[60px] lg:pb-[50px] xl:pt-[70px] xl:pb-[55px] 3xl::pt-[90px] 3xl::pb-[70px]"
        }
      >
        <div className="container pb-[30px] lg:pb-[45px] 3xl:pb-[65px]">
          <SectionTitleCar title={langSelect(i18n.language , data?.intelligent?.titleRu , data?.intelligent?.titleUz)}/>
        </div>
        <PerfonmanceSwiper swiperList={data?.intelligent?.list} />
         </section>
        </>
      }
      <SaleCarModal modal={saleModal} setModal={setSaleModal} />
    </div>
  );
}



const PerfonmanceInterior = ({ list, bannerImage }) => {
  const {i18n} = useTranslation()
  return (
    <div className={"relative"}>
      <div
        className={
          "w-full max-lg:aspect-[23/10] lg:h-[700px] 2xl:h-[800px] 3xl:h-[900px] relative overflow-hidden"
        }
      >
        <div className={"w-full h-full relative z-[5]"}>
          <ImgUI
            src={`${process.env.NEXT_PUBLIC_API_URL}/${bannerImage}`}
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
            key={card?._id}
            className={
              "flex flex-col items-center gap-3 md:gap-[15px] lg:gap-[30px] w-[45%] lg:w-[22%]"
            }
          >
            <div className={"w-full aspect-[16/10] relative rounded-lg overflow-hidden"}>
              <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${card?.image?.path}`} alt={"Perfonmance Interior"} />
            </div>
            <h3
              className={
                "text-white text-center !leading-[1.5] text-sm 2xl:text-base 3xl:text-lg"
              }
            >
              {langSelect(i18n.language , card?.titleRu , card?.titleUz)}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

const PerfonmanceSwiper = ({ swiperList }) => {
  const {i18n} = useTranslation()
  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        breakpoints={{
          280: {
            slidesPerView: "1.3",
            spaceBetween: "20",
          },
          768: {
            slidesPerView: "1.5",
            spaceBetween: "50",
          },
          1024: {
            slidesPerView: "1.8",
            spaceBetween: "50",
          },
          1440: {
            slidesPerView: "2.2",
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
        className={`perfonmanceSwiper  !w-full`}
      >
        {swiperList?.map((slider) => (
          <SwiperSlide key={slider?._id} className={"w-full h-full "}>
            <div
              className={
                "flex flex-col items-center gap-1 md:gap-5 2xl:gap-[25px] 3xl:gap-[30px]"
              }
            >
              <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${slider?.image?.path}`} alt={langSelect(i18n.language , slider?.titleRu , slider?.titleUz)} className="block object-cover object-center w-full h-full"
                         width={0} height={0} sizes={'100vw'} style={{width: '100%', height: 'auto'}}/>
              <h3
                className={
                  "text-center !leading-[1.5] text-xs break-words md:text-sm px-3.5 lg:text-lg "
                }
              >
                {langSelect(i18n.language , slider?.titleRu , slider?.titleUz)}
              </h3>
            </div>
          </SwiperSlide>
        ))}
          {
              swiperList.length ===3 &&
              <SwiperSlide className={"w-full h-full "}>
                  <div
                      className={
                          "flex flex-col items-center gap-1 md:gap-5 2xl:gap-[25px] 3xl:gap-[30px]"
                      }
                  >
                     <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${slider?.image?.path}`} alt={langSelect(i18n.language , slider?.titleRu , slider?.titleUz)} className="block object-cover object-center w-full h-full"
                         width={0} height={0} sizes={'100vw'} style={{width: '100%', height: 'auto'}}/>
                      <h3
                          className={
                              "text-center !leading-[1.5] text-xs break-words md:text-sm px-3.5 lg:text-lg "
                          }
                      >
                          {langSelect(i18n.language , swiperList[1]?.titleRu , swiperList[1]?.titleUz)}
                      </h3>
                  </div>
              </SwiperSlide>
          }
          <div className="absolute bottom-1/2 z-[40] w-full left-0 ">
            <div className=" container flex justify-between items-center">
              <div className={`swiper-button-prev  max-md:hidden  text-lg xl:text-2xl  p-2 rounded-full bg-currentRed text-white hover:scale-90 duration-200 `}>
                <FaChevronLeft />
              </div>
              <div className={`swiper-button-next  max-md:hidden  text-lg xl:text-2xl  p-2 rounded-full bg-currentRed text-white hover:scale-90 duration-200`}>
                <FaChevronRight />
              </div>
            </div>
          </div>
      </Swiper>
    </>
  );
};
