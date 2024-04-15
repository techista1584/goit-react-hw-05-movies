import React, { useEffect } from 'react';
import css from './Movies.module.css';
import { fetchMovieByQuery } from 'api/api';
import { useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


  const MoviesPage = () => {
  // const [searchQuery, setSearchQuery] = useState('Friends');
  const [movies, SetMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? 'Friends';

  // const navigate = useNavigate();
  const updateQueryString = query => {
  const nextParams = query !== '' ? { query } : {}
    setSearchParams(nextParams);
  }

  const fetchMovies = async (event) => {
    // event.preventDefault();
    if (!movieName.trim()) return;
    try {
      // const movies = await fetchMovieByQuery(searchQuery);
      const movies = await fetchMovieByQuery(movieName);

      // if (movies.length === 0) {
      //   navigate('/not-found', { replace:false});
      //   return;
      // }

      SetMovies(movies);
      // console.log(movies);
      } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchMovies();
  }, [movieName]);

  return (
    <div>
      <form className={css.inputWrapper}>
        <input type="text" name="movie" className={css.input}
          placeholder="Search movies..."
          // onChange={event => setSearchQuery(event.target.value)}
          onChange={event => updateQueryString(event.target.value)}
        />
        {/* <button onClick={fetchMovies}>Search</button> */}
      </form>
      <MovieList movies={movies} />
    </div>

  );
};

export default MoviesPage;