import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import SeniasPage from './pages/SeniasPage';
import DirectorPage from './pages/DirectorPage';
import VideosPage from './pages/VideosPage';
import LinksPage from './pages/LinksPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="senias" element={<SeniasPage />} />
          <Route path="director" element={<DirectorPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="links" element={<LinksPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>  
  );
}

export default App;
