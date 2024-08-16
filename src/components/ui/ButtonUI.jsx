import Link from "next/link";

const ButtonUl = ({ href , text ,onClick ,  type, isBorderBtn , extraStyle , download , disabled }) => {

    return (
        <>
        {
             download === true ? (
                <a 
                download
                  href={href} 
                  className={` 
                    ${isBorderBtn ? `duration-500 py-3 px-16  md:px-20 border-borderBtn text-borderBtn hover:bg-borderBtn 2xl:text-base  xl:py-4` : `rounded-[45px] px-4 py-2  hover:bg-transparent duration-200 hover:!text-currentRed text-white border-currentRed bg-currentRed`}    
                    text-sm font-bold border hover:text-white ${extraStyle}`
                  }
                >
                  {text}
                </a>
              )
            : 
             href 
              ?
                <Link href={href}  className={` ${ isBorderBtn ? `duration-500 py-3 px-16  md:px-20 border-borderBtn text-borderBtn hover:bg-borderBtn 2xl:text-base  xl:py-4` : `rounded-[45px] px-4 py-2  hover:bg-transparent duration-200 hover:!text-currentRed text-white border-currentRed bg-currentRed`}    text-sm font-bold border   hover:text-white ${extraStyle}`}>
                    {text}
                </Link>
                :
               <button type={type} disabled={disabled}  onClick={onClick} className={` ${ isBorderBtn ? `duration-500 py-3 px-16  md:px-20 border-borderBtn text-borderBtn hover:bg-borderBtn 2xl:text-base  xl:py-4` : `rounded-[45px] px-4 py-2  hover:bg-transparent duration-200 hover:!text-currentRed text-white border-currentRed bg-currentRed`}    text-sm font-bold border   hover:text-white ${extraStyle}`}>
                    {text}
               </button> 
            
        }
           
        
        </>
    )
}

export default ButtonUl