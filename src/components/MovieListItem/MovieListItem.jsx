import PropTypes from 'prop-types';
import css from './MovieListItem.module.css';
import { Link } from 'react-router-dom';

export const MovieListItem = ({ id, title }) => {
    return (
        <li className={css.movieItem} key={id}>
            <Link to={`/movies/${id}`} className={css.movieLink}>
                <h3>{title}</h3>
            </Link>
        </li>
    );
};

MovieListItem.propTypesropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};
    
