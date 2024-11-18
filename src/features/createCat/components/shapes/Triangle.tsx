const Triangle = ({ color }: { color: string }) => {
    return (
        <div
            className="w-0 h-0 
                       border-l-[15px] border-l-transparent
                       border-r-[15px] border-r-transparent
                       border-b-[30px]"
            style={{ borderBottomColor: color }}
        ></div>
    );
};

export default Triangle;
