import {ImgUI} from "@/components/index";

const BannerSmall = ({imgMob,imgDes }) => {
    return (
        <div className={'w-full h-[30vh] md:h-[60vh] lg:h-[35vh] xl:h-[55vh] '}>
            <div className={'relative z-10 !w-full  !h-full lg:hidden'}>
                <ImgUI src={imgMob} alt="Banner"/>
            </div>
            <div className={'relative z-10 !w-full !h-full max-lg:hidden'}>
                <ImgUI src={imgDes} alt="Banner"/>
            </div>
        </div>
    )
}
export default BannerSmall;