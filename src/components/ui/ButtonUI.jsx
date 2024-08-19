import Link from "next/link";

const ButtonUl = ({ href , text ,onClick ,  type, isBorderBtn , extraStyle , download , disabled }) => {

    return (
        <>
        {
             download === true ? (
                <a 
                download
                  href={href} 
                  className={` tracking-[1px] 
                    ${isBorderBtn ? `duration-500 px-2 py-3 md:px-16  border-borderBtn text-borderBtn hover:bg-borderBtn ` : `rounded-[45px] px-4 py-2  hover:bg-transparent duration-200 hover:!text-currentRed text-white border-currentRed bg-currentRed`} text-sm font-medium border hover:text-white ${extraStyle}`
                  }
                >
                  {text}
                </a>
              )
            : 
             href 
              ?
                <Link href={href}  className={` tracking-[1px] ${ isBorderBtn ? `duration-500 px-2 py-3 md:px-16  border-borderBtn text-borderBtn hover:bg-borderBtn  ` : `rounded-[45px] px-4 py-2  hover:bg-transparent duration-200 hover:!text-currentRed text-white border-currentRed bg-currentRed`}    text-sm font-medium border   hover:text-white ${extraStyle}`}>
                    {text}
                </Link>
                :
               <button type={type} disabled={disabled}  onClick={onClick} className={` tracking-[1px] ${ isBorderBtn ? `duration-500 px-2 py-3 md:px-16  border-borderBtn text-borderBtn hover:bg-borderBtn ` : `rounded-[45px] px-4 py-2  hover:bg-transparent duration-200 hover:!text-currentRed text-white border-currentRed bg-currentRed`}    text-sm font-medium border   hover:text-white ${extraStyle} ${disabled && 'cursor-not-allowed hover:!bg-currentRed hover:!text-white opacity-75 '}`}>
                    {text}
               </button> 
        }
        </>
    )
}

export default ButtonUl