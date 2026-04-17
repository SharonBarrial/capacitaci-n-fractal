import { Link } from "react-router-dom";
import saveMovieToLocalStorage from "./StorageMovies";

const MovieCard = ({ movie = {}}) => {

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Link to={`/movie/${movie.id || ""}`}>
      <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer">
        
        <img
          className="w-full h-64 object-cover"
          src={imageUrl}
          alt={movie.title || "Sin título"}
        />

        <div className="p-2">
          <h3 className="text-sm font-bold">
            {movie.title || "Sin título"}
          </h3>
          <button
            className="cursor-pointer mt-2 bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 rounded-md text-xs transition"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              saveMovieToLocalStorage(movie);
              console.log("Película guardada:", movie.title);
            }}
          >
            Quiero mirarlo
          </button>
        </div>

      </div>
    </Link>
  );
};

export default MovieCard;