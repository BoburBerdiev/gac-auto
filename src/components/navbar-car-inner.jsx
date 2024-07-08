"use client"
import {ImgUI} from "@/components/index";
import {FaMapLocationDot} from "react-icons/fa6";
import {IoIosDocument} from "react-icons/io";
import Link from "next/link";
import {useTranslation} from "react-i18next";


const NavbarCarInner = () => {
    const {t} = useTranslation();
    const listLink = [
        {
            title: t('carInnerNav.overview'),
            link:  "/models/1",
            id: 0
        },
        {
            title: t('carInnerNav.performance') ,
            link:  "/models/1/perfonmance",
            id: 1
        },
        {
            title: t('carInnerNav.specification'),
            link:  "/models/1",
            id: 2
        },
    ]
    return (
        <section className={'w-full bg-transparent absolute top-0 left-0 z-10'}>
            <div className={'container'}>
                <div className={'flex flex-col lg:flex-row items-start  justify-between'}>
                    <div
                        className={'relative w-full flex flex-col items-center justify-center h-[35px] lg:w-[190px] lg:h-[50px] shadow-xl xl:w-[250px] xl:h-[70px] 2xl:h-[75px] 2xl:w-[280px] '}>
                        <div className={'absolute z-[1] left-0 top-0 !w-full !h-full '}>
                            <ImgUI src={'/car-inner-logo-bg.png'} alt={'Bg'}/>
                        </div>
                        <div className={' absolute z-10 w-[190px] h-7 lg:w-[150px] lg:h-[22px] xl:w-[195px] xl:h-[30px]'}>
                            <ImgUI src={'/car-inner-logo.png'} objectFitContain={true} alt={'logo'} card={true}
                                   imageStyle={'z-20'}/>
                        </div>
                    </div>
                    <div className={'w-full !bg-white flex flex-col xl:pl-4 xl:py-1 2xl:py-2 lg:items-center max-lg:divide-y justify-between lg:flex-row'}>
                        <ul className={' bg-white text-sm py-3 lg:py-2 xl:py-3 md:text-base max-lg:justify-center flex items-center flex-wrap text-currentTextBlack  divide-x divide-[#747474]'}>
                            {
                                listLink.map((link) => (
                                    <li key={link?.id} className={'hover:text-currentRed duration-200 cursor-pointer leading-3 px-2 md:px-4 '}>
                                        <Link href={link?.link}>
                                            {
                                                link?.title
                                            }
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={'flex items-center flex-wrap max-lg:justify-center py-3 lg:py-2 xl:py-3 px-2 gap-x-2 lg:gap-x-6'}>
                            <div className={'flex items-center gap-x-2 '}>
                                <FaMapLocationDot className={'text-xl shrink-1'}/>
                                <p className={'text-sm md:text-base font-bold text-nowrap text-currentTextBlack'}>
                                    {t('carInnerNav.setYourLoc')}
                                </p>
                            </div>
                            <div className={'flex items-center gap-x-2 '}>
                                <IoIosDocument className={'text-xl shrink-1'}/>
                                <p className={'text-sm md:text-base font-bold text-nowrap text-currentTextBlack'}>
                                    {t('carInnerNav.contactDealer')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*








              */}


        </section>
    );
};

export default NavbarCarInner;