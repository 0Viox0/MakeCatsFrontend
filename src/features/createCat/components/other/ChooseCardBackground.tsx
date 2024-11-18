const ChooseCardBackground = ({
    children,
    isHighlighted,
}: {
    children: React.ReactNode;
    isHighlighted?: boolean;
}) => {
    return (
        <div
            className={`w-[52px] h-[52px] bg-[#aeaeae] rounded-[6px]
                        flex justify-center items-center hover:cursor-pointer
                        ${isHighlighted && "border-[3px] border-black"}`}
        >
            {children}
        </div>
    );
};

export default ChooseCardBackground;
