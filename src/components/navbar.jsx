"use client";
import { useEffect, useState, useRef } from "react";
import { ButtonUI, CardCar, ImgUI } from "@/components/index";
import { IoClose } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { NavList } from "@/config/config";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [line, setLine] = useState();
  const [childRef, setChildRef] = useState();
  const pathname = usePathname();
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
      <nav className="bg-black w-full fixed z-[50] py-1 ">
      <AnimatePresence >
        <div className="container w-full">
          <div className="bg-black flex items-center w-full h-full justify-between py-2 lg:p-0">
            <div className="flex items-center gap-3 w-full">
              <a href="/" className="relative flex items-center justify-center  w-[190px] h-6 lg:w-[150px] lg:h-5 2xl:w-56 2xl:h-8">
                <ImgUI
                  src={"/logo.png"}
                  alt={"logo_gacmotors"}
                  objectFitContain={true}
                />
              </a>
              <div className="flex items-center flex-col">
                <ul
                  onMouseLeave={onMouseLeaveFunc}
                  className={`px-2 2xl:gap-3 flex flex-col z-50 h-screen lg:h-auto ${
                    nav ? "right-0" : "-right-full"
                  }  duration-300 fixed lg:static top-0 w-full bg-black lg:bg-transparent lg:flex-row font-thin text-base text-white items-center `}
                >
                  <a href="/" className="absolute block w-36 h-6 lg:w-40 lg:h-5 top-5 left-6 lg:hidden">
                    <ImgUI
                      src={"/logo.png"}
                      objectFitContain={true}
                      alt={"logo_gacmotors"}
                    />
                  </a>
                  <IoClose
                    className="block lg:hidden font-medium text-[25px] !text-white self-end mt-5"
                    onClick={() => {
                      setNav(false);
                    }}
                  />
                  {NavList?.map((item) => (
                    <NavbarList
                      key={item?.id}
                      menu={item}
                      lineMove={lineMove}
                      pathname={pathname}
                      setChildRef={setChildRef}
                      onClick={() => setNav(false)}
                    />
                  ))}
                  <div
                    className={`peer-hover:block  !-z-[999999] hidden w-full bg-black/50 size-[50%] top-0  fixed left-0`}
                  ></div>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5">
              <BiSearch
                onClick={() => handleSearch()}
                className=" text-white h-6 w-6  cursor-pointer"
              />
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
        <NavSearch search={search} setSearch={setSearch} />
      </AnimatePresence>

      </nav>
    </>
  );
};

