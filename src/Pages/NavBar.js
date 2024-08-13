import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-button">
                    <Link to="/adoptpage">About Animal</Link>
                </li>
                <li className="navbar-button">
                    <Link to="/animalhistory">Adopt</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;