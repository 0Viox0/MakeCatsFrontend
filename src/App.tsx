import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateCat from "./pages/CreateCat";
import YourCats from "./pages/YourCats";
import Layout from "./components/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/create-cat" element={<CreateCat />} />
                    <Route path="/view-cats" element={<YourCats />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
