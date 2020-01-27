import React from 'react';
import Darkmode from "./Darkmode";
import "./App.scss"

const Nav = () => {
    const [darkMode, setDarkMode] = Darkmode(false);

    const toggle = e => {
        e.preventDefault(); 
        setDarkMode(!darkMode)
    };

    return (
        <nav className="navbar">
            <h1 className="Tosin">Tosinnijis Players Data</h1>
            <div className="dark-mode__toggle">
                <div
                onClick={toggle}
                className={darkMode ? 'toggle toggled' : 'toggle'}
            />
            </div> 
        </nav>
    );
};



export default Nav