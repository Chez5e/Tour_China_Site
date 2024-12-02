import React, { useState, useEffect } from 'react';
import './MainSection.css';
import Shanhai from '../images2/Shanhai4k.jpg'
import image2 from '../images2/image2.jpg'
import image3 from '../images2/image3.jpg'
import image4 from '../images2/image4.jpg'

const MainSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        Shanhai,
        image2,
        image3,
        image4
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Смена каждые 5 секунд
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className="main-section"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
            <div className="content">
                <h1 className="title">Добро пожаловать в Китай</h1>
                <p className="subtitle">
                    Откройте для себя уникальную культуру, историю и природу Китая с нами!
                </p>
                <button className="learn-more-button">Узнать больше</button>
            </div>
        </div>
    );
};

export default MainSection;
