import React, { useEffect, useState, useCallback } from 'react';
import css from './Movies.module.css';
import { fetchMovieByQuery } from 'api/api';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, SetMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? 'Friends';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const fetchMovies = useCallback(async () => {
    if (!movieName.trim()) return;
    try {
      const movies = await fetchMovieByQuery(movieName);
      SetMovies(movies);
    } catch (error) {
      console.error(error);
    }
  }, [movieName]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <form className={css.inputWrapper}>
        <input type="text" name="movie" className={css.input}
          placeholder="Search movies..."
          onChange={event => updateQueryString(event.target.value)}
        />
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
