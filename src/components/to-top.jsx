"use client"
import { IoIosArrowUp } from "react-icons/io";
import {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";

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

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div onClick={toTop} className={`flex items-center gap-2 z-50 bg-[#c31e1a] pr-2.5 ${!isHidden ? '-right-full' : 'right-[0%]'} duration-500 bottom-[10%] py-2.5 pl-4 text-white fixed  rounded-l-full 3xl:text-lg cursor-pointer 3xl:pl-[18px] font-bold !leading-[1]`}>
            <span>{t('toTop')}</span>
            <IoIosArrowUp className={'mb-1 text-lg 3xl:text-xl'}/>
        </div>
    );
};

export default ToTop;