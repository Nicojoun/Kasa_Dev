import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/index.css';
import './styles/App.css';  
import Home from './pages/Home'; // Page d'accueil
import About from './pages/About'; // Une autre page exemple
import HousingSheet from './pages/HousingSheet'; // Composant pour la fiche de logement
import NotFound from './pages/NotFound'; // Page 404

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Route pour la page Home */}
        <Route path="/about" element={<About />} />  {/* Route pour la page About */}
        <Route path="/housing" element={<HousingSheet />} />  {/* Route pour la fiche de logement */}
        <Route path="*" element={<NotFound />} />  {/* Route pour gérer les erreurs 404 */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
