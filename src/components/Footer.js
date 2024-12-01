import React from 'react';
import './Footer.css'; // Импорт CSS файла

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">



        <div className="footer-column">
          <h4>Контактная информация</h4>
          <ul>
            <li><a>Адрес:</a></li>
            <li><a>Телефон:</a></li>
            <li><a>Email:</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Информация для туристов</h4>
          <ul>
            <li><a href="#">Вопросы и ответы</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Политика использования</a></li>
            
          </ul>
        </div>
        <div className="footer-column">
          <h4>Полезные ссылки</h4>
          <ul>
            <li><a href="#">Туры</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Галерея</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
      </div>



      
    </footer>
  );
};

export default Footer;
