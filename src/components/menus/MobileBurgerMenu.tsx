import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets";
import { Link } from "react-router-dom";

const MobileBurgerMenu = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScreenClick = (ev: MouseEvent) => {
            if (
                buttonRef.current &&
                buttonRef.current.contains(ev.target as Node)
            ) {
                return;
            }

            setIsExpanded(false);
        };

        window.addEventListener("click", onScreenClick);

        return () => {
            window.removeEventListener("click", onScreenClick);
        };
    }, []);

    return (
        <div className="relative">
            <div ref={buttonRef}>
                {isExpanded ? (
                    <img
                        src={assets.icons.close}
                        alt="close button"
                        className="w-[40px] h-[40px]"
                        onClick={() => setIsExpanded(false)}
                    />
                ) : (
                    <img
                        src={assets.icons.burgerMenu}
                        alt="burger menu"
                        className="w-[40px] h-[40px]"
                        onClick={() => setIsExpanded(true)}
                    />
                )}
            </div>
            <div
                className={`${isExpanded ? "block" : "hidden"}
                             absolute top-[50px] right-0 mainBlueBg rounded-md 
                             white-shadow p-1`}
            >
                <ul className="flex flex-col items-center w-[100px]">
                    <Link to="/create-cat" className="hover:underline">
                        Create
                    </Link>
                    <Link to="/view-cats" className="hover:underline">
                        My cats
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default MobileBurgerMenu;
