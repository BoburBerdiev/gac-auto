import {ImgUI} from "@/components/index";
const CardServiceCar = ({isIndexPage, text, icon, extraStyleIcon}) => {
    return (
        <div className={`flex justify-center ${isIndexPage ? 'flex-col' : 'flex-row md:flex-col'} cursor-pointer  items-center  gap-2 md:gap-3 p-4 md:p-5`}>
            {
                <div className={`p-3 rounded-full bg-black text-white lg:text-2xl xl:text-3xl xl:p-4 !aspect-square ${extraStyleIcon}`}>
                    {icon}
                </div>
            }
            <p className={'text-sm lg:text-base text-currentTextBlack text-center'}>
                {text}
            </p>
        </div>
    );
};

export default CardServiceCar;