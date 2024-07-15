import React from 'react';
import { useNavigate } from 'react-router-dom'; // Імпорт хука useNavigate для перенаправлення
import './btn-getstarted.css'; // Імпорт стилів для кнопки

const BtnGetStarted = ({ text, iconSrc }) => {
  const navigate = useNavigate(); // Використання хука useNavigate для отримання функції навігації

  const handleClick = () => {
    navigate('/register'); // Перенаправлення на сторінку реєстрації
  };

  return (
    <button className="btn-getstarted" onClick={handleClick}>
      {iconSrc && <img src={iconSrc} alt="icon" />}
      {text}
    </button>
  );
};

export default BtnGetStarted;
