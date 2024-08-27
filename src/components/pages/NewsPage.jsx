"use client"
import {BannerSmall, NewsCard} from "@/components";

export default function Page({list}) {
    return (
        <>
            <section>
                <BannerSmall imgDes={'/news-baner.jpg'}  imgMob={'/news-baner.jpg'}/>
            </section>
            <section className={'py-10 xl:py-[65px] min-h-[80vh]'}>
                <div className="container-fluid">
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:px-10'}>
                        {
                            list?.map(newsCard => (
                                <NewsCard news={newsCard} key={newsCard?._id}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

