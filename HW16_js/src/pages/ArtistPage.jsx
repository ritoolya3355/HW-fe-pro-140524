import React from 'react';
import artistData from './artistData'; // Імпорт даних художника
import './ArtistPage.css';

const ArtistPage = () => {
  // Розпаковуємо дані художника з об'єкту artistData
  const { name, avatarUrl, coverPhotoUrl, volume, nftsSold, followers, biography, socialLinks, works } = artistData;

  return (
    <div>
      <main>
        <section className="artist-info">
          <div className="cover-photo" style={{ backgroundImage: `url(${coverPhotoUrl})` }}>
            {/* Фото обкладинки */}
          </div>
          <div className="profile-details">
            <img className="avatar" src={avatarUrl} alt="Artist Avatar" />
            {/* Аватар художника */}
            <div className="artist-name-buttons">
              <h1>{name}</h1> {/* Ім'я художника */}
              <div className="buttons">
                <button>Create Collection</button> {/* Кнопка створити колекцію */}
                <button>Upload New Work</button> {/* Кнопка завантажити нову роботу */}
              </div>
            </div>
            <div className="counters">
              <div className="counter">
                <h3>Volume</h3>
                <p>{volume}</p> {/* Лічильник Volume */}
              </div>
              <div className="counter">
                <h3>NFTs Sold</h3>
                <p>{nftsSold}</p> {/* Лічильник проданих NFT */}
              </div>
              <div className="counter">
                <h3>Followers</h3>
                <p>{followers}</p> {/* Лічильник підписників */}
              </div>
            </div>
            <div className="biography">
              <h2>Biography</h2>
              <p>{biography}</p> {/* Біографія художника */}
            </div>
            <div className="social-links">
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer">Website</a> {/* Лінк на сайт */}
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">YouTube</a> {/* Лінк на YouTube */}
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a> {/* Лінк на Twitter */}
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a> {/* Лінк на Instagram */}
            </div>
          </div>
        </section>

        <section className="artist-works">
          <h2>Works</h2>
          <div className="works-counter">
            <p>Created: {works.length}</p>
            <p>Owned: 0</p> {/* Можна додати лічильник Owned, якщо є відповідні дані */}
            <p>Collection: 0</p> {/* Можна додати лічильник Collection, якщо є відповідні дані */}
          </div>
          <div className="works-container">
            {works.map(work => (
              <div className="work-card" key={work.id}>
                <img src={work.imageUrl} alt={work.title} /> {/* Фото роботи */}
                <h3>{work.title}</h3> {/* Назва роботи */}
                <p>{name}</p> {/* Ім'я автора */}
                <div className="work-details">
                  <p>Price: {work.price}</p> {/* Ціна */}
                  <p>Highest Bid: {work.highestBid}</p> {/* Найвища ставка */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ArtistPage;
