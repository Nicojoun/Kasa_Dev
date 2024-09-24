import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import './styles/App.scss';

import Home from './pages/Home'; // Page d'accueil
import About from './pages/About'; // page à propos

import HousingSheet from './pages/HousingSheet'; // Composant pour la fiche de logement
import NotFound from './pages/NotFound'; // Page 404
import Header from './components/Header'; // Importer le composant Header
import Footer from './components/Footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header /> {/* Le Header est rendu ici */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Route pour la page Home */}
        <Route path="/about" element={<About />} />  {/* Route pour la page à propos */}
        <Route path="/housing/:id" element={<HousingSheet />} />  {/* Route pour la fiche de logement avec ID dynamique */}
        <Route path="*" element={<NotFound />} />  {/* Route pour gérer les erreurs 404 */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
