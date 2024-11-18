import { AppPreview, Hero, MoreFeatures } from "../features/landingPage";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <AppPreview />
            <MoreFeatures />
        </div>
    );
};

export default Home;
