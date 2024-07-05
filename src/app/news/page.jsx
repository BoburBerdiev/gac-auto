import {BannerSmall, ImgUI} from "@/components";
const bannerSlider = [
    {
        imgMob: '/news/news-baner.jpg',
        imgDes: '/news/news-baner.jpg',
        id: 0
    },
]

export default function Page(props) {
    return (
        <>
            <section>
                <BannerSmall list={bannerSlider}/>
            </section>
            <section className={'py-10 xl:py-[65px]'}>
                <div className="container-fluid">
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '}>
                        <NewsCard/>
                    </div>
                </div>
            </section>
        </>
    );
}

const NewsCard = () => {
    return (
        <div className={'bg-white w-full h-fit '}>
            <div className={'w-full aspect-[3/2] relative'}>
                <ImgUI src={'/news/news-inner1.jpg'}/>
            </div>
        </div>
    );
};

