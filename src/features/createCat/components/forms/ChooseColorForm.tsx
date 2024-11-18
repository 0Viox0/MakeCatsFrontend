import { Cat } from "../../types/Cat";
import { CatPartColor } from "../../types/enums";
import ChoiceCard from "../formOptions/ChoiceCard";

const ChooseColorForm = ({
    text,
    catField,
}: {
    text: string;
    catField: keyof Cat;
}) => {
    return (
        <div className="flex justify-start items-center">
            <h1 className="text-[1.5rem] text-white font-semibold mr-[35px]">
                {text}
            </h1>
            <div>
                <div className="flex justify-start items-center space-x-[18px]">
                    {Object.values(CatPartColor).map((color) => (
                        <ChoiceCard
                            key={color}
                            color={color as CatPartColor}
                            catField={catField}
                        />
                    ))}
                </div>
                <div className="w-full h-[1px] bg-[#aeaeae] mt-[14.7px]"></div>
            </div>
        </div>
    );
};

export default ChooseColorForm;
