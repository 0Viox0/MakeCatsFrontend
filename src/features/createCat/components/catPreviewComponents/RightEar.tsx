const RightEar = ({ color }: { color: string }) => {
    return (
        <div
            className="w-0 h-0
                               border-l-[35px] border-l-transparent
                               border-r-[35px] border-r-transparent
                               border-b-[88px]
                               absolute top-[-20%] right-[0px] rotate-[25deg]
                    "
            style={{
                borderBottomColor: color,
            }}
        ></div>
    );
};

export default RightEar;
