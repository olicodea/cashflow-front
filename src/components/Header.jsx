import Navbar from "./Navbar";

function Header() {
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-xl">Cashflow</h1>
            <Navbar />
        </header>
    );
}

export default Header;
