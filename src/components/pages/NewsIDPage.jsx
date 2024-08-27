"use client"
import { BannerSmall, SectionTitleCar } from "@/components";
import { langSelect } from "@/helper";
import { useTranslation } from "react-i18next";
import moment from 'moment';


export default function Page({data}) {
  const {i18n} = useTranslation()
  const formattedDate = moment(data?.createdAt).format('MMM DD, YYYY');
  return (
    <main className="min-h-[88vh]">
      <section>
        <div className="container relative mt-20">
        <BannerSmall
          isHeightAuto
          imgDes={`${process.env.NEXT_PUBLIC_API_URL}/${data?.image?.path}`}
        />
        </div>
      </section>
      <section className={"py-8 xl:py-[65px] "}>
        <div className="container-fluid space-y-3 lg:space-y-14 ">
          <div>
            <span className={"w-10 h-0.5 bg-borderBtn block"}></span>
            <p className={"mt-2 text-lg text-black mb-4"}>{formattedDate}</p>
            <SectionTitleCar
              extraStyle={"!text-start"}
              aboutPage={true}
              isTextLeft={true}
              title={langSelect(i18n.language , data?.titleRu , data?.titleUz)}
            />
          </div>
          <div
            className={
              "space-y-5  text-currentTextBlack !leading-[1.5] text-sm lg:text-base prose max-w-none xl:text-lg"
            }
            dangerouslySetInnerHTML={{__html: i18n.language === 'ru' ? data?.textRu : data?.textUz}}
          >
          </div>
        </div>
      </section>
    </main>
  );
}
