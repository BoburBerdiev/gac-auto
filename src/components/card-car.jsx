import { ImgUI } from "@/components/index";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { RiOilLine } from "react-icons/ri";
import { GiSteeringWheel } from "react-icons/gi";
import Link from "next/link";

const CardCar = ({model}) => {
  return (
    <Link
      href={model ? model?.href : ' '}
      className={
        "block   bg-white font-montserrat  h-fit overflow-hidden  text-[#747474] group duration-200 ease-linear"
      }
    >
      <div className="px-4 border border-currentGray pb-5 pt-6  group-hover:border-currentRed duration-200">
      <div className={"px-2 md:px-4"}>
        <div className={"h-7 w-[150px] lg:w-[160px] lg:h-6 2xl:w-[190px] 2xl:h-9 relative "}>
          <ImgUI
            src={model?.logo}
            card={true}
            quality={100}
            alt={"logo"}
            objectFitContain={true}
          />
        </div>
        <h3 className={"text-xs sm:text-sm md:text-base mt-3"}>{model?.category}</h3>
      </div>
      <div
        className={
          "w-full aspect-video relative pt-8 lg:pt-[50px] md:group-hover:scale-[1.15] md:group-hover:-translate-x-4 duration-300"
        }
      >
        <ImgUI
          src={model?.image}
          alt={"car"}
          card={true}
          objectFitContain={true}
          quality={70}
        />
      </div>
      <div className={"px-2 md:px-4 flex justify-between items-center"}>
        <div
          className={
            "flex justify-center w-[30%] flex-col items-center gap-2 md:gap-3"
          }
        >
          <MdAirlineSeatReclineExtra className={"text-lg lg:text-[22px]"} />
          <p
            className={
              "space-x-1  text-[rgb(51, 51, 51)]  text-sm font-medium"
            }
          >
            <span>{model?.seats}</span>
          </p>
        </div>
        <div
          className={`flex justify-center w-[30%] flex-col items-center gap-2 md:gap-3 relative before:content-['']  before:absolute before:w-[.5px] before:top-[10%] before:h-[50%] before:bg-[#747474] before:left-0  after:content-['']  after:absolute after:w-[.5px] after:top-[10%] after:h-[50%] after:bg-[#747474] after:right-0`}
        >
          <RiOilLine className={"text-lg lg:text-[22px]"} />

          <p
            className={
              "space-x-1  text-[rgb(51, 51, 51)]  text-sm font-medium"
            }
          >
          {model?.fuel}
          </p>
        </div>
        <div
          className={
            "flex justify-center w-[30%] flex-col items-center gap-2 md:gap-3"
          }
        >
          <GiSteeringWheel className={"text-lg lg:text-[22px]"} />
          <p
            className={
              "space-x-1  text-[rgb(51, 51, 51)]  text-sm font-medium"
            }
          >
           {model?.gearbox}
          </p>
        </div>
      </div>
      </div>
      <div className="px-2 md:px-4 flex  py-3 justify-between items-center bg-currentRed border border-currentRed">
        <div className="flex flex-col">
          <p className="text-sm text-white">Цена:</p>
          <h4 className="font-bold text-white">50 000 000</h4>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm text-white">Цена в рассрочку:</p>
          <h4 className="font-bold text-white">8 000 000</h4>
        </div>
      </div>
    </Link>
  );
};

export default CardCar;
