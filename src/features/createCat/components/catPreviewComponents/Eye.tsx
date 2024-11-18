const Eye = ({ className }: { className: string }) => {
    return (
        <div
            className={`w-[48px] h-[48px] bg-white rounded-full
                        flex justify-center items-center ${className}`}
        >
            <div className="w-[73%] h-[73%] bg-black rounded-full"></div>
        </div>
    );
};

export default Eye;
