import { useData } from "../../context/DataContext";
import { Card } from "../shared/Card";

export function IncomeCategories() {
    const { incomeCategories } = useData();

    return (
        <Card>
            <h2>Categorías de egresos</h2>

            <ul>
                {incomeCategories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </Card>
    );
}
