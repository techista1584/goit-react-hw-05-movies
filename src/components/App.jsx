import { Routes, Route } from 'react-router-dom';
// import { HomePage } from './pages/Home/HomePage';
// import { MoviesPage } from './pages/Movies/MoviesPage';
// import { MovieDetailsPage } from './pages/Movie/MovieDetailsPage';
// import { NotFoundPage } from './pages/NotFoundPage';
import { SharedLayout } from './pages/Shared/SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('.//pages/Home/HomePage'));
const MoviesPage = lazy(() => import('.//pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() => import('.//pages/Movie/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('.//pages/NotFoundPage'));
const CastList = lazy(() => import('./CastList/CastList'));
const ReviewsList = lazy(() => import('./ReviewsList/ReviewsList'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastList />} />
            <Route path="reviews" element={<ReviewsList />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
