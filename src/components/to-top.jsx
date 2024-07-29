"use client"
import { IoIosArrowUp } from "react-icons/io";
import {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const ToTop = () => {
    const [isHidden, setIsHidden] = useState(false);
    const {t} = useTranslation()
    useEffect(() => {
        
            const handleScroll = () => {
                if (window.pageYOffset > 600) {
                    setIsHidden(true);
                } else {
                    setIsHidden(false);
                }
            };
            if (typeof window !== "undefined") {
                window.addEventListener('scroll', handleScroll);
        }
            // Clean up the event listener on component unmount
            return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener('scroll', handleScroll);
            }
            };
    }, []);

    const toTopHandle = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
       
    }
    return (
        <AnimatePresence key={'toTop'}>
        <motion.div key={'toTopChild'} whileTap={{scale: 0.7 , x: 40}} onClick={toTopHandle} className={`flex items-center gap-2 z-50 bg-[#c31e1a] pr-2.5 ${!isHidden ? '-right-full' : 'right-[0%]'} duration-500 bottom-[4%] py-2.5 pl-4 text-white fixed  rounded-l-full 3xl:text-lg cursor-pointer 3xl:pl-[18px] font-bold !leading-[1]`}>
            <span>{t('toTop')}</span>
            <IoIosArrowUp className={'mb-1 text-lg 3xl:text-xl'}/>
        </motion.div>
        <motion.a key={'toTopChildTwo'} whileTap={{scale: 1.2}} href="tel:+998901112233" className="fixed bottom-[12%] z-[99999] right-5 flex flex-col items-center justify-center">
            <div className="w-[90%] h-[90%] rounded-full animate-ping border border-currentRed absolute "></div>
            <div className="p-3 xl:p-6 rounded-full relative z-10 bg-[#c31e1a] block w-fit text-white ">
                <FaPhone className="xl:text-xl"/>
            </div>
        </motion.a>
        </AnimatePresence>
    );
};

export default ToTop;