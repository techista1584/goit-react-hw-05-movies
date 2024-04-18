import PropTypes from 'prop-types';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';
import css from './MovieList.module.css';
import Loader from 'Loader/Loader';
import { useState, useEffect } from 'react';

export const MovieList = ({ movies }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (movies.length > 0) {
      setIsLoading(false);
    }
  }, [movies]);

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <ul className={css.list}>
          {movies.map(({ id, title, poster_path }) => {
            return (
              <li className={css.li} key={id}>
                <Link className={css.links} to={`/goit-react-hw-05-movies/movies/${id}`} state={{ from: location }}>
                  <div className={css.card}>
                    {poster_path ? (
                      <img
                        className={css.img}
                        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                        alt={title}
                      />
                    ) : (
                      <AiOutlineFileImage size={200} />
                    )}
                    {title}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <Outlet />
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
