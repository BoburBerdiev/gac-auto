import React from 'react';
import Link from "next/link";
import {TfiYoutube} from "react-icons/tfi";
import {AiFillFacebook} from "react-icons/ai";
import {FaTwitter} from "react-icons/fa";
import {TiSocialInstagram} from "react-icons/ti";

const Footer = () => {
    return (
        <div className={'bg-black py-2'}>
            <div className="container flex flex-col md:flex-row gap-4 justify-between items-center w-full">
                <ul className={'text-sm  text-white flex gap-5'}>
                    <li>
                        <Link href="">Sitemap</Link>
                    </li>
                    <li>
                        <Link href="">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="">Legal Terms</Link>
                    </li>
                </ul>
                <p className={'text-sm text-white text-center'}>
                    Copyright from 2015 to 2024 GAC INTERNATIONAL CO., LTD. 粤ICP备2022091938号
                </p>
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
            </div>
        </div>
    );
};

export default Footer;