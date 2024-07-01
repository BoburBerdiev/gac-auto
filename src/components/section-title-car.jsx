
const SectionTitleCar = ({isTextLeft=false , isTextWhite }) => {
    return (
        <div>
            <h4 className={`text-2xl md:text-5xl 2xl:text-6xl font-bold text-center ${isTextLeft ? 'md:text-left' : 'md:text-center'} ${isTextWhite ? 'text-white' : 'text-currentTextBlack'} `}>
                Dimensions
            </h4>
        </div>
    );
};

export default SectionTitleCar;