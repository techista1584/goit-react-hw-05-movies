import React from 'react';
import css from './Movies.module.css';
import { fetchMovieByQuery } from 'api/api';
import { useState, useEffect } from 'react';

export const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMovies = async () => {
    try {
      const movies = await fetchMovieByQuery(searchQuery);
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <form className={css.inputWrapper}>
        <input type="text" className={css.input}
          placeholder="Search movies..."
        />
        <button onClick={fetchMovies}>Search</button>
      </form>
    </div>
  );
};
