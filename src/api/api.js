import axios from 'axios';

const API_KEY = 'b86981a07e5296001ff10a61d56b5942';

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
}

