import React from "react";
import {NavLink  } from "react-router-dom";
import "../../styles/components/layout/Nav.css";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined }>Inicio</NavLink >
        </li>
        <li>
          <NavLink to="/senias" className={({isActive}) => isActive ? "activo" : undefined }>Señas</NavLink >
        </li>
        <li>
          <NavLink to="/director" className={({isActive}) => isActive ? "activo" : undefined }>Director</NavLink >
        </li>
        <li>
          <NavLink to="/videos" className={({isActive}) => isActive ? "activo" : undefined }>Videos</NavLink >
        </li>
        <li>
          <NavLink to="/NavLink" className={({isActive}) => isActive ? "activo" : undefined }>Links</NavLink >
        </li>
        <li>
          <NavLink to="contacto" className={({isActive}) => isActive ? "activo" : undefined }>Contacto</NavLink >
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
