import React from 'react';
import './Home.css'; // Імпорт стилів
import BtnGetStarted from '../components/btnGetStarted'; // Імпорт компонента кнопки
import Ratings from '../components/Ratings'; // Імпорт компонента рейтингу

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Discover digital art & Collect NFTs</h1>
        <p>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <BtnGetStarted text="Get Started" iconSrc="./src/images/RocketLaunch.svg" />
        <Ratings />
      </div>
      <div className="home-image">
        <img src="./src/images/Highlighted_NFT.png" alt="highlighted" />
      </div>
    </div>
  );
};

export default Home;
