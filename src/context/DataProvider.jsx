import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

const getFromLocalStorage = (item) => {
    const cachedData = localStorage.getItem(item);
    return cachedData ? JSON.parse(cachedData) : [];
};

const DataProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(getFromLocalStorage("transactions"));

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    return (
        <DataContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
