import { CardServiceCar, HomeHeaderBanner } from "@/components";
import CardIndexPage from "@/components/card-index-page";

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
export default function Home() {
  return (
    <>
      <section className={"w-full h-screen aspect-square"}>
        <HomeHeaderBanner
          PaginationMod={true}
          isHeader={true}
          card={false}
          PaginationInner={true}
          list={swiperList}
        />
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3">
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
        </div>
      </section>
      <section className={"aspect-video"}>
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
      </section>
      <section className={"aspect-video"}>
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
      </section>
      <section className={"bg-[#f5f5f5]  md:py-10 py-4"}>
        <div className="container-fluid md:after:h-0 md:before:h-0 relative after:absolute after:top-0 after:h-[100%] after:w-[1px] after:left-[50%] after:translate-x-[50%] after:bg-[#e1e1e1] before:absolute before:left-[1%] before:top-[50%] before:bg-[#e1e1e1] before:h-[1px] before:translate-y-[50%] before:w-[98%] grid grid-cols-2 md:grid-cols-4  overflow-hidden">
          <CardServiceCar isIndexPage={true} />
          <CardServiceCar isIndexPage={true} />
          <CardServiceCar isIndexPage={true} />
          <CardServiceCar isIndexPage={true} />
        </div>
      </section>
    </>
  );
}
