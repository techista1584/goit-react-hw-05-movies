import React from 'react';
import css from './Movies.module.css';
import { fetchMovieByQuery } from 'api/api';
import { useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';


export const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('movie');
  const [movies, SetMovies] = useState([]);

  const fetchMovies = async (event) => {
    event.preventDefault();
    try {
      const movies = await fetchMovieByQuery(searchQuery);
      SetMovies(movies);
      console.log(movies);
      } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <form className={css.inputWrapper}>
        <input type="text" name="movie" className={css.input}
          placeholder="Search movies..."
          onChange={event => setSearchQuery(event.target.value)}
        />
        <button onClick={fetchMovies}>Search</button>
      </form>
      <MovieList movies={movies} />
    </div>

  );
};
