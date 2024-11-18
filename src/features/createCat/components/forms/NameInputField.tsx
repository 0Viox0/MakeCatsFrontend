import { ChangeEvent, useContext } from "react";
import LineUnderChoices from "../shapes/LineUnderChoices";
import { CatContext } from "../../context/catContext";

const NameInputField = () => {
    const { cat, changeCatName } = useContext(CatContext);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeCatName(e.target.value);
    };

    return (
        <div className="flex justify-between">
            <h1 className="text-[1.5rem] text-white font-semibold mr-[35px]">
                Name:
            </h1>
            <div>
                <input
                    type="text"
                    className="w-[330px] bg-transparent outline-none 
                               text-[1.5rem] text-[#fff4f4] font-semibold"
                    maxLength={30}
                    value={cat.name}
                    onChange={handleOnChange}
                />
                <LineUnderChoices marginTop="8px" />
            </div>
        </div>
    );
};

export default NameInputField;
