import {ImgUI} from "@/components/index";

const SocialResponsibilityCard = ({title, image, isCardAwards, isFullCard }) => {
    return (
        <div className={`w-full h-fit bg-white  ${isCardAwards ? '' : 'shadow-aboutCard'} ${isFullCard === 0 ? 'col-span-2' : 'col-span-1'} `}>
            <div className={`w-full relative ${isCardAwards ? `${isFullCard ? 'aspect-[10/7] lg:aspect-[10/7]' : ' aspect-[10/7] lg:aspect-[8/3]'} ` : 'aspect-[7/4]' } `}>
                <ImgUI src={image} alt={'Social Responsibility Card'} />
            </div>
            <div className={` ${isCardAwards ? 'pt-[15px] 3xl:pt-[25px]' : "px-[25px] py-[30px]"}  `}>
                <p className={`text-sm text-currentTextBlack !leading-[1.5] 2xl:text-base 3xl:text-lg ${isCardAwards ? "line-clamp-2 h-[42px] xl:h-12 3xl:h-[54px]" : "line-clamp-3  h-16 xl:h-[72px]  3xl:h-[81px]"}   `}>{title}</p>
            </div>
        </div>
    );
};

export default SocialResponsibilityCard;