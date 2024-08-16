"use client";
import { useEffect, useState, useRef } from "react";
import {  ImgUI } from "@/components/index";
import { IoClose } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { NavList } from "@/config/config";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { langSelect } from "@/helper";
import { useQuery } from "react-query";
import apiService from "@/service/axios";
import SearchPanel from "./search-panel";
import { FaGlobeAmericas } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [line, setLine] = useState();
  const [childRef, setChildRef] = useState();
  const pathname = usePathname();
  const [navbarLists , setNavbarLists] = useState()

  const {
    data: modelsData,
    refetch: modelsRefetch,
    isSuccess: modelsIsSucces,
  } = useQuery( "modelsLink", () => apiService.getData('/car/model'),{ enabled: false, })

  useEffect(() => {
    modelsRefetch()
  }, [])

  useEffect(() => {
    if (childRef) {
      setLine(childRef);
    }
  }, [childRef]);
  const lineMove = (e) => {
    const target = e.target;
    if (target.dataset.list) {
      const left = target.offsetLeft + target.clientWidth / 2;
      setLine(left);
    }
  };
  useEffect(() => {
    if (modelsIsSucces) {
      const list = {
        name: 'navbar.models',
        _id: 5,
        slug: '/about',
        subTitle: [...modelsData]
      };
      let allList = [
        NavList[0],
        list,
        ...NavList.slice(1)
      ];
      setNavbarLists(allList)
    }
  }, [modelsData])

  const onMouseLeaveFunc = () => {
    if (childRef) {
      setLine(childRef);
    }
  };

  const handleSearch = () => {
    setSearch(true);
    document.body.classList.add("overflow-hidden");
  };
 
  return (
    <>
      <nav className="bg-black w-full fixed z-[50] py-1 top-0">
      <AnimatePresence key={'navbar'} >
        <div className="container w-full">
          <div className="bg-black flex items-center w-full h-full justify-between py-2 lg:p-0">
            <div className="flex items-center gap-3 w-full">
              <Link href="/" className="relative flex items-center justify-center lg:z-40 w-[160px] h-5 lg:w-[150px] lg:h-5 2xl:w-56 2xl:h-8">
                <ImgUI
              src={"/logo.png"}
                  alt={"logo_gacmotors"}
                  objectFitContain={true}
                />
              </Link>
              <div className="flex items-center flex-col">
                <ul
                  onMouseLeave={onMouseLeaveFunc}
                  className={`px-2 2xl:gap-3 flex flex-col z-30 h-screen lg:h-auto   ${
                    nav ? "right-0" : "-right-full"
                  }  duration-300 fixed lg:static top-0 w-full bg-black lg:bg-transparent lg:flex-row font-thin text-base text-white items-center `}
                >
                  <Link href="/" className="absolute block w-36 h-6 lg:w-40 lg:h-5 top-5 left-6 lg:hidden">
                    <ImgUI
                      src={"/logo.png"}
                      objectFitContain={true}
                      alt={"logo_gacmotors"}
                    />
                  </Link>
                  <IoClose
                    className="block lg:hidden font-medium text-[25px] !text-white self-end mt-5"
                    onClick={() => {
                      setNav(false);
                    }}
                  />
                  {navbarLists?.map((item) => (
                    <NavbarList
                      setNav={setNav}
                      key={item?._id}
                      menu={item}
                      lineMove={lineMove}
                      pathname={pathname}
                      setChildRef={setChildRef}
                      onClick={() => setNav(false)}
                    />
                  ))}
                  
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5">
              <BiSearch
                onClick={() => handleSearch()}
                className=" text-white h-6 w-6 cursor-pointer"
              />
              <SearchPanel search={search} setSearch={setSearch}/>

               <div className={"flex items-start group "}>
                <NavbarDropdown />
              </div>
              <RiMenuFill
                className=" block lg:hidden font-medium   h-6 w-6 text-white"
                onClick={() => {
                  setNav(true);
                }}
              />
             
            </div>
          </div>
        </div>
        <div
          style={{ "--before-left": `${line}px` }}
          className={` beforeLine hidden lg:block w-full before:h-full before:-translate-x-1/2  before:duration-700 z-1 h-1 absolute bottom-0 before:absolute before:w-[30px] before:bg-[#d40021]`}
        ></div>
      </AnimatePresence>
        </nav>
    </>
  );
};

