// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import Sections from './components/Sections';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import GalleryPage from './components/GalleryPage';  // Убедитесь, что путь правильный
import './App.css';
import './components/AOS.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Slider /><Sections /><ContactSection /></>} />
          <Route path="/gallery" element={<GalleryPage />} />  {/* Страница галереи */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
