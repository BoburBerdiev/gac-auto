"use client";
import { useEffect, useState,useRef } from "react";
import { ImgUI } from "@/components/index";
import { IoClose } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { NavList } from "@/config/config";
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [line, setLine]=useState()
    const router = useRouter();
    const pathname = usePathname()
    console.log(pathname);
    const ref = useRef()   
    useEffect(()=>{
      if (pathname === '/') {
        const initialState = ref.current.children[1].offsetLeft + ref.current.children[1].clientWidth /2
        setLine(initialState)
      }else if(NavList.forEach((element)=>{
        element.href
      }) === pathname ){
        setLine()
      }
    },[])
    const lineMove =(e)=>{
        const target = e.target
        const child = ref.current.childNodes
    child.forEach((elem) => {
        if(elem.tagName === "LI" && target === elem){
            const left = elem.offsetLeft + (elem.clientWidth / 2)
            setLine(left)
            }
    });
    }  
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
                <ul onMouseOver={lineMove} onMouseLeave={()=>{setLine(ref.current.children[1].offsetLeft + ref.current.children[1].clientWidth /2)}}  ref={ref}
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
                      <NavbarList key={item?.id} menu={item}  />
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
        <div style={{ '--before-left': `${line}px` }}
            className={` beforeLine hidden lg:block w-full before:h-full before:-translate-x-1/2  before:duration-700 z-1 h-1 absolute bottom-0 before:absolute before:w-[30px] before:bg-[#d40021]`}
        ></div>
      </nav>
    </>
  );
};

export const NavbarList = ({ menu }) => {
  const [dropdown, setDropdown] = useState(false);
  const { t } = useTranslation();
  const { title, href, subTitle } = menu;
  return (
    <>
      <li 
        className={`${
          subTitle ? "peer" : null
        } relative border-b-[1px] lg:border-0 w-full  lg:w-auto lg:py-[10px]  lg:p-[0px_12px_0px_12px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group line`}
      >
        {!subTitle ? (
          <Link
          href={href}
          className="relative border-0 w-full lg:w-auto  flex flex-row lg:flex-col justify-between lg:justify-center items-center group whitespace-nowrap"
          >
            <li>
            {t(title)}
            </li>
          </Link>
        ) : (
          <>
            <div className={`flex flex-col gap-4 lg:gap-0`}>
              <li onClick={(e)=>{console.log(e.target.tagName);}} className="peer   relative  border-0 w-full  lg:w-auto lg:py-0 lg:p-[0px_12px_0px_12px] flex flex-row lg:flex-col text-start justify-between lg:justify-center items-center group">
              <Link href={href} className="relative border-0 w-full lg:w-auto  flex flex-row lg:flex-col justify-between lg:justify-center items-center group whitespace-nowrap">
                {t(title)}
              </Link>  
              </li>
              <ul
                className={`lg:absolute lg:pb-[50px] lg:top-[43px] left-0 duration-300 gap-10 -z-[999] ${
                  dropdown ? "block" : "hidden"
                } lg:group-hover:block whitespace-nowrap w-full`}
              >
                {subTitle?.map((item) => (
                  <button
                    key={item?.id}
                    className="flex flex-col text-start justify-center items-start group/edit "
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
                  </button>
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
    <div className={"relative max-lg:mt-10 max-lg:w-full"}>
      <p
        onClick={() => openDropdown()}
        className={"text-white cursor-pointer max-lg:hidden"}
      >
        {i18n.language === "ru" ? t("lang.ru") : t("lang.uz")}
      </p>
      <div
        className={`grid lg:w-10 ${
          dropdown ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } lg:absolute z-50 top-full -left-2 duration-300`}
      >
        <div className={"overflow-hidden "}>
          <ul
            className={
              "rounded-b-lg lg:text-sm flex lg:flex-col gap-y-1 max-lg:divide-x bg-black  text-white  py-2 "
            }
          >
            {langList.map((lang) => (
              <li
                onClick={() => handleLang(lang)}
                className={
                  "cursor-pointer hover:bg-gray-50/50 px-4 lg:px-2 !leading-[1]"
                }
                key={lang?.id}
              >
                {t(lang?.title)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
