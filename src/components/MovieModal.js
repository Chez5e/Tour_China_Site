import React from 'react';
import './MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content2">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-body">
                    <img src={movie.poster} alt={movie.title} className="modal-poster" />
                    <div className="modal-details">
                        <h2 className="modal-title">{movie.title}</h2>
                        <p><strong>Рейтинг:</strong> {movie.rating}</p>
                        <p><strong>Что включено:</strong> {movie.description}</p>
                        <p><strong>Цена</strong> {movie.director}</p>
                        <p><strong>Гостиницы</strong> {movie.cast.join(', ')}</p>
                        
                        <a 
  href="https://wa.me/ВашНомерТелефона?text=Здравствуйте, хочу купить билет" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="buy-ticket-button">Купить билет</button>
</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
