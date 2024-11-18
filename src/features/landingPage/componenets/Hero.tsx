import Cats from "./other/Cats";
import HeroText from "./text/HeroText";

const Hero = () => {
    return (
        <div className="mainBlueBg h-[80vh] flex md:flex-row flex-col-reverse">
            <div className="md:w-[50%] w-full justify-center items-center md:flex hidden">
                <Cats />
            </div>
            <div className="md:w-[50%] w-full h-full flex justify-center items-center">
                <HeroText />
            </div>
        </div>
    );
};

export default Hero;
