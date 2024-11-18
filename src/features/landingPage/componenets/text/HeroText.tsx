import DesktopLines from "../lines/DesktopLines";
import MobileLines from "../lines/MobileLines";

const HeroText = () => {
    return (
        <div className="relative sm:text-[4rem] text-[2.5rem] font-semibold text-white">
            <h1>Create</h1>
            <h1 className="ml-[200px]">a cat</h1>
            <div className="sm:block hidden">
                <DesktopLines />
            </div>
            <div className="sm:hidden block">
                <MobileLines />
            </div>
        </div>
    );
};

export default HeroText;
