"use client";
import dynamic from "next/dynamic";
import { ImgUI } from "@/components";

const Map = dynamic(() => import("@/components/map"));

export default function Page() {
  return (
    <div className={'bg-black store'}>
      {/* <div className={'w-screen relative bg-[#f5f5f5] overflow-hidden'}>
        <Map />
      </div> */}
    </div>
  );
}




const StoreBox = ({text, bg}) => {
    return (
        <>
            {text ? (
                <div className="h-[50vh] lg:h-[100vh] relative   overflow-hidden group">
                    <div className="w-full h-full transition duration-1000 hover:scale-105 relative">
                        <ImgUI src={bg} fill imageStyle="object-cover w-full h-full" alt={text}/>
                    </div>
                </div>
            ) : (
                <div className=" col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 ">
                    {
                        bg?.map(image => (
                        <div  key={image?._id}  className={' h-[242px] lg:h-[485px] w-full relative'}>
                                    <ImgUI src={`/logo.png`} 
                                           imageStyle="object-cover w-full h-full" alt={'filial inner'}/>
                    </div>
                            )
                        )
                    }
                </div>
            )}
        </>
    );
};
