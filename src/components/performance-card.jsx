import React from 'react';
import {ImgUI} from "@/components/index";

const PerformanceCard = ({isPng , text , src}) => {
    return (
        <div className={`flex flex-col  ${isPng ? 'gap-2':'gap-4'}`}>
            <div className={'relative h-[250px] md:h-[300px] lg:h-[360px]'}>
                {
                    isPng ?
                <ImgUI src={src} card={true} alt={'name'} objectFitContain={true} />
                        :
                <ImgUI src={src} card={true} alt={'name'} objectFitContain={false} />
                }
            </div>
            <h5 className={'text-sm md:text-base text-currentTextBlack text-center'}>
                {text}
            </h5>
        </div>
    );
};

export default PerformanceCard;