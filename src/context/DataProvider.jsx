import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

const getFromLocalStorage = (item) => {
    const cachedData = localStorage.getItem(item);
    return cachedData ? JSON.parse(cachedData) : [];
};

const DataProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(
        getFromLocalStorage("transactions")
    );
    const [categories, setCategories] = useState(
        getFromLocalStorage("categories")
    );
    const [incomeCategories, setIncomeCategories] = useState([]);
    const [expenseCategories, setExpenseCategories] = useState([]);

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(categories));
        setIncomeCategories(
            categories.filter((category) => category.type === "income")
        );
        setExpenseCategories(
            categories.filter((category) => category.type === "expense")
        );
    }, [categories]);

    return (
        <DataContext.Provider
            value={{
                transactions,
                setTransactions,
                categories,
                setCategories,
                incomeCategories,
                expenseCategories,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
