import Link from "next/link";

const ButtonUl = ({ href , text ,onClick ,  type, isBorderBtn , extraStyle , download }) => {

    return (
        <>
        {
             download === true ? (
                <a 
                download
                  href={href} 
                  className={` 
                    ${isBorderBtn ? `duration-500 py-3 px-20 border-borderBtn text-borderBtn hover:bg-borderBtn 2xl:text-base lg:px-24 2xl:px-28 3xl:px-32 xl:py-4` : `rounded-[45px] px-4 py-2 border-currentRed text-currentRed hover:bg-currentRed`}    
                    text-sm font-bold border hover:text-white ${extraStyle}`
                  }
                >
                  {text}
                </a>
              )
            : 
             href 
              ?
                <Link href={href}  className={` ${ isBorderBtn ? `duration-500 py-3 px-20 border-borderBtn text-borderBtn hover:bg-borderBtn 2xl:text-base lg:px-24 2xl:px-28 3xl:px-32 xl:py-4` : `rounded-[45px] px-4 py-2 border-currentRed text-currentRed hover:bg-currentRed`}    text-sm font-bold border   hover:text-white ${extraStyle}`}>
                    {text}
                </Link>
                :
               <button type={type}  onClick={onClick} className={` ${ isBorderBtn ? `duration-500 py-3 px-20 border-borderBtn text-borderBtn hover:bg-borderBtn 2xl:text-base lg:px-24 2xl:px-28 3xl:px-32 xl:py-4` : `rounded-[45px] px-4 py-2 border-currentRed text-currentRed hover:bg-currentRed`}    text-sm font-bold border   hover:text-white ${extraStyle}`}>
                    {text}
               </button> 
            
        }
           
        
        </>
    )
}

export default ButtonUl