import { AddTransaction } from "../components/transactions/AddTransaction";
import { CurrentBalance } from "../components/transactions/CurrentBalance";

import { TransactionHistory } from "../components/transactions/TransactionHistory";

export function Transactions() {
    return (
        <>
            <CurrentBalance />
            <AddTransaction />
            <TransactionHistory />
        </>
    );
}
