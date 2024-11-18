import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <Navbar />
            <Outlet />
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
