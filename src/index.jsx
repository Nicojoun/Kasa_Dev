import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';

import './assets/styles/index.scss';

import Header from './components/Header'; // Importer le composant Header
import Footer from './components/Footer';

import AppRoutes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header /> {/* Le Header est rendu ici */} 
        <AppRoutes />
      <Footer />
    </Router>
  </React.StrictMode>
);

