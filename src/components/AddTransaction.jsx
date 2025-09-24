import { useState } from "react";
import Card from "./Card";
import { useData } from "../context/DataContext";

const categories = [
    {
        id: 1,
        description: "Salario",
        type: "income",
    },

    {
        id: 2,
        description: "Freelance",
        type: "income",
    },
    {
        id: 3,
        description: "Comida",
        type: "food",
    },
    {
        id: 4,
        description: "Transporte",
        type: "transport",
    },
];

const initialValue = {
    type: "",
    amount: 0,
    category: 0,
    description: "",
};

function AddTransaction() {
    const [formState, setFormState] = useState(initialValue);
    const { setTransactions } = useData();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !formState.type ||
            !formState.amount ||
            !formState.category ||
            !formState.description
        ) {
            console.error("Por favor completa todos los campos");
            return;
        }

        const newTransaction = {
            id: crypto.randomUUID(),
            type: formState.type,
            amount: parseFloat(formState.amount),
            category: formState.category,
            description: formState.description,
            date: new Date().toLocaleDateString("es-AR"),
        };

        setTransactions((prevData) => [...prevData, newTransaction]);
        setFormState(initialValue);
    };

    return (
        <Card>
            <form
                action=""
                className="grid grid-cols-2 gap-2"
                onSubmit={handleSubmit}
            >
                <p className="col-span-2">Type</p>
                <label className="col-span-1 flex gap-2">
                    <input
                        type="radio"
                        name="type"
                        value="income"
                        onChange={handleChange}
                    />
                    Ingreso
                </label>
                <label className="col-span-1 flex gap-2">
                    <input
                        type="radio"
                        name="type"
                        value="expense"
                        onChange={handleChange}
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
                    value={formState.amount}
                    onChange={handleChange}
                />

                <label htmlFor="category" className="col-span-2">
                    Categoría
                </label>
                <select
                    id="category"
                    name="category"
                    className="col-span-2 input"
                    value={formState.category}
                    onChange={handleChange}
                >
                    <option value="" className="bg-gray-700">Selecciona una categoría</option>
                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.description}
                            className="bg-gray-700"
                        >
                            {category.description}
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
                    value={formState.description}
                    onChange={handleChange}
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

export default AddTransaction;
