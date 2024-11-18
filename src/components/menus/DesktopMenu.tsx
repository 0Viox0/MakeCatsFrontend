import { Link } from "react-router-dom";

const DesktopMenu = () => {
    return (
        <ul className="flex justify-between space-x-[28px]">
            <Link to="/create-cat" className="hover:underline">
                Create
            </Link>
            <Link to="/view-cats" className="hover:underline">
                My cats
            </Link>
        </ul>
    );
};

export default DesktopMenu;
