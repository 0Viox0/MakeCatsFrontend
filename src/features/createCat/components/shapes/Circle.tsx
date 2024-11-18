const Circle = ({ color }: { color: string }) => {
    return (
        <div
            className="w-[30px] h-[30px] rounded-full"
            style={{ backgroundColor: color }}
        ></div>
    );
};

export default Circle;
