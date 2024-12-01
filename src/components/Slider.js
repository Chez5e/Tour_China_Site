import React, { useEffect, useState, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Slider.css';

import poster1 from '../images2/kharbin2.jpg';
import poster2 from '../images2/dalyan2.jpg';
import poster3 from '../images2/sanya2.jpg';
import poster4 from '../images2/beijing2.jpg';
import poster5 from '../images2/shanghai2.jpg';
import poster6 from '../images2/weihai2.jpg';

// Импортируем только Swiper и SwiperSlide
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; // Основной стиль Swiper
import 'swiper/css/pagination'; // Стиль для Pagination
import 'swiper/css/scrollbar'; // Стиль для Scrollbar
import 'swiper/css/a11y'; // Стиль для A11y

// Модули Pagination, Scrollbar, A11y теперь можно импортировать напрямую из Swiper
import { Pagination, Scrollbar, A11y } from 'swiper'; 

import MovieModal from './MovieModal'; // Модальное окно для туров

const Slider = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [filter, setFilter] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const swiperRef = useRef(null);

    const movies = [
        {
            title: 'Харбин',
            rating: '8.0',
            poster: poster1,
            description: 'На Земле наступает конец цивилизации...',
            director: 'Ридли Скотт',
            cast: ['Райан Гослинг', 'Харрисон Форд', 'Робин Райт'],
            duration: 164,
            category: 'science fiction'
        },
        {
            title: 'Далянь',
            rating: '7.5',
            poster: poster2,
            description: 'В этой шокирующей и ироничной интерпретации...',
            director: 'Эрик Крипке',
            cast: ['Карл Урбан', 'Джаквин Хенсон', 'Энтони Старр'],
            duration: 60,
            category: 'action'
        },
        {
            title: 'Шанхай',
            rating: '6.9',
            poster: poster3,
            description: 'Этот зрелищный супергеройский фильм...',
            director: 'Джеймс Ван',
            cast: ['Джейсон Момоа', 'Эмбер Херд', 'Уиллем Дефо'],
            duration: 143,
            category: 'action'
        },
        {
            title: 'Пекин',
            rating: '9.5',
            poster: poster4,
            description: 'Ранний выезд рейсовым автобусом из Владивостока с 4:00 до 7:00 Завтраки Проживание в отеле Русскоговорящий переводчик Групповой список Медицинская страховка',
            director: 'Цена: от 9000₽ Цена может меняться в зависимости от курса ',
            cast: ['3 звезды', '4 звезды', '5 звезд'],
            duration: 47,
            category: 'drama'
        },
        {
            title: 'Санья',
            rating: '9.5',
            poster: poster5,
            description: 'Это захватывающая история о превращении...',
            director: 'Винс Гиллиган',
            cast: ['Брайан Кранстон', 'Аарон Пол', 'Анна Ганн'],
            duration: 47,
            category: 'drama'
        },
        {
            title: 'Вэйхай',
            rating: '9.5',
            poster: poster6,
            description: 'Это захватывающая история о превращении...',
            director: 'Винс Гиллиган',
            cast: ['Брайан Кранстон', 'Аарон Пол', 'Анна Ганн'],
            duration: 47,
            category: 'drama'
        },
    ];

    const filteredMovies = filter === 'all' ? movies : movies.filter(movie => movie.category === filter);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update();
        }
    }, [filter]);

    const handleTicketClick = (movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className="cinema-schedule">
            <h2 className="schedule-title" data-aos="fade-up">Туры по Китаю</h2>

            <div className="filter-buttons" data-aos="fade-up">
                <button onClick={() => setFilter('all')}>Все</button>
                <button onClick={() => setFilter('science fiction')}>Харбин</button>
                <button onClick={() => setFilter('action')}>Далянь</button>
                <button onClick={() => setFilter('drama')}>Шанхай</button>
                <button onClick={() => setFilter('comedy')}>Пекин</button>
                <button onClick={() => setFilter('FreeKarta')}>Санья</button>
            </div>

            <Swiper
                ref={swiperRef}
                spaceBetween={5}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                a11y={{ enabled: true }}
                className="movie-swiper"
                data-aos="fade-up"
            >
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <div className="movie-card">
                                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                                <button className="ticket-button" onClick={() => handleTicketClick(movie)}>Узнать больше</button>
                                <svg className="heart-icon" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <div className="no-movies">Нет доступных туров по выбранному фильтру.</div>
                )}
            </Swiper>

            {/* Movie Modal */}
            {isModalOpen && selectedMovie && (
                <MovieModal movie={selectedMovie} onClose={closeModal} />
            )}
        </div>
    );
};

export default Slider;
