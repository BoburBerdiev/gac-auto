import React from 'react';
import Link from "next/link";
import {TfiYoutube} from "react-icons/tfi";
import {AiFillFacebook} from "react-icons/ai";
import {FaTwitter} from "react-icons/fa";
import {TiSocialInstagram} from "react-icons/ti";
import { ImgUI } from '.';

const Footer = () => {
    return (
        <div className={'bg-black py-3 '}>
            <div className="container flex flex-col md:flex-row gap-4 justify-between items-center w-full">
            <div className={'flex gap-4 items-center '}>
                    <a href="#" className={'block text-white text-xl'}>
                        <TfiYoutube/>
                    </a>
                    <a href="#" className={'block text-white text-xl'}>
                        <AiFillFacebook />
                    </a>
                    <a href="#" className={'block text-white text-xl'}>
                        <FaTwitter />
                    </a>
                    <a href="#" className={'block text-white text-xl'}>
                        <TiSocialInstagram />
                    </a>
                </div>
                <p className={'text-sm text-white text-center'}>
                    Gac Motor Все права защищены.
                </p>
                <div className='flex items-center gap-2 text-white text-sm '>
                    <p>Сайт создан:</p>
                    <a href='https://abduganiev.uz' target='_blank' className='relative block w-[120px] h-10'>
                        <ImgUI src={'/marss-logo.png'} alt={'Logo'} objectFitContain/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;