import React from 'react';
import {ButtonUI, ImgUI, SectionTitleCar} from "@/components/index";

const AboutUsSection = ({image , isImageLeft, title , text}) => {
    return (
        <>
            <div className={'grid grid-cols-1 lg:grid-cols-2 '}>
                <div className={`w-full aspect-[5/4] xl:aspect-[9/6] relative ${isImageLeft && 'lg:order-2 '}`}>
                    <ImgUI src={image} alt={'Image About Us'}/>
                </div>
                <div className={`py-[30px] px-[15px] lg:pb-0  lg:px-[75px] lg:pt-[75px] xl:pt-[120px] 2xl:pt-[140px] 3xl:pt-[175px]  ${isImageLeft ? "xl:pr-[85px] xl:pl-[190px] ] 2xl:pr-[100px] 2xl:pl-[220px] 3xl:pr-[125px] 3xl:pl-[275px] lg:order2 " : " xl:pl-[85px] xl:pr-[190px] ] 2xl:pl-[100px] 2xl:pr-[220px] 3xl:pl-[125px] 3xl:pr-[275px]"}  `}>
                    <SectionTitleCar extraStyle={'!text-start'} aboutPage={true} title={title}/>
                    <p className={'mt-4 text-currentTextBlack text-sm mb-[30px] xl:mt-[35px] xl:pb-[35px] xl:text-base 3xl:text-xl '}>{text}</p>
                
                </div>
            </div>
        </>
    );
};

export default AboutUsSection;