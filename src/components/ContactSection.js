import React from 'react';
import './ContactSection.css';

function ContactSection() {
    return (
        <div className="contact-section">
            <div className="map-container">
                {/* Вставьте iframe вашей карты */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.835022345304!2d131.89693907601912!3d43.086963671134676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb38d0960015fcb%3A0x23caa22bf75fe800!2z0JfQvtC4INCa0L7RgdC80L7QtNC10LzRjNGP0L3RgdC60L7QuSDRg9C7LiwgMTMsINCS0LvQsNC00LjQstC-0YHRgtC-0LosINCf0YDQuNC80L7RgNGB0LrQuNC5INC60YDQsNC5LCA2OTAwNjM!5e0!3m2!1sru!2sru!4v1732621427677!5m2!1sru!2sru" 
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Map"
                ></iframe>
            </div>
            <div className="contact-info">
                <h1 className="contact-title">КОНТАКТЫ</h1>
                <p className="contact-email">Почта: 2619701mp@mail.ru</p>
                <p className="contact-phone">Телефон: +7 (902) 055-60-01</p>
            </div>
        </div>
    );
}

export default ContactSection;
