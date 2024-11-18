import { assets } from "../../../../assets";

const GamePreview = () => {
    return (
        <img
            src={assets.images.appPreview}
            alt="app preview"
            className="lg:mt-[10%] mt-[30px] xl:ml-[40%] ml-0"
        />
    );
};

export default GamePreview;
