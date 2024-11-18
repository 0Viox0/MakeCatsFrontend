const LeftWhisker = ({ color }: { color: string }) => {
    return (
        <div
            className="w-[40px] h-[20px] rounded-[50%] realtive"
            style={{
                backgroundColor: color,
            }}
        >
            <div
                className="h-[1px] w-[101px] absolute bg-[#fff2f2] 
                                        bottom-[-10px] right-[20px] rotate-[-20deg]"
            />
            <div
                className="h-[1px] w-[101px] absolute bg-[#fff2f2] 
                                        bottom-[4px] right-[30px] rotate-[-7deg]"
            />
            <div
                className="h-[1px] w-[101px] absolute bg-[#fff2f2] 
                                        bottom-[24px] right-[26px] rotate-[10deg]"
            />
        </div>
    );
};

export default LeftWhisker;
