import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { MoviesPage } from './pages/Movies/MoviesPage';
import { MovieDetailsPage } from './pages/Movie/MovieDetailsPage';
import { SharedLayout } from './pages/Shared/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
