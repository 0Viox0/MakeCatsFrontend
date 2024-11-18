import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div
            className="bg-[#525151] flex flex-col justify-start items-center 
                        md:pt-[40px] pt-[20px] pb-[5px]"
        >
            <div className="flex sm:flex-row flex-col justify-between w-[90%] mb-[15px]">
                <Link
                    className="text-white text-[1.5rem] font-semibold text-center"
                    to="/"
                >
                    Create a cat
                </Link>
                <ul
                    className="sm:text-[1.5rem] text-[1rem] font-semibold text-white 
                               flex sm:flex-row flex-col
                               justify-between items-center md:space-x-[28px]"
                >
                    <Link to="/create-cat" className="hover:underline">
                        Create
                    </Link>
                    <Link to="/view-cats" className="hover:underline">
                        My cats
                    </Link>
                </ul>
            </div>
            <p className="text-white opacity-[.61] text-[1rem] text-center">
                @ no copyright, just here for the vibe
            </p>
        </div>
    );
};

export default Footer;
