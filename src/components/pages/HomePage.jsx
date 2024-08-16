"use client"
import { AboutUsSection, ButtonUI, CardCar,  HomeHeaderBanner, NewsCard, SectionTitleCar } from "@/components/index";
import { langSelect } from "@/helper";
import { useTranslation } from "react-i18next";

const HomePage = ({banner, ourModels, news , about}) => {
  const {t , i18n} = useTranslation()
  const {brandValues} = about
  return (
    <>
      <section className={"w-full h-[80vh] aspect-square"}>
        <HomeHeaderBanner
          card={false}
          list={banner}
        />
      </section>
      <section className="py-10 md:py-20  ">
        <div className="flex flex-col items-center container-fluid gap-6 md:gap-9 lg:gap-11">
          <SectionTitleCar title={t('index.ourModels')} aboutPage={false}/>
          <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-4  ">
            {
              ourModels?.map(car => (
                <CardCar model={car} key={car?._id}/>
              ))
            }
          </div>
          <ButtonUI href={'/models'} text={t('btn.showMore')} isBorderBtn={true}  />
        </div>
      </section>
      <section className="bg-[#f8f8f8]">
        {
          brandValues?.map((section , idx) => (
            <AboutUsSection
              key={idx}
              image={`${process.env.NEXT_PUBLIC_API_URL}/${section?.image?.path}`}
              title={langSelect(i18n.language , section?.titleRu ,  section?.titleUz)}
              isImageLeft={idx % 2 && true}
              text={
                langSelect(i18n.language , section?.textRu ,  section?.textUz)
              }
            />
          ))
        }
      </section>
      <section className="py-10 md:py-20  ">
      <div className="flex flex-col items-center container-fluid gap-6 md:gap-9 lg:gap-11">
          <SectionTitleCar title={t('index.ourNews')} aboutPage={false}/>
          <div className="grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3  gap-4 md:gap-8 lg:gap-10 ">
            {
              news?.map(card => (
                <NewsCard news={card} key={card?._id}/>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}


export default HomePage