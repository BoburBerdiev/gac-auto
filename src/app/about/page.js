import {
  AboutUsSection,
  BannerSmall,
  ButtonUI,
  ImgUI,
  SectionTitleCar,
} from "@/components";

export default function Page(props) {
  const awards = [
    {
      image: "/about/awards-1.jpg",
      id: 0,
      title:
        "GAC MOTOR занимает первое место 8 лет подряд в китайском исследовании качества J.D.power (IQS)",
    },
    {
      image: "/about/awards-2.jpg",
      id: 1,
      title:
        'Компания GAC MOTOR получила награду «10 лучших мировых брендов интеллектуальных транспортных средств 2023–2024 гг.»',
    },
    {
      image: "/about/awards-3.jpg",
      id: 2,
      title:
        "Престижная награда «Самый рекомендуемый внедорожник», присужденная арабским турбомотором — GAC MOTOR GS5.",
    },
    // {
    //     image: '/about/awards-4.jpg',
    //     id: 3,
    //     title: "The fashionable“Best Model of the Year”award, conferred by Al Qiyady——GAC MOTOR GS5"
    // },
    // {
    //     image: '/about/awards-5.jpg',
    //     id: 4,
    //     title: "“Born in Sanjiangyuan - National Park” Program as winner of the “Boyuan Award” ——Global Times"
    // },
    // {
    //     image: '/about/awards-6.jpg',
    //     id: 5,
    //     title: "Chinese No. 1 brand in J.D. Power IQS for six consecutive years from 2013 to 2018 ——J.D Power"
    // },
    // {
    //     image: '/about/awards-7.jpg',
    //     id: 6,
    //     title: "North American International Auto Show 2017“A new generation of excellent SUV”award ——GAC MOTOR GS7"
    // },
    // {
    //     image: '/about/awards-8.jpg',
    //     id: 7,
    //     title: "The Best Production Car Design China 2015 ——Japan's top magazine CARSTYLING"
    // },
    // {
    //     image: '/about/awards-9.jpg',
    //     id: 8,
    //     title: "The Fastest Growing Car Brand ——Bloomberg Businessweek"
    // },
    // {
    //     image: '/about/awards-10.jpg',
    //     id: 9,
    //     title: "Future Innovation Award ——Yahoo Finance"
    // },
    // {
    //     image: '/about/awards-11.jpg',
    //     id: 10,
    //     title: "North American International Auto Show 2017 “Outstanding world premiere car model” ——Trumpchi GS7"
    // },
  ];
  const socialResponsibility = [
    {
      image: "/about/social-responsibility-1.jpg",
      id: 0,
      title:
        "В апреле 2020 года GAC MOTOR реагирует на эпидемию Covid-19 профилактикой, защитой и помощью.",
    },
    {
      image: "/about/social-responsibility-2.jpg",
      id: 1,
      title:
        "В ноябре 2016 года компания GAC MOTOR в сотрудничестве с администрацией национального парка Саньцзянъюань и Всемирным фондом дикой природы разработала первый план защиты национальных парков Китая.",
    },
    // {
    //     image: '/about/social-responsibility-3.jpg',
    //     id: 2,
    //     title: "In September 2016, GAC MOTOR, rewarded Rio Olympicgold medalists of Guangdong origin, with a view to carrying forward the Olympic spirit of “higher, faster and stronger”."
    // },
    // {
    //     image: '/about/social-responsibility-4.jpg',
    //     id: 3,
    //     title: "In June 2016, GAC MOTOR donated RMB 5 million to Hualong Hospital in the Panyu District of Guangzhou to raise the level of local medical and health care and improve the living conditions of local residents."
    // },
    // {
    //     image: '/about/social-responsibility-5.jpg',
    //     id: 4,
    //     title: "Since 2016, our company has actively responded to the Opinion of the CPC Guangdong Provincial Party Committee and Guangdong Provincial People's Government."
    // },
    // {
    //     image: '/about/social-responsibility-6.jpg',
    //     id: 5,
    //     title: "From June to July 2017, GAC MOTOR donated RMB 10 million to the Hunan Charity Federation, earmarked for flood control and post-disaster reconstruction in Hunan."
    // },
    // {
    //     image: '/about/social-responsibility-7.jpg',
    //     id: 6,
    //     title: "Between 2012 and 2015, in cooperation with Shenzhen Society Thinking Welfare Foundation and Qinghai Education Department, GAC MOTOR organized public activities —highland mobile teaching vehicle ."
    // },
  ];

  return (
    <>
      <section>
        <BannerSmall
          imgMob={"/about/group-banner-mobile.jpg"}
          imgDes={"/about/group-banner.jpg"}
        />
      </section>
      <section className={"relative py-10  lg:pt-[55px] lg:pb-[70px]"}>
        <div className="container-fluid flex flex-col items-center gap-[30px] lg:gap-[50px]  3xl:gap-[70px]">
          <SectionTitleCar aboutPage={true} title={"О GAC INTERNATIONAL"} />
          <div
            className={
              "grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-11 xl:gap-[50px] 3xl:gap-[70px]"
            }
          >
            <div className={"w-full relative !aspect-video "}>
              <ImgUI src={"/about/about-section1.jpg"} alt={"Image About"} />
            </div>
            <div
              className={
                "max-lg:space-y-5  text-currentTextBlack text-sm text-justify !leading-[1.5] xl:!leading-[1.8] 2xl:text-base 3xl:text-lg"
              }
            >
              <p className={"lg:py-2.5 xl:py-[15px] 2xl:py-5"}>
                Компания Guangzhou Automobile Group Co., Ltd. («GAC») была
                зарегистрирована в июне 1997 года. В 2023 году объем
                производства и продаж GAC превысил 2,5 миллиона штук,
                продемонстрировав положительный рост по сравнению с предыдущим
                годом. Опираясь на экспортное планирование, группа GAC успешно
                развивала свой международный бизнес, и GAC INTERNATIONAL родился
                в нужное время.
              </p>
              <p className={"lg:py-2.5 xl:py-[15px] 2xl:py-5"}>
                На сегодняшний день GAC INTERNATIONAL успешно проник в рынки
                Ближнего Востока, Юго-Восточной Азии, Восточной Европы, Африки и
                Америка, всего 39 стран и регионов по всему миру. В в целях
                дальнейшей оптимизации пути развития, был уточнен международный
                стратегический план.
              </p>
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
            src={"/about/about-section2-mobile.jpg"}
            alt={"Image History"}
          />
        </div>
        <div className={"w-full h-full absolute z-0 max-lg:hidden"}>
          <ImgUI src={"/about/about-section2.jpg"} alt={"Image History"} />
        </div>
        <div className="container-fluid relative z-10 py-[30px] ">
          <div className={"xl:!pl-[96px]"}>
            <SectionTitleCar
              extraStyle={"lg:!text-white !text-start"}
              aboutPage={true}
              title={"История бренда"}
            />
            <p
              className={
                "mt-4 text-currentTextBlack text-sm mb-[30px] xl:mt-[35px] xl:pb-[40px] lg:text-white xl:text-base 3xl:text-xl "
              }
            >
             Узнайте больше о нашей истории развития
            </p>
            <ButtonUI
              text={"ИДТИ"}
              isBorderBtn={true}
              extraStyle={
                "lg:!border-white lg:!text-white hover:!border-borderBtn"
              }
            />
          </div>
        </div>
      </section>
      <section>
        <AboutUsSection
          image={"/about/about-section3.jpg"}
          title={"Интеллектуальное производство"}
          text={
            "Откройте для себя ведущие в мире возможности интеллектуального производства и исследований и разработок GAC MOTOR."
          }
        />
        <AboutUsSection
          image={"/about/about-section3.jpg"}
          isImageLeft={true}
          title={"Группа GAC"}
          text={
            "Ознакомьтесь с дополнительным профилем группы, организационной структурой и соответствующей информацией."
          }
        />
      </section>
      <section
        className={
          "py-10 xl:py-[60px] 2xl:py-[70px] 3xl:py-[90px] bg-[#f8f8f8]"
        }
      >
        <div className="container-fluid space-y-[30px] lg:space-y-[50px] 2xl:space-y-[55px] 3xl:space-y-[65px] ">
          <SectionTitleCar
            aboutPage={true}
            title={"Корпоративная социальная ответственность"}
          />
          <SocialResponsibility list={socialResponsibility} />
        </div>
      </section>
      <section
        className={"py-10 xl:py-[60px] 2xl:py-[65px] 3xl:py-[85px] bg-white"}
      >
        <div className="container-fluid space-y-[30px] lg:space-y-[50px] 2xl:space-y-[55px] 3xl:space-y-[65px] ">
          <SectionTitleCar aboutPage={true} title={"Награды"} />
          <AwardsSection firstCardFull={true} list={awards} />
        </div>
      </section>
    </>
  );
}

