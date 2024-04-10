import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { MoviesPage } from './pages/Movies/MoviesPage';
import { MovieDetailsPage } from './pages/Movie/MovieDetailsPage';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/details' element={<MovieDetailsPage />}/>
      </Routes>
    </div>
  );
};
