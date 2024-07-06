import React from 'react';
import {BannerSmall, ImgUI, SectionTitleCar} from "@/components";

export default function Page(props) {
    return (
        <>
            <section>
                <BannerSmall imgDes={'/news/news-baner.jpg'} imgMob={'/news/news-baner.jpg'}/>
            </section>
            <section className={'py-12 xl:py-[65px]'}>
                <div className="container-fluid space-y-7 lg:space-y-14 ">
                    <div>
                        <span className={'w-10 h-0.5 bg-borderBtn block'}></span>
                        <p className={'mt-2 text-lg text-black mb-4'}>Dec 29,2017</p>
                        <SectionTitleCar extraStyle={'!text-start'} aboutPage={true} isTextLeft={true}
                                         title={'GAC MOTOR Joins Chile Legendary Football Club Colo-Colo in Strategic Partnership '}/>
                    </div>
                    <div className={'space-y-5  text-currentTextBlack !leading-[1.5] text-sm lg:text-base  xl:text-lg'}>
                        <p>As of May 11, GAC MOTOR signs on as the strategic partner of Colo-Colo, one of the biggest
                            and most successful football clubs in Chile.</p>
                        <p>Colo-Colo, the largest and most popular football club in Chile, has won 32 Chilean Primera
                            División titles and 13 Chilean Cup titles. In addition, it is also the first Chilean club to
                            win the CONMEBOL Copa Libertadores, and is, therefore, crowned "El Eterno Campeón". With
                            Colo-Colo’s 4.8 million followers on social media.</p>
                        <p>Football is a sport that demonstrates the pursuit of outstanding techniques and the journey
                            of constant self-improvement. It is, therefore, in perfect harmony with </p>
                        <p>Colo-Colo, the largest and most popular football club in Chile, has won 32 Chilean Primera
                            División titles and 13 Chilean Cup titles. In addition, it is also the first Chilean club to
                            win the CONMEBOL Copa Libertadores, and is, therefore, crowned "El Eterno Campeón". With
                            Colo-Colo’s 4.8 million followers on social media. Football is a sport that demonstrates the
                            pursuit of outstanding techniques and the journey
                            of constant self-improvement. It is, therefore, in perfect harmony with </p>
                        <p>Colo-Colo, the largest and most popular football club in Chile, has won 32 Chilean Primera
                            División titles and 13 Chilean Cup titles. In addition, it is also the first Chilean club to
                            win the CONMEBOL Copa Libertadores, and is, therefore, crowned "El Eterno Campeón". With
                            Colo-Colo’s 4.8 million followers on social media. Football is a sport that demonstrates the
                            pursuit of outstanding techniques and the journey
                            of constant self-improvement. It is, therefore, in perfect harmony with
                            Colo-Colo, the largest and most popular football club in Chile, has won 32 Chilean Primera
                            División titles and 13 Chilean Cup titles. In addition, it is also the first Chilean club to
                            win the CONMEBOL Copa Libertadores, and is, therefore, crowned "El Eterno Campeón". With
                            Colo-Colo’s 4.8 million followers on social media. Football is a sport that demonstrates the
                            pursuit of outstanding techniques and the journey
                            of constant self-improvement. It is, therefore, in perfect harmony with
                            Colo-Colo, the largest and most popular football club in Chile, has won 32 Chilean Primera
                            División titles and 13 Chilean Cup titles. In addition, it is also the first Chilean club to
                            win the CONMEBOL Copa Libertadores, and is, therefore, crowned "El Eterno Campeón". With
                            Colo-Colo’s 4.8 million followers on social media. Football is a sport that demonstrates the
                            pursuit of outstanding techniques and the journey
                            of constant self-improvement. It is, therefore, in perfect harmony with</p>
                    </div>
                    <div className={'w-full aspect-video md:!aspect-[8/3] relative'}>
                        <ImgUI src={'/news/news-baner.jpg'} alt={'News Inner'}/>
                    </div>
                </div>
            </section>

        </>
    );
}
