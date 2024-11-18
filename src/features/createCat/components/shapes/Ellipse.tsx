const Ellipse = ({ color }: { color: string }) => {
    return (
        <div
            className="w-[30px] h-[15px] rounded-full"
            style={{ backgroundColor: color }}
        ></div>
    );
};

export default Ellipse;