function SocialResponsibility({ list }) {
  return (
    <div
      className={
        "w-full flex flex-col items-center gap-10 2xl:gap-[50px] 3xl:gap-[60px]"
      }
    >
      <div
        className={
          "grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] lg:gap-x-[30px]"
        }
      >
        {list?.map((card) => (
          <SocialResponsibilityCard
            key={card?.id}
            title={card?.title}
            image={card?.image}
          />
        ))}
      </div>
      <ButtonUI isBorderBtn={true} text={"Показать больше"} />
    </div>
  );
}

function SocialResponsibilityCard({ title, image, isCardAwards, isFullCard }) {
  return (
    <div
      className={`w-full h-fit bg-white  ${
        isCardAwards ? "" : "shadow-aboutCard"
      } ${isFullCard === 0 ? "col-span-2" : "col-span-1"} `}
    >
      <div
        className={`w-full relative ${
          isCardAwards
            ? `${
                isFullCard
                  ? "aspect-[10/7] lg:aspect-[10/7]"
                  : " aspect-[10/7] lg:aspect-[8/3]"
              } `
            : "aspect-[7/4]"
        } `}
      >
        <ImgUI src={image} alt={"Social Responsibility Card"} />
      </div>
      <div
        className={` ${
          isCardAwards ? "pt-[15px] 3xl:pt-[25px]" : "px-[25px] py-[30px]"
        }  `}
      >
        <p
          className={`text-sm text-currentTextBlack !leading-[1.5] 2xl:text-base 3xl:text-lg ${
            isCardAwards
              ? "line-clamp-2 h-[42px] xl:h-12 3xl:h-[54px]"
              : "line-clamp-3  h-16 xl:h-[72px]  3xl:h-[81px]"
          }   `}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

function AwardsSection({ list, firstCardFull }) {
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
            key={card?.id}
            isFullCard={firstCardFull && index}
            isCardAwards={true}
            title={card?.title}
            image={card?.image}
          />
        ))}
      </div>
      <ButtonUI isBorderBtn={true} text={"Показать больше"} />
    </div>
  );
}
