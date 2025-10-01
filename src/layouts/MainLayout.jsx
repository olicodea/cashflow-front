import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";

function MainLayout({ children }) {
    return (
        <div className="px-6 py-4 grid grid-cols-1 gap-6">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
