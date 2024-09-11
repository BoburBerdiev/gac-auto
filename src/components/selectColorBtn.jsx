import { langSelect } from "@/helper";
import { ImgUI } from ".";
import { useTranslation } from "react-i18next";

export default function SelectColorBtn ({ item ,state, setState}) {
  const { i18n} = useTranslation()

  return (
    <div className="flex w-full flex-col items-center gap-2 cursor-pointer" onClick={() => setState(item)}>
      <div className={`relative w-10 aspect-square rounded-full overflow-hidden  xl:w-[50px] border-currentRed ${state?._id == item?._id && 'border-2'}`}>
        <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${item?.colorImage?.path}`} alt={'Color Image'}/>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-xs text-center">{langSelect(i18n.language, item?.colorNameRu ,  item?.colorNameUz)}</p>
        {/* <p className="text-[10px] font-semibold">{item?.price}</p> */}
      </div>
    </div>
  )
}
