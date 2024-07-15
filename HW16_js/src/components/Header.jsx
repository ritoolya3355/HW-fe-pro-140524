import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Імпорт useNavigate
import { useAuth } from '../AuthContext'; // Імпорт контексту автентифікації
import './Header.css'; // Імпорт стилів

const Header = () => {
  const { isAuthenticated, logout } = useAuth(); // Отримання статусу автентифікації та функції logout
  const navigate = useNavigate(); // Ініціалізація useNavigate

  const handleSignUpClick = () => {
    if (!isAuthenticated) {
      navigate('/signin'); // Перенаправлення на сторінку аутентифікації
    }
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img src="/src/images/logo.svg" alt="logo" />
        </Link>
        <ul>
          <li><Link to="/">Marketplace</Link></li>
          <li><Link to="#">Rankings</Link></li>
          <li><Link to="#">Connect a wallet</Link></li>
        </ul>
        {isAuthenticated ? (
          <>
            <Link to="/artist">
              <button className="btn-sign-up">
                <img src="/src/images/user_btn.svg" alt="user" />My Account
              </button>
            </Link>
            <button className="btn-sign-up" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <button className="btn-sign-up" onClick={handleSignUpClick}>
            <img src="./src/images/user_btn.svg" alt="user" />Sign Up
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
