import AddTransaction from "./components/AddTransaction";
import CurrentBalance from "./components/CurrentBalance";
import { TransactionHistory } from "./components/TransactionHistory";
import DataProvider from "./context/DataProvider";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <DataProvider>
            <MainLayout>
                <CurrentBalance />
                <AddTransaction />
                <TransactionHistory />
            </MainLayout>
        </DataProvider>
    );
}

export default App;
