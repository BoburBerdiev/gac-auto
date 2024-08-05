import {ImgUI} from "@/components/index";
import { langSelect } from "@/helper";
import moment from "moment";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const NewsCard = ({news}) => {
    const {i18n} = useTranslation()
    const formattedDate = moment(news?.createdAt).format('MMM DD, YYYY');
    return (
        <Link href={`/news/${news?.slug}`} className={'bg-white w-full h-fit md:hover:shadow-xl group'}>
            <div className={'w-full aspect-[3/2] xl:aspect-[7/4] overflow-hidden '}>
                <div className="group-hover:scale-110 relative w-full h-full duration-150">
                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${news?.image?.path}`}  alt={'News Gac Motor'}/>
                </div>
            </div>
            <div className={'p-4 border border-[#d2d2d2] xl:px-7 xl:pt-6 2xl:px-9 2xl:pt-8'}>
                <span className={'w-10 h-0.5 bg-borderBtn block'}></span>
                <p className={'pt-3 xl:pt-3.5 text-sm text-black mb-2'}>{formattedDate}</p>
                <h3 className={'line-clamp-2 leading-[28px] h-14'}>{langSelect(i18n.language , news?.titleRu , news?.titleUz)}</h3>
            </div>
        </Link>
    );
};

export default NewsCard;