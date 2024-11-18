import Line from "./Line";

const MobileLines = () => {
    return (
        <>
            <Line className="w-[200px] rotate-[-20deg] top-[70px] left-[70px]" />
            <Line className="w-[36px] rotate-[-80deg] top-[100px] left-[0px]" />
            <Line className="w-[36px] rotate-[-80deg] top-[0px] right-[10px]" />
        </>
    );
};

export default MobileLines;
