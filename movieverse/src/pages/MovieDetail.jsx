import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../lib/api";
import Counter from "../components/common/Counter";
import Spinner from "../ui/Spinner";

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      const data = await getMovieDetail(id);
      setMovie(data);
      setLoading(false);
    };

    fetchDetail();
  }, [id]);

  if (loading) return <Spinner />;

  if (!movie) return <p>No se encontró la película</p>;

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <div className="p-6 text-white">

      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>

      <div className="flex gap-6">
        
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-64 rounded-lg"
        />

        <div>
          <p className="mb-2">{movie.overview}</p>

          <p>Rating: {movie.vote_average}</p>
          <p>Fecha: {movie.release_date}</p>
          <p>Duración: {movie.runtime} min</p>

          <p className="mt-2">
            Géneros:{" "} {movie.genres?.map((g) => g.name).join(", ")}
          </p>

          <div className="mt-4">
            <h3>¿Cuántas veces la viste?</h3>
            <Counter movieId={id} />
          </div>
        </div>

      </div>

    </div>
  );
};

export default MovieDetail;