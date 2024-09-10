const artistData = {
    name: 'Artist Name',
    avatarUrl: 'avatar_url_here', // URL для аватарки художника
    coverPhotoUrl: 'cover_photo_url_here', // URL для фото обкладинки
    volume: 100, // Обсяг продажів
    nftsSold: 50, // Кількість проданих NFT
    followers: 2000, // Кількість підписників
    biography: 'Biography and description of the artist.', // Біографія художника
    socialLinks: {
      website: 'https://website_url', // Лінк на вебсайт художника
      youtube: 'https://youtube_url', // Лінк на YouTube художника
      twitter: 'https://twitter_url', // Лінк на Twitter художника
      instagram: 'https://instagram_url' // Лінк на Instagram художника
    },
    works: [
      {
        id: 1,
        title: 'Distant Galaxy', // Назва роботи
        imageUrl: '../images/work1.png', // URL для фото роботи
        price: '1.63 ETH', // Ціна роботи
        highestBid: '0.33 wETH' // Найвища ставка на роботу
      },
      {
        id: 2,
        title: 'Work Title 2', // Назва роботи
        imageUrl: 'work_image_url_2', // URL для фото роботи
        price: '2 ETH', // Ціна роботи
        highestBid: '2.5 ETH' // Найвища ставка на роботу
      },
      {
        id: 3,
        title: 'Work Title 3', // Назва роботи
        imageUrl: 'work_image_url_3', // URL для фото роботи
        price: '3 ETH', // Ціна роботи
        highestBid: '3.5 ETH' // Найвища ставка на роботу
      }
    ]
  };
  
  export default artistData;
  