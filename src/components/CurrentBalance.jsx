import { useMemo, useState } from "react";
import { useData } from "../context/DataContext";
import Card from "./Card";

function CurrentBalance() {
    const [balanceState, setBalanceState] = useState({
        balance: 0,
        income: 0,
        expenses: 0,
    });
    const { transactions } = useData();

    const formatCurrency = (amount) =>
        amount.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
        });

    useMemo(() => {
        let totalIncome = 0;
        let totalExpenses = 0;
        let balance = 0;

        transactions.forEach((transaction) => {
            const { type, amount } = transaction;

            if (type === "income") totalIncome += amount;

            if (type === "expense") totalExpenses += amount;
        });

        balance = totalIncome - totalExpenses;

        setBalanceState({
            balance: formatCurrency(balance),
            income: formatCurrency(totalIncome),
            expenses: formatCurrency(totalExpenses),
        });
    }, [transactions]);

    return (
        <Card>
            <header className="flex flex-col mx-auto items-center">
                <h2 className="text-sm text-gray-300">Balance actual</h2>
                <p className="text-2xl font-bold">{balanceState.balance}</p>
            </header>
            <section aria-label="Desglose de ingresos y gastos">
                <dl className="flex justify-around items-center">
                    <div>
                        <dt className="text-gray-300">Ingresos</dt>
                        <dd className="text-green-500">
                            {balanceState.income}
                        </dd>
                    </div>

                    <div>
                        <dt className="text-gray-300">Gastos</dt>
                        <dd className="text-red-500">
                            {balanceState.expenses}
                        </dd>
                    </div>
                </dl>
            </section>
        </Card>
    );
}

export default CurrentBalance;
