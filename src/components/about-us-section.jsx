"use client"
import { ImgUI, SectionTitleCar} from "@/components/index";

const AboutUsSection = ({image , isImageLeft, title , text}) => {
    return (
        <>
            <div className={'grid grid-cols-1 lg:grid-cols-2 '}>
                <div className={`w-full max-lg:aspect-[5/4] lg:min-h-[420px] lg:h-full block relative ${isImageLeft && 'lg:order-2 '}`} >
                <Fancybox
                    options={{
                        Carousel: {
                          infinite: false,
                        },
                    }}
                >
                    <a data-fancybox="gallery" className={`!w-full !h-full`} href={image}>
                        <ImgUI src={image} alt={'Image About Us'}/>
                    </a>
                    <a data-fancybox="gallery" className={`!w-full !h-full`} href={image}>
                        <ImgUI src={image} alt={'Image About Us'}/>
                    </a>
                </Fancybox>
                </div>
                <div className={`py-[30px] px-[15px] lg:pb-0  lg:px-[75px] lg:py-[75px] xl:py-[120px]   ${isImageLeft ? "xl:pr-[85px] xl:pl-[190px] ] 2xl:pr-[100px] 2xl:pl-[220px] 3xl:pr-[125px] 3xl:pl-[275px] lg:order2 " : " xl:pl-[85px] xl:pr-[190px] ] 2xl:pl-[100px] 2xl:pr-[220px] 3xl:pl-[125px] 3xl:pr-[275px]"}  `}>
                    <SectionTitleCar extraStyle={'!text-start'} aboutPage={true} title={title}/>
                    <p className={'mt-4 text-currentTextBlack text-sm mb-[30px] xl:mt-[35px] xl:pb-[35px] xl:text-base 3xl:text-xl '}>{text}</p>
                
                </div>
            </div>
        </>
    );
};

export default AboutUsSection;


import  { useRef, useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Fancybox(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

