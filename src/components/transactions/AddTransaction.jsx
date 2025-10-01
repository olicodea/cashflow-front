import { Card } from "../shared/Card";
import { useData } from "../../context/DataContext";
import { useHandleChange } from "../../hooks/useHandleChange";

const initialValue = {
    type: "",
    amount: 0,
    category: 0,
    description: "",
};

export function AddTransaction() {
    const { state, resetForm, handleChange } = useHandleChange(initialValue);
    const { categories, setTransactions } = useData();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        handleChange(name, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !state.type ||
            !state.amount ||
            !state.category ||
            !state.description
        ) {
            console.error("Por favor completa todos los campos");
            return;
        }

        const newTransaction = {
            id: crypto.randomUUID(),
            type: state.type,
            amount: parseFloat(state.amount),
            category: state.category,
            description: state.description,
            date: new Date().toLocaleDateString("es-AR"),
        };

        setTransactions((prevData) => [...prevData, newTransaction]);
        resetForm();
    };

    return (
        <Card>
            <form
                action=""
                className="grid grid-cols-2 gap-2"
                onSubmit={handleSubmit}
            >
                <p className="col-span-2">Tipo</p>
                <label className="col-span-1 flex gap-2">
                    <input
                        type="radio"
                        name="type"
                        value="income"
                        onChange={handleInputChange}
                    />
                    Ingreso
                </label>
                <label className="col-span-1 flex gap-2">
                    <input
                        type="radio"
                        name="type"
                        value="expense"
                        onChange={handleInputChange}
                    />
                    Gasto
                </label>

                <label htmlFor="amount" className="col-span-2">
                    Monto
                </label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="0,00"
                    className="col-span-2 input"
                    value={state.amount}
                    onChange={handleInputChange}
                />

                <label htmlFor="category" className="col-span-2">
                    Categoría
                </label>
                <select
                    id="category"
                    name="category"
                    className="col-span-2 input"
                    value={state.category}
                    onChange={handleInputChange}
                >
                    <option value="" className="bg-gray-700">
                        Selecciona una categoría
                    </option>
                    {categories
                        .filter((category) => category.type === state.type)
                        .map((category) => (
                            <option
                                key={category.id}
                                value={category.name}
                                className="bg-gray-700"
                            >
                                {category.name}
                            </option>
                        ))}
                </select>

                <label htmlFor="description" className="col-span-2">
                    Descripción
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    className="col-span-2 input"
                    placeholder="Escribe la descripción..."
                    value={state.description}
                    onChange={handleInputChange}
                />

                <input
                    type="submit"
                    value="Guardar transacción"
                    className="bg-green-700 rounded px-4 py-2 col-span-2 mt-4"
                />
            </form>
        </Card>
    );
}
