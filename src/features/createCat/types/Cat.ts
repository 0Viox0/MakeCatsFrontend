import { CatPartColor } from "./enums";

export class Cat {
    name: string;

    ears: CatPartColor;
    face: CatPartColor;
    whiskers: CatPartColor;

    constructor(
        name: string,
        ears: CatPartColor,
        face: CatPartColor,
        whiskers: CatPartColor,
    ) {
        this.name = name;
        this.ears = ears;
        this.face = face;
        this.whiskers = whiskers;
    }
}
