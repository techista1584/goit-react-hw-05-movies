import PropTypes from 'prop-types';
import css from './MovieListItem.module.css';

export const MovieListItem = ({ id, title }) => {
    return (
        <li className={css.movieItem} key={id}>
            <h3>{title}</h3>
        </li>
    );
};

MovieListItem.propTypesropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};
    
