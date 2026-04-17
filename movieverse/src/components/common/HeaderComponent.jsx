import { Link } from "react-router-dom";

const HeaderComponent = () => {
    const estiloLink = "hover:text-purple-400 transition";

    return(
        <header className="bg-gray-900 h-[10vh] text-white px-6 py-4 shadow-md">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-purple-400">
                    MovieVerse
                </Link>

                <nav className="flex gap-6 text-sm font medium justify-center items-center">
                    <Link to="/" className={estiloLink}>Inicio</Link>
                    <Link to="/Favorites" className={estiloLink}>Favoritos</Link>
                    <Link to="/Watchlist" className={estiloLink}>Por Ver</Link>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition cursor-pointer">Login</button>
                </nav>
            </div>
        </header>

    );
};

export default HeaderComponent;