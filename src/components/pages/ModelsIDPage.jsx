"use client";
import {
  FaDownload,
  FaFileContract,
  FaPhone,
  FaCarAlt,
  FaDollarSign,
} from "react-icons/fa";
import {
  ButtonUI,
  CardServiceCar,
  FeaturesCard,
  ImgUI,
  NavbarCarInner,
  PerformanceCard,
  SaleCarModal,
  SectionTitleCar,
} from "@/components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { langSelect } from "@/helper";

const features = [
  {
    image: "/empow-features1.jpg",
    text: "Впечатляющий дизайн истребителя",
    id: 0,
  },
  {
    image: "/empow-features2.jpg",
    text: "Максимальная управляемость",
    id: 1,
  },
  {
    image: "/empow-features3.jpg",
    text: "Лучшее в своем классе пространство салона",
    id: 2,
  },
  {
    image: "/empow-features4.jpg",
    text: "Улучшенное оборудование для пробуждения технологий",
    id: 3,
  },
];

export default function ModelsDetails({ data }) {
  const [saleModal, setSaleModal] = useState(false);
  const [isModelColor, setIsModelColor] = useState();
  const [carColor, setCarColor] = useState()
  const { t, i18n } = useTranslation();


  console.log(data);



  useEffect(() => {
    setCarColor(data?.carColor[0].carImage?.path)
    setIsModelColor(data?.carColor[0]._id);
    if (saleModal === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [saleModal]);

  const handleModelColor = (path , id) => {
    setCarColor(path)
    setIsModelColor(id)
  }
 
  return (
    <div className={"relative"}>
      <NavbarCarInner
        logo={`${process.env.NEXT_PUBLIC_API_URL}/${data?.logoInner?.path}`}
      />
      <section
        className={
          "w-full aspect-[5/7] xs:aspect-[4/3] lg:aspect-[16/7] relative overflow-hidden"
        }
      >
        <ImgUI
          src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.performanceBannerRes?.path}`}
          alt={"banner"}
          imageStyle={"object-center lg:hidden"}
        />
        <ImgUI
          src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.performanceBannerWeb?.path}`}
          alt={"banner"}
          imageStyle={"object-center max-lg:hidden"}
        />
      </section>
      <section
        className={
          "bg-gradient-to-b lg:bg-gradient-to-r to-white from-50%  from-[#41454b] to-50% md:py-[70px] py-5"
        }
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 relative">
          <div>
            <SectionTitleCar
              title={t("innerModel.specs")}
              isTextLeft={true}
              isTextWhite={true}
            />
            <ul className={"text-white  space-y-3 lg:space-y-8 py-5 lg:py-10"}>
              {data?.character?.map((item) => (
                <li key={item?._id}>
                  <p className={"text-sm lg:text-base space-x-2"}>
                    <span>
                      {langSelect(i18n.language, item?.keyRu, item?.keyUz)}
                    </span>
                    <span className={"font-bold"}>
                      {langSelect(i18n.language, item?.valueRu, item?.valueUz)}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              className={
                "flex flex-col lg:flex-row justify-start lg:justify-end"
              }
            >
              <div
                className={
                  "w-full shrink-1 h-[250px] lg:w-[600px] lg:h-[200px] xl:w-[700px] xl:h-[300px] "
                }
              >
                <div
                  className={
                    " lg:absolute relative z-5 h-[250px] lg:w-[800px] xl:w-[800px] xl:h-[350px] lg:h-[320px] lg:top-[0] lg:left-[50%]  lg:translate-x-[-50%]"
                  }
                >
                  <ImgUI
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${carColor}`}
                    objectFitContain={true}
                    alt={"banner"}
                  />
                </div>
              </div>
              <div
                className={
                  "flex flex-row w-full lg:flex-col items-center  lg:items-end justify-center lg:justify-end gap-5 lg:gap-y-3 relative z-20"
                }
              >
                {data?.carColor?.map((modelColor) => (
                  <button
                  onClick={() => handleModelColor( modelColor?.carImage?.path , modelColor?._id)}
                    key={modelColor?._id}
                    className={`p-0 lg:py-1 lg:px-2 group cursor-pointer text-sm max-lg:pb-7 flex flex-col lg:flex-row  lg:justify-end items-center  border-none lg:border rounded-full relative  lg:hover:bg-[#ededed] lg:hover:shadow-modelColor ${
                        isModelColor === modelColor?._id ?
                      " lg:bg-[#ededed] lg:shadow-modelColor" : ''
                    }`}
                  >
                    <span
                      className={`shrink-1 text-nowrap max-lg:absolute bottom-0  order-2 lg:order-1 text-[13px] font-semibold lg:px-7 lg:group-hover:block ${
                        isModelColor === modelColor?._id ? "block" : "hidden"
                      } `}
                    >
                      {langSelect(
                        i18n.language,
                        modelColor?.colorNameRu,
                        modelColor?.colorNameUz
                      )}
                    </span>
                    <div className=""></div>
                    <span
                      className={
                        "w-5 aspect-square lg:w-6 overflow-hidden  order-1 lg:order-2 relative rounded-full shrink-1"
                      }
                    >
                      <ImgUI
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${modelColor?.colorImage?.path}`}
                        alt={"icon-color"}
                        objectFitContain={true}
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div
            className={
              "flex justify-center items-center relative z-10 col-span-1 lg:col-span-2 mt-10 lg:mt-20"
            }
          >
            <ButtonUI text={t("btn.downloadCatalog")} download={true} href={`${process.env.NEXT_PUBLIC_API_URL}/${data?.pdf?.path}`}   />
          </div>
        </div>
      </section>
      <section
        className={
          "bg-[#efefef]  md:bg-[url(/bg-car-inner.jpg)] bg-no-repeat bg-cover bg-top bg-scroll lg:pt-[90px] md:pt-[72px] pt-20 pb-[15px] lg:pb-[20px]"
        }
      >
        <div className="container">
          <SectionTitleCar title={t("innerModel.sizes")} />
          <div className={"w-full h-[350px] md:h-[450px] flex items-end"}>
            <div className={"relative h-[350px] w-full"}>
              <ImgUI
                src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.sizeBannerWeb?.path}`}
                alt={"Gag Image"}
                imageStyle={"hidden md:block"}
                objectFitContain={true}
                priority={true}
              />
              <ImgUI
                src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.sizeBannerRes?.path}`}
                alt={"Gag Image"}
                imageStyle={"block md:hidden"}
                objectFitContain={true}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          "bg-[#fff]  lg:pt-[90px] md:pt-[72px] pt-20 pb-[15px] lg:pb-[20px]"
        }
      >
        <div className="container space-y-8 md:space-y-12 ">
          <SectionTitleCar title={langSelect(i18n.language , data?.performance?.titleRu , data?.performance?.titleUz)} />
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8"}>
            {
                data?.performance?.list?.map(card => (
                    <PerformanceCard
                     key={card?._id}
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${card?.image?.path}`}
                      isPng={true}
                      text={
                        langSelect(i18n.language , card?.titleRu , card?.titleUz)
                      }
                    />
                ))
            }
          </div>
          <div className={"flex justify-center items-center "}>
            <ButtonUI text={t("btn.readMore")} href={`/models/${data?.slug}/perfonmance`} />
          </div>
        </div>
      </section>
      <section className={"bg-[#fff]  lg:pt-[90px] md:py-[72px] py-20 "}>
        <div className="container space-y-8 md:space-y-12 ">
          <SectionTitleCar title={t("innerModel.features")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
            {data?.feutures?.map((model) => (
              <FeaturesCard
                image={`${process.env.NEXT_PUBLIC_API_URL}/${model?.image}`}
                text={langSelect(i18n.language, model?.titleRu, model?.titleUz)}
                key={model?._id}
              />
            ))}
          </div>
          <div className={"flex justify-center items-center"}>
            <ButtonUI text={t("btn.readMore")} href={`/models/${data?.slug}/perfonmance`} />
          </div>
        </div>
      </section>
      <section className={"bg-[#f5f5f5]  md:py-10"}>
        <div className="container-fluid flex flex-wrap justify-evenly  divide-y md:divide-y-0 divide-[#e1e1e1] ">
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              href={"/drive"}
              text={t("serviceCard.testDrive")}
              id={"driveCard"}
              icon={<FaCarAlt />}
            />
          </div>
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              text={t("serviceCard.saleCar")}
              icon={<FaDollarSign />}
              id={"saleCard"}
              onClick={() => setSaleModal(true)}
            />
          </div>
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              download={true}
              href={`${process.env.NEXT_PUBLIC_API_URL}/${data?.pdf?.path}`}
              id={"catalogCard"}
              text={t("btn.downloadCatalog")}
              icon={<FaDownload />}
            />
          </div>
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              href={"/dealers"}
              text={t("serviceCard.dealer")}
              id={"dealersCard"}
              icon={<FaFileContract />}
            />
          </div>
          <div className="w-full md:w-[30%] lg:w-[15%]">
            <CardServiceCar
              href={"/dealers-center"}
              text={t("serviceCard.contactUs")}
              id={"contactCard"}
              icon={<FaPhone />}
            />
          </div>
        </div>
      </section>
      <SaleCarModal modal={saleModal} setModal={setSaleModal} />
    </div>
  );
}
