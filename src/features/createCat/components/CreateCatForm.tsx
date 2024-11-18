import { useEffect, useState } from "react";
import ChooseItemsForm from "./forms/ChooseItemsForm";
import Preview from "./other/Preview";
import { Cat } from "../types/Cat";
import { CatPartColor } from "../types/enums";
import { CatContext } from "../context/catContext";
import SeparatingLine from "./shapes/SeparatingLine";

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

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const editCatName = params.get("editCat");

        if (editCatName) {
            const storedCat = localStorage.getItem(editCatName);

            if (storedCat) {
                const parsedCat = JSON.parse(storedCat) as Cat;
                setCatInfo(parsedCat);
            }
        }
    }, []);

    return (
        <CatContext.Provider
            value={{
                cat: catInfo,
                changeCatInfo: updateCatInfo,
                changeCatName: updateCatName,
            }}
        >
            <div className="flex flex-col">
                <h1 className="text-[#fff1f1] md:text-[4rem] text-[2.5rem] font-semibold text-center">
                    Create a cat
                </h1>
                <div className="flex xl:flex-row flex-col-reverse xl:mt-[137px] mt-[50px]">
                    <div className="xl:w-1/2 w-full flex flex-col">
                        <ChooseItemsForm />
                    </div>
                    <div className="items-stretch xl:flex hidden">
                        <SeparatingLine />
                    </div>
                    <div
                        className="xl:w-1/2 w-full flex xl:flex-col flex-col-reverse items-center
                                    mb-[60px]"
                    >
                        <Preview />
                        <h1 className="text-[2rem] text-white font-semibold mt-auto xl:mb-0 mb-[60px]">
                            Preview
                        </h1>
                    </div>
                </div>
            </div>
        </CatContext.Provider>
    );
};

export default CreateCatForm;
