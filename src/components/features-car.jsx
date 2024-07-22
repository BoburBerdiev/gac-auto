import React from 'react';
import {ImgUI} from "@/components/index";

const FeaturesCard = ({image, text}) => {
    return (
        <div className={'relative overflow-hidden aspect-video'}>
            <ImgUI src={image} card={true} alt={text} quality={60} imageStyle={'z-5'} />
            <div className={'relative z-10 p-4 lg:p-10 flex items-end w-full h-full text-sm md:text-base text-white '}>
                {
                    text && 
                     <p className={'drop-shadow-[0_5px_5px_rgba(0,0,0,1.25)]'}>
                        {text}
                     </p>
                }
            </div>
        </div>
    );
};

export default FeaturesCard;