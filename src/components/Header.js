import React from 'react';
import './Header.css';
import Search from './Search';

function Header() {
    return (
      <header className="Header-header">
        <h1 className="Header-logo">Flavourite</h1>
        <div className="Header-search">
        < Search />
        </div>
      </header>
    );
}

export default Header;
