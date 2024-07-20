import {ImgUI} from "@/components/index";
import Link from "next/link";

const NewsCard = ({image, date, title, href}) => {
    return (
        <Link href={href} className={'bg-white w-full h-fit md:hover:shadow-xl group'}>
            <div className={'w-full aspect-[3/2] xl:aspect-[7/4] overflow-hidden '}>
                <div className="group-hover:scale-105 relative w=full h-full duration-150">
                    <ImgUI src={image} />
                </div>
            </div>
            <div className={'p-4 border border-[#d2d2d2] xl:px-7 xl:pt-6 2xl:px-9 2xl:pt-8'}>
                <span className={'w-10 h-0.5 bg-borderBtn block'}></span>
                <p className={'pt-3 xl:pt-3.5 text-sm text-black mb-2'}>{date}</p>
                <h3 className={'line-clamp-2 leading-[28px] h-14'}>{title}</h3>
            </div>
        </Link>
    );
};

export default NewsCard;