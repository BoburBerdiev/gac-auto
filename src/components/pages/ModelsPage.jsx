
"use client"
import { CardCar, SectionHeaderBanner } from "@/components";
import { langSelect } from "@/helper";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const tabsList = [
  { name: "Все модели", id: 1, isActive: true },
  { name: "Электронная", id: 4 },
  { name: "Бензиновый", id: 5 },
];
const sliderList = [
  {
    image: "/models/banner1.jpg",
    id: 0,
    alt: "Banner Image",
  },
  {
    image: "/models/banner2.jpg",
    id: 1,
    alt: "Banner Image",
  },
  {
    image: "/models/banner3.jpg",
    id: 2,
    alt: "Banner Image",
  },
  {
    image: "/models/banner4.jpg",
    id: 3,
    alt: "Banner Image",
  },
];

const models = [
    {
        id: 1,
        href: "",
        category: 'СВ',
        logo: '/model-logo1.png',
        image: '/model-image1.png',
        gearbox: "AT",
        seats: "7 Сиденья",
        fuel: "Бензин"
    },
    {
        id: 2,
        href: "",
        category: 'МИНИВЭН',
        logo: '/model-logo2.png',
        image: '/model-image2.png',
        gearbox: "AT",
        seats: "7 Сиденья",
        fuel: "Бензин"
    },
]




const ModelsPage = ({banner, filterBtns}) => {
  const [tabActive , setTabActive] = useState('all')
  const {t, i18n} = useTranslation()
  return (
    <div className={"flex flex-col gap-5 md:gap-10"}>
      <section className={"w-full aspect-[16/14] lg:aspect-[16/6]"}>
        <SectionHeaderBanner list={banner} />
      </section>
      <div className="container flex flex-col gap-5 md:gap-10 pb-[30px] xl:pb-[75px] 2xl:pb-[85px] 3xl:pb-[110px]">
        <section>
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 w-full">
            <ul className="flex min-w-[200px] overflow-x-scroll md:overflow-x-auto  justify-between -mb-px">
             <li  className="me-2">
                  <button
                    onClick={() => setTabActive('all')}
                    className={`inline-block text-nowrap hover:text-currentRed uppercase relative md:text-lg leading-[30px] lg:leading-[66px] lg:text-2xl p-1 md:p-4 before:content-[''] before:absolute before:bottom-0 before:duration-300 before:bg-currentRed before:left-0 before:w-0 before:h-1 hover:before:w-full ${
                      tabActive === 'all' ? "text-currentRed before:w-full" : ""
                    }`}
                  >
                   {t('models.all')}
                  </button>
                </li>

              {filterBtns?.map((tab, idx) => (
                <li key={tab?._id} className="me-2">
                  <button
                    onClick={() => setTabActive(idx)}
                    className={`inline-block text-nowrap hover:text-currentRed uppercase relative md:text-lg leading-[30px] lg:leading-[66px] lg:text-2xl p-1 md:p-4 before:content-[''] before:absolute before:bottom-0 before:duration-300 before:bg-currentRed before:left-0 before:w-0 before:h-1 hover:before:w-full 
                    ${
                      tabActive === idx ? "text-currentRed before:w-full" : ""
                    } `}
                  >
                    {langSelect(i18n.language, tab?.nameRu , tab?.nameUz)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <div
            className={"grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4 md:gap-8 lg:gap-10"}>
                {
                    models?.map(model => (
                        <CardCar key={model?.id} model={model}/>
                    ))
                }
          </div>
        </section>
      </div>
    </div>
  );
}


export default ModelsPage