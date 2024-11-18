import { useContext } from "react";
import { CatContext } from "../../context/catContext";
import CatCard from "./CatCard";

const Preview = () => {
    const { cat } = useContext(CatContext);

    return (
        <div className="h-full flex items-center">
            <CatCard cat={cat} />
        </div>
    );
};

export default Preview;
