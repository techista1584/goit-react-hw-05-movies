import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/api';
import { CastListItem } from '../CastListItem/CastListItem';
import css from './CastList.module.css'

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const fetchCast = useCallback(async () => {
    try {
      const response = await fetchMovieCast(movieId);
      // Check if response is an array, if not set it to an empty array
      setCast(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchCast();
  }, [fetchCast]);

  return (
    <>
      {cast.length !== 0 ? (
        <div>
          <h2>Movie Cast</h2>
          <ul className={css.castListContainer}>
            {cast.map(({ id, profile_path, original_name, name }) => (
              <CastListItem
                key={id}
                id={id}
                profilePath={profile_path}
                originalName={original_name}
                name={name}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div>We don't have any cast for this movie.</div>
      )}
    </>
  );
};

export default CastList;