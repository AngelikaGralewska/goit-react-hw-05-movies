import React from 'react';
import { NavLink, Outlet} from "react-router-dom";
import style from './Navigation.module.css';


export default function Navigation() {
    return (
      <>
        <header>
          <nav className={style.navigation}>
            <NavLink className={ style.navigationLink}  to="/">
              Home
            </NavLink>
            <NavLink className={style.navigationLink } to="movies" >
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