import SaveButton from "../buttons/SaveButton";
import ChooseColorForm from "./ChooseColorForm";
import NameInputField from "./NameInputField";

const ChooseItemsForm = () => {
    return (
        <div>
            <h1 className="text-[#fff1f1] font-semibold text-[2rem] text-center">
                Choose items
            </h1>
            <div className="flex justify-center items-center mt-[70px]">
                <div className="flex flex-col justify-end items-end space-y-[50px]">
                    <ChooseColorForm text="Ears:" catField="ears" />
                    <ChooseColorForm text="Face:" catField="face" />
                    <ChooseColorForm text="Whiskers:" catField="whiskers" />
                    <NameInputField />
                    <SaveButton />
                </div>
            </div>
        </div>
    );
};

export default ChooseItemsForm;
