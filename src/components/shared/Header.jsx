import { Navbar } from "./Navbar";

export function Header() {
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-xl">Cashflow</h1>
            <Navbar />
        </header>
    );
}
