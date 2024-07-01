import {ImgUI} from "@/components/index";
import {FaMapLocationDot} from "react-icons/fa6";
import {IoIosDocument} from "react-icons/io";


const NavbarCarInner = () => {
    return (
        <section className={'relative md:absolute top-0 left-0 w-full  z-20 bg-white py-0'}>
            <div className={'container flex flex-col md:flex-row items-center justify-between '}>
                <div className={'w-full flex md:flex-row flex-col justify-center items-center'}>
                    <div className={'relative w-full md:w-[270px]  h-[35px] md:h-auto  flex items-center'}>
                        <div
                            className={`bg-[url(/car-inner-logo-bg.png)] absolute bg-cover  left-0 w-full md:w-[270px] h-[32px] md:h-[89px] flex justify-center items-center p-2`}>
                            <div className={'w-[180px] md:w-[250px] h-[30px] md:h-[80px] relative'}>
                                <ImgUI src={'/car-inner-logo.png'} objectFitContain={true} alt={'logo'}
                                       card={true} imageStyle={'z-20'}/>

                            </div>
                        </div>
                    </div>

                    <ul className={'font-bold bg-white pb-4 text-sm md:text-base flex items-center  text-currentTextBlack  '}>
                        <li className={'hover:text-currentRed duration-200 cursor-pointer px-4'}>
                            Overview
                        </li>
                        <li className={'hover:text-currentRed duration-200 cursor-pointer px-4  relative before:content-[\'\']  before:absolute before:w-[.5px] before:top-[20%] before:h-[50%] before:bg-[#747474] before:left-0  after:content-[\'\']  after:absolute after:w-[.5px] after:top-[20%] after:h-[50%] after:bg-[#747474] after:right-0'}>
                            Performance
                        </li>
                        <li className={'hover:text-currentRed duration-200 cursor-pointer px-4'}>
                            Specification
                        </li>
                    </ul>
                </div>
                <div className={'flex items-center gap-x-6'}>
                    <div className={'flex items-center gap-x-2 pb-4'}>
                        <FaMapLocationDot className={'text-xl shrink-1'}/>
                        <p className={'text-sm md:text-base font-bold text-nowrap text-currentTextBlack'}>
                            Set Your Location
                        </p>
                    </div>
                    <div className={'flex items-center gap-x-2 pb-4'}>
                        <IoIosDocument  className={'text-xl shrink-1'}/>
                        <p className={'text-sm md:text-base font-bold text-nowrap text-currentTextBlack'}>
                            Set Your Location
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default NavbarCarInner;