const NavbarList = ({ menu, lineMove, pathname, setChildRef, onClick, setNav }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  const { t } = useTranslation();
  const { name, slug, subTitle } = menu;

  useEffect(() => {
    if (pathname === slug) {
      setChildRef(ref.current.offsetLeft + ref.current.clientWidth / 2);
    }
    if (pathname === 'Empow') {
      setChildRef(ref.current.offsetLeft + ref.current.clientWidth / 2);
    }
    subTitle?.forEach((itemLink) => {
      if (itemLink.slug === pathname) {
        setChildRef(ref.current.offsetLeft + ref.current.clientWidth / 2);
      }
    });
  }, [pathname]);

  const removeDropdown = () => {
    setNav(false);
    setDropdown(false);
  };

  return (
    <div
      ref={ref}
      onMouseOver={lineMove}
      className={`${
        subTitle ? "peer" : " "
      } relative border-b-[1px] lg:border-0 w-full border-[#666666] uppercase lg:text-xs xl:text-sm lg:w-auto py-3 px-5 lg:py-3 lg:px-2 xl:px-3 xl:py-[12px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group line`}
    >
      {!subTitle ? (
        <Link
          onClick={onClick}
          href={slug}
          className="relative cursor-pointer border-0 w-full lg:w-auto flex gap-2 lg:gap-1 lg:justify-center items-center group whitespace-nowrap"
        >
          <span>{t(name)}</span>
        </Link>
      ) : (
        <>
          <div className={`flex flex-col gap-4 lg:gap-0 !text-sm cursor-pointer`}>
            <li
              onClick={() => {
                setDropdown(!dropdown);
              }}
              className="relative border-0 w-full lg:w-auto flex flex-row lg:flex-col justify-between lg:justify-center items-center group whitespace-nowrap"
            >
              {t(name)}
            </li>
            <ul
              className={`lg:absolute lg:pb-[50px] rounded lg:top-[35px] left-0 duration-300 gap-10 lg:gap-0 z-[20] ${
                dropdown ? "block" : "hidden"
              } lg:group-hover:block whitespace-nowrap w-full`}
            >
              {subTitle?.map((item) => (
                <button
                  onClick={() => removeDropdown()}
                  key={item?._id || item?.name} // Ensure unique key
                  className="flex flex-col text-start p-2 bg-black justify-center items-start group/edit"
                >
                  <Link
                    href={item?.company ? `/models/${item?.slug}` : item?.slug}
                    className="flex items-center gap-2"
                  >
                    {item?.company === "aion" && (
                      <div className="relative w-3 h-3 xl:w-5 xl:h-4">
                        <ImgUI src={'/AION-logo.png'} alt={'Logo Aion'} />
                      </div>
                    )}
                    {item?.company === "gac" && (
                      <div className="relative w-7 h-5">
                        <ImgUI src={'/logo-gac.png'} alt={'Logo Aion'} />
                      </div>
                    )}
                    <div className="pb-1 flex flex-col gap-2 mt-2 lg:mt-3">
                      {t(item?.name)}
                      <div
                        className={`w-64 h-[1px] relative rounded-lg overflow-hidden bg-white/50 hidden lg:block before:w-0 before:group-hover/edit:w-full before:absolute before:duration-300 before:bg-[#d40021] before:h-full before:top-0 before:left-0 before:z-50`}
                      ></div>
                    </div>
                  </Link>
                </button>
              ))}
            </ul>
          </div>
          <IoIosArrowDown
            onClick={() => setDropdown(!dropdown)}
            className={`text-white text-xl font-thin block self-start lg:hidden ${
              dropdown ? "rotate-180" : null
            }`}
          />
        </>
      )}
    </div>
  );
};

const NavbarDropdown = () => {
  const { t, i18n } = useTranslation();
  const [dropdown, setDropdown] = useState(false);

  
  const dropdownRef = useRef()
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

  const openDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };

    if (dropdown) {
      window.addEventListener('click', handleClick);
      window.addEventListener('scroll', () => setDropdown(false));
    }

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', () => setDropdown(false));
    };
  }, [dropdown]); 
  

  const handleLang = (lang) => {
    i18n.changeLanguage(lang.value);
    setDropdown(false);
  };
 
  
  return (
    <div className={"relative "}>

      <div className="flex gap-1 items-center">
         <FaGlobeAmericas className=" text-white" />
        <p 
        ref={dropdownRef}
          onClick={() => openDropdown()}
          className={"text-white cursor-pointer text-lg"}
        >
          {langSelect( i18n.language ,t('lang.ru') ,  t('lang.uz'))}
        </p>
      </div>
      

     {
      dropdown ?
      <motion.div
      key={'dropdown'}
      initial={{opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex flex-col  w-14 absolute z-50 top-full -left-2  `}
    >
        <ul
          className={
            "rounded-b-lg  flex flex-col overflow-hidden  bg-black  text-white  pt-2 "
          }
          onClick={(e) => e.preventDefault()}
        >
          {langList.map((lang) => (
            <li
              onClick={() => handleLang(lang)}
              className={
                "cursor-pointer hover:bg-gray-50/50 text-center  py-1.5 px-2 !leading-[1]"
              }
              key={lang?.id}
            >
              {t(lang?.title)}
            </li>
          ))}
        </ul>
    </motion.div>
    : 
    null
     }
    </div>
  );
};


export default Navbar;
