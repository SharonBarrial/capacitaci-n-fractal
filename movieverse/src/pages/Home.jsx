import { useEffect, useState } from "react";
import { getPopularMovies } from "../lib/api";
import MovieList from "../components/movie/MovieList";
import Spinner from "../ui/Spinner";
import SearchMovies from "../components/common/SearchMovies";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const moviesToShow = search
  ? movies.filter((movie) =>
      (movie.title || "")
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  : movies;

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await getPopularMovies();

      console.log("Películas populares:", data);

      setMovies(data);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-[80vh]">
      <SearchMovies onSearch={setSearch} />
      <h1>Top Películas esta semana</h1>

      {loading ? <Spinner /> : <MovieList movies={moviesToShow} />}
      
    </div>
  );
};

export default Home;