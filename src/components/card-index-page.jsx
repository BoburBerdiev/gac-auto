import {ImgUI} from "@/components/index";
import {FaChevronRight, FaPlay} from "react-icons/fa";
import Link from "next/link";

const CardIndexPage = ({card , height , container , title , subTitle ,text ,button , header_title ,image , darkPercentage}) => {
    return (
        <div className={`w-full relative before:content-[''] before:w-full before:absolute before:z-5 before:h-full before:top-0 before:left-0 before:bg-black/${darkPercentage} overflow-hidden text-white ${height ? height :'h-full'}  pt-[10%] z-10`}>
            <ImgUI src={image} card={card} imageStyle={'z-[-1]'} />
            <div className={`relative z-5 ${container ? container : 'w-full h-full'} flex items-start flex-col gap-y-5 md:gap-y-10 `}>
                {
                    header_title &&
                <div className={"text-sm md:text-xl relative inline-flex lg:text-2xl  gap-x-2 md:gap-x-4 items-center  hover:text-currentRed font-bold before:content-['']  before:absolute before:left-0 before:-bottom-2 md:before:-bottom-4 before:bg-white before:w-full before:h-[1px] md:before:h-[2px] before:z-5"} >
                    <FaPlay  />
                    <p>
                        {header_title}
                    </p>
                </div>
                }
                {
                    title &&
                <h3 className={'text-[34px] md:text-[48px] mt-4 md:mt-0 lg:text-[56px] xl:text-[70px] font-bold'}>
                    {title}
                </h3>
                }
                {
                    subTitle &&
                    <h4 className={' text-[13px] md:text-[28px] lg:text-[36px] mt-5 md:mt-0'}>
                        {subTitle}
                    </h4>
                }
                {
                    text &&
                    <p className={'text-[11px] md:text-xl'}>
                     {text}
                    </p>
                }
                {
                    button &&
                    <div className={'mt-10'}>
                <Link href={'#'} className={'flex gap-x-3 items-center '}>
                    <span>
                        Read More
                    </span>
                    <FaChevronRight/>
                </Link>

                    </div>
                }
            </div>
        </div>
    );
};

export default CardIndexPage;