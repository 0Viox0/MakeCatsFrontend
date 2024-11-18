import { useContext, useState } from "react";
import { CatContext } from "../../context/catContext";

const SaveButton = () => {
    const { cat } = useContext(CatContext);
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
    const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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
            setErrorMessage("Cat with this name already axists");
            setDisplayErrorMessage(true);
            setTimeout(() => setDisplayErrorMessage(false), 4000);
            return;
        }

        localStorage.setItem(cat.name, JSON.stringify(cat));

        setDisplaySuccessMessage(true);
        setTimeout(() => setDisplaySuccessMessage(false), 4000);
    };

    return (
        <div className="mr-[70%]">
            <button
                className="inline py-[5px] px-[36px] text-[2rem] font-semibold
                       bg-white rounded-[12px] text-[#5881b0]
                       hover:bg-[#dddddd] active:bg-white"
                onClick={handleOnClick}
            >
                Save
            </button>
            <div
                className={`absolute text-red-300 text-nowrap ${!displayErrorMessage && "hidden"}`}
            >
                {errorMessage}
            </div>
            <div
                className={`absolute text-green-300 text-nowrap ${!displaySuccessMessage && "hidden"}`}
            >
                The cat has successfully been saved
            </div>
        </div>
    );
};

export default SaveButton;
