import React from "react";
import { Link } from 'react-router-dom';
import '../style/Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <a><Link to="/">Тесты</Link></a>
                <a><Link to="/profile">Профиль</Link></a>
                <a><Link to="/history">История</Link></a>
            </nav>
        </header>
    );
}

export default Header;