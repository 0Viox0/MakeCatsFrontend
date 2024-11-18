import { useContext, useEffect, useState } from "react";
import { CatPartColor } from "../../types/enums";
import ChooseCardBackground from "../other/ChooseCardBackground";
import { CatContext } from "../../context/catContext";
import { Cat } from "../../types/Cat";
import Triangle from "../shapes/Triangle";
import Circle from "../shapes/Circle";
import Ellipse from "../shapes/Ellipse";

const ChoiceCard = ({
    color,
    catField,
}: {
    color: CatPartColor;
    catField: keyof Cat;
}) => {
    const { cat, changeCatInfo } = useContext(CatContext);
    const [isHightlighted, setIsHightlighted] = useState(color === cat.ears);

    useEffect(() => {
        setIsHightlighted(cat[catField] === color);
    }, [cat]);

    const getShapeBasedOnCurrentCatPart = () => {
        switch (catField) {
            case "ears":
                return <Triangle color={color} />;
            case "face":
                return <Circle color={color} />;
            case "whiskers":
                return <Ellipse color={color} />;
        }
    };

    return (
        <div onClick={() => changeCatInfo(catField, color)}>
            <ChooseCardBackground isHighlighted={isHightlighted}>
                {getShapeBasedOnCurrentCatPart()}
            </ChooseCardBackground>
        </div>
    );
};

export default ChoiceCard;
