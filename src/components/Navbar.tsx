import { Link } from "react-router-dom";
import DesktopMenu from "./menus/DesktopMenu";
import MobileBurgerMenu from "./menus/MobileBurgerMenu";

const Navbar = () => {
    return (
        <div className="flex justify-center items-center h-[30px] mainBlueBg py-[40px]">
            <div
                className="flex justify-between items-center font-semibold
                            w-[90%] text-white sm:text-[1.5rem] text-[1.2rem]"
            >
                <Link to="/">Create a cat</Link>
                <div className="sm:block hidden">
                    <DesktopMenu />
                </div>
                <div className="sm:hidden block">
                    <MobileBurgerMenu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
