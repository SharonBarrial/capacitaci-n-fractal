import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Watchlist from "./pages/WatchList";
import HeaderComponent from "./components/common/HeaderComponent";
import FooterComponent from "./components/common/FooterComponent";

function App() {
  return (
    <BrowserRouter>

      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/Watchlist" element={<Watchlist />} />
      </Routes>

      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;