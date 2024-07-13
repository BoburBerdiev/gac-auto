"use client";
import { useEffect, useState, useRef} from "react";
import { ImgUI } from "@/components/index";
import { IoClose } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { NavList } from "@/config/config";
import { useRouter } from 'next/navigation';
import {useTranslation} from "react-i18next";
import { FaChevronDown } from "react-icons/fa6";
import {AnimatePresence, motion} from "framer-motion"
const Navbar = () => {
   
  
  const [nav, setNav] = useState(false);





  return (
    <>
      <nav className="bg-black w-full fixed h-12 z-[50] ">
        <div className="container w-full">
          <div className="bg-black flex items-center w-full h-full justify-between py-2 lg:p-0">
            <div className="flex items-center gap-3 w-full">
              <a href="/" className="relative block w-32 h-4 lg:w-40 lg:h-5">
                <ImgUI
                  src={"/logo.png"}
                  alt={"logo_gacmotors"}
                  objectFitContain={true}
                />
              </a>
              <div className="flex items-center flex-col">
                <ul
                  className={`px-2 gap-3 flex flex-col z-50 h-screen lg:h-auto ${
                    nav ? "right-0" : "-right-full"
                  }  duration-300 fixed lg:static top-0 w-full bg-black lg:bg-transparent lg:flex-row font-thin text-base text-white items-center `}
                >
                  <IoClose
                    className="block lg:hidden font-medium text-[25px] !text-white self-end mt-5"
                    onClick={() => {
                      setNav(false);
                    }}
                  />
                  {NavList?.map((item) => (
                    <NavbarList key={item?.id} menu={item} />
                  ))}
                  <div
                    className={`peer-hover:block  !-z-[999999] hidden w-full bg-black/50 size-[50%] top-0  fixed left-0`}
                  ></div>
                  <div className={"lg:hidden max-lg:w-full"}>
                    <NavbarDropdown />
                  </div>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BiSearch className=" text-white text-[18px] cursor-pointer" />
              <RiMenuFill
                className=" block lg:hidden font-medium text-[20px] text-white"
                onClick={() => {
                  setNav(true);
                }}
              />
              <div className={"lg:flex items-start group hidden"}>
                <NavbarDropdown />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export const NavbarList = ({ menu }) => {
  const [dropdown, setDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef([]);
  const router = useRouter();
  const { t } = useTranslation();
  const { title, href, subTitle } = menu;
  useEffect(() => {
    const currentIndex = NavList.findIndex(item => item.path === router.pathname);
    setActiveIndex(currentIndex);
    updateIndicator(currentIndex);
  }, [router.pathname]);
  const updateIndicator = (index) => {
    const currentItem = navRefs.current[index];
    if (currentItem) {
      setIndicatorStyle({
        left: currentItem.offsetLeft,
      });
    }
  };
  return (
    <>
      <li
       key={NavList.forEach(item=>(item.id))}
       ref={el => navRefs.current[1] = el}
       onMouseEnter={() => updateIndicator(NavList[idx])}
       onMouseLeave={() => updateIndicator(activeIndex)}
        className={`${
          subTitle ? "peer" : null
        } relative border-b-[1px] lg:border-0 w-full  lg:w-auto py-[10px] lg:p-[0px_6px_0px_6px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group line`}
      >
        {!subTitle ? (
          <Link
            href={href}
            className="relative border-0 w-full lg:w-auto lg:py-[10px] lg:p-[0px_6px_0px_6px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group"
          >
            {t(title)}
          </Link>
        ) : (
          <>
            <div className={`flex flex-col gap-4 lg:gap-0`}>
              <button className="peer   relative  border-0 w-full  lg:w-auto lg:py-[10px] lg:p-[0px_6px_0px_6px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group">
                {t(title)}
              </button>
              <ul
                className={`lg:absolute lg:pb-[50px] lg:pt-[30px] left-0 duration-300 gap-10 z-[999] ${
                  dropdown ? "block" : "hidden"
                } lg:group-hover:block whitespace-nowrap w-full`}
              >
                {subTitle?.map((item) => (
                  <li
                    key={item?.id}
                    className="flex flex-col justify-center items-start group/edit "
                  >
                    <Link
                      href={item?.href}
                      className="mt-2 lg:mt-5 pb-1 flex flex-col gap-2 "
                    >
                      {t(item?.title)}
                      <div
                        className={`w-64 h-[2px] relative rounded-lg overflow-hidden bg-white/50 hidden lg:block before:w-0 before:group-hover/edit:w-full before:absolute before:duration-300 before:bg-[#d40021]  before:h-full  before:top-0 before:left-0 before:z-50`}
                      ></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <IoIosArrowDown
              className={`text-white text-[30px] font-thin block self-start lg:hidden ${
                dropdown ? "rotate-180" : null
              } `}
              onClick={() => {
                setDropdown(!dropdown);
              }}
            />
          </>
        )}
      </li>
      <div className={` before:left-[${indicatorStyle}px] hidden lg:block !w-full before:h-full before:translate-x-1/2 before:duration-400 z-1 h-1 absolute bottom-0 before:absolute before:w-[30px] before:bg-[#d40021]`}></div>
    </>
  );
};

const NavbarDropdown = () => {
  const { t, i18n } = useTranslation();
  const [dropdown, setDropdown] = useState(false);
  const langList = [
    {
      title: t("lang.ru"),
      value: "ru",
      id: 0,
    },
    {
      title: t("lang.uz"),
      value: "uz",
      id: 1,
    },
  ];
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setDropdown(true);
    }
  }, []);

  const openDropdown = () => {
    setDropdown((prevState) => !prevState);
  };
  const handleLang = (lang) => {
    i18n.changeLanguage(lang.value);
    setDropdown(false);
  };

    return (
        <div className={'relative max-lg:mt-10 max-lg:w-full'}>
            <p onClick={ () => openDropdown()} className={'text-white cursor-pointer max-lg:hidden flex items-center gap-2'}>
                <span>{i18n.language === "ru" ? t('lang.ru') : t('lang.uz')}</span>
                <FaChevronDown className={`text-sm ${dropdown ? 'rotate-180' : ''} duration-300`}  />
            </p>
            <AnimatePresence>
                {
                    dropdown &&
                    <motion.div initial={{   opacity: 0 }}
                                animate={{ opacity: 1}}
                                exit={{ opacity: 0}}
                                className={`grid lg:w-12 grid-rows-[1fr] lg:absolute z-50 top-full -left-2 duration-300`}>
                        <div className={'overflow-hidden '}>
                            <ul className={'rounded-b-lg lg:text-sm flex lg:flex-col  gap-y-1 max-lg:divide-x bg-black  text-white  py-2 '}>
                                {
                                    langList.map(lang => (
                                        <li onClick={() => handleLang(lang)}
                                            className={'cursor-pointer hover:bg-gray-50/50 px-4 lg:w-full text-center lg:px-2 py-2 !leading-[1]'}
                                            key={lang?.id}>{lang?.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

        </div>
    );
};

export default Navbar;
