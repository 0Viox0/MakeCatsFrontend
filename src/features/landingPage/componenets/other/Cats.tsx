import { assets } from "../../../../assets";

const Cats = () => {
    return (
        <div className="relative w-[390px] h-[380px]">
            <img
                src={assets.images.orangeCat}
                alt="orange cat"
                className="absolute w-[280px] h-[280px]"
            />
            <img
                src={assets.images.blackCat}
                alt="black cat"
                className="top-[100px] left-[100px] absolute w-[280px] h-[280px]"
            />
        </div>
    );
};

export default Cats;
