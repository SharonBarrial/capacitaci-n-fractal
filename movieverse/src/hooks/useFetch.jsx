import { useFetch } from "../hooks/useFetch";

const Peliculas = () => {
  const { data, loading, error } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=TU_API_KEY",
    "get"
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {data?.results.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
};

export default Peliculas;