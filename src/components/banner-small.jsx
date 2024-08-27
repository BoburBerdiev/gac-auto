import {ImgUI} from "@/components/index";
import Image from "next/image";

const BannerSmall = ({imgMob,imgDes , style , isHeightAuto = false}) => {
    return (
        <>
        {
            isHeightAuto ?
            <Image src={imgDes} alt="car" className="block object-cover object-center w-full h-full"
                             width={0}
                             height={0}
                             sizes={'100vw'}
                             style={{width: '100%', height: 'auto'}}
            />
            :
            <div className={`w-full h-[30vh] ${style} `}>
            <div className={'relative z-10 w-full  h-full lg:hidden'}>
                <ImgUI src={imgMob} alt="Banner" imageStyle={'object-center'}/>
            </div>
            <div className={'relative z-10 w-full h-full max-lg:hidden'}>
                <ImgUI src={imgDes} alt="Banner" imageStyle={'object-center'}/>
            </div>
        </div>
        }
        </>
        
    )
}
export default BannerSmall;