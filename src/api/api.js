import axios from 'axios';

const API_KEY = '93c5c174fe2da474d1c166441f51e711';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
    api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/day`);
    return response.data.results;
};

export const fetchMovieByQuery = async movieName => {
    const response = await axios.get(`search/movie?query=${movieName}`);
    return response.data.results;
};

export const fetchMovieDetails = async movieId => {
    const response = await axios.get(`movie/${movieId}`);
    return response.data;
};

export const fetchMovieCast = async movieId => {
    const response = await axios.get(`movie/${movieId}`);
    return response.data;
};

