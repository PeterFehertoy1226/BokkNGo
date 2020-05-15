import React from 'react';
import { NavLink } from 'react-router-dom';


import './NavLinks.scss';

const NavLinks = props => {
    return <ul onClick={props.onClick} className="nav-links">
        <li>
            <NavLink to="/" exact>Keresés</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">Profil</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">Utazás hozzáadás</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Belépés</NavLink>
        </li>
        <li>
            <NavLink to="/settings">Beállítások</NavLink>
        </li>
        
        
    </ul>
};

export default NavLinks;

