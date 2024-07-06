"use client";
import { useState } from 'react';
import { ImgUI } from '@/components/index';
import { IoClose } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navList = [
        {
            title: 'Home',
            id: 0,
            href: '/'
        },
        {
            title: 'MODELS',
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
            title: 'INOVATION',
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
            title: 'MEDIA CENTER',
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
            title: 'SERVICE',
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
            title: 'ABOUT US',
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
                    <div className="bg-black flex items-center w-full h-full justify-between py-2">
                        <div className="flex items-center gap-3 w-full">
                            <a href="/" className='relative block w-32 h-4 lg:w-40 lg:h-5'>
                                <ImgUI
                                    src={'/logo.png'}
                                    alt={"logo_gacmotors"}
                                    objectFitContain={true}
                                />
                            </a>
                            <div className="flex items-center flex-col">
                                <ul className={`px-2 flex flex-col z-50 h-screen lg:h-auto ${nav ? "right-0" :"-right-full"}  duration-300 fixed lg:static top-0 w-full bg-black lg:bg-transparent lg:flex-row font-thin text-base text-white items-center uppercase`}>
                                <IoClose className='block lg:hidden font-medium text-[25px] !text-white self-end mt-5' onClick={()=>{setNav(false)}} />
                                    {
                                        navList?.map(
                                            (item) => (
                                                <NavbarList key={item?.id} menu={item} />
                                            )
                                        )
                                    }
                                    <div className={`peer-hover:block  !-z-[999999] hidden w-full bg-black/50 size-[50%] top-0  fixed left-0`}></div>
                                    <ul className="grid grid-cols-4 py-[15px] uppercase text-white lg:hidden  justify-items-start divide-x divide-white">
                                        <li className="px-[20px]"><a href="/">en</a></li>
                                        <li className="px-[20px]"><a href="/">ru</a></li>
                                        <li className="px-[20px]"><a href="/">uz</a></li>
                                        <li className="px-[20px]"><a href="/">es</a></li>
                                    </ul>
                                </ul>
                                    
                            </div>
                        </div>
                        <div className="left-0 line hidden lg:block !w-full before:h-full before:-translate-x-1/2 before:duration-300 z-1 h-1 absolute bottom-0 before:absolute before:w-[30px] before:bg-sd"></div>
                        <div className="flex items-center gap-3">
                            <BiSearch className=' text-white text-[18px] cursor-pointer' />
                            <RiMenuFill className=' block lg:hidden font-medium text-[20px] text-white' onClick={()=>{setNav(true)}} />
                            <div className="lg:flex items-start group hidden">
                                <p className="uppercase text-[16px] text-white font-thin cursor-pointer">en</p>
                                <ul className="p-2 bg-black/30 absolute top-8 hidden group-hover:block duration-300">
                                    <li className="cursor-pointer py-[10px] border-b-[1px] uppercase text-[16px] text-white font-thin">
                                        <a href="/">en</a>
                                    </li>
                                    <li className="cursor-pointer py-[10px] border-b-[1px] uppercase text-[16px] text-white font-thin">
                                        <a href="/">ru</a>
                                    </li>
                                    <li className="cursor-pointer py-[10px] border-b-[1px] uppercase text-[16px] text-white font-thin">
                                        <a href="/">uz</a>
                                    </li>
                                    <li className="cursor-pointer py-[10px] uppercase text-[16px] text-white font-thin">
                                        <a href="/">es</a>
                                    </li>
                                </ul>
                                <i className="ri-arrow-down-s-line text-white text-[16px] font-thin group-hover:rotate-180 duration-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};



import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export const NavbarList = ({ menu }) => {
    const [dropdown, setDropdown] = useState(false)
    const { title, href, subTitle } = menu
    return (
        <>
            <li className={`${subTitle ? "peer": null} relative border-b-[1px] lg:border-0 w-full  lg:w-auto py-[10px] lg:p-[0px_6px_0px_6px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group hover-line`}>
                { !subTitle ?
                    <Link href={href} className='relative border-0 w-full lg:w-auto lg:py-[10px] lg:p-[0px_6px_0px_6px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group hover-line' >{title}</Link>
                    :
                    <>
                        <div className={`flex flex-col gap-4 lg:gap-0`}>
                            <button className='peer   relative  border-0 w-full  lg:w-auto lg:py-[10px] lg:p-[0px_6px_0px_6px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group hover-line' >{title}</button>
                            <ul className={`lg:absolute lg:pb-[50px] lg:pt-[30px] left-0 duration-300 z-[999] ${dropdown ? "block" : "hidden"} lg:group-hover:block whitespace-nowrap w-full`}>
                                {subTitle?.map((item) => (
                                    <li key={item?.id} className="flex flex-col justify-center items-start border-b border-white ">
                                        <Link href={item?.href} className="mt-2 lg:mt-5 pb-1">
                                            {item?.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <IoIosArrowDown className={`text-white text-[30px] font-thin block self-start lg:hidden ${dropdown ? 'rotate-180' : null } `} onClick={()=>{setDropdown(!dropdown)}} />
                    </>
                }
            </li>
        </>
    )
}


export default Navbar;