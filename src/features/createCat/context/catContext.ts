import { createContext } from "react";
import { Cat } from "../types/Cat";
import { CatPartColor } from "../types/enums";

export interface CatContextInterface {
    cat: Cat;
    changeCatInfo: (part: keyof Cat, color: CatPartColor) => void;
    changeCatName: (newName: string) => void;
}

export const CatContext = createContext<CatContextInterface>({
    cat: new Cat(
        "",
        CatPartColor.Yellow,
        CatPartColor.Black,
        CatPartColor.Yellow,
    ),
    changeCatInfo: () => {},
    changeCatName: () => {},
});
