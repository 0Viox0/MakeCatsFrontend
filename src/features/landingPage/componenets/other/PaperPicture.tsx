import Whiteline from "../lines/Whiteline";

const PaperPicture = () => {
    return (
        <div
            className="bg-[#aeaeae] rounded-[26px] w-[271px] h-[328px]
                       space-y-[21px] py-[65px] px-[28px] mt-[1%] 2xl:block hidden"
        >
            <Whiteline width="100%" />
            <Whiteline width="100%" />
            <Whiteline width="100%" />
            <Whiteline width="100%" />
            <Whiteline width="30%" />
        </div>
    );
};

export default PaperPicture;
