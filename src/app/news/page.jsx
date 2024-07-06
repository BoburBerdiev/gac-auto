import {BannerSmall, NewsCard} from "@/components";

export default function Page(props) {
    const newsCards = [
        {
            image: '/news/news-inner1.jpg',
            date: "Jul 04,2022",
            title: "GAC MOTOR｜COLO COLO",
            href: '/news/1',
            id: 0
        },
        {
            image: '/news/news-inner2.jpg',
            date: "Jun 20,2022",
            title: "2022 GAC Design Award",
            href: '/news',
            id: 1
        },
        {
            image: '/news/news-inner3.jpg',
            date: "Aug 27,2021",
            title: "GAC Owner's Story",
            href: '/news',
            id: 2
        },
        {
            image: '/news/news-inner4.jpg',
            date: "Aug 27,2021",
            title: "Birth of a GAC MOTOR",
            href: '/news',
            id: 3
        },
        {
            image: '/news/news-inner5.jpg',
            date: "Jan 14,2019",
            title: "2019 Nalas Debut: Entranze To The Future Mobility",
            href: '/news',
            id: 4
        },
        {
            image: '/news/news-inner6.jpg',
            date: "Jul 06,2018",
            title: "Three River Source National Park",
            href: '/news',
            id: 5
        },
        {
            image: '/news/news-inner7.jpg',
            date: "Dec 29,2017",
            title: "2018 North American International Auto Show",
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

