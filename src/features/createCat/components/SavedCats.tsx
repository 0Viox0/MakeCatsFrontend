import CatCard from "./other/CatCard";
import { useSavedCats } from "../hooks/useSavedCats";
import { assets } from "../../../assets";
import { useNavigate } from "react-router-dom";

const SavedCats = () => {
    const { cats } = useSavedCats();
    const navigate = useNavigate();

    const handleOnClick = (catName: string) => {
        navigate(`/create-cat?editCat=${catName}`);
    };

    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  px-[50p]">
                {cats.map((cat) => (
                    <div
                        className="flex flex-col items-center space-y-[51px] my-[40px] 
                                   hover:opacity-[.60] hover:cursor-pointer relative group"
                        onClick={() => handleOnClick(cat.name)}
                    >
                        <CatCard key={cat.name} cat={cat} />
                        <h1
                            className="text-center text-[2rem] font-semibold text-[#fff1f1] 
                                       w-[200px] overflow-hidden whitespace-nowrap text-ellipsis"
                        >
                            {cat.name}
                        </h1>
                        <div
                            className="hidden group-hover:block absolute 
                                        left-[50%] -translate-x-[50%]
                                        top-[50%]  -translate-y-[50%]"
                        >
                            <div
                                className="w-[100px] h-[100px] bg-white flex justify-center items-center
                                            rounded-full"
                            >
                                <img
                                    src={assets.icons.edit}
                                    alt="edit button"
                                    className="w-[80px] h-[80px] opacity-1"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedCats;
