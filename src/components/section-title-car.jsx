
const SectionTitleCar = ({isTextLeft = false , isTextWhite , aboutPage, title, extraStyle }) => {
    return (
        <div>
            <h4 className={` ${aboutPage ? 'text-xl lg:text-2xl 2xl:text-[28px] 3xl:text-[36px] !leading-[1.2] ' : 'text-xl lg:text-2xl 2xl:text-[28px] 3xl:text-[36px] !leading-[1.2]'}  font-semibold text-center ${isTextLeft ? 'md:text-left' : 'md:text-center'} ${isTextWhite ? 'text-white' : 'text-currentTextBlack'} ${extraStyle}`}>
                {title}
            </h4>
        </div>
    );
};

export default SectionTitleCar;