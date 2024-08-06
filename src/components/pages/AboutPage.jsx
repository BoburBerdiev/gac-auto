"use client"
import {
  AboutUsSection,
  BannerSmall,
  ButtonUI,
  ImgUI,
  NewsCard,
  SectionTitleCar,
} from "@/components";
import { langSelect } from "@/helper";
import { useTranslation } from "react-i18next";


const AboutPage = ({data}) =>{
  const {bannerRes, bannerWeb, aboutBrief, brandHistory, brandValues , awards} = data
  const {i18n, t} = useTranslation()
 
  const newsCards = [
    {
        image: '/news/news-inner1.jpg',
        date: "04 июля 2022 г.",
        title: "GAC MOTOR｜ЦВЕТ ЦВЕТ",
        href: '/news/1',
        id: 0
    },
    {
        image: '/news/news-inner2.jpg',
        date: "20 июня 2022 г.",
        title: "Премия GAC за дизайн 2022 года",
        href: '/news',
        id: 1
    },
    {
        image: '/news/news-inner3.jpg',
        date: "27 авг. 2021 г.",
        title: "История владельца GAC",
        href: '/news',
        id: 2
    },
  ]
  return (
    <>
      <section>
        <BannerSmall
          imgMob={`${process.env.NEXT_PUBLIC_API_URL}/${bannerRes?.path}`}
          imgDes={`${process.env.NEXT_PUBLIC_API_URL}/${bannerWeb?.path}`}
        />
      </section>
      <section className={"relative py-10  lg:pt-[55px] lg:pb-[70px]"}>
        <div className="container-fluid flex flex-col items-center gap-[30px] lg:gap-[50px]  3xl:gap-[70px]">
          <SectionTitleCar aboutPage={true} title={t('about.title')} />
          <div
            className={
              "grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-11 xl:gap-[50px] 3xl:gap-[70px]"
            }
          >
            <div className={"w-full relative !aspect-video "}>
              <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${aboutBrief?.image?.path}`} alt={"Image About"} />
            </div>
            <div
              className={
                "max-lg:space-y-5  text-currentTextBlack text-sm text-justify !leading-[1.5] xl:!leading-[1.8] 2xl:text-base 3xl:text-lg"
              }
            >
              <p className={"lg:py-2.5 xl:py-[15px] 2xl:py-5"}>
                {
                  langSelect(i18n.language , aboutBrief?.textRu ,  aboutBrief?.textUz)
                }
              </p>
              {/* <p className={"lg:py-2.5 xl:py-[15px] 2xl:py-5"}>
                На сегодняшний день GAC INTERNATIONAL успешно проник в рынки
                Ближнего Востока, Юго-Восточной Азии, Восточной Европы, Африки и
                Америка, всего 39 стран и регионов по всему миру. В в целях
                дальнейшей оптимизации пути развития, был уточнен международный
                стратегический план.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          "relative lg:aspect-[16/6] xl:aspect-[17/6] flex justify-center flex-col"
        }
      >
        <div className={"w-full aspect-[5/4] relative lg:hidden"}>
          <ImgUI
            src={`${process.env.NEXT_PUBLIC_API_URL}/${brandHistory?.imageRes?.path}`}
            alt={"Image History"}
          />
        </div>
        <div className={"w-full h-full absolute z-0 max-lg:hidden"}>
          <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${brandHistory?.imageWeb?.path}`} />
        </div>
        <div className="container-fluid relative z-10 py-[30px] ">
          <div className={"xl:!pl-[96px]"}>
            <SectionTitleCar
              extraStyle={"lg:!text-white !text-start"}
              aboutPage={true}
              title={ 
                langSelect(i18n.language , brandHistory?.titleRu ,  brandHistory?.titleUz)
              }
            />
            <p
              className={
                "mt-4 text-currentTextBlack text-sm mb-[30px] xl:mt-[35px] xl:pb-[40px] lg:text-white xl:text-base 3xl:text-xl "
              }
            >
             { 
                langSelect(i18n.language , brandHistory?.textRu ,  brandHistory?.textUz)
              }
            </p>
           
          </div>
        </div>
      </section>
      <section>
        {
          brandValues?.map((section , idx) => (
            <AboutUsSection
            key={section?._id}
              image={`${process.env.NEXT_PUBLIC_API_URL}/${section?.image?.path}`}
              title={langSelect(i18n.language , section?.titleRu ,  section?.titleUz)}
              isImageLeft={idx % 2 && true}
              text={
                langSelect(i18n.language , section?.textRu ,  section?.textUz)
              }
            />
          ))
        }
      </section>
      <section
        className={"py-10 xl:py-[60px] 2xl:py-[65px] 3xl:py-[85px] bg-white"}
      >
        <div className="container-fluid space-y-[30px] lg:space-y-[50px] 2xl:space-y-[55px] 3xl:space-y-[65px] ">
          <SectionTitleCar aboutPage={true} title={t('about.awards')} />
          <AwardsSection firstCardFull={true} list={awards} />
        </div>
      </section>
    </>
  );
}


const SocialResponsibilityCard = ({ title, image, isFullCard }) => {
  return (
    <div
      className={`w-full h-fit bg-white ${isFullCard === 0 ? "col-span-2" : "col-span-1"} `}
    >
      <div
        className={`w-full relative ${
                isFullCard
                  ? "aspect-[10/7] lg:aspect-[10/7]"
                  : " aspect-[10/7] lg:aspect-[8/3]"
              } 
           `}
      >
        <ImgUI src={image} alt={"Social Responsibility Card"} />
      </div>
      <div
        className={` pt-[15px] 3xl:pt-[25px]`}
      >
        <p
          className={`text-sm text-currentTextBlack !leading-[1.5] 2xl:text-base 3xl:text-lg line-clamp-2 h-[42px] xl:h-12 3xl:h-[54px] `}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

const AwardsSection = ({ list, firstCardFull }) => {
  const {i18n} = useTranslation()
  return (
    <div
      className={
        "w-full flex flex-col bg-white items-center gap-10 2xl:gap-[50px] 3xl:gap-[60px]"
      }
    >
      <div
        className={
          "grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] lg:gap-x-[30px]"
        }
      >
        {list?.map((card, index) => (
          <SocialResponsibilityCard
            key={card?._id}
            isFullCard={firstCardFull && index}
            title={langSelect(i18n.language , card?.titleRu ,  card?.titleUz)}
            image={`${process.env.NEXT_PUBLIC_API_URL}/${card?.image?.path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutPage