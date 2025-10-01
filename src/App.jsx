import { Route, Routes } from "react-router-dom";
import DataProvider from "./context/DataProvider";
import MainLayout from "./layouts/MainLayout";
import { Transactions } from "./pages/Transactions";
import { Categories } from "./pages/Categories";

function App() {
    return (
        <DataProvider>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Transactions />}></Route>
                    <Route path="/categories" element={<Categories />}></Route>
                </Routes>
            </MainLayout>
        </DataProvider>
    );
}

export default App;
