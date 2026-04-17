import axios from 'axios';

const API_KEY = '2693bdca8f42aec542e3dd94041a4892';
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdbApi = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'en-US',
    },
});

export const getPopularMovies = async () => {
    const res = await tmdbApi.get('/movie/popular');
    return res.data.results;
}

export const getMovieDetail = async (id) => {
  const res = await tmdbApi.get(`/movie/${id}`);
  return res.data;
};