import { ButtonUI, CardCar, CardServiceCar, HomeHeaderBanner, NewsCard, SectionTitleCar } from "@/components";

const swiperList = [
  {
    id: 0,
    image: "/index-page/banner1.jpg",
    alt: "/index-page/banner1.jpg",
  },
  {
    id: 1,
    image: "/index-page/banner2.jpg",
    alt: "/index-page/banner2.jpg",
  },
  {
    id: 2,
    image: "/index-page/banner3.jpg",
    alt: "/index-page/banner3.jpg",
  },
  {
    id: 3,
    image: "/index-page/banner4.jpg",
    alt: "/index-page/banner4.jpg",
  },
  {
    id: 4,
    image: "/index-page/banner5.jpg",
    alt: "/index-page/banner5.jpg",
  },
  {
    id: 5,
    image: "/index-page/banner6.jpg",
    alt: "/index-page/banner6.jpg",
  },
];

const models = [
  {
    id: 0,
    href: "/models/1",
    category: "СЕДАН",
    logo: "/empow-logo1.png",
    image: "/empow.png",
    gearbox: "AT",
    seats: "5 Сиденья",
    fuel: "Бензин",
  },
  {
    id: 1,
    href: "",
    category: "СВ",
    logo: "/model-logo1.png",
    image: "/model-image1.png",
    gearbox: "AT",
    seats: "5 Сиденья",
    fuel: "Бензин",
  },
  {
    id: 2,
    href: "",
    category: "МИНИВЭН",
    logo: "/model-logo2.png",
    image: "/model-image2.png",
    gearbox: "AT",
    seats: "7 Сиденья",
    fuel: "Бензин",
  },
];
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
  // {
  //     image: '/news/news-inner4.jpg',
  //     date: "27 авг. 2021 г.",
  //     title: "Рождение GAC MOTOR",
  //     href: '/news',
  //     id: 3
  // },
  // {
  //     image: '/news/news-inner5.jpg',
  //     date: "14 янв. 2019 г.",
  //     title: "Дебют в Наласе, 2019: вход в мобильность будущего",
  //     href: '/news',
  //     id: 4
  // },
  // {
  //     image: '/news/news-inner6.jpg',
  //     date: "06 июля 2018 г.",
  //     title: "Национальный парк Три-Ривер-Сурс",
  //     href: '/news',
  //     id: 5
  // },
  // {
  //     image: '/news/news-inner7.jpg',
  //     date: "29 декабря 2017 г.",
  //     title: "Североамериканский международный автосалон 2018",
  //     href: '/news',
  //     id: 6
  // },
]
export default function Home() {
  return (
    <>
      <section className={"w-full h-[60vh] aspect-square"}>
        <HomeHeaderBanner
          PaginationMod={true}
          isHeader={true}
          card={false}
          PaginationInner={true}
          list={swiperList}
        />
      </section>
      <section className="py-10 md:py-20  ">
        <div className="flex flex-col items-center container-fluid gap-6 md:gap-9 lg:gap-11">
          <SectionTitleCar title={'Наши модели'} aboutPage={false}/>
          <div className="grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4 md:gap-8 lg:gap-10 ">
            {
              models.map(car => (
                <CardCar model={car} key={car?.id}/>
              ))
            }
          </div>
          <ButtonUI href={'/models'} text={'Показать больше'} isBorderBtn={true}  />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3">
          <CardIndexPage
            header_title={"Модели"}
            hrefTo={'/models'}
            title={"Sedan"}
            card={false}
            image={"/index-page/models-3.jpg"}
            height={"aspect-square "}
            container={"container"}
          />
          <CardIndexPage
            header_title={"Модели"}
            hrefTo={'/models'}
            title={"SUV"}
            image={"/index-page/models-1.jpg"}
            card={false}
            height={"aspect-square "}
            container={"container"}
          />
          <CardIndexPage
            hrefTo={'/models'}
            header_title={"Модели"}
            title={"MPV"}
            image={"/index-page/models-2.jpg"}
            card={false}
            height={"aspect-square "}
            container={"container"}
          />
        </div> */}
      </section>
      <section className="pb-10 md:pb-20  ">
      <div className="flex flex-col items-center container-fluid gap-6 md:gap-9 lg:gap-11">
          <SectionTitleCar title={'Наши новости'} aboutPage={false}/>
          <div className="grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3  gap-4 md:gap-8 lg:gap-10 ">
            {
              newsCards.map(news => (
                <NewsCard image={news?.image} date={news?.date} href={news?.href} title={news?.title} key={news?.id}/>
              ))
            }
          </div>
          <ButtonUI href={'/news'} text={'Показать больше'} isBorderBtn={true}  />
        </div>
      </section>
      {/* <section className={"aspect-video"}>
        <CardIndexPage
          darkPercentage={"50"}
          hrefTo={'/news'}
          header_title={"Новости"}
          button={"Подробнее"}
          image={"/index-page/news.jpg"}
          card={false}
          height={"aspect-square md:aspect-video"}
          container={"container"}
        />
      </section> */}
      {/* <section className={"aspect-video"}>
        <CardIndexPage
          header_title={"Инновации"}
          hrefTo={' '}
          image={"/index-page/home-innovations.jpg"}
          subTitle={"Интеллектуальная система"}
          text={
            "EMPOW — это не просто первая спортивная модель в архитектуре GPMA; он также будет использовать взаимосвязанную экосистему умного вождения ADiGO, а также совершенно новую технологию Mega Wave Power от GAC."
          }
          card={false}
          height={"aspect-square md:aspect-video"}
          container={"container"}
        />
      </section> */}
      {/* <section className={"bg-[#f5f5f5]  md:py-10 py-4"}>
        <div className="container-fluid md:after:h-0 md:before:h-0 relative after:absolute after:top-0 after:h-[100%] after:w-[1px] after:left-[50%] after:translate-x-[50%] after:bg-[#e1e1e1] before:absolute before:left-[1%] before:top-[50%] before:bg-[#e1e1e1] before:h-[1px] before:translate-y-[50%] before:w-[98%] grid grid-cols-2 md:grid-cols-4  overflow-hidden">
          <CardServiceCar isIndexPage={true} />
          <CardServiceCar isIndexPage={true} />
          <CardServiceCar isIndexPage={true} />
          <CardServiceCar isIndexPage={true} />
        </div>
      </section> */}
    </>
  );
}
