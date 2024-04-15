import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

  const NotFoundPage = () => {
  // const location = useLocation();

  return (
    <div>
      <Link to="/movies">
        <button>⬅ Go back</button>
      </Link>
      <p>NotFoundPage</p>
    </div>
  );
};

export default NotFoundPage;
