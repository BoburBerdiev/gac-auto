"use client"
import {ButtonUI, SocialResponsibilityCard} from "@/components/index";


const SocialResponsibility = ({list,  firstCardFull}) => {

    return (
        <div className={'w-full flex flex-col bg-white items-center gap-10 2xl:gap-[50px] 3xl:gap-[60px]'}>
            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] lg:gap-x-[30px]'}>
                {
                    list?.map((card, index) => (
                        <SocialResponsibilityCard key={card?.id} isFullCard={firstCardFull && index} isCardAwards={true} title={card?.title} image={card?.image} />
                    ))
                }
            </div>
            <ButtonUI isBorderBtn={true} text={'Show more'} />
        </div>
    );
};

export default SocialResponsibility;