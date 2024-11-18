import SavedCats from "../features/createCat/components/SavedCats";

const YourCats = () => {
    return (
        <div className="mainBlueBg">
            <h1
                className="xl:text-[4rem] md:text-[3.5rem] text-[2.8rem] 
                           font-semibold text-[#fff1f1] text-center mb-[40px]"
            >
                Your cats
            </h1>
            <SavedCats />
        </div>
    );
};

export default YourCats;
