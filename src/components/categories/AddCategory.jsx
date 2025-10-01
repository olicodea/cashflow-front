import { Card } from "../shared/Card";
import { useHandleChange } from "../../hooks/useHandleChange";
import { useData } from "../../context/DataContext";

const initialValue = {
    name: "",
    type: "",
};

export function AddCategory() {
    const { state, resetForm, handleChange } = useHandleChange(initialValue);
    const { setCategories } = useData();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!state.type || !state.name) {
            console.error("Por favor completa todos los campos");
            return;
        }

        const newCategory = {
            id: crypto.randomUUID(),
            type: state.type,
            name: state.name,
        };

        setCategories((prevData) => [...prevData, newCategory]);
        resetForm();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        handleChange(name, value);
    };

    return (
        <Card>
            <form
                action=""
                className="grid grid-cols-2 gap-2"
                onSubmit={handleSubmit}
            >
                <label htmlFor="name" className="col-span-2">
                    Nombre
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre de la categoría"
                    className="col-span-2 input"
                    value={state.name}
                    onChange={handleInputChange}
                />

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

                <input
                    type="submit"
                    value="Guardar categoría"
                    className="bg-green-700 rounded px-4 py-2 col-span-2 mt-4"
                />
            </form>
        </Card>
    );
}
