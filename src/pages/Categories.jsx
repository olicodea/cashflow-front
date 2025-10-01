import React from "react";
import { AddCategory } from "../components/categories/AddCategory";

import { IncomeCategories } from "../components/categories/IncomeCategories";
import { ExpenseCategories } from "../components/categories/ExpenseCategories";

export function Categories() {
    return (
        <>
            <AddCategory />
            <ExpenseCategories />
            <IncomeCategories />
        </>
    );
}
