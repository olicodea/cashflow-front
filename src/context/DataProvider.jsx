import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

const getFromLocalStorage = (item) => {
    const cachedData = localStorage.getItem(item);
    return cachedData ? JSON.parse(cachedData) : [];
};

const DataProvider = ({ children }) => {
    const [data, setData] = useState(getFromLocalStorage("transactions"));

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(data));
    }, [data]);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
