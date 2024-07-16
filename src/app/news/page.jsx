import {BannerSmall, NewsCard} from "@/components";

export default function Page(props) {
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
        {
            image: '/news/news-inner4.jpg',
            date: "27 авг. 2021 г.",
            title: "Рождение GAC MOTOR",
            href: '/news',
            id: 3
        },
        {
            image: '/news/news-inner5.jpg',
            date: "14 янв. 2019 г.",
            title: "Дебют в Наласе, 2019: вход в мобильность будущего",
            href: '/news',
            id: 4
        },
        {
            image: '/news/news-inner6.jpg',
            date: "06 июля 2018 г.",
            title: "Национальный парк Три-Ривер-Сурс",
            href: '/news',
            id: 5
        },
        {
            image: '/news/news-inner7.jpg',
            date: "29 декабря 2017 г.",
            title: "Североамериканский международный автосалон 2018",
            href: '/news',
            id: 6
        },
    ]
    return (
        <>
            <section>
                <BannerSmall imgDes={'/news/news-baner.jpg'} imgMob={'/news/news-baner.jpg'}/>
            </section>
            <section className={'py-10 xl:py-[65px]'}>
                <div className="container-fluid">
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:px-10'}>
                        {
                            newsCards?.map(newsCard => (
                                <NewsCard title={newsCard?.title} href={newsCard?.href} image={newsCard?.image} date={newsCard?.date} key={newsCard?.id}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

