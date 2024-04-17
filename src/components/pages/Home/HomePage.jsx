import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'api/api';
import Loader from 'Loader/Loader';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadTrendingMovies = async () => {
    setIsLoading(true);
    try {
      const movies = await fetchTrendingMovies();
      console.log(movies);
      setTrendingMovies(movies);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Trending Now</h2>
      {isLoading ? <Loader /> : <MovieList movies={trendingMovies} />}
    </div>
  );
};

export default HomePage;
