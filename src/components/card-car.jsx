import {ImgUI} from "@/components/index";
import {MdAirlineSeatReclineExtra} from "react-icons/md";
import {RiOilLine} from "react-icons/ri";
import {GiSteeringWheel} from "react-icons/gi";
import Link from "next/link";

const CardCar = () => {
    return (
        <Link href={'#'} className={'block py-6 px-4 bg-white font-montserrat border border-currentGray text-[#747474] group hover:border-currentRed duration-200 ease-linear'}>
            <div className={'px-2 md:px-4'}>
                <div className={'h-[31px] md:h-[34px] w-[100px] relative '}>
                    <ImgUI src={'/logo-car-2.png'} card={true} quality={100} alt={'logo'} objectFitContain={true}  />
                </div>
                <h3 className={'text-xs sm:text-sm md:text-base mt-3'}>
                    SUV
                </h3>
            </div>
            <div className={'w-full aspect-video relative pt-8 lg:pt-[50px] group-hover:scale-110 duration-300'}>
                <ImgUI src={'/car2.png'} alt={'car'} card={true} objectFitContain={true} quality={70} />
            </div>
            <div className={'px-2 md:px-4 flex justify-between items-center'}>
                <div className={'flex justify-center w-[30%] flex-col items-center gap-2 md:gap-3'}>
                    <MdAirlineSeatReclineExtra className={'text-lg lg:text-[24px]'}/>
                    <p className={'space-x-1  text-[rgb(51, 51, 51)] md:text-base text-sm font-medium'}>
                        <span>7</span>
                        <span>Seats</span>
                    </p>
                </div>
                <div className={`flex justify-center w-[30%] flex-col items-center gap-2 md:gap-3 relative before:content-['']  before:absolute before:w-[.5px] before:top-[10%] before:h-[50%] before:bg-[#747474] before:left-0  after:content-['']  after:absolute after:w-[.5px] after:top-[10%] after:h-[50%] after:bg-[#747474] after:right-0`}>
                    <RiOilLine className={'text-lg lg:text-[24px]'}/>

                    <p className={'space-x-1  text-[rgb(51, 51, 51)] md:text-base text-sm font-medium'}>
                      Petrol
                    </p>
                </div>
                <div className={'flex justify-center w-[30%] flex-col items-center gap-2 md:gap-3'}>
                    <GiSteeringWheel className={'text-lg lg:text-[24px]'} />
                    <p className={'space-x-1  text-[rgb(51, 51, 51)] md:text-base text-sm font-medium'}>
                       AT/MT
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CardCar;