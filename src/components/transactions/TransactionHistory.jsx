import { useData } from "../../context/DataContext";
import { formatCurrency } from "../../utils/currency";
import { Card } from "../shared/Card";

export function TransactionHistory() {
    const { transactions } = useData();

    return (
        <Card>
            <h2>Historial de transacciones</h2>

            <table className="table-auto">
                <thead className="border-b-1 border-gray-400">
                    <tr>
                        <th className="text-left p-2">Descripción</th>
                        <th className="text-left p-2">Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr
                            key={transaction.id}
                            className="border-b-1 border-gray-600"
                        >
                            <td className="p-2">{transaction.description}</td>
                            <td className="p-2">
                                {formatCurrency(transaction.amount)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
