import { useNavigate } from "react-router-dom";

const ActionButton = ({ text }: { text: string }) => {
    const navigate = useNavigate();

    return (
        <button
            className="mainBlueBg rounded-[12px] md:py-[11px] md:px-[73px]
                       py-[7px] px-[50px]
                       text-white md:text-[2.25rem] text-[1rem] font-semibold inline
                       hover:bg-[#7fb7f6] active:bg-[#5881b0]"
            onClick={() => navigate("create-cat")}
        >
            {text}
        </button>
    );
};

export default ActionButton;
