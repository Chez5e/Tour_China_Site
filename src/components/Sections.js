import React, { useState } from 'react';
import './Sections.css';

function Sections() {
    const [activeSection, setActiveSection] = useState(null);
    const [modalData, setModalData] = useState(null);

    const handleToggle = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const openModal = (tour) => {
        setModalData(tour);
    };

    const closeModal = () => {
        setModalData(null);
    };

    // Данные для карточек
    const toursData = {
        section1: [
            { id: 1, city: 'Тур 1', image: '/images/slide3.webp', price: '20 000 ₽', description: 'Тут будет мини описание' },
            { id: 2, city: 'Тур 2', image: '/images/slide3.webp', price: '25 000 ₽', description: 'Тут будет мини описание' },
        ],
        section2: [
            { id: 1, city: 'Харбин', image: '/images/kharbin.jpg', price: '30 000 ₽', description: 'Тут будет мини описание' },
            { id: 2, city: 'Далянь', image: '/images/dalyan.jpg', price: '27 000 ₽', description: 'Тут будет мини описание' },
            { id: 3, city: 'Пекин', image: '/images/beijing.jpg', price: '35 000 ₽', description: 'Тут будет мини описание' },
            { id: 4, city: 'Шанхай', image: '/images/shanghai.jpg', price: '40 000 ₽', description: 'Тут будет мини описание' },
            { id: 5, city: 'Санья', image: '/images/sanya.jpg', price: '50 000 ₽', description: 'Тут будет мини описание' },
        ],
        section3: [
            { id: 1, city: 'Вэйхай', image: '/images/weihai.jpg', price: '45 000 ₽', description: 'Тут будет мини описание' },
            { id: 2, city: 'Санья', image: '/images/sanya.jpg', price: '60 000 ₽', description: 'Тут будет мини описание' },
            { id: 3, city: 'Чайбаньшань', image: '/images/сhaybanshan.jpg', price: '70 000 ₽', description: 'Тут будет мини описание' },
        ],
        section4: [
            { id: 1, city: 'Пример 4.1', image: '/images/slide3.webp', price: '10 000 ₽', description: 'Тут будет мини описание' },
            { id: 2, city: 'Пример 4.2', image: '/images/slide3.webp', price: '15 000 ₽', description: 'Тут будет мини описание' },
        ],
        section5: [
            { id: 1, city: 'Пример 5.1', image: '/images/slide3.webp', price: '10 000 ₽', description: 'Тут будет мини описание' },
            { id: 2, city: 'Пример 5.2', image: '/images/slide3.webp', price: '15 000 ₽', description: 'Тут будет мини описание' },
        ],
    };

    return (
        <div className="sections1">
            {/* Кнопки для разделов */}
            <div className="section-buttons1">
                <button onClick={() => handleToggle('section1')}>Групповые туры</button>
                <button onClick={() => handleToggle('section2')}>Индивидуальные туры</button>
                <button onClick={() => handleToggle('section3')}>Авторские туры</button>
                <button onClick={() => handleToggle('section4')}>Экскурсии</button>
                <button onClick={() => handleToggle('section5')}>Другие</button>
            </div>

            {/* Разделы с карточками */}
            <div className="section-content1">
                {activeSection &&
                    toursData[activeSection].map((tour) => (
                        <div className="card1" key={tour.id}>
                            <img src={tour.image} alt={tour.city} className="card-image1" />
                            <h3 className="card-title1">{tour.city}</h3>
                            <p className="card-price1">{tour.price}</p>
                            <p className="card-description1">{tour.description}</p>
                            <button className="card-button1" onClick={() => openModal(tour)}>
                                Подробнее
                            </button>
                        </div>
                    ))}
            </div>

            {modalData && (
    <div className="modal1">
        <div className="modal-content1">
            <span className="close-button1" onClick={closeModal}>
                &times;
            </span>
            <img src={modalData.image} alt={modalData.city} className="modal-image1" />
            <h2>{modalData.city}</h2>
            <p className="modal-price1">{modalData.price}</p>
            <p className="modal-description1">Детальная информация о туре: {modalData.description}</p>
            <button className="modal-button1" onClick={closeModal}>
                Закрыть
            </button>
        </div>
    </div>
)}

        </div>
    );
}

export default Sections;
