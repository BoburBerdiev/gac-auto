"use client"
import {useEffect, useState} from 'react';
import { ImgUI } from '@/components/index';
import { IoClose } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const {t} = useTranslation();
    const navList = [
        {
            title: t('navbar.home'),
            id: 0,
            href: '/'
        },
        {
            title: t('navbar.models'),
            id: 1,
            href: '/models',
            subTitle: [
                {
                    title: 'all models',
                    id: 0,
                    href: '/models'
                },
                {
                    title: 'vr pavillion',
                    id: 1,
                    href: '/vrmodels'
                }
            ]
        },
        {
            title: t('navbar.innovation'),
            id: 2,
            href: '/inovations',
            subTitle: [
                {
                    title: 'R_&_D_CENTER',
                    id: 0,
                    href: '/R_&_D_CENTER'
                },
                {
                    title: 'TECHNOLOGY',
                    id: 1,
                    href: '/TECHNOLOGY'
                }
            ]
        },
        {
            title: t('navbar.mediaCenter'),
            id: 3,
            href: '/news',
            subTitle: [
                {
                    title: 'NEWS',
                    id: 0,
                    href: '/news'
                },
                {
                    title: 'SPECIAL TOPICS',
                    id: 1,
                    href: '/SPECIALTOPICS'
                }
            ]
        },
        {
            title: t('navbar.service'),
            id: 4,
            href: "/servise",
            subTitle: [
                {
                    title: 'OVERVIEW',
                    id: 0,
                    href: '/servise'
                },
                {
                    title: 'OVERVIEW',
                    id: 1,
                    href: '/servise'
                }
            ]
        },
        {
            title: t('navbar.about'),
            id: 5,
            href: '/about',
            subTitle: [
                {
                    title: 'OVERVIEW',
                    id: 0,
                    href: '/about'
                },
                {
                    title: 'OVERVIEW',
                    id: 1,
                    href: '/about'
                }
            ]
        },
    ]

    return (
        <>
            <nav className="bg-black w-full relative h-12 ">
                <div className="container w-full">
                    <div className="bg-black flex items-center w-full h-full justify-between py-2 lg:p-0">
                        <div className="flex items-center gap-3 w-full">
                            <a href="/" className='relative block w-32 h-4 lg:w-40 lg:h-5'>
                                <ImgUI
                                    src={'/logo.png'}
                                    alt={"logo_gacmotors"}
                                    objectFitContain={true}
                                />
                            </a>
                            <div className="flex items-center flex-col">
                                <ul className={`px-2 gap-3 flex flex-col z-50 h-screen lg:h-auto ${nav ? "right-0" : "-right-full"}  duration-300 fixed lg:static top-0 w-full bg-black lg:bg-transparent lg:flex-row font-thin text-base text-white items-center `}>
                                    <IoClose className='block lg:hidden font-medium text-[25px] !text-white self-end mt-5' onClick={() => { setNav(false) }} />
                                    {
                                        navList?.map(
                                            (item) => (
                                                <NavbarList key={item?.id} menu={item} />
                                            )
                                        )
                                    }
                                    <div className={`peer-hover:block  !-z-[999999] hidden w-full bg-black/50 size-[50%] top-0  fixed left-0`}></div>
                                    <div className={'lg:hidden max-lg:w-full'}>
                                        <NavbarDropdown/>
                                    </div>
                                </ul>
                                    
                            </div>
                        </div>
                        <div className="left-0 line hidden lg:block !w-full before:h-full before:-translate-x-1/2 before:duration-300 z-1 h-1 absolute bottom-0 before:absolute before:w-[30px] before:bg-sd"></div>
                        <div className="flex items-center gap-3">
                            <BiSearch className=' text-white text-[18px] cursor-pointer' />
                            <RiMenuFill className=' block lg:hidden font-medium text-[20px] text-white' onClick={() => { setNav(true) }} />
                            <div className={'lg:flex items-start group hidden'}>
                                <NavbarDropdown/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};


export const NavbarList = ({ menu }) => {
    const [dropdown, setDropdown] = useState(false)
    const { title, href, subTitle } = menu
    return (
        <>
            <li className={`${subTitle ? "peer" : null} relative border-b-[1px] lg:border-0 w-full  lg:w-auto py-[10px] lg:p-[0px_6px_0px_6px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group`}>
                {!subTitle ?
                    <Link href={href} className='relative border-0 w-full lg:w-auto lg:py-[10px] lg:p-[0px_6px_0px_6px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group' >{title}</Link>
                    :
                    <>
                        <div className={`flex flex-col gap-4 lg:gap-0`}>
                            <button className='peer   relative  border-0 w-full  lg:w-auto lg:py-[10px] lg:p-[0px_6px_0px_6px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group' >{title}</button>
                            <ul className={`lg:absolute lg:pb-[50px] lg:pt-[30px] left-0 duration-300 gap-10 z-[999] ${dropdown ? "block" : "hidden"} lg:group-hover:block whitespace-nowrap w-full`}>
                                {subTitle?.map((item) => (
                                    <li key={item?.id} className="flex flex-col justify-center items-start  group">
                                        <Link href={item?.href} className="mt-2 lg:mt-5 pb-1 flex flex-col gap-2 ">
                                            {item?.title}
                                            <div className={`w-64 h-[2px] relative rounded-lg overflow-hidden bg-white/50 hidden lg:block`}>
                                                <span className={`group-hover:w-full w-0 duration-[20000]  h-full absolute top-0 left-0 z-50 bg-[#d40021]`} ></span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <IoIosArrowDown className={`text-white text-[30px] font-thin block self-start lg:hidden ${dropdown ? 'rotate-180' : null} `} onClick={() => { setDropdown(!dropdown) }} />
                    </>
                }
            </li>
        </>
    )
}


const NavbarDropdown = () => {
    const {t, i18n} = useTranslation()
    const [dropdown, setDropdown] = useState(false)

    const langList = [
        {
            title: t('lang.ru'),
            value: 'ru',
            id: 0
        },
        {
            title: t('lang.uz'),
            value: 'uz',
            id: 1
        }
    ]
    const openDropdown = () => {
        setDropdown(prevState => !prevState)
    }
    const handleLang = (lang) => {
        i18n.changeLanguage(lang.value)
        setDropdown(false)
    }
    useEffect(() => {
        if (window.innerWidth < 1024) {
            setDropdown(true)
        }
    }, []);

    return (
        <div className={'relative max-lg:mt-10 max-lg:w-full'}>
            <p onClick={ () => openDropdown()} className={'text-white cursor-pointer max-lg:hidden'}>{t('lang.langDefault')}</p>
            <div className={`grid lg:w-10 ${dropdown ? "grid-rows-[1fr]" : 'grid-rows-[0fr]'} lg:absolute z-50 top-full -left-2 duration-300`}>
                <div className={'overflow-hidden '}>
                    <ul className={'rounded-b-lg lg:text-sm flex lg:flex-col gap-y-1 max-lg:divide-x bg-black  text-white  py-2 '}>
                        {
                            langList.map(lang => (
                                <li onClick={() => handleLang(lang)} className={'cursor-pointer hover:bg-gray-50/50 px-4 lg:px-2 !leading-[1]'} key={lang?.id}>{lang?.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Navbar;