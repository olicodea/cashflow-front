import { useData } from "../../context/DataContext";
import { Card } from "../shared/Card";

export function ExpenseCategories() {
    const { expenseCategories } = useData();
    return (
        <Card>
            <h2>Categorías de ingresos</h2>

            <ul>
                {expenseCategories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </Card>
    );
}
