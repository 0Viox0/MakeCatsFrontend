import { useState } from "react";
import ChooseItemsForm from "./forms/ChooseItemsForm";
import Preview from "./other/Preview";
import { Cat } from "../types/Cat";
import { CatPartColor } from "../types/enums";
import { CatContext } from "../context/catContext";
import SeparatingLine from "./shapes/SeparatingLine";
import SaveButton from "./buttons/SaveButton";

const CreateCatForm = () => {
    const [catInfo, setCatInfo] = useState<Cat>(
        new Cat(
            "",
            CatPartColor.Yellow,
            CatPartColor.Black,
            CatPartColor.Yellow,
        ),
    );

    const updateCatInfo = (part: keyof Cat, color: CatPartColor) => {
        setCatInfo((prevCat) => ({
            ...prevCat,
            [part]: color,
        }));
    };

    const updateCatName = (newName: string) => {
        setCatInfo((prevCat) => ({
            ...prevCat,
            name: newName,
        }));
    };

    return (
        <CatContext.Provider
            value={{
                cat: catInfo,
                changeCatInfo: updateCatInfo,
                changeCatName: updateCatName,
            }}
        >
            <div className="flex flex-col">
                <h1 className="text-[#fff1f1] text-[4rem] font-semibold text-center">
                    Create a cat
                </h1>
                <div className="flex mt-[137px]">
                    <div className="w-1/2 flex flex-col">
                        <ChooseItemsForm />
                    </div>
                    <div className="flex items-stretch">
                        <SeparatingLine />
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <Preview />
                        <h1 className="text-[2rem] text-white font-semibold mt-auto">
                            Preview
                        </h1>
                    </div>
                </div>
            </div>
        </CatContext.Provider>
    );
};

export default CreateCatForm;
