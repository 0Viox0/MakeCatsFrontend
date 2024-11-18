import ActionButton from "./buttons/ActionButton";
import OrangeLine from "./lines/OrangeLines";
import GamePreview from "./other/GamePreview";
import PaperPicture from "./other/PaperPicture";

const AppPreview = () => {
    return (
        <div
            className="relative flex lg:flex-row flex-col md:px-0 p-[30px]
                        bg-white"
        >
            <OrangeLine
                className="w-[571px] h-[33px] rotate-[-30deg] 
                           absolute left-[-5%] top-[23%] lg:block hidden"
            />
            <OrangeLine
                className="w-[571px] h-[33px] rotate-[-30deg] 
                                   absolute right-[-5%] bottom-[23%] lg:block hidden"
            />
            <h1
                className="text-black md:text-[3rem] text-[2rem] font-semibold text-center
                           flex justify-center items-end lg:mr-[10%]"
            >
                Choose from options
            </h1>
            <PaperPicture />
            <div className="relative flex flex-col items-center">
                <GamePreview />
                <div className="mt-[70px]">
                    <ActionButton text="Create now" />
                </div>
            </div>
        </div>
    );
};

export default AppPreview;
