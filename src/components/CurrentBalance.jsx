import { useState } from "react";
import Card from "./Card";

function CurrentBalance() {
    const [state, setState] = useState(0);

    return (
        <Card>
            <header className="flex flex-col mx-auto items-center">
                <h2 className="text-sm text-gray-300">Balance actual</h2>
                <p className="text-2xl font-bold">$ 3.295,00</p>
            </header>
            <section aria-label="Desglose de ingresos y gastos">
                <dl className="flex justify-around items-center">
                    <div>
                        <dt className="text-gray-300">Ingresos</dt>
                        <dd className="text-green-500">$ 3.500,00</dd>
                    </div>

                    <div>
                        <dt className="text-gray-300">Gastos</dt>
                        <dd className="text-red-500">$ 3.500,00</dd>
                    </div>
                </dl>
            </section>
        </Card>
    );
}

export default CurrentBalance;
