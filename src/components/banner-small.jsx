import {ImgUI} from "@/components/index";

const BannerSmall = ({imgMob,imgDes , style}) => {
    return (
        <div className={`w-full h-[30vh] ${style} `}>
            <div className={'relative z-10 !w-full  !h-full lg:hidden'}>
                <ImgUI src={imgMob} alt="Banner" imageStyle={'object-center'}/>
            </div>
            <div className={'relative z-10 !w-full !h-full max-lg:hidden'}>
                <ImgUI src={imgDes} alt="Banner" imageStyle={'object-center'}/>
            </div>
        </div>
    )
}
export default BannerSmall;