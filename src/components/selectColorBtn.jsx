import { ImgUI } from ".";

export default function SelectColorBtn ({active, icon, nameColor}) {
  return (
    <div className="flex w-full flex-col items-center gap-2 cursor-pointer">
      <div className={`relative w-10 aspect-square rounded-full overflow-hidden  xl:w-[50px] ${active && 'border-2'}`}>
        <ImgUI src={icon} alt={'Color Image'}/>
      </div>
      <p className="font-bold text-xs text-center">{nameColor}</p>
    </div>
  )
}
