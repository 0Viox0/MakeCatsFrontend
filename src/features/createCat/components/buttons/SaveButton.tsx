import { useContext, useState } from "react";
import { CatContext } from "../../context/catContext";
import { CatPartColor } from "../../types/enums";

const SaveButton = () => {
    const { cat, changeCatInfo, changeCatName } = useContext(CatContext);
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleOnClick = () => {
        setDisplayErrorMessage(false);
        setDisplaySuccessMessage(false);

        if (cat.name.trim() === "") {
            setErrorMessage("Name cannot be empty");
            setDisplayErrorMessage(true);
            setTimeout(() => setDisplayErrorMessage(false), 4000);
            return;
        }

        if (localStorage.getItem(cat.name.trim())) {
            setSuccessMessage("Cat has been updated");
            setDisplaySuccessMessage(true);
            setTimeout(() => setDisplaySuccessMessage(false), 4000);
        }

        localStorage.setItem(cat.name, JSON.stringify(cat));
        resetCatInfo();
        setSuccessMessage("The cat has successfully been saved");
        setDisplaySuccessMessage(true);
        setTimeout(() => setDisplaySuccessMessage(false), 4000);
    };

    const resetCatInfo = () => {
        changeCatName("");
        changeCatInfo("ears", CatPartColor.Yellow);
        changeCatInfo("whiskers", CatPartColor.Yellow);
        changeCatInfo("face", CatPartColor.Black);
    };

    return (
        <div className="xl:mr-[70%]">
            <button
                className="inline py-[5px] px-[36px] text-[2rem] font-semibold
                       bg-white rounded-[12px] text-[#5881b0]
                       hover:bg-[#dddddd] active:bg-white"
                onClick={handleOnClick}
            >
                Save
            </button>
            <div
                className={`absolute text-red-300 xl:text-nowrap text-center
                            ${!displayErrorMessage && "hidden"}`}
            >
                {errorMessage}
            </div>
            <div
                className={`absolute text-green-300 xl:text-nowrap text-center
                            ${!displaySuccessMessage && "hidden"}`}
            >
                {successMessage}
            </div>
        </div>
    );
};

export default SaveButton;
