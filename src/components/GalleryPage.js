import React, { useState } from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [modalClass, setModalClass] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cities = [
    { name: 'Санья', img: '/images/sanya.jpg' },
    { name: 'Далянь', img: '/images/dalyan.jpg' },
    { name: 'Харбин', img: '/images/kharbin.jpg' },
    { name: 'Чаубансшан', img: '/images/сhaybanshan.jpg' },
    { name: 'Вейхай', img: '/images/weihai.jpg' },
  ];

  const hotels = [
    { name: 'Отель Сансет', city: 'Санья', stars: 5, images: ['/images/china.png', '/images/room.jpg'] },
    { name: 'Отель Легенда', city: 'Далянь', stars: 4, images: ['/images/hotel2.jpg', '/images/room2.jpg'] },
    { name: 'Отель Восток', city: 'Харбин', stars: 3, images: ['/images/hotel3.jpg', '/images/room2.jpg'] },
  ];

  const clients = [
    { name: 'Клиент 1', img: '/images/client.jpg' },
    { name: 'Клиент 2', img: '/images/client2.jpg' },
    { name: 'Клиент 3', img: '/images/client3.jpg' },
  ];

  const openCityModal = (city) => {
    setSelectedCity(city);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    setModalClass('show');
  };

  const openHotelModal = (hotel) => {
    setSelectedHotel(hotel);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    setModalClass('show');
  };

  const closeModal = () => {
    setModalClass('hide');
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedCity(null);
      setSelectedHotel(null);
    }, 500);
  };

  const handlePrevImage = () => {
    if (selectedHotel) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedHotel.images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedHotel) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedHotel.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="gallery-page3">
      <h1>Галерея городов Китая</h1>
      <div className="gallery-container3">
        {cities.map((city, index) => (
          <div
            className="gallery-block3"
            key={index}
            onClick={() => openCityModal(city)}
          >
            <img src={city.img} alt={city.name} className="gallery-image3" />
            <div className="overlay3">
              <h2>{city.name}</h2>
            </div>
          </div>
        ))}
      </div>

      <h1>Наши отели для лучших клиентов</h1>
      <div className="gallery-container3">
        {hotels.map((hotel, index) => (
          <div
            className="gallery-block3"
            key={index}
            onClick={() => openHotelModal(hotel)}
          >
            <img src={hotel.images[0]} alt={hotel.name} className="gallery-image3" />
            <div className="overlay3">
              <h2>{hotel.name}</h2>
            </div>
          </div>
        ))}
      </div>

      <h1>Фотографии наших клиентов</h1>
      <div className="gallery-container3">
        {clients.map((client, index) => (
          <div
            className="gallery-block3"
            key={index}
            onClick={() => openCityModal(client)}
          >
            <img src={client.img} alt={client.name} className="gallery-image3" />
            <div className="overlay3">
              <h2>{client.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={`modal3 ${modalClass}`} onClick={closeModal}>
          <div className="modal-content3" onClick={(e) => e.stopPropagation()}>
            {selectedCity && !selectedHotel && (
              <>
                <span className="close3" onClick={closeModal}>
                  &times;
                </span>
                <h2>{selectedCity.name}</h2>
                <img
                  src={selectedCity.img}
                  alt={selectedCity.name}
                  className="modal-image3"
                />
              </>
            )}
            {selectedHotel && (
              <>
                <span className="close3" onClick={closeModal}>
                  &times;
                </span>
                <h2>{selectedHotel.name}</h2>
                <p>{selectedHotel.city}</p>
                <div className="stars">
                  {[...Array(selectedHotel.stars)].map((_, index) => (
                    <span key={index} className="star-icon">
                      ★
                    </span>
                  ))}
                </div>
                <div className="image-gallery">
                  <button className="prev-button" onClick={handlePrevImage}>
                    ←
                  </button>
                  <img
                    src={selectedHotel.images[currentImageIndex]}
                    alt={selectedHotel.name}
                    className="modal-image3"
                  />
                  <button className="next-button" onClick={handleNextImage}>
                    →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
