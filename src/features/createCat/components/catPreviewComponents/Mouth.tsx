const Mouth = ({ color }: { color: string }) => {
    return (
        <div
            className="absolute bottom-0 left-0 w-[20px] h-[20px] rounded-full
                       bg-transparent border-[4px]"
            style={{ borderColor: color }}
        ></div>
    );
};

export default Mouth;
