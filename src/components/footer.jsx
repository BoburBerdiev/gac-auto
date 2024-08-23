'use client'
import {TfiYoutube} from "react-icons/tfi";
import {AiFillFacebook} from "react-icons/ai";
import {FaTwitter} from "react-icons/fa";
import {TiSocialInstagram} from "react-icons/ti";
import { ImgUI } from '.';
import { useTranslation } from 'react-i18next';
import { useQuery } from "react-query";
import apiService from "@/service/axios";
import { useEffect } from "react";

const Footer = () => {
    const {t} = useTranslation()
    const {
        data: footerData,
        refetch: footerRefetch,
        isSuccess: footerIsSucces,
    } = useQuery( "footerLink", () => apiService.getData('/contact'),{ enabled: false, })
      
    useEffect(() => {
        footerRefetch()
    }, [])
    return (
        <div className={'bg-black py-3 '}>
            <div className="container flex flex-col md:flex-row gap-4 justify-between items-center w-full">
            <div className={'flex gap-4 items-center '}>
                    <a href={footerData?.youtube} target="_blank" className={'block text-white text-xl'}>
                        <TfiYoutube/>
                    </a>
                    <a href={footerData?.facebook} target="_blank" className={'block text-white text-xl'}>
                        <AiFillFacebook />
                    </a>
                    <a href={footerData?.instagram} target="_blank" className={'block text-white text-xl'}>
                        <TiSocialInstagram />
                    </a>
                </div>
                <p className={'text-sm text-white text-center'}>
                    <span>Gac Motor </span>
                    <span>{t('footer.allRights')}</span>
                </p>
                <div className='flex items-center gap-2 text-white text-sm '>
                    <p>{t('footer.byCreated')}</p>
                    <a href='https://abduganiev.uz' target='_blank' className='relative block w-[70px] h-6'>
                        <ImgUI src={'/marss-logo.png'} alt={'Logo'} objectFitContain/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;