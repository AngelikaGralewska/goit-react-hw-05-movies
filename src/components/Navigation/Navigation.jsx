import React from 'react';
import { NavLink, Outlet} from "react-router-dom";
import style from './Navigation.module.css';


export default function Navigation() {
    return (
      <>
        <header>
          <nav className={style.navigation}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeNav : style.navItem
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeNav : style.navItem
              }
              to="movies"
            >
              Movies
            </NavLink>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  }