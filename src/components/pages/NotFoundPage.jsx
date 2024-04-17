import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './Movie/MovieDetailsPage.module.css'

  const NotFoundPage = () => {
  // const location = useLocation();

  return (
    <div>
      <Link to="/movies">
        <button className={css.goBackLink}>⬅ Go back</button>
      </Link>
      <p>NotFoundPage</p>
    </div>
  );
};

export default NotFoundPage;
