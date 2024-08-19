import {ImgUI} from "@/components/index";
import { langSelect } from "@/helper";
import moment from "moment";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const NewsCard = ({news}) => {
    const {i18n} = useTranslation()
    const formattedDate = moment(news?.createdAt).format('MMM DD, YYYY');
    return (
        <Link href={`/news/${news?.slug}`} className={'bg-[#F8F8F8] w-full h-fit   md:hover:shadow-xl group'}>
            <div className={'w-full aspect-[3/2] xl:aspect-[3/2] overflow-hidden '}>
                <div className="group-hover:scale-110 relative w-full h-full duration-150">
                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${news?.image?.path}`}  alt={'News Gac Motor'}/>
                </div>
            </div>
            <div className={'p-4 lg:p-5 xl:p-6 gap-3 lg:gap-5 xl:gap-6 flex flex-col'}>
                <h3 className={'line-clamp-2 leading-[28px] lg:text-xl h-14'}>{langSelect(i18n.language , news?.titleRu , news?.titleUz)}</h3>
                <p className={' text-sm text-[#00000099] '}>{formattedDate}</p>
            </div>
        </Link>
    );
};

export default NewsCard;