import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="flex gap-4">
            <Link to="/">Inicio</Link>
            <Link to="/categories">Categorías</Link>
        </nav>
    );
}
