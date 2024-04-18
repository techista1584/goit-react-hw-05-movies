import React from 'react'
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink
                    to="/goit-react-hw-05-movies"
                    className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/goit-react-hw-05-movies/movies"
                    className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                    end
                >
                    Movies
                </NavLink>
                {/* <NavLink
                    to="/movies/details"
                    className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                >
                    Movie Details
                </NavLink> */}
            </nav>
        </header>
    );
};
