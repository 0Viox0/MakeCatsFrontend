import LeftEar from "../catPreviewComponents/LeftEar";
import RightEar from "../catPreviewComponents/RightEar";
import Eye from "../catPreviewComponents/Eye";
import LeftWhisker from "../catPreviewComponents/LeftWhisker";
import RightWhisker from "../catPreviewComponents/RightWhisker";
import Mouth from "../catPreviewComponents/Mouth";
import { Cat } from "../../types/Cat";

const CatCard = ({ cat }: { cat: Cat }) => {
    return (
        <div
            className="w-[205px] h-[205px] rounded-full relative"
            style={{
                backgroundColor: cat.face,
            }}
        >
            <LeftEar color={cat.ears} />
            <RightEar color={cat.ears} />
            <Eye className="absolute top-[30%] left-[24%]" />
            <Eye className="absolute top-[30%] right-[24%]" />
            <div className="absolute bottom-[20%] left-[31%]">
                <LeftWhisker color={cat.whiskers} />
            </div>
            <div className="absolute bottom-[20%] right-[31%]">
                <RightWhisker color={cat.whiskers} />
            </div>
            <div className="absolute bottom-[17%] left-[45%]">
                <Mouth color={cat.whiskers} />
            </div>
        </div>
    );
};

export default CatCard;