export const NavbarList = ({ menu, lineMove, pathname, setChildRef, onClick }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  const { t } = useTranslation();
  const { title, href, subTitle } = menu;
  console.log(subTitle);
  useEffect(() => {
    if (pathname === href) {
      setChildRef(ref.current.offsetLeft + ref.current.clientWidth / 2);
    }
  }, [menu.href, pathname]);

  const removeDropdown = () => {
    setDropdown(false)
    return onClick
  }
  return (
    <>
      <li
        ref={ref}
       
        onMouseOver={lineMove}
        className={`${
          subTitle ? "peer" : " "
        } relative border-b-[1px] lg:border-0 w-full border-[#666666] uppercase lg:text-xs xl:text-sm  lg:w-auto py-3 px-5 lg:py-3 lg:px-2 xl:px-3  xl:py-[12px] flex flex-row lg:flex-col justify-between lg:justify-center items-center group line`}
      >
        {!subTitle ? (
          <Link
            onClick={onClick}
            href={href}
            className="relative border-0 w-full lg:w-auto  flex gap-1 justify-between lg:justify-center items-center group whitespace-nowrap"
          >
            {
              menu.company === "aion" &&
              <div className="relative w-3 h-3 xl:w-5 xl:h-4 ">
                <ImgUI src={'/AION-logo.png'} alt={'Logo Aion'}/>
              </div>
            }
             {
              menu.company === "gac" &&
              <div className="relative w-3 h-3 xl:w-5 xl:h-4 ">
                <ImgUI src={'/logo-gac.png'} alt={'Logo Aion'}/>
              </div>
            }
            <span className="">
              {t(title)}  
            </span>
          </Link>
        ) : (
          <>
            <div className={`flex flex-col gap-4 lg:gap-0 !text-sm`}>
              <li
               
                className="relative border-0 w-full lg:w-auto  flex flex-row lg:flex-col justify-between lg:justify-center items-center group whitespace-nowrap"
              >
                {t(title)}
              </li>
              <ul
                className={`lg:absolute lg:pb-[50px] lg:top-[35px] left-0 duration-300 gap-10 z-[20] ${
                  dropdown ? "block" : "hidden"
                } lg:group-hover:block whitespace-nowrap w-full`}
              >
                {subTitle?.map((item) => (
                  <button
                    onClick={() => removeDropdown()}
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
              className={`text-white text-xl font-thin block self-start lg:hidden ${
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

    // Add event listeners for click and scroll events
    if (dropdown) {
      window.addEventListener('click', handleClick);
      window.addEventListener('scroll', () => setDropdown(false));
    }

    // Cleanup event listeners on component unmount or when dropdown state changes
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
      <p 
      ref={dropdownRef}
        onClick={() => openDropdown()}
        className={"text-white cursor-pointer text-lg"}
      >
        {i18n.language === "ru" ? t("lang.ru") : t("lang.uz")}
      </p>
     {
      dropdown ?
      <motion.div
      key="dropdonw"
      initial={{opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex flex-col  w-10 absolute z-50 top-full -left-2  `}
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
                "cursor-pointer hover:bg-gray-50/50  py-1.5 px-2 !leading-[1]"
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

const models = [
  {
    id: 1,
    href: "",
    category: "СВ",
    logo: "/model-logo1.png",
    image: "/model-image1.png",
    gearbox: "AT",
    seats: "7 Сиденья",
    fuel: "Бензин",
  },
  {
    id: 2,
    href: "",
    category: "МИНИВЭН",
    logo: "/model-logo2.png",
    image: "/model-image2.png",
    gearbox: "AT",
    seats: "7 Сиденья",
    fuel: "Бензин",
  },
];

const NavSearch = ({ search, setSearch }) => {
  const [isModels, setIsModels] = useState(true)
  const {t} = useTranslation()


  const closeSearch = () => {
    setSearch(false);
    document.body.classList.remove("overflow-hidden");
  };
 
  return (
   <>
      {search && (
        <motion.div
          key="search"
          initial={{opacity: 0, scale: 0.8, translateY: 30}}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          exit={{opacity: 0, scale: 0.8}}
          className={`w-screen h-screen fixed top-0 py-20 left-0 bg-black/70 z-[999] mr-1 `}
          onClick={() => closeSearch()}
        >
          <div className={"container-fluid "}>
            <div
              className={"max-w-[960px] mx-auto 3xl:max-w-[1270px] space-y-5"}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={"flex justify-between items-center text-white "}>
                <h2 className={"text-lg xl:text-2xl"}>{t('search.sectionTitle')}</h2>
                <IoMdClose
                  onClick={() => closeSearch()}
                  className={"text-3xl 2xl:text-4xl cursor-pointer"}
                />
              </div>
              <form
                className={
                  "border-2 w-full border-[#c83837] grid grid-cols-4 md:grid-cols-5"
                }
              >
                <input
                  type="text"
                  className={
                    "w-full pl-4 bg-white font-montserrat col-span-3 text-sm md:text-base md:col-span-4 outline-none py-2 2xl:py-3"
                  }
                  placeholder={t('search.input')}
                />
                <ButtonUI
                  type={"submit"}
                  isBorderBtn={true}
                  text={t('search.buttonText')}
                  extraStyle={
                    "bg-borderBtn text-white max-md:py-2 text-sm md:text-base !px-1"
                  }
                />
              </form>
              {
                  !isModels ? 
                  <motion.div initial={{ opacity: 0, scale: 0.2 }}
                              animate={{ opacity: 1,  scale: 1 }}
                              exit={{ opacity: 0, scale: 0.2 }}  
                              className="flex flex-col items-center ">
                    <div className=" aspect-square relative w-[240px] mt-10">
                      <ImgUI src={'/no-content.png'}/>
                    </div>
                    <h2 className="text-white font-bold md:text-lg text-center lg:text-xl xl:text-2xl  max-w-[700px]">Никакой соответствующий контент не был получен, попробуйте ввести другие ключевые слова</h2>
                  </motion.div>
              :
                <div
                  className={
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full h-[70vh]  overflow-y-scroll"
                  }
                >
                  {models.map((model) => (
                    <div key={model?.id} className="h-fit">
                      <CardCar model={model}  />
                    </div>
                  ))}
                </div>

              }
              
            </div>
          </div>
        </motion.div>
      )}
      </>
  );
};

export default Navbar;
