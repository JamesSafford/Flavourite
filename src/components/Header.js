import React from 'react';
import './Header.css';
import Search from './Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
    return (
      <header className="Header-header">
        <Link to='' className="Header-logo">Flavourite</Link>
        <div className="Header-search">
        < Search />
        </div>
      </header>
    );
}

export default Header;
