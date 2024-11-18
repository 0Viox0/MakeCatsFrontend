import { useEffect, useState } from "react";
import { Cat } from "../types/Cat";

export const useSavedCats = () => {
    const [cats, setCats] = useState<Cat[]>([]);

    useEffect(() => {
        const storedCats: Cat[] = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
                const catData = localStorage.getItem(key);
                if (catData) {
                    try {
                        const cat = JSON.parse(catData) as Cat;
                        storedCats.push(cat);
                    } catch (error) {
                        console.error(
                            `Error parsing cat data for key: ${key}`,
                            error,
                        );
                    }
                }
            }
        }

        setCats(storedCats);
    }, []);

    return { cats };
};
