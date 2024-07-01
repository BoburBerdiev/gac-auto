import Link from "next/link";

const ButtonUl = ({ href , text ,onClick ,  type, }) => {

    return (
        <>

            {
                href 
                    ?
                    <Link href={href} className={'rounded-[45px] text-sm font-bold border px-4 py-2 border-currentRed text-currentRed hover:bg-currentRed hover:text-white'}>
                            {text}
                    </Link>
                    :
                    <button type={type} onClick={onClick} className={'rounded-[45px] text-sm px-4 py-2 font-bold border-currentRed text-currentRed hover:bg-currentRed hover:text-white'}>
                            {text}

                    </button>
            }

        </>
    )
}

export default ButtonUl