"use client"
import { ButtonUI, CardCar,  HomeHeaderBanner, NewsCard, SectionTitleCar } from "@/components/index";
import { useTranslation } from "react-i18next";

const HomePage = ({banner, ourModels, news}) => {
  const {t} = useTranslation()
  return (
    <>
      <section className={"w-full h-[60vh] aspect-square"}>
        <HomeHeaderBanner
          PaginationMod={true}
          isHeader={true}
          card={false}
          PaginationInner={true}
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
      <section className="pb-10 md:pb-20  ">
      <div className="flex flex-col items-center container-fluid gap-6 md:gap-9 lg:gap-11">
          <SectionTitleCar title={t('index.ourNews')} aboutPage={false}/>
          <div className="grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3  gap-4 md:gap-8 lg:gap-10 ">
            {
              news?.map(card => (
                <NewsCard news={card} key={card?._id}/>
              ))
            }
          </div>
          <ButtonUI href={'/news'} text={t('btn.showMore')} isBorderBtn={true}  />
        </div>
      </section>
    </>
  );
}


export default HomePage