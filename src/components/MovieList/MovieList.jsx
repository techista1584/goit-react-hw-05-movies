import PropTypes from 'prop-types';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.list}>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li className={css.li} key={id}>
              <Link className={css.links} to={`/movies/${id}`} state={{ from: location }}>
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
