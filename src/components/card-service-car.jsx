import {ImgUI} from "@/components/index";
const CardServiceCar = ({isIndexPage}) => {
    return (
        <div className={`flex justify-center ${isIndexPage ? 'flex-col' : 'flex-row md:flex-col'}   items-center  gap-2 md:gap-3 p-4 md:p-5`}>
            <div className={'md:w-[89px] w-[45px] md:h-[89px] h-[45px] relative '}>
                <ImgUI src={'/icon-link1.png'} objectFitContain={true} card={true} alt="icon" />
            </div>
            <p className={'text-sm md:text-base text-currentTextBlack'}>
                Contact a Dealer
            </p>
        </div>
    );
};

export default CardServiceCar;