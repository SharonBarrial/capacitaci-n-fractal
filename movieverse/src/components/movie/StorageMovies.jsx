const saveMovieToLocalStorage = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];
    const exists = savedMovies.find((m) => m.id === movie.id);
    if (!exists) {
        localStorage.setItem("savedMovies", JSON.stringify([...savedMovies, movie]));
    }
};

export default saveMovieToLocalStorage;